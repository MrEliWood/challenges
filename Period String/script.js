// import components
const button = document.getElementById('button');
const output = document.getElementById('output');

let input = 'abcabc';

function challenge(str) {

    // write code here
    let index = (str + str).indexOf(str, 1);

    let sub = str.slice(0, index);

    return sub;

};


// on button click, run code and display result on the page
button.addEventListener('click', () => {
    output.innerText = challenge(input);
});