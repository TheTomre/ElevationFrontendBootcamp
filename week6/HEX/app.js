function isValidHexColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
}

const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
    if (isValidHexColor(input.value)) {
        document.body.style.backgroundColor = input.value;
    } else {
        alert('Please enter a valid hex color');
    }
});