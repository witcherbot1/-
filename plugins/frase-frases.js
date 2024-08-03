import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  if (command === 'انصحني') {
    const consejo = consejos[Math.floor(Math.random() * consejos.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀🌟 *نصيحة اليوم* 🌟\n\n❥ ${consejo}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command === 'رومانسي') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀💖 *جملة رومانسية* 💖\n\n❥ ${frase_romantica}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command == 'رومانسيه') {
    try {
      const cerpe = await cerpen(`cinta romantis`);
      const storytime = await translate(cerpe.cerita, {to: 'ar', autoCorrect: true}).catch((_) => null);
      const titletime = await translate(cerpe.title, {to: 'ar', autoCorrect: true}).catch((_) => null);
      conn.reply(m.chat, `᭥🫐᭢ العنوان: ${titletime.text}
᭥🍃᭢ الكاتب: ${cerpe.author}
────────────────
${storytime.text}`, m);
    } catch {
      const err = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=Elabora%20una%20historia%20romantica%20que%20use%20el%20siguiente%20formato:%20%E1%AD%A5%F0%9F%AB%90%E1%AD%A2%20T%C3%ADtulo:%20%E1%AD%A5%F0%9F%8D%83%E1%AD%A2%20Autor:%20%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%20hsitoria...%20adalah&user=user-unique-id`);
      const json = await err.json();
      const fraseChat = json.result;
      conn.reply(m.chat, fraseChat, m);
    }
  }
};
handler.tags = ['R O B'];
handler.command = handler.help = ['رومانسي', 'رومانسيه', 'انصحني'];
export default handler;

async function cerpen(category) {
  return new Promise((resolve, reject) => {
    const title = category.toLowerCase().replace(/[()*]/g, '');
    const judul = title.replace(/\s/g, '-');
    const page = Math.floor(Math.random() * 5);
    axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
          const $ = cheerio.load(get.data);
          const link = [];
          $('article.post').each(function(a, b) {
            link.push($(b).find('a').attr('href'));
          });
          const random = link[Math.floor(Math.random() * link.length)];
          axios.get(random).then((res) => {
            const $$ = cheerio.load(res.data);
            const hasil = {
              title: $$('#content > article > h1').text(),
              author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
              kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
              lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
              cerita: $$('#content > article > p').text(),
            };
            resolve(hasil);
          });
        });
  });
}

global.frasesromanticas = [
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
];

global.consejos = [
  'اقبل أن التغييرات هي جزء طبيعي من الحياة، وتعلم كيفية التكيف معها.',
  'لا تتوقف أبدًا عن التعلم؛ العلم هو أداة قوية.',
  'اعتنِ بصحتك الجسدية والعقلية، فهي أساسية لحياة مكتملة.',
  'تمتع بالأشياء الصغيرة، فهي هي التي تعطي معنى للحياة.',
  'تعلم كيف تسامح، سواء مع الآخرين أو مع نفسك، لتحرير قلبك.',
  'قدّر الوقت الذي تقضيه مع أحبائك، فهو أغلى هدية يمكنك إعطاؤها واستلامها.',
  'كن لطيفًا ومتعاطفًا مع الآخرين، فكل فعل صغير من اللطف يمكن أن يحدث فارقًا في حياتهم.',
  'تعلم كيف تقول "لا" عند الضرورة، ووضع حدود صحية.',
  'ابحث عن وقت للقيام بما تشغلك به وتحبه، فذلك يغذي روحك ويجعلك تشعر بالحياة.',
  'لا تقارن نفسك بالآخرين، فكل شخص لديه طريقه وإيقاعه الخاص في الحياة.',
  'اسمع شريك حياتك بتفهم وتعاطف، فالتواصل أساس العلاقة القوية.',
  'لا تخف من التعبير عن مشاعرك، فالصدق أمر أساسي في الحب.',
  'تعلم كيف تتنازل وتتفاهم، فالحب يحتاج إلى تضحية وجهد متبادل.',
  'فاجئ شريك حياتك من حين لآخر، واحتفظ بشرارة الرومانسية.',
  'احترم فرادى شريك حياتك واترك له المجال للنمو كشخص.',
  'حب الذات مهم للغاية مثل حب شخص آخر؛ اعتنِ بنفسك وقدر نفسك.',
  'تذكر أن العلاقة السليمة تقوم على الثقة المتبادلة والاحترام.',
  'اختر شخصًا يكمّلك ويجعلك نسخة أفضل من نفسك.',
  'الحب الحقيقي لا يجعلك تشعر بالقليل، بل يزيد من شعورك بالكثير.',
  'الحب فعل، هو اختيار يومي ينمو مع الأفعال والكلمات.',
  'ابحث عن وظيفة تشغلك، ولن تشعر بأنك تعمل يومًا في حياتك.',
  'كن فاعلاً وتخذ الإجراءات اللازمة في عملك، سيتم تقدير ذلك من قبل رؤسائك.',
  'تعلم من أخطائك وفشلك، فهي فرص للنمو والتحسين.',
  'حافظ على موقف إيجابي وابحث عن حلول أمام التحديات الوظيفية.',
  'بناء علاقات جيدة مع زملائك، فالعمل الجماعي هو مفتاح النجاح.',
  'حدد أهدافًا واقعية وواضحة، واعمل بتصميم لتحقيقها.',
  'لا تخجل من طلب المساعدة أو البحث عن توجيه، دائمًا هناك شيء جديد لتعلمه.',
  'اعترف بإنجازاتك وقدرها، احتفل بنجاحاتك مهما كانت صغيرة.',
  'ابحث عن توازن بين حياتك المهنية والشخصية، فكلتاهما هامتان.',
  'العمل جزء هام من حياتك، ولكنه ليس الشيء الوحيد الذي يحدد من أنت.',
  'آمن بنفسك وبقدرتك على تحقيق ما تسعى إليه.',
  'تصوّر أهدافك وأحلامك، تخيل كيف ستشعر عند تحقيقها.',
  'ابحث عن إلهام في أولئك الذين تغلبوا على عقبات مماثلة لتلك التي تواجهها.',
  'اقبل الفشل كجزء من العملية، إنها فرص للتعلم والنمو.',
  'احتفظ بشركة الأشخاص الإيجابيين والذين يدعمونك للأمام.',
  'حافظ على عقلية مفتوحة واستعد لتعلم أشياء جديدة.',
  'تذكر لماذا بدأت عندما تشعر بالانخراط؛ أعد الاتصال بغرضك.',
  'قسّم أهدافك إلى خطوات صغيرة، فذلك سيجعل الطريق أكثر إمكانية وأقل إرهاقًا.',
  'لا تخف من متابعة أحلامك، الحياة قصيرة جدا لتعيش بدون أي ندم.',
  'ثق بأنه بالجهد والمثابرة، يمكنك تحقيق كل ما تطمح إليه.',
];
