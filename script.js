function randomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}
//set elements
const main = document.getElementById('mainbox');
const colorInput = document.getElementById('colorPicker');
const colorStatus = document.getElementsByClassName('data-colored');

//set functions
const checkFull = function() {
    if (colorStatus.length === 20) {
        alert('The page has been completely colour.');
    };
};

const bgChange = function(e) {
    e.preventDefault();
    checkFull();
    if (colorInput.value !== '#ffffff') {
        e.target.style.backgroundColor = colorInput.value;
        e.target.textContent = colorInput.value;
        e.target.classList.add('data-colored');
        colorInput.value = '#ffffff';

    } else if (!e.target.classList.contains('data-colored')) {
        e.target.style.backgroundColor = randomColor();
        e.target.textContent = randomColor();
        e.target.classList.add('data-colored');
    };
};

main.addEventListener('click', function(e) {
    if (e.target.classList.contains('color')) {
        bgChange(e);
    }
});