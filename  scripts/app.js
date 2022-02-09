console.log("Welcome to worm's world!");



// Call createSquares

$('button #start').on('click', () => {
    console.log("yo");
    // Set up logic if game is new or ongoing
    // setUpRound();
    // setInterval(updateTimer, 1000);
 })


let time = 30;

// == User Stories/game logic == //
// user story is a guide of the user's journey though our application and serves as a guide for the developer in building out logic

// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.
// const createSquares = (numberOfSquares) =>

   // create numberOfSquares  divs
    // And for each div created, add it to the div with class squares

    // const applyRandomColor = (square) => {
    // Chooose a random number betwen 1 and 3
    const randomNum = Math.ceil(Math.random() * 3);


    // Change the color of the square based on the random number
    const applyRandomColor = (square) => {
        // Choose a random number between 1 and 3
        const randomNum = Math.ceil(Math.random() * 3);
        // Change the color of the square based on the number
        if (randomNum === 1) {
            // background red
            square.css('background-color', 'red');
        } else if (randomNum === 2) {
            // background color blue
            square.css('background-color', 'blue');
        } else {
            // backgrond color green
            square.css('background-color', 'green');
        }
    };

let score = 0;

    const checkValidPoke = (squareColor) => {
        const colorsArray = squareColor
            .substring(4, squareColor.length - 1)
            .split(', ');
        console.log(colorsArray);
        const blue = colorsArray[2];
        if (blue === '255') {
            // score = score + 1;
            // score += 1
            score++;
        } else {
            score--;
        }
        $('h1').text = ('Scoreboard is ' + score);
    };

    const handlePoke = (e) => {
        // console.log(e.target);
        console.log('inside handle poke');
    };
    
    const createSquares = (numberOfSquares) => {
        // create numberOfSquares  divs
        // And for each div created, add it to the div with class squares
        for (let i = 0; i < numberOfSquares; i++) {
            // $('.squares').append('<div/>');
            const $square = $('<div/>');
            applyRandomColor($square);
            // $square.on('click', handlePoke()) //1 incorrect, we don't want to call the function right now
            $square.on('click', handlePoke); //2 correct!
            $('.squares').append($square);
        }
    };


const setUpRound = () => {
    $('.squares').empty();
    $('#round').text('round: '+ round);
    if (round === 1) {
        createSquares(50);
    } else if (round === 2) {
        createSquares(100);
    } else if (round === 3) {
        createSquares(150);
    } else {
        createSquares(200);
    }
};

const updateTimer = () => {
    time--;
    $('#timer').text('timer: ' + time);
    if (time === 0) {
        time = 30;
        round++;
        setUpRound();
    }
};

setInterval(updateTimer, 1000);

createSquares(50);

