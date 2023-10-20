const input = document.getElementById('input');
const result = document.getElementById('result');

function addNumbers() {
    let arr = [];
    return {
        input: () => {
            const inputValue = parseInt(input.value);
            if (!isNaN(inputValue)) {
                arr.push(inputValue);
                result.textContent = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                input.value = '';
            } else {
                alert('write a number ! ')
                input.value = '';
            }
        }
    }
}

const getVal = addNumbers();

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getVal.input();
    }
});
