export function SplitFirsWord(name: string) {
    const [firstWord, ...othersWords] = name.split(" ");
    return firstWord;
}