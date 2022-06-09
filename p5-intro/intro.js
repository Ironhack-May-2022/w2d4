// this preloads all the game assets like images or sounds
let playerImage;
let playerX = 100;
function preload() {
	// loadImage is needed to preload the image
	playerImage = loadImage('gustavo.png')
}

// this creates the canvas element
function setup() {
	console.log('this is the setup function')
	// this is provided by the P5 library
	createCanvas(1000, 600)
}

let x = 100
let speed = 3
function draw() {
	// console.log('i am drawing 🎨')
	// this clears the canvas
	clear()
	// this draws a rectangle
	// (x, y, width, height)
	const c = color(255, 0, 0)
	fill('red')
	// stroke('green')
	// rect(100, 100, 100, 100)

	// (startX, startY, endX, endY)
	line(0, 50, 1000, 50)
	// line(0, 100, 1000, 100)
	// line(0, 150, 1000, 150)

	// circle(x, y, radius)
	fill('yellow')
	x = x + speed
	if (x > 950) {
		// console.log('leaving')
		// we change direction
		speed = - speed
	}
	// circle(x, 50, 100)
	// circle(mouseX, mouseY, 100)
	// console.log(mouseX, mouseY)

	// this renders the image - 🚨 it needs to be lowercase !!
	image(playerImage, playerX, 100, 100, 100)
}

// this detects a keypress
function keyPressed() {
	// keyCode is provided by P5
	console.log('this key was pressed: ', keyCode)
	if (keyCode === 39) {
		// move the player to the right
		playerX += 10
	}
}