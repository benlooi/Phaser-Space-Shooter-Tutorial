var game= new Phaser.Game(800,600,Phaser.AUTO,'');


var starfield;
var hero;
var aliens;
var cursors;
var leftKey;
var rightKey;


var SpaceShooter = {

	preload: function () {
			game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',32,48);
	},
	create: function () {
			
		starfield = game.add.tileSprite(0, 0, 800, 600, 'stars');
		
		for (var i=0;i<20;i++){
		
			for(var h=0;h<5;h++){
				
				var alien=aliens.create(i*20+20,h*50+50,'baddie');
				alien.animations.add('dance',[0,1,2,3],10,true);
				alien.animations.play('dance');
			}
		}
		
		hero=game.add.sprite(game.world.width/2,game.world.height-100,'dude');
		//Let's start creating controls for your Hero...
		//We will enable cursor keys on your keyboard, as well as your mouse or pointer  
		cursors=game.input.keyboard.createCursorKeys();

		//Hmmm...if we use cursor keys, the position can be quite awkward. Maybe we use another set of keys ..A and D to move 
		//our hero left and right
		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

		game.inputEnabled=true;
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

function fireAtEnemy () {
	//this is to test if the click works...ain't no one's gonna
	//pew pew pew with you!
	console.log('fire at enemy...pew!pew!pew!')

}

game.state.add('spaceshooter',SpaceShooter);
game.state.start('spaceshooter');