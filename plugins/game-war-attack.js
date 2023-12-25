let handler = async (m, { conn, usedPrefix, args, command }) => {
  conn.war = conn.war ? conn.war : {}
  conn.war2 = conn.war2 ? conn.war2 : {}

  // دالة التأخير
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // دالة لفحص حالة البعد عن الكيبورد
  async function cekAFK(x){
    let turn = x
    let time = conn.war2[m.chat].time
    await sleep(90000)
    let turnNow = conn.war2[m.chat].turn
    let timeNow = conn.war2[m.chat].time
    
    if (turn == turnNow && time == timeNow){
      conn.war[m.chat][turn].hp -= 2500
      conn.reply(m.chat, `*@${conn.war[m.chat][turn].user.split('@')[0]} هو الآن غائب (تغريم -2500 نقطة صحية)*\n\n.war player = إحصائيات اللاعب\n.هجوم @منشن = مهاجمة الخصم`, null, { contextInfo: { mentionedJid: [conn.war[m.chat][turn].user] }})
      await sleep(3000)

      // التحقق من الموت
      if (conn.war[m.chat][turn].hp <= 0) {
        conn.reply(m.chat, `*@${conn.war[m.chat][turn].user.split('@')[0]} لقد توفي بسبب نفاد نقاط الصحة (HP).*`, null, { contextInfo: { mentionedJid: [conn.war[m.chat][turn].user] }})
        
        // التحقق من الفريق
        let playerTotal = 0
        let playerKalah = 0
        
        if (turn < 5){
          for (let i=0; i<5; i++){
            if (conn.war[m.chat][i].user != ""){
              playerTotal += 1
              if (conn.war[m.chat][i].hp <= 0)
                playerKalah += 1
            }
          }

          if (playerTotal > 0 && playerTotal == playerKalah){
            var teamA = []
            var teamB = []
            var teamAB = []

            for (let j=0; j<5; j++){
              if (conn.war[m.chat][j].user != ""){
                global.db.data.users[conn.war[m.chat][j].user].money -= Number(conn.war2[m.chat].money)
                teamA.push(conn.war[m.chat][j].user)
                teamAB.push(conn.war[m.chat][j].user)
              }
            }

            for (let j=5; j<10; j++){
              if (conn.war[m.chat][j].user != ""){
                global.db.data.users[conn.war[m.chat][j].user].money += Number(conn.war2[m.chat].money)
                teamB.push(conn.war[m.chat][j].user)
                teamAB.push(conn.war[m.chat][j].user)
              }
            }

            conn.reply(m.chat, `*الفريق B فاز لأن الفريق A كانوا جميعهم أغبياء*\n\n*الفريق A :*\n` + teamA.map((v, i) => `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*الفريق B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n`, m, { contextInfo: { mentionedJid: teamAB }})
            
            delete conn.war[m.chat]
            delete conn.war2[m.chat]
          }
        } else {
          for (let i=5; i<10; i++){
            if (conn.war[m.chat][i].user != ""){
              playerTotal += 1
              if (conn.war[m.chat][i].hp <= 0)
                playerKalah += 1
            }
          }

          if (playerTotal == playerKalah){
            var teamA = []
            var teamB = []
            var teamAB = []

            for (let j=0; j<5; j++){
              if (conn.war[m.chat][j].user != ""){
                global.db.data.users[conn.war[m.chat][j].user].money += Number(conn.war2[m.chat].money)
                teamA.push(conn.war[m.chat][j].user)
                teamAB.push(conn.war[m.chat][j].user)
              }
            }

            for (let j=5; j<10; j++){
              if (conn.war[m.chat][j].user != ""){
                global.db.data.users[conn.war[m.chat][j].user].money -= Number(conn.war2[m.chat].money)
                teamB.push(conn.war[m.chat][j].user)
                teamAB.push(conn.war[m.chat][j].user)
              }
            }

            conn.reply(m.chat, `*الفريق A فاز لأن الفريق B كانوا جميعهم أغبياء*\n\n*الفريق A :*\n` + teamA.map((v, i) => `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*الفريق B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n`, m, { contextInfo: { mentionedJid: teamAB }})
            
            delete conn.war[m.chat]
            delete conn.war2[m.chat]
          }
        }
      }

      let pergantian = false
      if (turn < 5){
        for (let i=5;i<10;i++){
            if (conn.war[m.chat][i].user != ""){
              playerTotal += 1
              if (conn.war[m.chat][i].hp <= 0)
              playerKalah += 1
            }
          }
          m.reply(playerTotal + "T-K" + playerKalah)
          if (playerTotal == playerKalah){
            var teamA = []
            var teamB = []
            var teamAB = []
            for (let j=0;j<5;j++){
              if (conn.war[m.chat][j].user != ""){
                global.db.data.users[conn.war[m.chat][j].user].money += Number(conn.war2[m.chat].money)
                teamA.push(conn.war[m.chat][j].user)
                teamAB.push(conn.war[m.chat][j].user)
              }
            }
            for (let j=5;j<10;j++){
              if (conn.war[m.chat][j].user != ""){
                global.db.data.users[conn.war[m.chat][j].user].money -= Number(conn.war2[m.chat].money)
                teamB.push(conn.war[m.chat][j].user)
                teamAB.push(conn.war[m.chat][j].user)
              }
            }
            conn.reply(m.chat, `*الفريق A فاز لأن الفريق B أغبياء جميعهم*\n\n*الفريق A :*\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*الفريق B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n`,m, {contextInfo: {
    mentionedJid: teamAB
}})
delete conn.war[m.chat]
delete conn.war2[m.chat]
}
}
}
let pergantian = false
if (turn < 5){
for (let i=5;i<10;i++){
if (conn.war[m.chat][i].hp > 0 && conn.war[m.chat][i].user != "" && conn.war[m.chat][i].turn == false){
conn.war2[m.chat].turn = i
conn.war2[m.chat].time = +1
pergantian = true
}
}
}else {
for (let i=0;i<5;i++){
if (conn.war[m.chat][i].hp > 0 && conn.war[m.chat][i].user != "" && conn.war[m.chat][i].turn == false){
conn.war2[m.chat].turn = i
conn.war2[m.chat].time = +1
pergantian = true
}
}
}
if (pergantian == false){
for (let l=9;l>=0;l--){
if (conn.war[m.chat][l].user != "" && conn.war[m.chat][l].hp > 0) {
conn.war2[m.chat].turn = l
conn.war2[m.chat].time = +1
}
conn.war[m.chat][l].turn == false
}
}
await sleep(3000)
conn.reply(m.chat,`*دور @${conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0]} للهجوم (90 ثانية)*\n\n.حرب لاعب = إحصائيات اللاعب\n.هجوم @منشن = هجوم على الخصم`,null,{contextInfo : {mentionedJid : [conn.war[m.chat][conn.war2[m.chat].turn].user]}})
cekAFK(conn.war2[m.chat].turn)
}
}

if (!(m.chat in conn.war)) return m.reply(`*لا يوجد لعبة في هذه المجموعة.*`)
if (!conn.war2[m.chat].war) return m.reply(`*لم يبدأ الحرب بعد، اكتب ".حرب لاعب" لبدء المعركة.*`)
for (let i=0;i<10;i++){
if (m.sender == conn.war[m.chat][i].user){
if (i != conn.war2[m.chat].turn) {
conn.reply(m.chat,`*الآن دور @${conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0]} للهجوم.*`,m, {contextInfo : { mentionedJid : [conn.war[m.chat][conn.war2[m.chat].turn].user]}})
cekAFK(conn.war2[m.chat].turn)
}
}
}
if (!args[0]) return m.reply(`*حدد الخصم الذي تريد هجومه*\n*اكتب .حرب لاعب*`)
  args[0] = args[0].split('@')[1]
  args[0] += "@s.whatsapp.net"
  let success = false

  if (conn.war2[m.chat].turn < 5){
    // return m.reply(args[0])
    for (let i=5;i<10;i++){
      if (conn.war[m.chat][i].user == args[0] && conn.war[m.chat][i].hp > 0){
        let attacker = m.sender
       let  target = args[0]

        let opportunity = []
        for (let i=0;i<global.db.data.users[attacker].level;i++){
          opportunity.push(attacker)
        }
        for (let i=0;i<global.db.data.users[target].level;i++){
          opportunity.push(target)
        }

        let pointAttacker = 0
        let pointTarget = 0
        for (let i=0;i<10;i++){
          if (opportunity[getRandom(0,opportunity.length)] == attacker) pointAttacker += 1
          else pointTarget += 1
        }

        for (let i=0;i<10;i++){
          if (conn.war[m.chat][i].user == target){
            conn.war[m.chat][i].hp -= pointAttacker * 500
            conn.war[m.chat][conn.war2[m.chat].turn].turn = true
            conn.reply(
  m.chat,
  `*@${attacker.split('@')[0]} يهاجم @${target.split('@')[0]} حتى تقل نقاط حياته بمقدار ${pointAttacker * 500} (الحياة المتبقية: ${conn.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*المستوى يؤثر بشكل كبير على النجاح.*`,
  m,
  { contextInfo: { mentionedJid: [attacker, target] } }
);

await sleep(2000);

if (conn.war[m.chat][i].hp <= 0) {
  conn.reply(
    m.chat,
    `*@${target.split(`@`)[0]} قد مات في المعركة.*`,
    m,
    { contextInfo: { mentionedJid: [target] } }
  );
  success = true;
}
}

if (success == false) {
  return m.reply(
    `*أدخل قائمة اللاعبين بشكل صحيح يا رئيس.*\n\n*تحقق من ".حرب لاعب"*`
  );
} else {
      for (let i=0;i<10;i++){
        if (m.sender == conn.war[m.chat][i].user){
          conn.war[m.chat][i].turn = true
        }
      }
    }
  }else {
    for (let i=0;i<5;i++){
      if (conn.war[m.chat][i].user == args[0] && conn.war[m.chat][i].hp > 0){
        let attacker = m.sender
        let target = args[0]

        let opportunity = []
        for (let i=0;i<global.db.data.users[attacker].level;i++){
          opportunity.push(attacker)
        }
        for (let i=0;i<global.db.data.users[target].level;i++){
          opportunity.push(target)
        }

        let pointAttacker = 0
        let pointTarget = 0
        for (i=0;i<10;i++){
          if (opportunity[getRandom(0,opportunity.length)] == attacker) pointAttacker += 1
          else pointTarget += 1
        }

        for (let i=0;i<10;i++){
          if (conn.war[m.chat][i].user == target){
            conn.war[m.chat][i].hp -= pointAttacker * 500
            conn.reply(m.chat,conn.war[m.chat][conn.war2[m.chat].turn].turn,m)
            conn.war[m.chat][conn.war2[m.chat].turn].turn = true
            conn.reply(m.chat,conn.war[m.chat][conn.war2[m.chat].turn].turn,m)
            conn.reply(m.chat, `*@${attacker.split('@')[0]} يهاجم @${target.split('@')[0]} حتى ينخفض صحته إلى ${pointAttacker * 500} (الصحة المتبقية: ${conn.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*المستوى يؤثر كثيرًا على نجاح الهجوم.*`, m, { contextInfo: { mentionedJid: [attacker, target] } })
await sleep(2000)
            if (conn.war[m.chat][i].hp <= 0) conn.reply(m.chat, `*@${target.split(`@`)[0]} قد مات في القتال.*`, m, { contextInfo: { mentionedJid: [target] } })
    success = true
          }
        }
      }
    }
    if (success == false) {
      return m.reply(`*أدخل قائمة لاعبين صحيحة صاحبي.*\n\n*تحقق من ".حرب لاعب"*`)
} else {
      for (let i=0;i<10;i++){
        if (m.sender == conn.war[m.chat][i].user){
          conn.war[m.chat][i].turn = true
        }
      }
    }
  }

  if (conn.war2[m.chat].turn < 5){
    let userAktif = 0
    let userMati = 0
    for (let i=5;i<10;i++){
      if (conn.war[m.chat][i].user != ""){
        userAktif += 1
        if (conn.war[m.chat][i].hp <= 0){
          userMati += 1
        }
      }
    }
    // m.reply(userAktif + "/" + userMati)
    if(userAktif == userMati){
      var teamA = []
      var teamB = []
      var teamAB = []
      for (let j=0;j<5;j++){
        if (conn.war[m.chat][j].user != ""){
          global.db.data.users[conn.war[m.chat][j].user].money += Number(conn.war2[m.chat].money)
          teamA.push(conn.war[m.chat][j].user)
          teamAB.push(conn.war[m.chat][j].user)
        }
      }
      for (let j=5;j<10;j++){
        if (conn.war[m.chat][j].user != ""){
          global.db.data.users[conn.war[m.chat][j].user].money -= Number(conn.war2[m.chat].money)
          teamB.push(conn.war[m.chat][j].user)
          teamAB.push(conn.war[m.chat][j].user)
        }
      }
      conn.reply(m.chat, `*الفريق A فاز لأن الفريق B غبي بالكامل*\n\n*الفريق A:*\n` + teamA.map((v, i) => `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*الفريق B:*\n" + teamB.map((v, i) => `${conn.war[m.chat][i + 5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n`, m, { contextInfo: { mentionedJid: teamAB } })
        delete conn.war[m.chat]
        delete conn.war2[m.chat]
    }
    let turn1 = conn.war2[m.chat].turn
    let turn2 = conn.war2[m.chat].turn
    for (let k=5;k<10;k++){
      if (conn.war[m.chat][k].hp > 0 && conn.war[m.chat][k].user != "" && conn.war[m.chat][k].turn == false) {
        conn.war2[m.chat].turn = k
        conn.war2[m.chat].time = +1
        turn2 = conn.war2[m.chat].turn
      }
    }
    if (turn1 == turn2){
      for (i=0;i<10;i++){
        conn.war[m.chat][i].turn = false
      }
      for(i=0;i<5;i++){
        if (conn.war[m.chat][i].hp > 0 && conn.war[m.chat][i].user != "" && conn.war[m.chat][i].turn == false) {
          conn.war2[m.chat].turn = i
          conn.war2[m.chat].time = +1
        }
      }
    }
    await sleep(2000)
    conn.reply(m.chat, `*دور @${conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0]} للهجوم (وقت 90 ثانية)*\n\n.حرب لاعب = إحصائيات اللاعب\n.هجوم @منشن = هاجم الخصم`, m, { contextInfo: { mentionedJid: [conn.war[m.chat][conn.war2[m.chat].turn].user] } })
    cekAFK(conn.war2[m.chat].turn)
} else {
    let userAktif = 0
    let userMati = 0
    for (let i=0;i<5;i++){
      if (conn.war[m.chat][i].user != ""){
        userAktif += 1
        if (conn.war[m.chat][i].hp <= 0){
          userMati += 1
        }
      }
    }
    if(userAktif == userMati){
      var teamA = []
      var teamB = []
      var teamAB = []
      for (let j=0;j<5;j++){
        if (conn.war[m.chat][j].user != ""){
          global.db.data.users[conn.war[m.chat][j].user].money -= Number(conn.war2[m.chat].money)
          teamA.push(conn.war[m.chat][j].user)
          teamAB.push(conn.war[m.chat][j].user)
        }
      }
      for (let j=5;j<10;j++){
        if (conn.war[m.chat][j].user != ""){
          global.db.data.users[conn.war[m.chat][j].user].money += Number(conn.war2[m.chat].money)
          teamB.push(conn.war[m.chat][j].user)
          teamAB.push(conn.war[m.chat][j].user)
        }
      }
      conn.reply(m.chat, `*الفريق B فاز لأن الفريق A كلهم أغبياء*\n\n*الفريق A :*\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*الفريق B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(conn.war2[m.chat].money).toLocaleString()})`).join`\n`, m, { contextInfo: { mentionedJid: teamAB } })
delete conn.war[m.chat]
delete conn.war2[m.chat]
}
    let turn1 = conn.war2[m.chat].turn
    let turn2 = conn.war2[m.chat].turn
    for (let k=0;k<5;k++){
      if (conn.war[m.chat][k].hp > 0 && conn.war[m.chat][k].user != "" && conn.war[m.chat][k].turn == false) {
        conn.war2[m.chat].turn = k
        conn.war2[m.chat].time = +1
        turn2 = conn.war2[m.chat].turn
      }
    }
    if (turn1 == turn2){
      for (let i=0;i<10;i++){
        conn.war[m.chat][i].turn = false
      }
      for(let i=0;i<5;i++){
        if (conn.war[m.chat][i].hp > 0 && conn.war[m.chat][i].user != "" && conn.war[m.chat][i].turn == false) {
          conn.war2[m.chat].turn = i
          conn.war2[m.chat].time = +1
        }
      }
    }
    await sleep(2000)
    conn.reply(m.chat, `*دور @${conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0]} للهجوم (الوقت 90 ثانية)*\n\n.حرب لاعب = إحصائيات اللاعب\n.هجوم @tag = مهاجمة الخصم`, m, { contextInfo: { mentionedJid: [conn.war[m.chat][conn.war2[m.chat].turn].user] } })
cekAFK(conn.war2[m.chat].turn)
}

  let totalUser = 0
  let totalTurn = 0
  for (let i=0;i<10;i++){
    if (conn.war[m.chat][i].user != "") totalUser += 1
    if (conn.war[m.chat][i].turn == true) totalTurn += 1
  }
  if (totalTurn == totalUser) {
    for (i=0;i<10;i++){
      conn.war[m.chat][i].turn = false
    }
  }

}
handler.help = ['attack','atk']
handler.tags = ['game']
handler.command = /^(هجوم|atk)$/i
handler.group = true
export default handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
