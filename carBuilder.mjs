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
export class CarBuilder {
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
