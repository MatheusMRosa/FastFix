/*
Create by Matheus Moises da Rosa

Análise e Desenvolvimento de Sistemas

PMI - III

*/

function User() {
    var id;
    var profile;
    var typeOfUser;
    var user;
    var password;

    /*

   Section of Get and Set

   */

    this.setProfile = function (newProfile) {
        profile = newProfile
    };

    this.getProfile = function () {
        return profile;
    };

    this.setTypeOfUser = function (newTypeOfUser) {
        typeOfUser = newTypeOfUser
    };

    this.getTypeOfUser = function () {
        return typeOfUser;
    };

    this.setUser = function (newUser) {
        user = newUser
    };

    this.getUser = function () {
        return user;
    };

    this.setPassword = function (newPassword) {
        password = newPassword
    };

    this.getPassword = function () {
        return password
    }
}