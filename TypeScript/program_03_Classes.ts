class Passenger{
    firstName : string;
    lastName : string;
    frequentFlyerNo : number;

    constructor(firstName  :string, lastName : string, frequentFlyerNo : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display(){
        console.log(`${this.firstName} ${this.lastName} ${this.frequentFlyerNo}`);
    }
}

var passenger = new Passenger("Utkarsh", "Chouhan", 11);
passenger.display();



// For...in loop returns the index of the items
for(var item in passenger){
    if(item != "display"){
        console.log(`${item} => ${passenger[item]}.`);
    }
}


for(var item in passenger){

    //Every single function in javascript and typescript is an instance of the class Function.

    if(!(passenger[item]  instanceof Function)){
        console.log(`${item} => ${passenger[item]}.`);
    }
}


