function combine(prmX, prmY) {
    return Promise.all([prmX, prmY]).then((values) => {
        return values[0] + values[1];
    });
}
// `fetchX()` should return a promise that is resolved to 25 immediately
// and `fetchY()` should return a promise that is resolved after 2 seconds to 17

function resolveImmediate() {
    return new Promise((resolve) => {
        resolve(25);
    });
}

function resolveDelayed() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(17);
        }, 2000);
    });
}
combine(resolveImmediate(), resolveDelayed()).then((sum) => {
    console.log(sum);
});
