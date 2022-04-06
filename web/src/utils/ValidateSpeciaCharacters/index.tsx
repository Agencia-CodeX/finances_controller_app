export function ValidateSpecialCharacters(name: string) {
    const mask = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    return mask.test(name);
}
