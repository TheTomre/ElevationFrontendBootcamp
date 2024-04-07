function operationsSequence(number) {
    return new Promise((resolve) => {
        resolve(number + 5);
    })
        .then((result) => {
            return result * 3;
        })
        .then((result) => {
            return result - 2;
        })
        .then((result) => {
            console.log(result);
        });
}
operationsSequence(5);
