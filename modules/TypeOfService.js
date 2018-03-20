/*
Create by Matheus Moises da Rosa

Análise e Desenvolvimento de Sistemas

PMI - III

*/

function TypeOfService() {
    var id;
    var nameOfTypeService;
    var description;
    var priceAverage;
    var listType = [];

    this.listType = function () {
        listType.append(this.getNameOfTypeService());
        listType.append(this.getDescription());
        listType.append(this.getPriceAverage());

        return listType;
    };


    /*

    Section of Get and Set

    */

    this.setNameOfTypeService = function (newNameOfTypeService) {
        nameOfTypeService = newNameOfTypeService
    };

    this.getNameOfTypeService = function () {
        return nameOfTypeService;
    };

    this.setDescription = function (newDescription) {
        description = newDescription
    };

    this.getDescription = function () {
        return description;
    };

    this.setPriceAverage = function (newPriceAverage) {
        priceAverage = newPriceAverage
    };

    this.getPriceAverage = function () {
        return priceAverage;
    };
}