import { CarBuilder } from "./carBuilder.mjs";

// Utilizar o Director é opcional, ainda é possível criar carros customizados a partir do builder.
// Porém o Director facilita a criação de carros padrões.
class Director {
    buildBugatti(builder) {
        builder
            .id()
            .brand("Bugatti")
            .model("Chiron")
            .color("Blue")
            .nbrDoors(2)
            .screenType("LED")
            .weight(1995)
            .height(1212);
    }

    buildToyota(builder) {
        builder
            .id()
            .brand("Toyota")
            .model("Corolla")
            .color("Black")
            .nbrDoors(4)
            .screenType("LCD")
            .weight(1200)
            .height(1.5);
    }

    buildLamborghini(builder) {
        builder
            .id()
            .brand("Lamborghini")
            .model("Aventador")
            .color("Yellow")
            .nbrDoors(2)
            .screenType("LED")
            .weight(1575)
            .height(1136);
    }

    buildMitsubishi(builder) {
        builder
            .id()
            .brand("Mitsubishi")
            .model("Lancer")
            .color("White")
            .nbrDoors(4)
            .screenType("LCD")
            .weight(1300)
            .height(1.4);
    }
}

// Precisamos apenas instanciar o Director e o Builder.
const director = new Director();
const builder = new CarBuilder();

// Ao chamar o método buildBugatti passando o builder como parâmetro, o mesmo é automaticamente preenchido com os dados do Bugatti na classe Director.
director.buildBugatti(builder);

// Por fim, o método build() é chamado para instanciar o objeto Car.
// Sem nenhum código adicional, o objeto Car é instanciado com as configurações do Bugatti.
const bugatti = builder.build();

console.log(bugatti);
