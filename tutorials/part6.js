var game= new Phaser.Game(800,600,Phaser.AUTO,'');

//let's add a moving background to simulate flying through space. The characters are actually staying still.
//declare a variable first so we can refer to it throughout the state
var starfield;
var hero;
var aliens;

var SpaceShooter = {

	preload: function () {
			game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',32,48);
	},
	create: function () {

		//let's add a bunch of aliens using a loop
		//let's group all the aliens together

		aliens=game.add.group();

		//We are using 2 loops...or a loop within a loop. Also called a nested loop.
		//the first loop creates a row of 20 aliens...
		for (var i=0;i<20;i++){
			//the second loop creates 5 rows....
			for(var h=0;h<5;h++){
				//so...together, we create 5 rows of 20 aliens
				var alien=aliens.create(i*20+20,h*50+50,'baddie');
			}
			


		}
		game.add.sprite(10,10,'baddie');
		game.add.sprite(game.world.width/2,game.world.height-100,'dude');

		//here, we add the image starfield as a tileSprite. 
		starfield = game.add.tileSprite(0, 0, 800, 600, 'stars');
		
	},
	update: function () {
		//the tiles will move from top of the screen to the bottom by 2px along y axis every cycle
		starfield.tilePosition.y += 2;

	}

}

game.state.add('spaceshooter',SpaceShooter);
game.state.start('spaceshooter');
