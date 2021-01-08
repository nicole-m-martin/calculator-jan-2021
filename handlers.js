import { addSum, subSum, divideSum, multiSum } from './mathUtils.js';


// Addition
const additionField = document.getElementById('add-box-1');
const additionField2 = document.getElementById('add-box-2');
const addResults = document.getElementById('add-results');

export function addClickHandler() {

    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;

    const result = addSum(fieldValue, fieldValue2);
  
    addResults.textContent = result;
}

// Subtraction
const subtractionField = document.getElementById('sub-box-1');
const subtractionField2 = document.getElementById('sub-box-2');
const subResults = document.getElementById('sub-results');

export function subClickHandler() {
    const fieldValue = subtractionField.valueAsNumber;
    const fieldValue2 = subtractionField2.valueAsNumber;

    const result = subSum(fieldValue, fieldValue2);
  
    subResults.textContent = result;
}

// Division
const divisionField = document.getElementById('divide-box-1');
const divisionField2 = document.getElementById('divide-box-2');
const divideResults = document.getElementById('divide-results');

export function divideClickListener() {
    const fieldValue = divisionField.valueAsNumber;
    const fieldValue2 = divisionField2.valueAsNumber;

    const result = divideSum(fieldValue, fieldValue2);
    
    divideResults.textContent = result;
}

// Multiply
const multiplyField = document.getElementById('multi-box-1');
const multiplyField2 = document.getElementById('multi-box-2');
const multiplyResults = document.getElementById('multi-results');

export function multiplyClickListener() {
    const fieldValue = multiplyField.value;
    const fieldValue2 = multiplyField2.value;

    const result = multiSum(fieldValue, fieldValue2);

    multiplyResults.textContent = result;


}


