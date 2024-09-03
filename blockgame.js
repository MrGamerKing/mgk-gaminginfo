const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.key === '') {
        jump();
    }
});

document.addEventListener('touchstart', () => {
    jump();
});

function jump() {
    if (!player.classList.contains('jump')) {
        player.classList.add('jump');
        setTimeout(function() {
            player.classList.remove('jump');
        }, 600); // Duration matches the CSS animation duration
    }
}

setInterval(function() {
    const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
    const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

    if (obstacleRight > window.innerWidth - 100 && obstacleRight < window.innerWidth - 50 && playerBottom <= 70) {
        alert("Game Over -- "+name);
        window.location.reload();
    }
}, 10);
// Get the number display element
const numberElement = document.getElementById('score_no');

// Initial number
let number = 0;

// Function to increment the number
function incrementNumber() {
    number += 3; // Increase the number
    numberElement.textContent = number; // Update the number in the HTML
}

// Call incrementNumber() every second (1000 milliseconds)
setInterval(incrementNumber, 1000);

// Example to dynamically adjust the scrolling speed
document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background');

    function adjustScrollSpeed(speed) {
        background.style.animationDuration = `${speed}s`;
    }

    // Example usage: set speed to 20 seconds
    adjustScrollSpeed(20);
});