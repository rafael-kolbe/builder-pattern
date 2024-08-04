Creational Design Pattern
- Foco na criação de objetos complexos
- Produz diferentes tipos e representações de um objeto usando o mesmo sistema de construção
[Problema à resolver](./example_1.mjs)


---------------------------------------------------------------------------------------------------------------------------------------------------------------


Com o builder pattern, nós extraimos o construtor ou código criador da própria classe para objetos separados chamados **builders**
[Exemplo de um builder](./example_2.mjs)


---------------------------------------------------------------------------------------------------------------------------------------------------------------



```js
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
```
Este é o código construtor da classe, no builder pattern, ele é movido para um outro objeto chamado **director**
O Director é responsável por denifir a ordem em que devem ser chamados os métodos do construtor, para que possamos
reutilizar configurações específicas dos produtos que estamos construindo.
[Examplo de um director](./example_3.mjs)


---------------------------------------------------------------------------------------------------------------------------------------------------------------


Resumindo as etapas do builder pattern:
1. Separar o construtor ou código criador da classe dela mesma.
2. Criar uma classe *Builder* contendo os mesmos campos do objeto que quer criar.
3. Adicionar diversos métodos *set* para esses campos e um método *build* responsável pela criação do objeto.
4. Criar um *Director* para reaproveitar o mesmo processo de criação para diversas partes do código.
5. O cliente deve apenas criar as instâncias do *director* e do *builder* para ser capaz de criar os objetos.