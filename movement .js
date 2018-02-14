<script>
var movement;

function playerMovement(event){
	if(event.keyCode == 39) {
		rightPressed = true;
	}
	else if(event.keyCode == 37){
		leftPressed = true;
	}
	if(event.keyCode ==40){
		downPressed = true;
	}
	else if(event.keyCode ==42){
	     upPressed = true;
	}

function draw() {
	 if(rightPressed) {
        playerX += 5;
    }
    else if(leftPressed) {
        playerX -= 5;
    }
    if(downPressed) {
        playerY += 5;
    }
    else if(upPressed) {
        playerY -= 5;
	
	




if(this.cursors.left.isDown || this.keyLeft.isDown) {
    // move left
}
else if(this.cursors.right.isDown || this.keyRight.isDown) {
    // move right
}
if(this.cursors.up.isDown || this.keyUp.isDown) {
    // move up
}
else if(this.cursors.down.isDown || this.keyDown.isDown) {
    // move down
	
	
	
	
	
	
	
	
	
	
	