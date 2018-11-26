// Get the elements, button and input field, and assign them to constants
const inputCopy = document.getElementById('inputCopy');
const btnCopy = document.getElementById('btnCopy');

const inputCopy2 = document.getElementById('inputCopy2');
const btnCopy2 = document.getElementById('btnCopy2');

btnCopy.onclick = function () {
    // Step 1 - Select the input
    inputCopy.select();

    // Step 2 - Copying the text
    document.execCommand('Copy');
}

btnCopy2.onclick = function () {
    // Step 1 - Select the input
    inputCopy2.select();

    // Step 2 - Copying the text
    document.execCommand('Copy');
}