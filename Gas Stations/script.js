// import components
const button = document.getElementById('button');
const output = document.getElementById('output');

let input = ["4", "3:4", "1:1", "2:2", "4:3"];

function challenge(input) {

    // write code here

    let allGas = input;
    let allCost = input;

    let remaining = 0;
    let totalRemaining = 0;
    let start = 1;

    for (let i = 1; i < input.length; i++) {

        let gas = parseInt(allGas[i].slice(0, -2));
        let cost = parseInt(allCost[i].slice(2));

        console.log(gas, cost);

        if (remaining >= 0) {
            remaining += gas - cost;
        } else {
            remaining = gas - cost;
            start = i;
        }

        totalRemaining += gas - cost;
        
    }

    return totalRemaining >= 0 ? start : "-1";

};


// on button click, run code and display result on the page
button.addEventListener('click', () => {
    output.innerText = challenge(input);
});