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

let newSoldierHagit = new ArmySoldier("Hagit","Cohen","0541258745","hatzerim", 1200, "none",new Date(2023,3,2),new Date(2025,3,2))
let newSoldierMatti= new ArmySoldier("Matti", "levi","05412587778", "hatzerim",1200, "none", new Date(2024,3,2),new Date(2026,3,2) )

console.log(newSoldierHagit)
console.log(newSoldierMatti)

