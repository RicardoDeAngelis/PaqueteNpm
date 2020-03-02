const messages =[
    "ricardo",
    "jose",
    "fer",
    "anto",
    "nico",
    "12",
    "34",
    "43",
    "perro"
];

const randomMsg= ()=>{
    const message =messages[Math.floor(Math.random() *messages.length)];
    console.log(message);
};
module.exports = {randomMsg} ;