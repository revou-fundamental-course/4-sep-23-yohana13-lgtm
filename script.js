document.addEventListener('DOMContentLoaded', function () {
    // Persegi
    const sideLengthSquareInput = document.getElementById('sideLengthSquare');
    const calculationTypeSquareInput = document.getElementById('calculationTypeSquare');
    const calculateButtonSquare = document.getElementById('calculateButtonSquare');
    const resultSquare = document.getElementById('resultSquare');

    calculateButtonSquare.addEventListener('click', function () {
        const sideLength = parseFloat(sideLengthSquareInput.value);
        const calculationType = calculationTypeSquareInput.value;

        if (!isNaN(sideLength)) {
            if (calculationType === 'luas') {
                const area = sideLength * sideLength;
                resultSquare.textContent = `Luas: ${area}`;
            } else if (calculationType === 'keliling') {
                const perimeter = 4 * sideLength;
                resultSquare.textContent = `Keliling: ${perimeter}`;
            }
        } else {
            resultSquare.textContent = 'Hasil: -';
        }
    });

    // Persegi Panjang
    const lengthRectangleInput = document.getElementById('lengthRectangle');
    const widthRectangleInput = document.getElementById('widthRectangle');
    const calculationTypeRectangleInput = document.getElementById('calculationTypeRectangle');
    const calculateButtonRectangle = document.getElementById('calculateButtonRectangle');
    const resultRectangle = document.getElementById('resultRectangle');

    calculateButtonRectangle.addEventListener('click', function () {
        const length = parseFloat(lengthRectangleInput.value);
        const width = parseFloat(widthRectangleInput.value);
        const calculationType = calculationTypeRectangleInput.value;

        if (!isNaN(length) && !isNaN(width)) {
            if (calculationType === 'luas') {
                const area = length * width;
                resultRectangle.textContent = `Luas: ${area}`;
            } else if (calculationType === 'keliling') {
                const perimeter = 2 * (length + width);
                resultRectangle.textContent = `Keliling: ${perimeter}`;
            }
        } else {
            resultRectangle.textContent = 'Hasil: -';
        }
    });
});
