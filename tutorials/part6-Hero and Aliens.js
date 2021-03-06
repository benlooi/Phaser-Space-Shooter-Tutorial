var game= new Phaser.Game(800,600,Phaser.AUTO,'');

var starfield;

// alreight, now we have to add our hero and aliens to the game. Adding the sprite is not enough.
//We have to give it a name so we can tell it what to do during the game
var hero;
var aliens;

var SpaceShooter = {

	preload: function () {
		game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',128,128);
	},
	create: function () {

		//let's add a bunch of aliens using a loop
		//let's group all the aliens together

		aliens=game.add.group();

		//We are using 2 loops...or a loop within a loop. Also called a nested loop.
		//the first loop creates a row of 20 aliens...
		//Too many aliens? Change i<20 to i<10!
		for (var i=0;i<20;i++){
			//the second loop creates 5 rows....
			for(var h=0;h<5;h++){
				//so...together, we create 5 rows of 20 aliens
				//Try changing i*20+20 to i*50+20!
				var alien=aliens.create(i*20+20,h*50+50,'baddie');
				
			}
		}
		// Let's add the hero here. We don't have to say var because hero has already been declared.
		hero=game.add.sprite(game.world.width/2,game.world.height-100,'dude');

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
