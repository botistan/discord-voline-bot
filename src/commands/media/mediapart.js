const { Attachment } = require('discord.js');
const {
  Command,
} = require('discord.js-commando');
const puppeteer = require('puppeteer');
const fs = require('fs');
const {
  login,
  password,
} = require('@/config.js');


class Mediapart extends Command {
  constructor(client) {
    super(client, {
      name: 'mediapart',
      group: 'media',
      memberName: 'mediapart',
      description: 'Get a mediapart article',
      examples: ['!mediapart <url>'],
      args: [
        {
          key: 'url',
          prompt: '**Which article do you want**\n',
          type: 'string',
        },
      ],
    });
  }

  run(msg, { url }) {
    (async () => {
      const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      await page.goto(url);
      await page.type('#edit-name-content', login);
      await page.type('#edit-pass-content', password);
      await page.waitFor('.l-50.login form input[type="submit"]', { visible: true });
      const loginButton = await page.evaluateHandle(() => {
        const elem = document.querySelector('.l-50.login form input[type="submit"]');
        return elem;
      });
      await loginButton.click();
      await page.waitForNavigation();
      const fullPage = await page.evaluateHandle(() => {
        const elem = document.querySelector('.content-page-full');
        return elem;
      });
      if (fullPage && fullPage.click) {
        await fullPage.click();
        await page.waitForNavigation();
      }
      await page.pdf({ path: './pdf/mediapart.pdf', format: 'A4' });
      await browser.close();
      return msg.reply('your file : ',
        new Attachment('./pdf/mediapart.pdf', './pdf/mediapart.pdf'),
      ).then(() => {
        fs.unlinkSync('./pdf/mediapart.pdf');
      });
    })();
  }
}

module.exports = Mediapart;
