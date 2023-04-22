//Remember that An interface is a completely abstract-class
interface IFlight{
    flightNo:number;
    from:string;
    to:string
}

class Flight implements IFlight{
    flightNo: number; 
    from: string;
    to: string;

    constructor(flightNo : number, from : string, to : string){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }

    display(){
        console.log(`${this.flightNo} ${this.from} ${this.to}.`);
    }
}


var pass1 = new Flight(123, "Denver", "Austin");
pass1.display();