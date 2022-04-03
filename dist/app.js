"use strict";
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toLocaleString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Manu", startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("運転中...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("トラックを運転中...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("荷物を載せています..." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("移動速度: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
var userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "こんにちは";
}
//# sourceMappingURL=app.js.map