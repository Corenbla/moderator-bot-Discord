const Discord = require('discord.js');
const millisecondToStr = require('../millisecondToStr');


module.exports = function createVoiceLeaderboardMessage(users, client) {
    let embedFields = []
    for (let i = 0; i < users.length; i++) {
        const formatedTime = millisecondToStr(users[i].cumulated_connection_time * 1000);

        if (i <= 2) {
            embedFields.push({
                name: i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉',
                value: `${users[i].username} - ${formatedTime}`,
                inline: false,
            })
        } else {
            if (embedFields[3] === undefined) {
                embedFields.push({
                    name: 'Others',
                    value: '',
                    inline: false,
                })
            }
            embedFields[3].value += `${users[i].username} - ${formatedTime}\n`;
        }
    }

    return new Discord.MessageEmbed()
        .setTitle('Voice leaderboard')
        .addFields(embedFields)
        .setTimestamp(client.createdTimestamp)
        .setColor(0x309AD4)
    ;
}
