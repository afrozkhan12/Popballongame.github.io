

// Configuration
const numBalloons = 2;

// Game initialization
const gameContainer = document.getElementById('game-container');
const balloons = [];
const balloons1 =[];
const balloons2 =[];
const balloons3 =[];

for (let i = 0; i < numBalloons; i++) {
    const balloon = document.createElement('img');
    balloon.src = './assets/Symbol 100001.png ';
    balloon.className = 'balloon';
    balloon.style.left = getRandomPosition(0, gameContainer.offsetWidth - balloon.width) + 'px';
    balloon.style.top = getRandomPosition(0, gameContainer.offsetHeight - balloon.height) + 'px';
    balloon.addEventListener('click', popBalloon);
    gameContainer.appendChild(balloon);
    balloons.push(balloon);
   
}

for (let i = 0; i < numBalloons; i++) {
const balloon1 = document.createElement('img');
balloon1.src = './assets/Symbol 100002.png ';
balloon1.className = 'balloon1';
balloon1.style.left = getRandomPosition(0, gameContainer.offsetWidth - balloon1.width) + 'px';
balloon1.style.top = getRandomPosition(0, gameContainer.offsetHeight - balloon1.height) + 'px';
balloon1.addEventListener('click', popBalloon);
gameContainer.appendChild(balloon1);
balloons1.push(balloon1);
}

for (let i = 0; i < numBalloons; i++) {
const balloon2 = document.createElement('img');
balloon2.src = './assets/Symbol 100003.png ';
balloon2.className = 'balloon1';
balloon2.style.left = getRandomPosition(0, gameContainer.offsetWidth - balloon2.width) + 'px';
balloon2.style.top = getRandomPosition(0, gameContainer.offsetHeight - balloon2.height) + 'px';
balloon2.addEventListener('click', popBalloon);
gameContainer.appendChild(balloon2);
balloons2.push(balloon2);
}
for (let i = 0; i < numBalloons; i++) {
const balloon2 = document.createElement('img');
balloon2.src = './assets/Symbol 100004.png ';
balloon2.className = 'balloon1';
balloon2.style.left = getRandomPosition(0, gameContainer.offsetWidth - balloon2.width) + 'px';
balloon2.style.top = getRandomPosition(0, gameContainer.offsetHeight - balloon2.height) + 'px';
balloon2.addEventListener('click', popBalloon);
gameContainer.appendChild(balloon2);
balloons2.push(balloon2);
}
for (let i = 0; i < numBalloons; i++) {
const balloon2 = document.createElement('img');
balloon2.src = './assets/Symbol 100005.png ';
balloon2.className = 'balloon1';
balloon2.style.left = getRandomPosition(0, gameContainer.offsetWidth - balloon2.width) + 'px';
balloon2.style.top = getRandomPosition(0, gameContainer.offsetHeight - balloon2.height) + 'px';
balloon2.addEventListener('click', popBalloon);
gameContainer.appendChild(balloon2);
balloons2.push(balloon2);
}
for (let i = 0; i < numBalloons; i++) {
const balloon2 = document.createElement('img');
balloon2.src = `./assets/Symbol 100006.png` ;
balloon2.className = 'balloon1';
balloon2.style.left = getRandomPosition(0, gameContainer.offsetWidth - balloon2.width) + 'px';
balloon2.style.top = getRandomPosition(0, gameContainer.offsetHeight - balloon2.height) + 'px';
balloon2.addEventListener('click', popBalloon);
gameContainer.appendChild(balloon2);
balloons2.push(balloon2);
}
// Function to generate a random position between a minimum and maximum value
function getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to handle balloon popping
function popBalloon(event) {
    const balloon = event.target;
    balloon.removeEventListener('click', popBalloon);
    balloon.style.display = 'none';
   
}
