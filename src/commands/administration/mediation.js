const {
  Command,
} = require('discord.js-commando');
const {
  mediationIdRole,
  moderatorIdRole,
  memberIdRole,
  actifIdRole,
} = require('@/config.js');
const {
  isAuthorized,
  isTargetAble,
} = require('@helpers/permission.js');

const helper = '**```!mediation <@user>```**';

class Mediation extends Command {
  constructor(client) {
    super(client, {
      name: 'mediation',
      group: 'administration',
      memberName: 'mediation',
      description: 'Set an user in mediation (need to be moderator or actif)',
      examples: [helper],
      args: [
        {
          key: 'user',
          prompt: '**Which user do you want to put in mediation (@user) ?**',
          type: 'user',
        },
      ],
    });
  }

  run(msg, { user }) {
    const roles = [moderatorIdRole, actifIdRole];
    const author = msg.member;
    isAuthorized(author, roles).then((err) => {
      if (!err) {
        const guardRoles = [
          moderatorIdRole,
        ];
        const memberRole = msg.guild.roles.get(memberIdRole);
        const mediationRole = msg.guild.roles.get(mediationIdRole);
        const actifRole = msg.guild.roles.get(actifIdRole);
        const target = msg.guild.member(user);
        isTargetAble(target, guardRoles).then((err) => {
          if (!err) {
            target.removeRole(memberRole).catch(console.error);
            target.removeRole(actifRole).catch(console.error);
            target.addRole(mediationRole).catch(console.error);
            const reponse = `<@${user.id}> has been set in mediation.`;
            msg.channel.send(reponse);
          } else {
            msg.reply(`**<@${user.id}> can't be set in mediation.**`);
          }
        }).catch((e) => {
          console.error(e);
          msg.reply('Something went wrong');
        });
      } else {
        msg.reply('**You are not allowed to set anybody in mediation.**');
      }
    }).catch((e) => {
      console.error(e);
      msg.reply('Something went wrong');
    });
  }
}

exports.default = Mediation;
