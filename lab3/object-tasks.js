// Завдання 1.2.3
const car1 = new Object();
car1.color = "blue";
car1.maxSpeed = 200;
car1.driver = new Object();
car1.driver.name = "Худицький Олександр";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

// Завдання 1.2.4
const car2 = {
    color: "red",
    maxSpeed: 180,
    driver: {
        name: "Худицький Олександр",
        category: "B",
        personalLimitations: null,
    },
    tuning: false,
    "number of accidents": 2,
};

// Завдання 1.2.5
car1.drive = function () {
    console.log("I am not driving at night");
};
car1.drive();

// Завдання 1.2.6
car2.drive = function () {
    console.log("I can drive anytime");
};
car2.drive();

// Завдання 1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

// Завдання 1.2.8
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience,
    };
};

// Завдання 1.2.9
Truck.prototype.trip = function () {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        const message = `Driver ${this.driver.name} ${
            this.driver.nightDriving ? "drives at night" : "does not drive at night"
        } and has ${this.driver.experience} years of experience.`;
        console.log(message);
    }
};

// Завдання 1.2.10
const truck1 = new Truck("green", 5000, 90.5, "Volvo", "FH16");
truck1.AssignDriver("Худицький Олександр", true, 10);
truck1.trip(); // Демонстрація роботи

const truck2 = new Truck("blue", 6000, 80.3, "Scania", "R500");
truck2.AssignDriver("Худицький Олександр", false, 5);
truck2.trip(); // Демонстрація роботи
