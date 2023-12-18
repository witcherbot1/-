import{tiktokdl as r,tiktokdlv2 as t}from"@bochilteam/scraper";let handler=async(e,{conn:a,args:i,command:n})=>{if(!i[0])return e.reply("*[ ! ] Y el Link?*");if(!isUrl(i[0])||!i[0].includes("tiktok.com"))return e.reply(`*[ ! ] Link inv\xe1lido*
_Por favor, use un link de Tik Tok_
Ejm : ${Prefijo+n} https://vm.tiktok.com/ZMNo7NFT9/`);let l;await e.reply(MultiNK.Proces(await a.getName(e.sender)));try{let{author:{nickname:o},video:k,description:m}=await r(i[0]).catch(async r=>await t(i[0])),c=k.no_watermark_raw||k.no_watermark||k.no_watermark_hd||k.with_watermark;if(!c)return e.reply(MultiNK.Error1());a.sendFile(e.chat,c,"tiktok.mp4",`
🔥 By ${o}${m?`
📜*Descripci\xf3n:* ${m}`:""}
`.trim(),e)}catch{e.reply(MultiNK.Error0())}};handler.help=["tiktokdl"].map(r=>r+" <link>"),handler.tags=["servicio"],handler.command=/^(tiktokdl)$/i,handler.limit=!0;export default handler;