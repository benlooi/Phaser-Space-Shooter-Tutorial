//That's basically it!

// We will learn also how to add scores, different states and levels, more effects like particles in other lessons.
//Get more coding practice and change stuff to make the game your own:

//Now that you have learned the basics, here's a few exercises you can do.
//1: Change your Baddie sprite

//2:Change your Hero sprite


//3: Change the number of baddies in each row to 15, and the number of rows to 3

//4: make the bullet fly slower

//Try to figure them out yourself!

//Meanwhile, do visit www.phaser.io to learn more!

//Happy coding!

//Ben Looi

//BONUS!! ADD SOUND!
//see if you can add sound to your shooting

//CLUES:

//add this to the var portion
var shot;
//preload it
game.load.audio('shot','assets/audio/SHOOT007.mp3');
//create it
shot=game.add.audio('shot');
//include it when you fire it
shot.play();

//CHALLENGE 2
//Add explosion when the bullet hits the baddie! Figure it out...hint...it is a lot like adding a shot.