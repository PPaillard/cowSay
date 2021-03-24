const mesInformations = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: mesInformations(),
    e: "oO",
    T: "U ",
  })
);

// blabla
