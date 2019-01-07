const Discord = require('discord.js');
const axios = require('axios');
const puppeteer = require('puppeteer');
const fs = require('fs');
const { mediapartToken } = require('../config.json');


module.exports = {
  name: 'mediapart',
  description: 'get a mediapart article',
  execute(message, args) {
    if (!mediapartToken) {
      return message.reply('**No token:**');
    }
    if (!args.length) {
      return message.reply('**No url:** `!mediapart <url>`');
    }
    axios.get(args[0])
      .then((article) => {
        if (article && article.data) {
          const regex = 'data-nid="(.*?)"';
          const match = article.data.match(regex);
          if (match.length && match.length > 1) {
            const url = `https://www.mediapart.fr/tools/print/${match[1]}`;
            axios.get(url, {
              headers: {
                Cookie: `MPRUUID=${mediapartToken}`,
              },
            }).then((articlePdf) => {
              if (articlePdf && articlePdf.data) {
                if (articlePdf.data.match('Connectez-vous')) {
                  return message.reply('**error Token is invalid:** `update token please`');
                }
                (async () => {
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  const cookie = [
                    {
                      domain: '.mediapart.fr',
                      name: 'MPRUUID',
                      value: mediapartToken,
                    },
                  ];
                  await page.setCookie(...cookie);
                  await page.goto(url);
                  await page.pdf({ path: `./pdf/mediapart-${match[1]}.pdf`, format: 'A4' });
                  await browser.close();
                  return message.reply('your file : ',
                    new Discord.Attachment(`./pdf/mediapart-${match[1]}.pdf`, `mediapart-${match[1]}.pdf`),
                  ).then(() => {
                    fs.unlinkSync(`./pdf/mediapart-${match[1]}.pdf`);
                  });
                })();
              } else {
                return message.reply(`**error wen getting print url:** \`${url}\``);
              }
            });
          }
        } else {
          return message.reply('**error with call:** `check the url for aticle`');
        }
      })
      .catch((error) => {
        message.reply(`**Error with url:** \`${error}\``);
      });
  },
};