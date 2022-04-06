export function validateEmail(email: string) {
    const mask = /\S+@\S+\.\S+/;
    return mask.test(email);
}
