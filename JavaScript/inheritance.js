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
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

// CLASS CALLS & INITIALIZATION
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);