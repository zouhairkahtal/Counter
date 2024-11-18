const num = document.querySelector('#number');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const reset = document.querySelector('#reset');

let x = 0; 
num.innerHTML = x; 

function updateClass() {
    if (x === 0) {
        num.classList.add('gray');
        num.classList.remove('green', 'red');
    } else if (x >= 1) { 
        num.classList.add('green');
        num.classList.remove('gray', 'red');
    } else {
        num.classList.add('red');
        num.classList.remove('green', 'gray');
    }
}

plus.addEventListener('click', () => {
    x += 1; // Increment x
    num.innerHTML = x; // Update the displayed number
    updateClass(); 
});


minus.addEventListener('click', () => {
    x -= 1; // Decrement x
    num.innerHTML = x; // Update the displayed number
    updateClass(); 
});


reset.addEventListener('click', () => {
    x = 0; // Reset x to 0
    num.innerHTML = x; // Update the displayed number
    updateClass(); 
});
