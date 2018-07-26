const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`.help | By @HiMoxY™#1027 .`,'');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
if (message.content === '.help') {
              var embed  = new Discord.RichEmbed()
                .addField("**LINKS**" ,":no_entry_sign: Added blocking links :no_entry_sign: ")
                .addField("broadcast (bc)" ,"**user:** ``.broadcast <message> , $bc <message>``")
                .addField("**BAN**" ,"**user:** ``.ban <user>``")
                .addField("**KICK**" ,"**user:** ``.kick <user> ``")
                .addField("**ِAVATAR**" ,"**user:** ``.avatar``")
                .addField("**INFO**", "**user :** ``.info``")
                .addField("**SAY**" ,"**user:** ``.say <message>``")
                .addField("**ID**" ,"**ال��ستخدام:** ``.id``")
                .addField("**SERVER**" ,"**user:** ``.server``")
                .addField("**INVITE**" ,"**user:** ``.invite <invite bots>``")
                .addField("**SUPPORT**" ,"**user:** ``.suppport <server support>``")
                .addField("**QA**" ,"**user:** ``.qa <السؤال>``  ")
                .addField("**CLEAR**" ,"**user:** ``.clear <العدد>``")
                .addField("**PING**", "**user:** ``.ping``")
                .addField("**SERVERNAME**", "**user:** ``.servername``")
                .addField("**CUT_TWEET**", "**user** ``.ct``")
                .addField("**TWEET**", "**user** ``.tweet <message>``")
                .addField("**NO INVITE LINKE**","Added the block blocking feature")
                .addField("**LOGIN**" , " HiMoxY™🔊 ")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
  if(message.content === ('clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
	if (message.content === '$play') {
    if (message.member.voiceChannel) {       
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playStream("https://streaming.radionomy.com/QGProdRadioRapMarocain"); //for playing an audiostream/radio
        })
        .catch(console.log);
        message.reply('Joined and started playing.');
    } else {
                message.reply('You first need to join a voicechannel!');
     }
}
});
client.on('message', msg => {
  if (msg.content === '.invite') {
    msg.reply('https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=463918426587660289');
  }
});
client.on('message', msg => {
  if (msg.content === '.help') {
    msg.reply(':envelope: | Message sent in private');
  }
});
client.on("message", message => {
    var prefix = "mm";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **you dont have permission**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done ",
        color: 0x06DF00,
        description: "Messages successfully cleared",
        footer: {
          text: "HiMoxY™🔊."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content === ".Avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on('message', msg => {
  if (msg.content === '.suppport') {
    msg.reply('server support join ,https://discord.gg/sgexBXv');
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`>help | by HiMoxY™#7445 |twitch.tv/HiMoxYTM| ${client.guilds.size} Servers`,)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.login(process.env.TOKEN);
