import { randomUUID } from "crypto";

// O instanciamento de um objeto complexo é geralmente feito através de um construtor monstruoso como o exemplo abaixo.
class Car {
    constructor(brand, model, color, nbrDoors, screenType, weight, height) {
        this.id = randomUUID();
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.nbrDoors = nbrDoors;
        this.screenType = screenType;
        this.weight = weight;
        this.height = height;
    }
}

// A criação do objeto fica muito feia e difícil de ler.
const car = new Car("Toyota", "Corolla", "Black", 4, "LCD", 1200, 1.5);

console.log(car);
