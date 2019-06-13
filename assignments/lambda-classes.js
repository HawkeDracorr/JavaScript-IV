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
};

class Student {
  constructor(sdt){

  };
};
