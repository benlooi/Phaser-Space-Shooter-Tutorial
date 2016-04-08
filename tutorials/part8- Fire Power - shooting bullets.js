var game= new Phaser.Game(800,600,Phaser.AUTO,'');

var starfield;
var hero;
var aliens;
var cursors;
var bullets;


var SpaceShooter = {

	preload: function () {
			game.load.image('pewpew','assets/images/bullet.png');
		game.load.image('stars','assets/images/starfield.png');
		game.load.spritesheet('baddie','assets/images/baddie.png',32,32);
		game.load.spritesheet('dude','assets/images/dude.png',32,48);
		game.load.spritesheet('kaboom','assets/images/explode.png',32,48);
	},
	create: function () {

			//let's give our game some physics!
		game.physics.startSystem(Phaser.Physics.ARCADE);

			//here, we add the image starfield as a tileSprite. 
		starfield = game.add.tileSprite(0, 0, 800, 600, 'stars');
		//let's add a bunch of aliens using a loop
		//let's group all the aliens together
		
		aliens=game.add.group();
		bullets=game.add.group();
		for (var i=0;i<20;i++){
			for(var h=0;h<5;h++){
				var alien=aliens.create(i*20+20,h*50+50,'baddie');
				alien.animations.add('dance',[0,1,2,3],10,true);
				alien.animations.play('dance');
			}
		}
		hero=game.add.sprite(game.world.width/2,game.world.height-100,'dude');
		hero.enableBody=true;
		hero.animations.add('walkleft',[0,1,2,3],10,true);
		hero.animations.add('walkright',[5,6,7,8],10,true);

		cursors=game.input.keyboard.createCursorKeys();
		leftKey=game.input.keyboard.addKey(Phaser.Keyboard.A);
		rightKey=game.input.keyboard.addKey(Phaser.Keyboard.D);

		game.inputEnabled=true;
		game.input.onDown.add(fireAtEnemy,this);
		
	},
	update: function () {
		//the tiles will move from top of the screen to the bottom by 2px along y axis every cycle
		starfield.tilePosition.y += 2;


		//we will also set the rules of how the Hero will move during the game when keys are pressed.
			hero.body.velocity.x=0;


		if (cursors.left.isDown || leftKey.isDown) {
			hero.body.velocity.x=-200;
			hero.animations.play('walkleft');

		} else if (cursors.right.isDown || rightKey.isDown){

			hero.body.velocity.x=200;
			hero.animations.play('walkright');

		} else {

			hero.animations.stop();
			hero.frame=4;
		}

		game.physics.arcade.overlap(bullets,aliens,killAlien,null, this);
		

	}

}

function fireAtEnemy () {
	bullet=bullets.create(hero.x,hero.y,'pewpew');
	game.add.tween(bullet).to({y:-100},500,"Linear",true);

}

function killAlien (bullet,alien){

	bullet.kill();
	alien.kill();
}

game.state.add('spaceshooter',SpaceShooter);
game.state.start('spaceshooter');