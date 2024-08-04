import { randomUUID } from "crypto";

// Com o builder pattern nós escrevemos um construtor para o objeto complexo e um *BUILDER* para instanciar o objeto.
class Car {
    constructor(id, brand, model, color, nbrDoors, screenType, weight, height) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.nbrDoors = nbrDoors;
        this.screenType = screenType;
        this.weight = weight;
        this.height = height;
    }
}

// Esta classe será responsável por instanciar o objeto Car com o método build().
// A classe Car só deve ser instanciada através desta classe.
class CarBuilder {
    // É uma boa prática deixar os atributos privados para evitar que sejam acessados diretamente.
    #id;
    #brand;
    #model;
    #color;
    #nbrDoors;
    #screenType;
    #weight;
    #height;

    id() {
        this.#id = randomUUID();
        return this;
    }

    brand(brand) {
        this.#brand = brand;
        return this;
    }

    model(model) {
        this.#model = model;
        return this;
    }

    color(color) {
        this.#color = color;
        return this;
    }

    nbrDoors(nbrDoors) {
        this.#nbrDoors = nbrDoors;
        return this;
    }

    screenType(screenType) {
        this.#screenType = screenType;
        return this;
    }

    weight(weight) {
        this.#weight = weight;
        return this;
    }

    height(height) {
        this.#height = height;
        return this;
    }

    // Este método é responsável por instanciar o objeto Car.
    build() {
        return new Car(
            this.#id,
            this.#brand,
            this.#model,
            this.#color,
            this.#nbrDoors,
            this.#screenType,
            this.#weight,
            this.#height
        );
    }
}

// A instância do objeto Car é feita através do builder.
const builder = new CarBuilder();
const car = builder
    .id()
    .brand("Toyota")
    .model("Corolla")
    .color("Black")
    .nbrDoors(4)
    .screenType("LCD")
    .weight(1200)
    .height(1.5)
    .build();

const car2 = builder
    .id()
    .brand("Toyota")
    .model("Corolla")
    .color("Red")
    .nbrDoors(4)
    .screenType("LCD")
    .weight(1200)
    .height(1.5)
    .build();

const car3 = builder
    .id()
    .brand("Toyota")
    .model("Corolla")
    .color("Silver")
    .nbrDoors(4)
    .screenType("LCD")
    .weight(1200)
    .height(1.5)
    .build();

console.log(car);
console.log(car2);
console.log(car3);

export default CarBuilder;
