/*
Create by Matheus Moises da Rosa

Análise e Desenvolvimento de Sistemas

PMI - III

*/

function Product() {
    var id;
    var name;
    var price;

    /*

    Section of Get and Set

    */

    this.setName =function (newName) {
        name = newName
    };

    this.getName = function () {
        return name;
    };

    this.setPrice = function (newPrice) {
        price = newPrice
    };

    this.getPrice = function () {
        return price;
    };
}