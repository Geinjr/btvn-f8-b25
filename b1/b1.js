var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

function getError(input) {
    var parts = input.split(".");
    var field = parts[0];
    var errorType = parts[1];

    if (!errors[field]) {
        return null;
    }

    if (errorType) {
        return errors[field][errorType] || null;
    }

    var errorPriority = ["required", "min", "email", "unique", "same"];

    for (var i = 0; i < errorPriority.length; i++) {
        var currentErrorType = errorPriority[i];
        if (errors[field][currentErrorType]) {
            return errors[field][currentErrorType];
        }
    }

    return null;
}

console.log(getError("name"));
console.log(getError("name.min"));

console.log(getError("email"));
console.log(getError("email.unique"));

console.log(getError("password"));
console.log(getError("username"));
