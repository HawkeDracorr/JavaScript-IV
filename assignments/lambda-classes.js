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
    specialty = teach.specialty;
    favLanguage = teach.favLanguage;
    catchPhrase = teach.favLanguage;
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
    prevBg = sdt.prevBg;
    className = sdt.className;
    favSubject = sdt.favSubject;
  };
  listSubjects() {
    return `${this.name}'s favorite subjects: ${this.favSubject}'`
  };
  PRAssignment(subject) {
    return `${this.name} has submitted a Pull Request for: ${subject}`
  };
  sprintChallenge(subject) {
    return `${} has begun work on the ${} sprint challenge!`
  };
};
