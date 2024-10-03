function sumOfSeries() {
    let type = prompt("Enter the type of series (AP/GP):").toUpperCase();
    let n = parseInt(prompt("Enter the number of terms:"));
    let a = parseFloat(prompt("Enter the first term:"));
    let d_or_r = parseFloat(prompt("Enter the common difference (for AP) or common ratio (for GP):"));

    let sum = 0;

    if (type === "AP") {
        sum = (n / 2) * (2 * a + (n - 1) * d_or_r);
    } else if (type === "GP") {
        if (d_or_r === 1) {
            sum = n * a;
        } else {
            sum = (a * (1 - Math.pow(d_or_r, n))) / (1 - d_or_r);
        }
    } else {
        return "Invalid series type!";
    }

    return `The sum of the ${type} series is: ${sum}`;
}

console.log(sumOfSeries());
