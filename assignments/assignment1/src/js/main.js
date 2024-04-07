import { contacts } from "../data/contacts.js";

const inputEl = document.querySelector("[data-input]");
const btnEl = document.querySelector("button");
const alert = document.querySelector("[data-alert]");
const searchResult = document.querySelector("[data-search-list]");

function isNameOrPhone(data) {
    return /[0-9]/.test(data);
}

btnEl.addEventListener("click", () => {
    if (inputEl.value != "") {
        alert.innerHTML = null;
        searchResult.innerHTML = null;
        let result = null;
        const query = inputEl.value.toLowerCase();

        if (isNameOrPhone(query)) {
            result = contacts.filter(
                (contact) =>
                    contact.phone.toLocaleLowerCase().includes(query) ||
                    contact.cell.toLocaleLowerCase().includes(query)
            );
        } else {
            result = contacts.filter(
                (contact) =>
                    contact.name.first.toLocaleLowerCase().includes(query) ||
                    contact.name.last.toLocaleLowerCase().includes(query)
            );
        }

        if (result.length == 0) {
            searchResult.innerHTML =
                "<h5> No results found for your search </h5>";
        } else {
            result.forEach((element) => {
                const liEl = document.createElement("li");
                liEl.innerText =
                    element.name.first +
                    " " +
                    element.name.last +
                    " Phone: " +
                    element.phone +
                    " Cell: " +
                    element.cell;
                searchResult.appendChild(liEl);
            });
        }
    }
});
