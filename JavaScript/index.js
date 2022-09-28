class users {
    constructor() {
        this.ApiRest = 'https://ge98b58f620aa8b-jk6qaf05q3cydvl5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client';
    }

    GetUser() {
        var request = $.ajax({
            method: "GET",
            url: this.ApiRest
        });
        request.done(function (data) {
            for (let index = 0; index < data.items.length; index++) {
                console.log(data.items[index].name)
                if ($('#email') == data.items[index].email) {
                    alert('El usuario se ha validado');
                }
            }

        });
    }
}


class reservations {
    constructor() {
        this.ApiRest = 'https://ge98b58f620aa8b-jk6qaf05q3cydvl5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/cabin/';
    }

    GetReservations() {
        var request = $.ajax({
            method: "GET",
            url: this.ApiRest
        });
        request.done(function (data) {
            for (let index = 0; index < data.items.length; index++) {
                console.log(data.items[index].name)
                if ($('#email') == data.items[index].email) {
                    alert('El usuario se ha validado');
                }
            }

        });
    }
}

let u = new users();

//u.GetUser();