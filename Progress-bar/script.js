// Write JavaScript code here

// Targeting elements
let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

// Setting initial values
let startValue = -1;
let endValue = 100;
let speed = 50;

function updateProgress() {
    // Increment Value
    startValue++ ;

    // Update the text content to show the percentage
    progressValue.textContent = `${startValue}%`;

    // Update the rotation of the circle
    circularProgress.style.background = `conic-gradient(#5e3930 ${startValue * 3.6}deg, #fabb85 ${startValue * 3.6}deg)`
    
    // Continue update until startValue reaches endValue
    if (startValue < endValue) {
        setTimeout(updateProgress, speed);
    }
}   
    
// Starting the progress update     
updateProgress();
