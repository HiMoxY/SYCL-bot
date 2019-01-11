const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '?'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
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
	if (message.content === '?nijoze') {
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
  if (msg.content === '?invite') {
    msg.reply('https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=524088162125873153');
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("?nijoze | Nijoze server ",{type: 'WATCHING'})
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

client.on('message', message => {
              let args = message.content.split(" ").slice(1).join(" ");
              if (message.content.startsWith(prefix +'say')) {
              message.delete();
              if (!message.member.hasPermission("ADMINISTRATOR")) return sa.reply('This command only admins ⁉');
              if(!args) return;
                let say = new Discord.RichEmbed()
                .setDescription(`${args}`)
                .setColor('#02f35b')
                message.channel.sendMessage(say);
              
              }
});
client.on("message", message => {
    var prefix = "?";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done ",
        color: 0x06DF00,
        description: "Messages successfully cleared",
        footer: {
          text: "Money Rewards."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.login(process.env.TOKEN);
