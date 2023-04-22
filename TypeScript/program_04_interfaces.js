var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    Flight.prototype.display = function () {
        console.log("".concat(this.flightNo, " ").concat(this.from, " ").concat(this.to, "."));
    };
    return Flight;
}());
var pass1 = new Flight(123, "Denver", "Austin");
pass1.display();
