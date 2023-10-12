//base by Dux (Xeon Bot Inc.)
//YouTube: @Dux
//Instagram: official_quadhir
//Telegram: t.me/Duxlin
//GitHub: @Dux
//WhatsApp: +2347082252014
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Duxbot6413

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2347082252014"
global.ownername = "Quadhir"
global.ytname = "YT: Xeon"
global.socialm = "GitHub: Duxlin"
global.location = "Immortal Realm"

global.ownernumber = '2347082252014'  //creator number
global.ownername = 'Dux' //owner name
global.botname = 'Duxbot' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '🦄Dux\n\nContact: +2347082252014'

//console view/theme
global.themeemoji = '😈'
global.wm = "DuxBotinc."

//theme link
global.link = 'https://chat.whatsapp.com/JlVLM5a8lJy6Y1afm25L4N'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})