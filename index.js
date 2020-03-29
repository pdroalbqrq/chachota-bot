const disc = require("discord.js");
const dotenv = require("dotenv");
const chacotaBot = new disc.Client();

dotenv.config();
chacotaBot.login(process.env.TOKEN);
chacotaBot.options()

const mestre = "693629680841916437";
const membro = "693634173898063934";
const botId = "693664560141566062";

chacotaBot.on("message", message => {
  isMemberAllowed = false;

  let darPermissao = cargo => {
    if (message.member.roles.cache.some(r => r.name === cargo)) {
      this.isMemberAllowed = true;
      console.log(this.isMemberAllowed)

    } else {
      this.isMemberAllowed = false;

    }
  };

  let retirarPermissao = cargo => {
    if (message.member.roles.cache.some(r => r.name === cargo)) {
      this.isMemberAllowed = false;

    } else {
      this.isMemberAllowed = false;

    }
  };

  if (message.content.startsWith("!Proleta")) {
    let role = message.member.roles.cache.some(r => r.id === mestre);
    if (role) {
      var str = message.content;
      var words = str.split(" ");
      darPermissao(words[1]);
    }
  }

  if (message.content.startsWith("!Rroleta")) {
    let role = message.member.roles.cache.some(r => r.id === mestre);
    if (role) {
      var str = message.content;
      var words = str.split(" ");
      retirarPermissao(words[1]);
    }
  }

  if (message.content.startsWith("!roleta")) {
    if (this.isMemberAllowed) {
      let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
      message.channel.send(randomNumber);
    } else {
      message.channel.send('Você não tem permissão de usar esse comando').then(msg => msg.delete(3500)).catch(e => console.log(e))
    }
  }

});

chacotaBot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === 'bem-vindo');
  if (!channel) return;

  chacotaBot.on("message", message => {

    if (!message.member.roles.cache.some(r => r.name === 'chacotaBot')) {
      return message.channel.send('Proibido enviar mensagens nesse canal').then(msg => msg.delete(3500)).catch(e => console.log(e))
    }
    message.channel.send(`${member} é o mais novo CHACOTEIRO, por favor leia as regras e dicas`);
  })
})
