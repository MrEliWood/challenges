// import components
const button = document.getElementById('button');
const output = document.getElementById('output');

let input = 'abcabc';

function challenge(input) {

    // write code here

    return input;

};


// on button click, run code and display result on the page
button.addEventListener('click', () => {
    output.innerText = challenge(input);
});