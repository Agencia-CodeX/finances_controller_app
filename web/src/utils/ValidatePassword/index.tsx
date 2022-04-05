export function ValidatePassaword(password: string) {
    let result = true;
    const text = ["Senha fraca!"];

    const maskNumber = /([0-9])/;
    const maskPassword = /([a-zA-Z])/;

    if (password.length < 8) {
        result = false;
        text.push("A senha precisa ter no minímo 8 digitos!");
    }

    if (!maskNumber.test(password)) {
        result = false;
        text.push("A senha precisa ter algum número!");
    }

    if (!maskPassword.test(password)) {
        result = false;
        text.push("A senha precisa ter alguma letra!");
    }

    const response = {
        result,
        message: text,
    };

    return response;
}
