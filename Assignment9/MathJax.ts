document.addEventListener("DOMContentLoaded", () => {
    const equationsDiv = document.getElementById("equations");

    if (equationsDiv) {
        const equations = [
            "\\(ax^2 + bx + c = 0\\)",  // Quadratic equation
            "\\(e^{i\\pi} + 1 = 0\\)",  // Euler's identity
            "\\(\\frac{d}{dx}f(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\)",  // Definition of derivative
            "\\(\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}\\)",  // Gaussian integral
            "\\(\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}\\)",  // Basel problem
            "\\(F(s) = \\int_0^{\\infty} f(t)e^{-st}dt\\)",  // Laplace transform
            "\\(\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0}\\)",  // Gauss's law
            "\\(\\nabla \\times \\mathbf{B} - \\frac{1}{c^2}\\frac{\\partial \\mathbf{E}}{\\partial t} = \\mu_0 \\mathbf{J}\\)",  // Ampère's law (Maxwell's equations)
            "\\(z = re^{i\\theta} = r(\\cos \\theta + i\\sin \\theta)\\)",  // Euler's formula
            "\\(\\int_{a}^{b} f(x) dx = F(b) - F(a)\\)"  // Fundamental theorem of calculus
        ];

        equations.forEach(equation => {
            const equationElement = document.createElement("div");
            equationElement.className = "equation";
            equationElement.innerHTML = equation;
            equationsDiv.appendChild(equationElement);
        });

        // Trigger MathJax to typeset the equations
        MathJax.typesetPromise();
    }
});
