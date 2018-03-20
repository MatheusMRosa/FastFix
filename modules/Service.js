/*
Create by Matheus Moises da Rosa

Análise e Desenvolvimento de Sistemas

PMI - III

*/

function Service() {
    var id;
    var descriptionOfService;
    var time;
    var priceService;
    var client;
    var product;
    var typeOfService;

    /*

   Section of Get and Set

   */

    this.setDescriptionOfService = function (newDescriptionOfService) {
        descriptionOfService = newDescriptionOfService
    };

    this.getDescriptionOfService = function () {
        return descriptionOfService;
    };

    this.setTime = function (newTime) {
        time = newTime
    };

    this.getTime = function () {
        return time;
    };

    this.setPriceService = function (newPriceService) {
        priceService = newPriceService
    };

    this.getPriceService = function () {
        return priceService;
    };
}