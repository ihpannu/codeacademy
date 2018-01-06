class school {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'String') {
      this._numberOfStudents = this.newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  quickFacts() {
    console.log(`${name} educates ${numberOfStudents} students, typically between the ages of ${level}.`);
  }

  static pickSubstituteTeachers(substituteTeachers) {
   
    substituteTeachers = [ Math.floor(substituteTeachers.length * Math.random()) ];
  }
}
