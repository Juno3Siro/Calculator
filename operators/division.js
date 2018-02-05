class Division {
    run(firstNumber, secondNumber) {
        if(secondNumber === 0) {
            throw Error ('Division by zero');
        }
        return firstNumber / secondNumber;
    };
}
module.exports = Division;