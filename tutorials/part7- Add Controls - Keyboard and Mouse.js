var game= new Phaser.Game(800,600,Phaser.AUTO,'');


var starfield;
var hero;
var aliens;

//Give your game controls...declare these variables so you can assign functions and instructions to them
var cursors;
var leftKey;
var rightKey;


var SpaceShooter = {

	preload: function () {
		game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',128,128);
	},
	create: function () {
		//first, moving characters and stuff around a game requires some sort of physics like we have in the 
		//real world. Things will collide, knock each other, bounce and stuff. We need to enable a Physics engine to 
		//help us with this.
		
		//let's give our game some physics!
		game.physics.startSystem(Phaser.Physics.ARCADE);

		starfield = game.add.tileSprite(0, 0, 800, 600, 'stars');

		//now that we haev physics, let's enable it on our aliens.
		aliens=game.add.group();
		aliens.enableBody=true;
		aliens.physicsBodyType = Phaser.Physics.ARCADE;
		
		for (var i=0;i<20;i++){
		
			for(var h=0;h<5;h++){
				
				var alien=aliens.create(i*20+20,h*50+50,'baddie');
				//ooh, by the way...the aliens are getting bored standing still ....let's make them dance.
				//we can do this because the alien is a spritesheet
				alien.animations.add('dance',[0,1,2,3],10,true);
				alien.animations.play('dance');
			}
		}
		
		hero=game.add.sprite(game.world.width/2,game.world.height-100,'dude');
		//Let's enable body and physics on our hero, so he can have things like  velocity and stuff
		hero.enableBody=true;
		game.physics.arcade.enable(hero);
		//while we are at it, let's animate our hero.
		hero.animations.add('walkleft',[0,1,2,3],10,true);
		hero.animations.add('walkright',[5,6,7,8],10,true);

		//Let's start creating controls for your Hero...
		//We will enable cursor keys on your keyboard, as well as your mouse or pointer  
		cursors=game.input.keyboard.createCursorKeys();

		//Hmmm...if we use cursor keys, the position can be quite awkward. Maybe we use another set of keys ..A and D to move 
		//our hero left and right
		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

		//enable the mouse or pointer in our game
		game.inputEnabled=true;
		//here we are telling the game what to do when mouse is clicked.
		game.events.onInputDown.add(fireAtEnemy,this);
		
	},
	update: function () {

		starfield.tilePosition.y += 2;


		//we will also set the rules of how the Hero will move during the game when keys are pressed.
			hero.body.velocity.x=0;

		if (cursors.left.isDown || leftKey.isDown) {
			hero.body.velocity.x=-100;

		} else if (cursors.right.isDown || rightKey.isDown)
		hero.body.velocity.x=100;

	}

}
//This function is not part of the main state or scene, but a supporting function that is called from either create or update.

function fireAtEnemy () {
	//this is to test if the click works...ain't no one's gonna
	//pew pew pew with you!
	console.log('fire at enemy...pew!pew!pew!')

}

game.state.add('spaceshooter',SpaceShooter);
game.state.start('spaceshooter');