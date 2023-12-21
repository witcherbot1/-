let R = Math.random;
let Fl = Math.floor;
let toM = (a) => "@" + a.split("@")[0];
function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map((v) => v.id);
  let a = ps[Fl(R() * ps.length)];
  let b;
  do b = ps[Fl(R() * ps.length)];
  while (b === a);
  let c;
  do c = ps[Fl(R() * ps.length)];
  while (c === a || c === b);
  let d;
  do d = ps[Fl(R() * ps.length)];
  while (d === a || d === b || d === c);
  let e;
  do e = ps[Fl(R() * ps.length)];
  while (e === a || e === b || e === c || e === d);
  let f;
  do f = ps[Fl(R() * ps.length)];
  while (f === a || f === b || f === c || f === d || f === e);
  let g;
  do g = ps[Fl(R() * ps.length)];
  while (g === a || g === b || g === c || g === d || g === e || g === f);
  let h;
  do h = ps[Fl(R() * ps.length)];
  while (h === a || h === b || h === c || h === d || h === e || h === f || h === g);
  let i;
  do i = ps[Fl(R() * ps.length)];
  while (i === a || i === b || i === c || i === d || i === e || i === f || i === g || i === h);
  let j;
  do j = ps[Fl(R() * ps.length)];
  while (j === a || j === b || j === c || j === d || j === e || j === f || j === g || j === h || j === i);

  m.reply(
    `*_😍 أفضل 5 أزواج في المجموعة 😍_*
    
*_1.- ${toM(a)} و ${toM(b)}_*
- هذه الزوجين متجهين ليكونوا معًا 💙

*_2.- ${toM(c)} و ${toM(d)}_*
- هذه الزوجين طيور الحب الصغيرة ✨

*_3.- ${toM(e)} و ${toM(f)}_*
- أوف، وماذا نقول عن هذا الزوج، يجب أن يكون لديهما بالفعل عائلة 🤱🧑‍🍼

*_4.- ${toM(g)} و ${toM(h)}_*
- هؤلاء تزوجوا بالفعل سرًا 💍

*_5.- ${toM(i)} و ${toM(j)}_*
- هذا الزوج في شهر عسل ✨🥵😍❤️*`,
    null,
    {
      mentions: [a, b, c, d, e, f, g, h, i, j],
    }
  );
}
handler.help = ["formarpareja5"];
handler.tags = ["main", "fun"];
handler.command = ["formarpareja5"];
handler.group = true;
export default handler;
