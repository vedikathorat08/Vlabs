function isPrime() {
    let number = parseInt(prompt("Enter a number:"));

    if (number < 2) {
        return `${number} is not a prime number.`;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return `${number} is not a prime number.`;
        }
    }

    return `${number} is a prime number.`;
}

console.log(isPrime());
