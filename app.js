import { addClickHandler, subClickHandler, divideClickListener, multiplyClickListener } from './handlers.js';

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addClickHandler);

const subButton = document.getElementById('sub-button');
subButton.addEventListener('click', subClickHandler);
    
const divideButton = document.getElementById('divide-button');
divideButton.addEventListener('click', divideClickListener);

const multiplyButton = document.getElementById('multi-button');
multiplyButton.addEventListener('click', multiplyClickListener);