/**
 * INHERITANCE
 * - Classes are templates for objects
 * - Javasript calls a CONSTRUCTOR method when we create a new instance of a class
 * - INHERITANCE is when we create a parent class with properties and methods that we can extend to child classes
 * - We use the EXTENDS keyword to create a subclass
 * - The SUPER keyword calls the constructor() of a parent class
 * - Static methods are called on the class, but not on instances of the class
 */

// PARENT CLASS
class HospitalEmployee {
    // CONSTRUCTOR
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }

    // GETTERS
    get name() { return this._name; }
    get remainingVacationDays() { return this._remainingVacationDays; }

    // METHODS
    takeVacationDays(daysOff) { this._remainingVacationDays -= daysOff; }

    // STATIC METHODS
    static generatePassword() { return Math.floor(Math.random() * 10000); }
}

// CHILD CLASS(ES)
class Nurse extends HospitalEmployee {
    // CONSTRUCTOR
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    // GETTERS
    get certifications() { return this._certifications; }

    // METHODS
    addCertification(newCertification) { this._certifications.push(newCertification); }
}

// CLASS CALLS & INITIALIZATION
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);