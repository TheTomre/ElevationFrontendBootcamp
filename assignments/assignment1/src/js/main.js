import { contacts } from '../data/contacts.js';

const inputEl = document.querySelector('[data-input]');
const btnEl = document.querySelector('button');
const searchResult = document.querySelector('[data-search-result]')
debugger


function isNameOrPhone (data) {
    return /[0-9]/.test(data)

    
}

btnEl.addEventListener('click', () => {
    let result;
    if (isNameOrPhone(inputEl.value)) {
        result = contacts.filter(contact => contact.phone.includes(inputEl.value) || contact.cell.includes(inputEl.value))

    } else {
        result = contacts.filter(contact => contact.name.first.includes(inputEl.value) || contact.name.last.includes(inputEl.value))
    }
    

    result.forEach(element => {
        const liEl = document.createElement('li');
        liEl.innerText = element.name.first + " " + element.name.last + " phone: " + element.phone + " cell: " + element.cell
        searchResult.appendChild(liEl);
    });

})


