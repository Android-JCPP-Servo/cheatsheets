/**
 * INHERITANCE
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