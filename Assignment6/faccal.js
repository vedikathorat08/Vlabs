function factorialCalculator() {
    let number = parseInt(prompt("Enter a number:"));
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    return `The factorial of ${number} is: ${factorial}`;
}

console.log(factorialCalculator());
