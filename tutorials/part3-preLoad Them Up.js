var game= new Phaser.Game(800,600,Phaser.AUTO,'');


var SpaceShooter = {

	preload: function () {
		//here we are preloading the images we will be using for our game
		//we give each of them a name, as well as indicate where the image can be found in the filesystyem
		game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',32,48);
	},
	create: function () {

		
	},
	update: function () {


	}

}

game.state.add('spaceshooter',SpaceShooter);
game.state.start('spaceshooter');