const id = (id) => document.getElementById(id);
const Class = (Class) => document.querySelector(Class);

let timer = Class(".timer"),
    submit = Class(".submit-button");

let intervalId;
let end; // Variable to store the end date and time

// Hide the timer initially
timer.style.display = "none";

// Event listener to simulate submit button click on Enter key press
document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default Enter key action
        submit.click(); // Simulate a click on the submit button
    }
});

submit.addEventListener("click", () => {
    clearInterval(intervalId); // Clear any existing interval

    let date = id("date").value;
    let time = id("time").value;

    if (!time) {
        alert("Please select a time.");
        return;
    }

    if (!date) {
        // Use today's date if no date is provided
        let today = new Date();
        let todayStr = today.toISOString().split('T')[0];
        end = new Date(`${todayStr}T${time}:00`);
    } else {
        end = new Date(`${date}T${time}:00`);
    }

    let now = new Date();

    if (isNaN(end.getTime())) {
        alert("Invalid date or time. Please select a valid date and time.");
        return;
    }

    if (end <= now) {
        alert("The selected date and time must be in the future.");
        return;
    }

    timer.style.display = "flex"; // Show the timer
    intervalId = setInterval(updateTimer, 1000); // Start the interval
});

function updateTimer() {
    let now = new Date();

    if (end <= now) {
        clearInterval(intervalId);
        timer.style.display = "none"; // Hide timer if countdown is finished
        alert("Countdown finished.");
        return;
    }

    let diff = (end - now) / 1000;

    let diffDays = Math.floor(diff / 3600 / 24);
    let diffHours = Math.floor((diff % (3600 * 24)) / 3600);
    let diffMinutes = Math.floor((diff % 3600) / 60);
    let diffSeconds = Math.floor(diff % 60);

    let days = Class(".days");
    let hours = Class(".hours");
    let minutes = Class(".minutes");
    let seconds = Class(".seconds");

    days.textContent = diffDays;
    hours.textContent = diffHours;
    minutes.textContent = diffMinutes;
    seconds.textContent = diffSeconds;

    // console.log(`Days: ${diffDays}, Hours: ${diffHours}, Minutes: ${diffMinutes}, Seconds: ${diffSeconds}`);
}
