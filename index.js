const mesInformations = require ('./information.js');


const cowsay = require("cowsay");
// test
console.log(cowsay.say({
    text : mesInformations(),
    e : "oO",
    T : "U "
}));
