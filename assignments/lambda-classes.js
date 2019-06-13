// CODE here for your Lambda Classes
class Person {
  constructor(trait) {
    this.name = trait.name
    this.age = trait.age
    this.gender = trait.gender
    this.location = trait.location
  };
//methods
  speak() {
    return `Ay, my name's ${this.name}, reprsenting ${this.location}. Peace, fam.`
  };
};

class Instructor extends Person {
  constructor(teach){
    super(teach);
    this.specialty = teach.specialty;
    this.favLanguage = teach.favLanguage;
    this.catchPhrase = teach.catchPhrase;
  };
// methods for Instructor
  demo(subject) {
    return `Listen up. Today we're gonna cover ${subject}, so do your best to pay attention!`
  };
  grade(student, subject) {
    if(student.grade <= 70) {
      return `Jeez, ${student.name}, you need to git gud! ${subject} isn't that difficult.`
    } else {
      return `Great job on ${subject}, ${student.name}! Looks like someones getting a golden star!`
    };
  };
};

class ProjectManager extends Instructor{
  constructor(pm) {
    super(pm);
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
  };
  standUp(channel) {
    return `${this.name} send a message in ${channel}: LET'S GO, STAND UP TIME! GET PUMPED!`
  };
};

class Student extends Person {
  constructor(sdt){
    super(sdt);
    this.prevBg = sdt.prevBg;
    this.className = sdt.className;
    this.favSubject = sdt.favSubject;
    this.grade = sdt.grade;
  };
  listSubjects() {
    return `${this.name}'s favorite subjects: ${this.favSubject}'`
  };
  PRAssignment(subject) {
    return `${this.name} has submitted a Pull Request for: ${subject}`
  };
  sprintChallenge(subject) {
    return `${this.name} has begun work on the ${subject} sprint challenge!`
  };
};


// Objects created

// Instructors
const soldier76 = new Instructor({
  name: 'Jack Morrison',
  location: 'America',
  age: 55,
  specialty: 'shootin dudes and poppin squats. also pretty good with HTML & CSS.',
  catchPhrase: 'Get off my Lawn!',
})

const reaper = new Instructor({
  name: 'Gabriel Reyes',
  location: 'The Shadows',
  age: 58,
  specialty: 'Being Edgy, and absorbing all the health. Somewhat good with Angular and JavaScript.',
  catchPhrase: 'DIE! DIE!! DIE!!!',
})


// Project Managers
const mercy = new ProjectManager({
  name: 'Angela Ziegler',
  location: 'Sweden',
  age: 37,
  specialty: 'Patching you up and being in a pocket. Works magic with C#.',
  catchPhrase: 'Heroes never die!',
  gradClassName: 'DS2',
  favInstructor: 'Ana Amari',
})

const pharah = new ProjectManager({
  name: 'Fareeha Amari',
  location: 'Egypt',
  age: 32,
  specialty: 'Rocket jumping, and making it rain.',
  catchPhrase: 'Justice rains from above!',
  gradClassName: 'Web14',
  favInstructor: 'Wilhelm Reinhardt',
})


// // Students
const dva = new Student({
  name: 'Hana Song',
  location: 'South Korea',
  age: 19,
  prevBg: 'Professional gamer',
  className: 'Web21',
  grade: 69,
  favSubject: 'Reccess',
})

const zen = new Student({
  name: 'Tekhartha Zenyatta',
  location: 'Nepal',
  age: 20,
  prevBg: 'Robat Monk',
  className: 'UX3',
  grade: 100,
  favSubject: 'Backend Web Development',
})


// Prints
console.log('Instructors');
console.log('-----');
console.log(`Name: ${soldier76.name} | Age: ${soldier76.age} | Location: ${soldier76.location}`);
console.log(`----------`);
console.log(`Specialties: ${soldier76.specialty}`);
console.log(`catchPhrase: "${soldier76.catchPhrase}"`);
console.log(' ');
console.log(`Intro: "${soldier76.speak()}"`);
console.log(' ');
console.log('Examples of teaching style:');
console.log(`"${soldier76.demo('CSS Styling')}"`);
console.log(`"${soldier76.grade(dva, 'JavaScript')}"`);
console.log(`"${soldier76.grade(zen, 'BASIC')}"`);

console.log(' ');
console.log('__');
console.log(' ');

console.log(`Name: ${reaper.name} | Age: ${reaper.age} | Location: ${reaper.location}`);
console.log(`----------`);
console.log(`Specialties: ${reaper.specialty}`);
console.log(`catchPhrase: "${reaper.catchPhrase}"`);
console.log(' ');
console.log(`Intro: "${reaper.speak()}"`);

console.log(' ');
console.log('__');
console.log(' ');

console.log('Project Managers');
console.log('-----');
console.log(`Name: ${mercy.name} | Age: ${mercy.age} | Location: ${mercy.location}`);
console.log(`----------`);
console.log(`Specialties: ${mercy.specialty}`);
console.log(`catchPhrase: "${mercy.catchPhrase}"`);
console.log(`Favorite Instructor: ${mercy.favInstructor}`);
console.log(`Grad Class: ${mercy.gradClassName}`);
console.log(' ');
console.log(`Intro: "${mercy.speak()}"`);
console.log('===');
console.log(mercy.standUp('#Web21'));

console.log(' ');
console.log('__');
console.log(' ');

console.log(`Name: ${pharah.name} | Age: ${pharah.age} | Location: ${pharah.location}`);
console.log(`----------`);
console.log(`Specialties: ${pharah.specialty}`);
console.log(`catchPhrase: "${pharah.catchPhrase}"`);
console.log(`Favorite Instructor: ${pharah.favInstructor}`);
console.log(`Grad Class: ${pharah.gradClassName}`);
console.log(' ');
console.log(`Intro: "${pharah.speak()}"`);

console.log(' ');
console.log('__');
console.log(' ');

console.log('Students');
console.log('-----');
console.log(`Name: ${dva.name} | Age: ${dva.age} | Location: ${dva.location}`);
console.log(`----------`);
console.log(`Cohort: ${dva.className}`);
console.log(`Favorite Subject: "${dva.favSubject}"`);
console.log(`Previous Background: ${dva.prevBg}`);
console.log(' ');
console.log(`Intro: "${dva.speak()}"`);

console.log(' ');
console.log('__');
console.log(' ');

console.log(`Name: ${zen.name} | Age: ${zen.age} | Location: ${zen.location}`);
console.log(`----------`);
console.log(`Cohort: ${zen.className}`);
console.log(`Favorite Subject: "${zen.favSubject}"`);
console.log(`Previous Background: ${zen.prevBg}`);
console.log(' ');
console.log(`Intro: "${zen.speak()}"`);
