module.exports = function handleXp(message, connection) {
    connection.query(`SELECT * FROM dofus.user WHERE discord_id = ${message.author.id}`, (err, row) => {
        if (row.length === 0) { // Create row for new user
            try {
                connection.query(`INSERT INTO dofus.user (discord_id, username, xp) VALUES ('${message.author.id}', ${connection.escape(message.author.username)}, '1')`)
            } catch (e) {
                console.log(e)
            }
        } else { // Add 10 xp
            try {
                connection.query(`UPDATE dofus.user SET xp = xp + 1 WHERE discord_id = ${message.author.id}`)
            } catch (e) {
                console.log(e)
            }
        }
    });
};
