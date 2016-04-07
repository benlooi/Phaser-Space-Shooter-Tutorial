var game= new Phaser.Game(800,600,Phaser.AUTO,'');

//let's add a moving background to simulate flying through space. The characters are actually staying still.
//declare a variable first so we can refer to it throughout the state
var starfield;

var SpaceShooter = {

	preload: function () {
			game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',32,48);
	},
	create: function () {

		//let's put an image on our game world!
		game.add.sprite(10,10,'baddie');
		game.add.sprite(game.world.width-100,game.world.height-100,'dude');

		//here, we add the image starfield as a tileSprite. 
		starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
		
	},
	update: function () {
		//the tiles will move from top of the screen to the bottom by 2px along y axis every cycle
		starfield.tilePosition.y += 2;

	}

}

game.state.add('spaceshooter',SpaceShooter);
game.state.start('spaceshooter');
