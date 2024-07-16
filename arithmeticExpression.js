function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}

console.log(evaluateExpression("5 + 10 - 3"));  // Output: 12
