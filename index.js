let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

// home score functions
function add1() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function add2() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function add3() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

//guest score functions
function add1guest() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function add2guest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function add3guest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}