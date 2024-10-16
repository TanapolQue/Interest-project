// Initialize variables for Timer
let interval = null;
let count = 0;

// Funtion for count and display the Timer
function updateCount() {
count += 1;
document.getElementById('stopwatch').textContent = formatTime(count);
}

// Formating time display HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor((seconds % 3600)/60);
    const secondLeft = Math.floor(seconds % 60);

    // Ensure Hour, Minute and Second are two digit long
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secondLeft).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// get start botton element by Its ID
const startButton = document.getElementById('startStop');

// Add event listener stopwatch 'click'
startButton.addEventListener('click', function () {

// Check current the text of the startStop button
if (startButton.textContent === 'Start') {
    // Change 'Start' to 'Stop'
    startButton.textContent = 'Stop';
    interval = setInterval(updateCount, 1000); // call updateCount every 1 second
} else {
    // Change 'Stop' to 'Start'
    startButton.textContent = 'Start';
    clearInterval(interval)
}
});

// get reset button element by its ID
const resetButton = document.getElementById('reset');

// Add event 'click' on the Reset Button
resetButton.addEventListener('click', function () {
    clearInterval(interval); // Stop the timer if it running
    count = 0; // reset count
    startButton.textContent = 'Start'; // Change to Start button
    document.getElementById('stopwatch').textContent = formatTime(count); // Display timer
})

 

