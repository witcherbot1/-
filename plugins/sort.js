// Initialize the WhatsApp client
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

const levels = [
    { rank: "Citizen", emoji: "🟢", messages: 0, level: 1 },
    { rank: "Co-Admiral", emoji: "🔆", messages: 500, level: 1 },
    { rank: "Admiral", emoji: "💠", messages: 1000, level: 1 },
    { rank: "Anbo", emoji: "📯", messages: 1500, level: 1 },
    { rank: "Kagi", emoji: "🏮", messages: 2000, level: 1 },
    { rank: "Supermember", emoji: "🛡", messages: 3500, level: 2 },
    { rank: "Support", emoji: "🌀", messages: 4500, level: 2 },
    { rank: "Trail", emoji: "❇️", messages: 5500, level: 2 },
    { rank: "Moderator", emoji: "♦️", messages: 6500, level: 2 },
    { rank: "Supervisor", emoji: "💮", messages: 7500, level: 2 },
    { rank: "Hashira", emoji: "⚡️", messages: 9500, level: 3 },
    { rank: "Co-Yonko", emoji: "⛩", messages: 11500, level: 3 },
    { rank: "Yonko", emoji: "♣️", messages: 13500, level: 3 },
    { rank: "Co-Master", emoji: "🐉", messages: 15500, level: 3 },
    { rank: "Master", emoji: "🎐", messages: 17500, level: 3 },
    { rank: "Captain", emoji: "🌟", messages: 20000, level: 4 },
    { rank: "Colonel", emoji: "👑", messages: 22500, level: 4 },
    { rank: "General", emoji: "⚓️", messages: 25000, level: 4 },
    { rank: "Marshal", emoji: "💎", messages: 27500, level: 4 },
    { rank: "Commander", emoji: "🕯", messages: 30000, level: 4 },
    { rank: "Molder", emoji: "🎴", messages: 33000, level: 5 },
    { rank: "Calvar", emoji: "⚖️", messages: 36000, level: 5 },
    { rank: "Hand of the king", emoji: "🔱", messages: 39000, level: 5 },
    { rank: "Aegon", emoji: "☀️", messages: 42000, level: 5 },
    { rank: "Witcher", emoji: "🦅", messages: 45000, level: 5 }
];

let userMessages = {}; // Object to track messages per user

client.on('message', async msg => {
    const chat = await msg.getChat();
    if (chat.isGroup) {
        const userId = msg.author;
        if (!userMessages[userId]) {
            userMessages[userId] = 0;
        }
        userMessages[userId]++;

        const userRank = getUserRank(userMessages[userId]);
        const nextRank = getNextRank(userMessages[userId]);
        msg.reply(`Your rank is: ${userRank.rank} ${userRank.emoji}`);
    }
});

function getUserRank(messageCount) {
    let rank = levels[0];
    for (let level of levels) {
        if (messageCount >= level.messages) {
            rank = level;
        }
    }
    return rank;
}

function getNextRank(messageCount) {
    for (let level of levels) {
        if (messageCount < level.messages) {
            return level;
        }
    }
    return null;
}

client.on('message', async msg => {
    if (msg.body === '.تصفير الرتب') {
        const chat = await msg.getChat();
        if (chat.isGroup && chat.participants.some(participant => participant.id._serialized === msg.author && participant.isAdmin)) {
            const adminPassword = 'qaz@900200300';
            msg.reply('Please enter the admin password:');
            client.on('message', passwordMsg => {
                if (passwordMsg.from === msg.from && passwordMsg.body === adminPassword) {
                    userMessages = {};
                    msg.reply('All ranks have been reset.');
                }
            });
        }
    }
});

client.on('message', async msg => {
    if (msg.body === '.رتبتي') {
        const userId = msg.author;
        const messageCount = userMessages[userId] || 0;
        const userRank = getUserRank(messageCount);
        const nextRank = getNextRank(messageCount);
        const nextRankMessages = nextRank ? nextRank.messages - messageCount : 0;

        msg.reply(
            `السـلام عـلـيـكـم\n\n` +
            `[ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]\n\n` +
            `⊹⊱≼━━━⌬〔🔰〕⌬━━━≽⊰⊹\n\n` +
            ` ֎╎اللقب ⟦@${userId.split('@')[0]}⟧\n` +
            ` ֎╎اللفل ⟦المستوى ${userRank.level}⟧\n` +
            ` ֎╎الرتبة ⟦${userRank.rank} ${userRank.emoji}⟧\n` +
            ` ֎╎رقم الرتبة ⟦${userRank.level}.${levels.indexOf(userRank) + 1}⟧\n` +
            ` ֎╎الرسائل ⟦${messageCount}⟧\n` +
            ` ֎╎الرتبة القادمة ⟦${nextRank ? nextRank.rank + ' ' + nextRank.emoji : 'N/A'}⟧\n` +
            ` ֎╎المتبقى على الرتبة القادمة ⟦${nextRankMessages}⟧\n\n` +
            `⊹⊱≼━━━⌬〔🔰〕⌬━━━≽⊰⊹`
        );
    }
});

client.initialize();
