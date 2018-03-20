function Client() {
    var cpf_cnpj;
    var typeOfClient;
    var name;
    var company;
    var phone;
    var email;
    var address;

    function registerClient(name, cpf_cnpj, typeOfClient, company, phone, email, address) {
        this.setName(name);
        this.setCpf_Cnpj(cpf_cnpj);
        this.setTypeOfClient(typeOfClient);
        this.setCompany(company);
        this.setPhone(phone);
        this.setEmail(email);
        this.setAddress(address);
    }
    
    function listClients() {
        this.getName();
        this.getCpf_Cnpj();
        this.getTypeOfClient();
        this.getCompany();
        this.getPhone();
        this.getEmail();
        this.getAddress();
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