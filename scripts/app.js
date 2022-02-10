console.log("%c[scripts/app.js] Loaded", "background:orange; padding:10px");

$('button').on('click', setUpWormWorld());

/* Round of Vermicare */
const round = {
    name: null,
    age: 0,
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    naughtiness:
    button: [ 
        $("enterName"),
        $("#feed me"),
        $("let sleep"),
        $("#play with me"),
        $("#read to me")
    ],
}

start(e){
    this.startAgeTimer();
    this.startHungerTimer();
    this.startSleepinessTimer();
    this.startBoredomTimer();
    this.startNaughtinessTimer();
},


/* === Timers for Hunger, Age, Sleepiness, Boredom and Naughtiness
=== */
ageTimer: null,
startAgeTimer() {
    this.ageTimer = setInterval(this.increaseAge.bind(round), 6000)
},

hungerTimer: null,
startHungerTimer() {
    this.hungerTimer = setInterval(this.increaseHunger.bind(game), 1250)
},


sleepinessTimer: null,
startSleepyTimer() {
    this.sleepyTimer = setInterval(this.increaseSleepiness.bind(game), 2500)
},

naughtinessTimer: null,
startBoredomTimer() {
    this.boredomTimer = setInterval(this.increaseBoredom.bind(game), Math.floor(Math.random() * 1000))
},

class Worm {
    constructor () {
        this.name = name;
        this.age = age
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.naughtiness = naughtiness;
    }

    // method1
    // methodd2
}

function getPetName {
    const petName = prompt("Please let us know what you would like to call your pet worm.")
}

function createWorm {
    const newWorm = new Worm
}

// function setUpWormWorld() {
//     console.log("Hello, after click");
// }

// $('#worm-world').appendChild($('section'));