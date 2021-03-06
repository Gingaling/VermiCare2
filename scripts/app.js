console.log("%c[scripts/app.js] Loaded", "background:orange; padding:10px");

let wormName = prompt("Please let us know what you would like to call your pet worm.");
// const wormName = prompt("Please let us know what you would like to call your pet worm.").val;

/* Round of Vermicare */
const round = {
    name: wormName,
    age: 0,
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    naughtiness: 0,
    button: [ 
        $("#feed"),
        $("#feed-apple"),
        $("#sleep"),
        $("#play"),
        $("#read")
    ],
    
    start(e) {
        $("#care").text(`Your care of ${wormName} has officially begun!`);
        this.startAgeTimer();
        this.startHungerTimer();
        this.startSleepinessTimer();
        this.startBoredomTimer();
        this.startNaughtinessTimer();
    },
    
    /* === Timers for Hunger, Age, Sleepiness, Boredom and Naughtiness & Methods to Increase the Metrics === */
    /* === Also included are the death announcements === */
    ageTimer: null,
    startAgeTimer() {
        this.ageTimer = setInterval(this.increaseAge.bind(round), 3000);
    },
    
    /* === Includes Dealing with MVP of Changing the Aging Pet */
    increaseAge() {
        this.age++ ;
        $('#age').text(`Age: ${this.age}`);
        if (this.age === 4) {
            $("img").attr("src", 'https://i.imgur.com/zq1YyJc.gif');
          };
          if (this.age === 10) {
            $("img").attr("src", 'https://i.imgur.com/ix7WzjK.gif');
          };
        if (this.age >= 20) {
            this.roundOver();
            $("#death").text(`${wormName} has died of natural causes. You were very caring. Please consider future worm care.`);            
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
            $("img").attr("src", 'https://i.imgur.com/OIpCwVK.gif');
            $("#death").text(`${wormName} has died from starvation. You should rethink future worm ownership.`);
        };
    },
    
    sleepinessTimer: null,
    startSleepinessTimer() {
        this.sleepinessTimer = setInterval(this.increaseSleepiness.bind(round), 3000);
    },
    
    increaseSleepiness() {
        this.sleepiness++ ;
        console.log(this.sleepiness);
        $('#sleepiness').text(`Sleepiness Level: ${this.sleepiness}`);
        if (this.sleepiness >= 10) {
            this.roundOver();
            $("img").attr("src", 'https://i.imgur.com/OIpCwVK.gif');
            $("#death").text(`${wormName} has died from sleep deprivation. You should rethink future worm ownership.`);
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
            $("img").attr("src", 'https://i.imgur.com/OIpCwVK.gif');
            $("#death").text(`${wormName} has died from neglect. You should rethink future worm ownership.`);
        };
    },
    

    /* === Originally I planned on having a naughtiness counter. It would increase at a slower rate. But once it hit a certain amount, user would have the opportunity to punish. The user would then hava reprieve from her worm care duties for an interval TBD. === */
    // naughtinessTimer: null,
    // startNaughtinessTimer() {
    //     this.naughtinessTimer = setInterval(this.increaseNaughtiness.bind(round), 5000);
    // },
    
    // increaseNaughtiness() {
    //     this.naughtiness = this.naughtiness + Math.floor(Math.random * 1000);
    //     $('#naughtiness').text(`Naughtiness Level: ${this.sleepiness}`)
    // },
    
    
    /* === Decreasing Levels === */
    decreaseHunger() {
        this.hunger-- ;
        $('#hunger').text(`Hunger Level: ${this.hunger}`);
    },
    
    
    decreaseSleepiness() {
        this.sleepiness--;
        $('#sleepiness').text(`Sleepiness Level: ${round.sleepiness}`);
    },
    
    decreaseBoredom() {
        this.boredom = this.boredom - Math.floor(Math.random() * 2);
        $('#boredom').text(`Boredom Level: ${this.boredom}`);
    },
    
    /* === Ending the Round === */
    roundOver() {
        clearInterval(this.ageTimer);
        clearInterval(this.hungerTimer);
        clearInterval(this.sleepinessTimer);
        clearInterval(this.boredomTimer);
        clearInterval(this.naughtinessTimer);
    }
}

/* === Event Listeners === */
$("#feed").click(() => {
    round.decreaseHunger();
    $('#hunger').text(`Hunger Level: ${round.hunger}`);
})

$("#feed-apple").click(() => {
    round.decreaseHunger();
    round.decreaseHunger();
    $('#hunger').text(`Hunger Level: ${round.hunger}`);
})

$("#sleep").click(() => {
    round.decreaseSleepiness();
    $('#sleepiness').text(`Sleepiness Level: ${round.sleepiness}`);
})

$("#play").click(() => {
    round.decreaseBoredom();
    $('#boredom').text(`Boredom Level: ${round.boredom}`);
})

$("#read").click(() => {
    round.decreaseBoredom();
    $('#boredom').text(`Boredom Level: ${round.boredom}`);
    
})


$("#begin").on('click', round.start());