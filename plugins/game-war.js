let handler = async (m, { conn, usedPrefix, args, command }) => {
  conn.war = conn.war ? conn.war : {}
  conn.war2 = conn.war2 ? conn.war2 : {}

  if (!args[0] || args[0] == "help") return m.reply(`*❏ W A R - Z O N E *

[1] War Zone هي لعبة حرب بنظام هجوم الأدوار أو الهجوم بالتناوب
[2] يمكن أن تبدأ اللعبة بـ 1 ضد 1 وحتى 5 ضد 5
[3] رأس المال الحربي هو غنائم الحرب إذا فاز فريقك
[4] سيحصل كل لاعب على 5000 نقطة صحة (نقاط صحية)
[5] يعتمد نجاح الهجوم على مستواك ومستوى العدو الذي تهاجمه
[6] فرصة الهجوم هي 40 ثانية، وأكثر من ذلك يعتبر AFK (تخفيض 2500 حصان)
[7] سيفوز الفريق إذا خسر الفريق المنافس كل (نقاط الصحة <= 0) وحصل على غنائم الحرب

*❏ C O M M A N D S *
*${usedPrefix + command} انضم A/B* = الانضمام إلى اللعبة
*${usedPrefix + command} يسار* = اللعبة اليسرى
*${usedPrefix + command} مال 10xx* = الرهان على المال
*${usedPrefix + command} لاعب* = لعبة لاعب
*${usedPrefix + command} ابدا* = بدء اللعبة`)


  if (args[0] == "حرب-مال"){
    if (!(m.chat in conn.war)) return m.reply(`*الرجاء إنشاء غرفة أولاً (اكتب .حرب انضم)*`)
    if(m.sender == conn.war[m.chat][0].user){
      if (args[1] != "undefined" && !isNaN(args[1])){
        args[1] = parseInt(args[1])
        if (args[1] < 1000) return m.reply('*الحد الأدنى جنيه. 1.000*')
        conn.war2[m.chat].money = args[1]
        return m.reply("*تم بنجاح إنشاء رأس المال الحربي بالجنيه المصري." + Number(args[1]).toLocaleString() + "*")
      }else {
        return m.reply("أدخل رأس مال الرهان على الحرب على شكل أرقام (لا تستخدم النقاط)*\n\n.war money 100000")
      }
    }else {
      return conn.reply(m.chat,`*فقط @${conn.war[m.chat][0].user.split('@')[0]} كصانع غرفة يمكنه استبدال رأس المال الحربي الأولي*`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
    }
  }

  // JOIN
  if (args[0] == "انضم"){
    
    if (global.db.data.users[m.sender].money < 1000) return m.reply("*أموالك لا تقل عن جنيه مصري. 1000 للعب هذه اللعبة.*")
    // FIRST PLAYER
    if (!(m.chat in conn.war)) {
      conn.war2[m.chat] = {"war" : false, "turn" : 0, "time" : 0, "money" : 0}
      conn.war[m.chat] = []
      let exp = global.db.data.users[m.sender].exp
      conn.war[m.chat][0] = {"user": m.sender, "hp": 5000, "lvl": global.db.data.users[m.sender].level, "turn" : false}
      for (let i=1;i<10;i++){
        conn.war[m.chat][i] = {"user": "", "hp" : 0, "lvl" : 0, "turn" : false}
      }
      return m.reply(`*أدخل اللعبة بنجاح كفريق A*\n\n*.حرب انضم a/b* = الانضمام إلى اللعبة\n*.حرب ابدا* = بدء اللعبة`)
    }else {   // NOT FIRST PLAYER
      // IF FULL
      if (conn.war2[m.chat].war) {
        return m.reply(`*لقد بدأت اللعبة، لا يمكنك الانضمام.*`)
      }
      // IF YOU ALREADY JOIN THE GAME
      for (let i = 0; i < conn.war[m.chat].length ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          let total = 0
          for (let i = 0 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              total += 1
            }
          }
          return m.reply(`*لقد دخلت اللعبة*\n\n*.حرب انضم a/b* = الانضمام إلى اللعبة\n*.حرب ابدا* = بدء اللعبة`)
        }
      }
      
      // JOIN MILIH TIM
      if (args[1]){
        if (args[1].toLowerCase() == "a"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*يساعد @${conn.war[m.chat][0].user.split('@')[0]} تحديد رأس المال الحربي الأولي (الحد الأدنى جنيه مصري. 1.000.000)*\n\n.حرب مال 1000000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          return m.reply('a')
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*أموالك لا تقل عن جنيه مصري. ${conn.war2[m.chat].money.toLocaleString()} للعب هذه اللعبة.*`)
          for (let i = 1 ; i < 5 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*أدخل اللعبة بنجاح كفريق A*\n\n*.حرب انضم a/b* = الانضمام إلى اللعبة\n*.حرب ابدا* = بدء اللعبة`)
            }
          } 
        }else if (args[1].toLowerCase() == "b"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*يساعد @${conn.war[m.chat][0].user.split('@')[0]} تحديد رأس المال الحربي الأولي (الحد الأدنى جنيه مصري. 1000000)*\n\n.حرب مال 1000000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*أموالك لا تقل عن جنيه مصري. ${conn.war2[m.chat].money.toLocaleString()} للعب هذه اللعبة.*`)
          for (let i = 5 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*تم الدخول إلى اللعبة بنجاح كفريق B*\n\n*.حرب انضم a/b* = الانضمام إلى اللعبة\n*.حرب ابدا* = بدء اللعبة`)
            }
          }
        }else {
          return m.reply(`*اختر إما الفريق A أو B*\n\n.حرب انضم إلى A\n.حرب انضم إلى B`)
        }
      }else {
        // JOIN SESUAI URUTAN
        return m.reply(`*اختر إما الفريق A أو B*\n\n.حرب انضم إلى A\n.حرب انضم إلى B`)
      }
      

      // CHECK IF ROOM FULL
      for (let i = 0 ; i < conn.war[m.chat].length ; i++) {
        let total = 0
        if (conn.war[m.chat][i].user != ""){
          total += 1
        }
        if (total == 10) conn.war2[m.chat].war = true
      }
    }
  }

  // LEFT GAME
  if (args[0] == "حرب"){
    // IF GAME START
    if (conn.war2[m.chat].war) {
      m.reply(`*لقد بدأت الحرب، لا يمكنك الخروج*`)
    }else {   // IF NOT
      for (let i = 0 ; i < 10 ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          return m.reply(`*تم إنهاء اللعبة بنجاح*`)
        }
      }
      return m.reply(`*أنت لست في اللعبة*`)
    }
  }

  // CEK PLAYER
  if (args[0] == "لاعب"){ 
    if (!(m.chat in conn.war)) return m.reply(`*لا يوجد لاعبون ينضمون إلى غرفة War Zone*`)
    var teamA = []
    var teamB = []
    var teamAB = []
    for (let i = 0 ; i < conn.war[m.chat].length ; i++){
      if (i < 5){
        if (conn.war[m.chat][i].user != "") teamA.push(conn.war[m.chat][i].user)
      }else {
        if (conn.war[m.chat][i].user != "") teamB.push(conn.war[m.chat][i].user)
      }
      teamAB.push(conn.war[m.chat][i].user)
    }
    // return m.reply(teamA[0])
    conn.reply(m.chat, `${conn.war2[m.chat].war ? '*دور : ' + '@' + conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0] + '*\n*رهان : جنيه مصري. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' : '*رهان : جنيه مصري. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' }*فريق A :*\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (المستوى.${conn.war[m.chat][i].lvl} HP: ${conn.war[m.chat][i].hp})`).join`\n` + "\n\n*فريق B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (المستوى.${conn.war[m.chat][i+5].lvl} HP: ${conn.war[m.chat][i+5].hp})`).join`\n`,m, {contextInfo: {
      mentionedJid: teamAB
    }})
  }

  // START GAME
  if (args[0] == "ابدا"){
    if (conn.war2[m.chat].war) return m.reply(`*لقد بدأت الحرب بالفعل، لا يمكنك الانضمام.*`)
    teamA = 0
    teamB = 0
    for (let i=0;i<10;i++){
      if(i<5){
        if (conn.war[m.chat][i].user != "") teamA += 1
      }else{
        if (conn.war[m.chat][i].user != "") teamB += 1
      }
    }

    if (teamA == teamB && teamA > 0){
      conn.war2[m.chat].war = true
      for (let i=0;i<5;i++){
        if (conn.war[m.chat][i].user != ""){
          let user = conn.war[m.chat][i].user
          return conn.reply(m.chat,`*تم بدء اللعبة بنجاح*\n*يرجى @${user.split('@')[0]} لمهاجمة العدو*\n\n.حرب لاعب = إحصائيات اللاعب\n.هجوم @منشن = هجوم على العدو`, m, {contextInfo: { mentionedJid: [user] }})
        }
      }
    }else {
      if (teamA > teamB){
        m.reply(`*الفريق B ناقص ${teamA - teamB} لاعبين لتكون اللعبة عادلة.*`)
      }else {
        m.reply(`*الفريق A ناقص ${teamB - teamA} لاعبين لتكون اللعبة عادلة.*`)
      }
    }
  } else {
  throw 'Join Dulu'
  }

}
handler.help = ['war']
handler.tags = ['game']
handler.command = /^(حرب)$/i
handler.group = true
export default handler
