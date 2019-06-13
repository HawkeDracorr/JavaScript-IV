/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(chara) {
  this.createdAt = Date();
  this.name = chara.name;
  this.dimensions = chara.dimensions;
  this.destroy = function() {
    return `${this.name} was eaten by a grue.`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(chara) {
  GameObject.call(this, chara);
  this.healthPoints = chara.healthPoints;
  this.takeDamage = function() {
    return `${this.name} took damage.`
  };
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(chara) {
  CharacterStats.call(this, chara);
  this.team = chara.team;
  this.weapons = chara.weapons;
  this.language = chara.language;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`
  };
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 200,
    name: 'Moira',
    team: 'Talon',
    weapons: [
      'Biotic Grasp',
      'Biotic Orb',
    ],
    language: 'Gaelic',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 200,
    name: 'Genji',
    team: 'Overwatch',
    weapons: [
      'Dragonblade',
      'Throwing Stars',
    ],
    language: 'Beep boop',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 150,
    name: 'Hanzo',
    team: 'Shimada',
    weapons: [
      'Dagger',
    ],
    language: 'Japanese',
  });


  // Prints
  console.log('   ');
  console.log('The Mage'); // The Mage
  console.log('________'); //
  console.log(`dimensions: Length is ${mage.dimensions.length}, width is ${mage.dimensions.width}, height is ${mage.dimensions.height}`); // dimensions of character
  console.log(`HP: ${mage.healthPoints}`); // Max HP
  console.log(`Created: ${mage.createdAt}`); // Today's date
  console.log(`Damaged: ${mage.takeDamage()}`); // Taking Damage
  console.log(`Name: ${mage.name}`); // Bruce
  console.log(`Weapon: ${mage.weapons}`); // Staff of Shamalama X
  console.log(`Greeting: ${mage.greet()}`); //Their Greeting
  console.log(`Language: ${mage.language}`); // What do they speak X
  console.log(`Faction: ${mage.team}`); // Guild/faction X
  console.log(`destroyed: ${mage.destroy()}`);

  console.log('   ');
  console.log('The Swordsman'); // The swordsman
  console.log('________'); //
  console.log(`dimensions: Length is ${swordsman.dimensions.length}, width is ${swordsman.dimensions.width}, height is ${swordsman.dimensions.height}`); // dimensions of character
  console.log(`HP: ${swordsman.healthPoints}`); // Max HP
  console.log(`Created: ${swordsman.createdAt}`); // Today's date
  console.log(`Damaged: ${swordsman.takeDamage()}`); // Taking Damage
  console.log(`Name: ${swordsman.name}`); // Bruce
  console.log(`Weapon: ${swordsman.weapons}`); // Staff of Shamalama X
  console.log(`Greeting: ${swordsman.greet()}`); //Their Greeting
  console.log(`Language: ${swordsman.language}`); // What do they speak X
  console.log(`Faction: ${swordsman.team}`); // Guild/faction X
  console.log(`destroyed: ${swordsman.destroy()}`);

  console.log('   ');
  console.log('The Archer'); // The archer
  console.log('________'); //
  console.log(`dimensions: Length is ${archer.dimensions.length}, width is ${archer.dimensions.width}, height is ${archer.dimensions.height}`); // dimensions of character
  console.log(`HP: ${archer.healthPoints}`); // Max HP
  console.log(`Created: ${archer.createdAt}`); // Today's date
  console.log(`Damaged: ${archer.takeDamage()}`); // Taking Damage
  console.log(`Name: ${archer.name}`); // Bruce
  console.log(`Weapon: ${archer.weapons}`); // Staff of Shamalama X
  console.log(`Greeting: ${archer.greet()}`); //Their Greeting
  console.log(`Language: ${archer.language}`); // What do they speak X
  console.log(`Faction: ${archer.team}`); // Guild/faction X
  console.log(`destroyed: ${archer.destroy()}`);

  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
