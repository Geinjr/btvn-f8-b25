var data = [];

function createUser(name, password, email) {
    return {
        name: name,
        password: password,
        email: email,
        role: "user",
    };
}

function handleRegister(name, password, email) {
    if (!name || !password || !email) {
        return "Thông tin đăng ký không đầy đủ";
    }

    var newUser = createUser(name, password, email);
    data.push(newUser);
    return newUser;
}

function handleLogin(email, password) {
    for (var user of data) {
        if (user.email === email && user.password === password) {
            return user;
        }
    }
    return "Thông tin đăng nhập không hợp lệ";
}

var dataRegister1 = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);

var dataRegister2 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);

var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log("Data Register 1:", dataRegister1);
console.log("Data Register 2:", dataRegister2);
console.log("Data Login:", dataLogin);
