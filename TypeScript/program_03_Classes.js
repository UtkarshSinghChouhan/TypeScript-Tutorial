var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.frequentFlyerNo));
    };
    return Passenger;
}());
var passenger = new Passenger("Utkarsh", "Chouhan", 11);
passenger.display();
// For...in loop returns the index of the items
for (var item in passenger) {
    if (item != "display") {
        console.log("".concat(item, " => ").concat(passenger[item], "."));
    }
}
for (var item in passenger) {
    if (!(passenger[item] instanceof Function)) {
        console.log("".concat(item, " => ").concat(passenger[item], "."));
    }
}
