var game= new Phaser.Game(800,600,Phaser.AUTO,'');

//Here is where we write out game. Phaser has a framework consisting of three key things that 
//a game does: Preload, Create  and Update.
//So, we create a game state (or scene) called SpaceShooter, with three main properties which are functions.

var SpaceShooter = {

	preload: function () {
		//we tell Phaser what to load into memory

	},
	create: function () {
		//we create the scene here
		//we also set some instructions such as what happens when buttons or keys are pressed, or when the mouse is clicked etc

	},
	update: function () {

		//This is the game loop that runs about 60 times a second. We set the game rules here
	}

}

//we add this state or scene to the game...
game.state.add('spaceshooter',SpaceShooter);
//then we start it
game.state.start('spaceshooter');