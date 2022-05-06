export function capitalizeFirst(phrase: string) {
    const newPhrare = phrase.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    return newPhrare;
}