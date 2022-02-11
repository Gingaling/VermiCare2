console.log("%c[scripts/app.js] Loaded", "background:orange; padding:10px");



const wormName = prompt("Please let us know what you would like to call your pet worm.").val;

/* Round of Vermicare */
const round = {
    name: wormName,
    age: 0,
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    naughtiness: 0,
    button: [ 
        // $("#begin")
        $("#feed"),
        $("#feed-apple"),
        $("#sleep"),
        $("#play"),
        $("#read")
    ],
    
    start(e) {
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
        this.ageTimer = setInterval(this.increaseAge.bind(round), 3000);
    },
    
    increaseAge() {
        this.age++ ;
        $('#age').text(`Age: ${this.age}`);
        if (this.age >= 20) {
            this.roundOver();
            console.log(`${this.name} has died of natural causes. Please consider future worm care.`);            
        };
    },
    
    hungerTimer: null,
    startHungerTimer() {
        this.hungerTimer = setInterval(this.increaseHunger.bind(round), 3000);
    },
    
    increaseHunger() {
        this.hunger++;
        $('#hunger').text(`Hunger Level: ${this.hunger}`);
        if (this.hunger >= 10) {
            this.roundOver();
            console.log(`${this.name} has died from starvation. You should rethiink worm ownership in the future.`);
        };
    },
    
    sleepinessTimer: null,
    startSleepinessTimer() {
        this.sleepinessTimer = setInterval(this.increaseSleepiness.bind(round), 3000);
    },
    
    increaseSleepiness() {
        this.sleepiness++ ;
        console.log(this.sleepiness);
        $('#sleepiness').text(`Sleepines Level: ${this.sleepiness}`);
        if (this.sleepiness >= 10) {
            this.roundOver();
            console.log(`${wormName} has died from sleep deprivation. You should rethiink worm ownership in the future.`);
        };
    },
    
    boredomTimer: null,
    startBoredomTimer() {
        this.boredomTimer = setInterval(this.increaseBoredom.bind(round), 5000);
    },
    
    increaseBoredom() {
        this.boredom++ ;
        $('#boredom').text(`Boredom Level: ${round.boredom}`);
        if (this.boredom >= 10) {
            this.roundOver();
            console.log(`${this.name} has died from neglect. You should rethiink worm ownership in the future.`);
        };
    },
    
    naughtinessTimer: null,
    startNaughtinessTimer() {
        this.naughtinessTimer = setInterval(this.increaseNaughtiness.bind(round), 5000);
    },
    
    increaseNaughtiness() {
        this.naughtiness = this.naughtiness + Math.floor(Math.random * 1000);
        $('#naughtiness').text(`Naughtiness Level: ${this.sleepiness}`)
    },
    
    
    /* Increasing and Decreasing Timers */
    
    decreaseHunger() {
        this.hunger-- ;
        $('#hunger').text(`Hunger Level: ${this.hunger}`);
    },
    
    
    decreaseSleepiness() {
        this.sleepiness--;
        $('#sleepiness').text(`Sleepines Level: ${this.sleepiness}`);
    },
    
    decreaseBoredom() {
        this.boredom = this.boredom - Math.floor(Math.random() * 2);
        $('#boredom').text(`Boredom Level: ${this.boredom}`);
    },
    
    roundOver() {
        clearInterval(this.ageTimer);
        clearInterval(this.hungerTimer);
        clearInterval(this.sleepinessTimer);
        clearInterval(this.boredomTimer);
        clearInterval(this.naughtinessTimer);
    }
}

/* Event Listeners */
$("#feed").click(() => {
    round.decreaseHunger();
    $('#hunger').text(`Hunger Level: ${this.hunger}`);
})

$("#feed-apple").click(() => {
    round.decreaseHunger();
    round.decreaseHunger();
    $('#hunger').text(`Hunger Level: ${this.hunger}`);
})

$("#sleep").click(() => {
    round.decreaseSleepiness();
    $('#sleepiness').text(`Sleepines Level: ${this.sleepiness}`);
})

$("#play").click(() => {
    round.decreaseBoredom();
    $('#boredom').text(`Boredom Level: ${this.boredom}`);
})

$("#read").click(() => {
    round.decreaseBoredom();
    $('#boredom').text(`Boredom Level: ${this.boredom}`);
    
})


$("#begin").on('click', round.start());


// this.start();



    // class Worm {
    //     constructor () {
        //         this.name = name;
        //         this.age = age
        //         this.hunger = hunger;
        //         this.sleepiness = sleepiness;
        //         this.boredom = boredom;
        //         this.naughtiness = naughtiness;
        //     }
        
        // method1
        // methodd2
    // }
    
    
    // function createWorm {
        //     const newWorm = new Worm
        // }
        