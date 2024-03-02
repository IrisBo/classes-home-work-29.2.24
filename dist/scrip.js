"use strict";
// console.log("11111")
class ArmyPerson {
    constructor(firstName, lastName, phoneNumber, base, salary, unit) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.base = base;
        this.salary = salary;
        this.unit = unit;
    }
}
class ArmySoldier extends ArmyPerson {
    constructor(firstName, lastName, phoneNumber, base, salary, unit, draftDate, releaseDate) {
        super(firstName, lastName, phoneNumber, base, salary, unit);
        this.draftDate = draftDate;
        this.releaseDate = releaseDate;
    }
}
