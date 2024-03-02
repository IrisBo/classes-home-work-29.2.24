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
let newSoldierHagit = new ArmySoldier("Hagit", "Cohen", "0541258745", "hatzerim", 1200, "none", new Date(2023, 3, 2), new Date(2025, 3, 2));
let newSoldierMatti = new ArmySoldier("Matti", "levi", "05412587778", "hatzerim", 1200, "none", new Date(2024, 3, 2), new Date(2026, 3, 2));
console.log(newSoldierHagit);
console.log(newSoldierMatti);
