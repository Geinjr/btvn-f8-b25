var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
    customers.sort((a, b) => a.age - b.age);

    for (var i = 0; i < customers.length; i++) {
        var name = customers[i].name.split(" ");
        customers[i].shortName =
            name[name.length - 3] + " " + name[name.length - 1];
    }

    return customers;
}

var result = createCustomers(customers);
console.log(result);
