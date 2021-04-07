const express = require("express");

const { Client, RichEmbed } = require("discord.js");

const app = express();

function sleep(milliseconds) {

  var start = new Date().getTime();

  for (var i = 0; i < 1e7; i++) {

    if (new Date().getTime() - start > milliseconds) {

      break;

    }

  }

}

const http = require("http");

app.get("/", (request, response) => {

  console.log(Date.now() + "hostemprator");

  response.sendStatus(200);

});

app.listen(process.env.PORT);

setInterval(() => {

  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);

}, 280000);

const Discord = require("discord.js");

const client = new Discord.Client();

const data = new Map();
client.on("ready", () => {

  console.log(

    `Online In  | Users : ${client.users.cache.size}`

  );

  let statuses = [

    ` lera shtakan bnwsa`,

    ` lera`,

    `lera `

  ];

  setInterval(function() {

    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];

    client.user.setActivity(STREAMING, {

      type: "PLAYING",

      url: "http://www.twitch.tv/faith"

    });

  }, 3000);

  client.login("");
});
