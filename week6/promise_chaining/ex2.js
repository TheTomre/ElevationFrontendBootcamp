let string = "Hello";
const promise = new Promise((resolve) => {
    resolve(string.toUpperCase());
})
    .then((result) => {
        result = result.split("");
        result.reverse();
        return result.join("");
    })
    .then((result) => {
        return result + "-finished";
    })
    .then((result) => {
        console.log(result);
    });