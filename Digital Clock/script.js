const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let is12HourFormat = false; // Initial format is 24-hour

function formatDate(date) {
    let day = date.getDate(); // Get the day of the month
    let month = months[date.getMonth()]; // Get the month name
    let year = date.getFullYear(); // Get the year

    return `${day} ${month} ${year}`; // Format as "1 August 2024"
}

function formatTime(hours, minutes, seconds, format) {
    if (format === '12-hour') {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours || 12; // the hour '0' should be '12'
        return {
            hours: hours < 10 ? '0' + hours : hours,
            minutes: minutes < 10 ? '0' + minutes : minutes,
            seconds: seconds < 10 ? '0' + seconds : seconds,
            ampm: ampm
        };
    } else {
        return {
            hours: hours < 10 ? '0' + hours : hours,
            minutes: minutes < 10 ? '0' + minutes : minutes,
            seconds: seconds < 10 ? '0' + seconds : seconds,
            ampm: ''
        };
    }
}

let getElement = (element) => document.querySelector(element);

let clock_format_button = getElement(".clock_format");
clock_format_button.addEventListener("click", () => {
    // Toggle between 12-hour and 24-hour format
    is12HourFormat = !is12HourFormat;
    updateClock();
});
function getGreeting(hours) {
    if (hours >= 5 && hours < 12) return "Good Morning";
    if (hours === 12) return "Good Noon";
    if (hours > 12 && hours < 18) return "Good Afternoon";
    if (hours >= 18 && hours < 21) return "Good Evening";
    return "Good Night";
}

function updateClock() {
    let date = new Date();
    let day = days[date.getDay()];
    let todayDate = formatDate(date);
    let fulldate = `${day}, ${todayDate}`;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let greeting = getGreeting(hours);

    // Format time based on selected format
    let format = is12HourFormat ? '12-hour' : '24-hour';
    let { hours: formattedHours, minutes: formattedMinutes, seconds: formattedSeconds, ampm } = formatTime(hours, minutes, seconds, format);

    // Update the content of the elements
    let clock_day = getElement(".day");
    clock_day.textContent = fulldate;

    let clock_hours = getElement(".hours");
    clock_hours.textContent = formattedHours;

    let clock_minutes = getElement(".minutes");
    clock_minutes.textContent = formattedMinutes;

    let clock_seconds = getElement(".seconds");
    clock_seconds.textContent = formattedSeconds;

    let clock_ampm = getElement(".ampm");
    if (is12HourFormat) {
        clock_ampm.textContent = ampm;
        clock_ampm.style.display = "flex"
        clock_format_button.textContent = "24 Hour Format"
    } else {
        clock_ampm.textContent = '';
        clock_ampm.style.display = "none"
        clock_format_button.textContent = "12 Hour Format"
    }
    let clock_greeting = getElement(".greeting");
    clock_greeting.textContent = greeting;
}

// Initial clock update
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
