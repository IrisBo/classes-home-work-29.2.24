// console.log("11111")

class ArmyPerson {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    base: string;
    salary: number;
    unit: string;

    constructor(firstName: string, lastName: string, phoneNumber: string, base: string, salary: number, unit: string) {

        this.firstName = firstName
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.base = base;
        this.salary = salary;
        this.unit = unit;
    }
}

class ArmySoldier extends ArmyPerson{
   readonly draftDate:Date;
   readonly releaseDate:Date;

    constructor (firstName: string, lastName: string, phoneNumber: string, base: string, salary: number, unit: string, draftDate:Date, releaseDate:Date){
    super (firstName, lastName, phoneNumber, base, salary, unit);
    this.draftDate=draftDate;
    this.releaseDate=releaseDate;
}
}




