function findVowels() {
    let str = prompt("Enter a string:").toLowerCase();
    const vowels = "aeiou";
    let foundVowels = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            foundVowels += str[i] + " ";
        }
    }

    return `The vowels in the string are: ${foundVowels.trim()}`;
}

console.log(findVowels());
