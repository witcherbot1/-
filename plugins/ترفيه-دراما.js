let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*[⚡] اقتراحي عشان عيونك*:\n          ꔹ━━━━━━━━━━━ꔹ\n*『${pickRandom(global.bxviu)}』*\n*ꔹ━━━━━ꔹ❰ هينا بوت ❱ꔹ━━━━━ꔹ*`, m)
}
handler.help = ['S H A D O W']
handler.tags = ['fun']
handler.command = /دراما$/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.bxviu = ["The man in the iron mask","Citizen Kane","It's a wonderful life","Casablanca","Good will hunting","Pulp Fiction","Taxi Driver","Amadues","Network","The Shawshank Redemption","Braveheart","Gladiator","The Mercy","First Man","The Goldfinch","No country for old men","127 Hours","The fatherhood","On the Count of Three","Capernaum","The Truman show","The Mauritanian","Into the wild","A Father’s Legacy","Gone With the Wind","Pursuit of happiness","12 Angry Men","Forrest Gump","The Green Mile","Fight Club","Incendies","Seven pounds","Soul","The intouchables","The secret life of Walter Mitty","ما في افلام شطبنا !","ضرب نار","جعفر العمدة","بابا المجال","الهرشة السابعة","رشيد","ستهم","المداح: أسطورة العشق","ملاكمتي الجميلة","موضوع عائلي","فلانتينو","قابيل","متحرك","تغيير جو","دفعة لندن","سكة سفر","العالية","1000 حمدالله على السلامة","ألف ليلة وليلة","قابيل","ابتسم أيها الجنرال","شباب البومب 11","أم البنات"]