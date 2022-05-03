//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['51977783315'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['51935116539'] //another owner number
global.premium = ['51935116539'] //premium number
global.pengguna = 'Misael' //username
global.botnma = 'Cheems Bot-MD' //bot name
global.ownernma = '😎MISAEL😎' //owner name
global.packname = 'Sticker' //sticker package name
global.author = '( ͡❛ ͜ʖ ͡❛)' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: '*Eate comando solo puede ser utilizado por un admin!*',
    botAdmin: 'El Bot debe ser admin para utilizar este comando',
    owner: 'Este comando solo puede ser usado por owner',
    group: 'Este comando solo se puede usar en gurpos!',
    private: 'Este comando solo se utiliza en chat privado!',
    bot: 'Este comando solo puede ser utilizado por el bot',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
