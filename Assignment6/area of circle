function areaOfTriangle() {
    let method = prompt("Choose method (1: Base & Height, 2: Sides):");
    let area;

    if (method === "1") {
        let base = parseFloat(prompt("Enter the base of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        area = 0.5 * base * height;
    } else if (method === "2") {
        let a = parseFloat(prompt("Enter the length of side a:"));
        let b = parseFloat(prompt("Enter the length of side b:"));
        let c = parseFloat(prompt("Enter the length of side c:"));
        let s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        return "Invalid method selected.";
    }

    return `The area of the triangle is: ${area}`;
}

console.log(areaOfTriangle());
