const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*الخيار:* ✨ | WELCOME
*الأمر:* ${usedPrefix + command} welcome
*الوصف:* تفعيل أو تعطيل الترحيب في المجموعة.

--------------------------------

*الخيار:* 🌎 | وضع عام
*الأمر:* ${usedPrefix + command} public
*الوصف:* يجعل البوت قابل للاستخدام علنيًا أو خاصًا.
*ملحوظة:* يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

--------------------------------

*الخيار:* 🥵 | وضع جنسي
*الأمر:* ${usedPrefix + command} modohorny
*الوصف:* تفعيل أو تعطيل الأوامر الخاصة بالكبار في المجموعة.

--------------------------------

*الخيار:* 🔗 | ANTILINK
*الأمر:* ${usedPrefix + command} antilink
*الوصف:* تفعيل أو تعطيل ميزة منع الروابط في واتساب.
*ملحوظة:* يتعين تفعيل القيد.

--------------------------------

*الخيار:* 🔗 | ANTILINK 2
*الأمر:* ${usedPrefix + command} antilink2
*الوصف:* تفعيل أو تعطيل ميزة منع الروابط التي تبدأ بـ HTTPS.
*ملحوظة:* يتعين تفعيل القيد.

--------------------------------

*الخيار:* 🔎 | DETECT
*الأمر:* ${usedPrefix + command} detect
*الوصف:* تفعيل أو تعطيل إشعارات التغييرات في المجموعة.

--------------------------------

*الخيار:* 🔎 | DETECT 2
*الأمر:* ${usedPrefix + command} detect2
*الوصف:* يكتشف التغييرات في المجموعة ويحسن إدارتها.

--------------------------------

*الخيار:* ❗ | RESTRICT
*الأمر:* ${usedPrefix + command} restrict
*الوصف:* تفعيل أو تعطيل قيود البوت، مثل إخراج أو إضافة أشخاص إلى المجموعة.
*ملحوظة:* يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

--------------------------------

*الخيار:* ☑️ | AUTOREAD
*الأمر:* ${usedPrefix + command} autoread
*الوصف:* يقوم بتحديد الرسائل والحالات كمقروءة تلقائيًا.
*ملحوظة:* يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

--------------------------------

*الخيار:* 🔊 | AUDIOS
*الأمر:* ${usedPrefix + command} audios
*الوصف:* تفعيل أو تعطيل أوامر الصوت بدون بادئة في المجموعة.

--------------------------------

*الخيار:* 👾 | AUTOSTICKER
*الأمر:* ${usedPrefix + command} autosticker 
*الوصف:* تحويل جميع الصور أو مقاطع الفيديو المرسلة في المجموعة إلى ملصقات.

--------------------------------

*الخيار:* 💬 | PCONLY
*الأمر:* ${usedPrefix + command} pconly
*الوصف:* يقوم البوت بالرد فقط على الأوامر في دردشة خاصة.
*ملحوظة:* يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

--------------------------------

*الخيار:* 🏢 | GCONLY
*الأمر:* ${usedPrefix + command} gconly
*الوصف:* يقوم البوت بالرد فقط على الأوامر إذا كانت في مجموعة.
*ملحوظة:* يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

--------------------------------

*الخيار:* ❌ | ANTIVIEWONCE 
*الأمر:* ${usedPrefix + command} antiviewonce
*الوصف:* يعيد إرسال الصور المرسلة للعرض مرة واحدة بشكل عادي بواسطة البوت.

--------------------------------

*الخيار:* 📵 | ANTILLAMADAS
*الأمر:* ${usedPrefix + command} anticall
*الوصف:* يقوم البوت بحظر الأشخاص الذين يتصلون بالبوت.
*ملحوظة:* يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

--------------------------------

*الخيار:* 💬 | ANTIPRIVADO
*الأمر:* ${usedPrefix + command} antiprivado
*الوصف:* يقوم البوت بحظر الأشخاص الذين يكتبون إلى البوت بشكل خاص.
*ملحوظة:* يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.


--------------------------------

*Opción:* 🤬 | ANTITOXIC
الأمر: ${usedPrefix + command} antitoxic
الوصف: يكتشف الكلمات النابية ويحذر المشارك في المجموعة قبل أن يتم طرده.
ملحوظة: يجب تفعيل القيد.

الخيار: 🕸️ | ANTITRABAS
الأمر: ${usedPrefix + command} antitraba
الوصف: يكتشف النصوص الطويلة التي قد تكون فيروسات وتسبب تأخيرًا في الدردشة ويقوم بحذف المستخدم.
ملحوظة: يجب تفعيل القيد.

الخيار: 👎 | ANTIARABES
الأمر: ${usedPrefix + command} antiarabes
الوصف: إذا انضم رقم عربي إلى المجموعة، يقوم البوت بحذفه تلقائيًا.
ملحوظة: يجب تفعيل الترحيب والقيد.

الخيار: 👎 | ANTIARABES 2
الأمر: ${usedPrefix + command} antiarabes2
الوصف: إذا كتب رقم عربي في المجموعة، يقوم البوت بحذفه تلقائيًا.
ملحوظة: يجب تفعيل القيد.

الخيار: 🤖 | MODEJADIBOT
الأمر: ${usedPrefix + command} modejadibot
الوصف: تفعيل أو تعطيل استخدام الأمر لرفع البوت (${usedPrefix}serbot / ${usedPrefix}jadibot).
ملحوظة: يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

الخيار: 👑 | MODOADMIN
الأمر: ${usedPrefix + command} modoadmin
الوصف: يقوم البوت بالرد فقط على المسؤولين في المجموعة.

الخيار: 😃 | SIMSIMI
الأمر: ${usedPrefix + command} simsimi
الوصف: يبدأ البوت في الرد على الرسائل باستخدام ذكاء صناعي من SimSimi.

الخيار: ⏳ | ANTISPAM
الأمر: ${usedPrefix + command} antispam
الوصف: يكتشف عندما يقوم مستخدم بعمل سبام للأوامر ويحظره لمدة 5 ثوانٍ ويحذره.
ملحوظة: يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

الخيار: 🛡️ | ANTIDELETE
الأمر: ${usedPrefix + command} antidelete
الوصف: يكتشف عندما يقوم مستخدم بحذف رسالة ويعيد إرسالها.

الخيار: 🔊 | AUDIOS_BOT
الأمر: ${usedPrefix + command} audios_bot
الوصف: يعطل الأصوات الخاصة بالبوت من قائمة الأصوات لجميع الدردشات الخاصة.
ملحوظة: يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.

الخيار: 🤖 | MODOIA
الأمر: ${usedPrefix + command} modoia
الوصف: يفعل وضع "الذكاء الاصطناعي" مع GPT في جميع الدردشات الخاصة.
ملحوظة: يمكن استخدام هذا الأمر فقط بواسطة مالكي البوت.`.trim();
  const isEnable = /true|تشغيل|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🗂️ الخيار: ${type}\n🎚️ الحالة: ${isEnable ? 'مفعل' : 'معطل'}\n📣 ل: ${isAll ? 'لهذا البوت' : isUser ? '' : 'لهذه المجموعة'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((تشغ|تعط)يل|(tru|fals)e|(turn)?[01])$/i;
export default handler;
