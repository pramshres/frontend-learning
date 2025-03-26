const homeRef = document.getElementById("homeCounter")
const guestRef = document.getElementById("guestCounter")

let homeCounter = 0
let guestCounter = 0

function addPoints(team, points) {
    if (team === "home") {
        homeCounter+=points
        homeRef.textContent = homeCounter
    } else {
        guestCounter+=points
        guestRef.textContent = guestCounter
    }
}