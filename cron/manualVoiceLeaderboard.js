const Discord = require('discord.js');
const voiceLeaderboard = require('./voiceLeaderboard');
const client = new Discord.Client();
const {token} = require('../config/config.json');

client.login(token);
voiceLeaderboard(client)
