// Addition
const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

addButton.addEventListener('click', () => {
    const fieldValue = additionField.value;
    const fieldValue2 = additionField2.value;

    const result = Number (fieldValue) + Number(fieldValue2);
    // console.log(result);
    addResults.textContent = result;
});

// Subtraction
const subtractionField = document.getElementById('sub-input-1');
const subtractionField2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');

subButton.addEventListener('click', () => {
    const fieldValue = subtractionField.value;
    const fieldValue2 = subtractionField2.value;

    const result = Number (fieldValue) - Number(fieldValue2);
    // console.log(result);
    subResults.textContent = result;
});

// Division
const divisionField = document.getElementById('divide-input-1');
const divisionField2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResults = document.getElementById('divide-results');

divideButton.addEventListener('click', () => {
    const fieldValue = divisionField.value;
    const fieldValue2 = divisionField2.value;

    const result = Number (fieldValue) / Number(fieldValue2);
    // console.log(result);
    divideResults.textContent = result;
});

// Multiplication 
const multiplyField = document.getElementById('multi-input-1');
const multiplyField2 = document.getElementById('multi-input-2');
const multiplyButton = document.getElementById('multi-button');
const multiplyResults = document.getElementById('multi-results');

multiplyButton.addEventListener('click', () => {
    const fieldValue = multiplyField.value;
    const fieldValue2 = multiplyField2.value;

    const result = Number (fieldValue) * Number(fieldValue2);
    // console.log(result);
    multiplyResults.textContent = result;
});