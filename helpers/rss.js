const axios = require('axios');
const parser = require('xml2json');
const { rss } = require('../config.js');
const { getters, setters } = require('../state/rss');

const getRss = async () => {
  const lastUpdate = getters.getDateUpdate();
  const newDate = new Date();
  const articles = await Promise.all(rss.map(async ({ name, url }) => {
    const { data } = await axios.get(url);
    const json = parser.toJson(data, { object: true });
    const itemList = json.rss.channel.item;
    const items = itemList.filter((item) => {
      const date = item.pubDate
        ? new Date(item.pubDate)
        : new Date(item['dc:date']);
      return lastUpdate <= date && date <= new Date();
    }).map((item) => {
      if (item.title) {
        let categories;
        if (item.category) {
          categories = typeof item.category === 'string'
            ? item.category
            : item.category.map((cat) => {
              if (cat.$t) {
                return cat.$t;
              }
              return cat;
            });
        }
        return {
          title: item.title,
          categories,
          link: item.link,
        };
      }
    });
    if (!items.length) {
      return '';
    }
    const articlesText = `\n\n___***${name}***___\n\n`;
    return items.reduce((acc, art) => {
      let categories = '';
      if (art.categories) {
        categories = typeof art.categories === 'string'
          ? `- ${art.categories}\n`
          : `- ${art.categories.join('\n- ')}\n`;
      }
      return `${acc}**${art.title}** - ${art.link} \n${categories}\n`;
    }, articlesText);
  }));
  setters.setDateUpdate(newDate);
  return articles;
};

module.exports = {
  getRss,
};
