var game= new Phaser.Game(800,600,Phaser.AUTO,'');


var SpaceShooter = {

	preload: function () {
		game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',128,128);
	},
	create: function () {

		//let's put an image or two on our game world!
		game.add.sprite(10,10,'baddie');
		game.add.sprite(game.world.width-100,game.world.height-100,'dude');

		
		
	},
	update: function () {


	}

}

game.state.add('spaceshooter',SpaceShooter);
game.state.start('spaceshooter');