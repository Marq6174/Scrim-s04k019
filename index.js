let addHome = document.getElementById("home-points")
let addGuest = document.getElementById("guest-points")
let resetGame = document.getElementById("reset")

let homecount = 0
// Home Team Score Below:
function addhome1() {
    homecount += 1 
    addHome.textContent = homecount
}

function addhome2() {
    homecount += 2
    addHome.textContent = homecount
}

function addhome3() {
    homecount += 3
    addHome.textContent = homecount
}

let guestcount = 0
// Guest Team Score Below

function addguest1() {
    guestcount += 1 
    addGuest.textContent = guestcount
}

function addguest2() {
    guestcount += 2
    addGuest.textContent = guestcount
}

function addguest3() {
    guestcount += 3 
    addGuest.textContent = guestcount
}

// Reset The Game Below
resetPoints = 0

function resetcount() {
    addHome.textContent = resetPoints
    addGuest.textContent = resetPoints
    homecount = 0
    guestcount = 0

}

