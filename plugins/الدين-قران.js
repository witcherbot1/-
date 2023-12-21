import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
let url = qraan[Math.floor(Math.random() * qraan.length)]
conn.sendFile(m.chat, url, 'error.jpg', ` ♥ *استمع يحب للصوت* ♥  `, m)
}
handler.help = ['قران']
handler.tags = ['internet']
handler.command = /^(قران)$/
handler.exp = 50
handler.level = 0
export default handler


global.qraan =[
    "https://audio.jukehost.co.uk/Rv4gPOzornuPEGv5XIJWNm56CWG3fnSp",
    "https://audio.jukehost.co.uk/e5st7AgyjXleDzPUwBvRt70GNaKpQwNV",
    "https://audio.jukehost.co.uk/ngWtCumV4MTVPBLyk14O9ev2ZxT0sEzr",
    "https://audio.jukehost.co.uk/jnnKiNtQLdsRiorMbHGgm0dLWy64YYx4",
    "https://audio.jukehost.co.uk/eCdZZh7PUHqi6mCI0l3LAoznfKkX4yeb",
    "https://audio.jukehost.co.uk/6t60PWxEa6WaT9QLRFrg0UTwtLYTFHkU",
    "https://audio.jukehost.co.uk/gldIjl98nL1HNgSyztqjEvA5vhaUttb3",
    "https://audio.jukehost.co.uk/Gdrk7gCl7CpDXZ41GaPAxJtguDUElfCU",
    "https://audio.jukehost.co.uk/KWa6s4YLClDCv20tsdQFtMqB3UXMO4tJ",
    "https://audio.jukehost.co.uk/nct5hsU0xjHNTUZDEvDTaoH8QhD0AMFa",
    "https://audio.jukehost.co.uk/QWYnnIcJ3OEz3FcB5sGKesNEtpm3ye61",
    "https://audio.jukehost.co.uk/Rv4gPOzornuPEGv5XIJWNm56CWG3fnSp",
    "https://audio.jukehost.co.uk/BNyXe9xeXm7eXcRkzQkki408Nia0qcGF",
    "https://audio.jukehost.co.uk/wNZcxyQFHUGfh86GpwbY3r6SHvCkdwfO",
    "https://audio.jukehost.co.uk/A38nNEQAeCbTuIYIToBI9poggCVyIv2G",
    "https://audio.jukehost.co.uk/oQ7YX2iWNaCLrPvFIIvWyD3ZvC0gEGIg",
    "https://audio.jukehost.co.uk/bLqmHpnLswF9xKUglJALaeOD8EhNywEe",
    "https://audio.jukehost.co.uk/qvMhsEB4Vc3RIyfdwbgGTn0q5ij6OO8f",
    "https://audio.jukehost.co.uk/hZ8YNEzUMWxQpWuNg5Es68aYlN9bvkYf",
    "https://audio.jukehost.co.uk/qbE2d68bPVWZ48qSJp1ieCBFhSDgauXz",
    "https://audio.jukehost.co.uk/bbhiehfZzMyx7msYQxsVoUznHXUskjNF",
    "https://audio.jukehost.co.uk/M1g2130L7Pe2Tx7eoCzG8MpxqdxT2L78",
    "https://audio.jukehost.co.uk/ucToAA7bEPaHoZIlckOnHmBZmNUTpZCh",
    "https://audio.jukehost.co.uk/KIqlgdinCb9J6uZzOP7hLGsjYlxi7hg8",
    "https://audio.jukehost.co.uk/Pif1PGNAqBWgClf67N2r4zD5Llij2SrV",
    "https://audio.jukehost.co.uk/kfr4wkREdSAcqKCh5VDO3SDV5mEz6qEp",
    "https://audio.jukehost.co.uk/PjBIB8FrWLKhVACgIWMjXEfqyjBklfnh",
    "https://audio.jukehost.co.uk/yH6SaveEHkghE9BgPZw1rZw7IJl9xFOv",
    "https://audio.jukehost.co.uk/Z8oz2SF44UBy0vcwGMxmEbQSxIzrLeOu",
    "https://audio.jukehost.co.uk/qfvbbRS1XEu4O0XQyAxMa6jw0Kh8VB9X",
    "https://audio.jukehost.co.uk/S0aAYfnXKu4I7SfkbhvQS4ZPUfOGFiUh",
    "https://audio.jukehost.co.uk/Jwq6cd4afcLfw473qQlEbgGwMby5a9XB",
    "https://audio.jukehost.co.uk/y6nc0Hmb32zYvjnSN7Tqy5pMU8sBOrIV",
    "https://audio.jukehost.co.uk/SO3G5JMSaohIVdWWl2eSXLsOkQeNEYlK",
    "https://audio.jukehost.co.uk/E6KzkbpWNMCd9Ougw59DD036H77mlHmi",
    "https://audio.jukehost.co.uk/BqGQcwZk6fHbSo6gIki6uMk2Z2kpusml",
    "https://audio.jukehost.co.uk/iJXUyILDaFAPhkl25R9bynxI1K3JzFki",
    "https://audio.jukehost.co.uk/fRiOT3vY4OSfAhQgg2axw32ySRuoee7V",
    "https://audio.jukehost.co.uk/57YcYEl6LJZJ0j4RzMfVQlrguftbAKUM",
    "https://audio.jukehost.co.uk/w1mt0VvRo0FDQupoBzNh1MKHBtwjwSrl",
    "https://audio.jukehost.co.uk/w1mt0VvRo0FDQupoBzNh1MKHBtwjwSrl",
    "https://audio.jukehost.co.uk/jUv1CZ2YuXueG4CazTcP28GLs7Z3hiWP",
    "https://audio.jukehost.co.uk/8YhaKZUj7e6WUxEA5uV3Ez6nUwFjItmb",
    "https://audio.jukehost.co.uk/VRa23iOv7RY4kCXGQJmITSE1WmOS2Meo",
    "https://audio.jukehost.co.uk/GpHaEk3ADHLNYGiT0TVvSA7vbZo2EiTy",
    "https://audio.jukehost.co.uk/f1JiLaA2MjGF7gpM9APbpqIrpOHsHvCk",
    "https://audio.jukehost.co.uk/hHUH9axf05AF2ISqQBnHPwoDRavAERZC",
    "https://audio.jukehost.co.uk/4oq6KOFinfla6WzEEKmi9cHDY9hc0i6A",
  ];
