/*
Create by Matheus Moises da Rosa

Análise e Desenvolvimento de Sistemas

PMI - III

In this class have information of client

To do:
-connection with DB
-verifies for null vars
-reorganize case necessary

But, for the first presentation the functions more embracing, without many functionalities

 */



function Client() {
    var cpf_cnpj;
    var typeOfClient;
    var name;
    var company;
    var phone;
    var email;
    var address;
    var listClientsArray = [];
    var saveChangesBool = false;
    var saveChangesInfoBool = false;

    this.registerClient = function(name, cpf_cnpj, typeOfClient, company, phone, email, address) {
        this.setName(name);
        this.setCpf_Cnpj(cpf_cnpj);
        this.setTypeOfClient(typeOfClient);
        this.setCompany(company);
        this.setPhone(phone);
        this.setEmail(email);
        this.setAddress(address);

        if (saveChangesBool) {
            this.saveChanges();
        }
    };
    
    this.listClients = function () {
        listClientsArray.append(this.getName());
        listClientsArray.append(this.getCpf_Cnpj());
        listClientsArray.append(this.getTypeOfClient());
        listClientsArray.append(this.getCompany());
        listClientsArray.append(this.getPhone());
        listClientsArray.append(this.getEmail());
        listClientsArray.append(this.getAddress());

        return listClientsArray;
    };

    this.changeClientInfo = function(company, phone, email, address) { // Do a change of info of client case need, but not change the CPF_CNPJ, name or typeOfClient, because this not need to change.
        this.setCompany(company);
        this.setPhone(phone);
        this.setEmail(email);
        this.setAddress(address);

        if (saveChangesInfoBool) {
            this.saveChanges();
        }
    };

    function saveChanges() {
        // To do the connection with DB for to save the changes in DB
    }

    function consultClientService() {
        //To do the ligation of client and Service for know what client to be linked for service
    }

    function makeGraphic() {
        //To do make a report for User master
    }

    //Section Of Get and Set of Variables

    this.setName = function (newName) {
        name = newName
    };

    this.getName = function () {
        return name;
    };

    this.setCpf_Cnpj = function (newCpf_Cnpj) {
        cpf_cnpj = newCpf_Cnpj
    };

    this.getCpf_Cnpj = function () {
        return cpf_cnpj;
    };

    this.setTypeOfClient = function (newTypeOfClient) {
        typeOfClient = newTypeOfClient
    };

    this.getTypeOfClient = function () {
        return typeOfClient;
    };

    this.setCompany = function (newCompany) {
        company = newCompany
    };

    this.getCompany = function () {
        return company;
    };

    this.setPhone = function (newPhone) {
        phone = newPhone
    };

    this.getPhone = function () {
        return phone;
    };

    this.setEmail = function (newEmail) {
        email = newEmail
    };

    this.getEmail = function () {
        return email;
    };

    this.setAddress = function (newAddress) {
        address = newAddress
    };

    this.getAddress = function () {
        return address;
    };
}