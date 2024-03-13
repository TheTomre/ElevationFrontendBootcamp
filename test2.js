function findOutlier(integers = []) {
    let odd = (even = 0);
    for (i = 0; i < 3; i++) {
        if (integers[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    if (even >= 2) {
        return integers.filter((v) => v % 2 !== 0)[0];
    } else {
        return integers.filter((v) => v % 2 == 0)[0];
    }
}

console.log(findOutlier([1, 1, 0, 1, 1]));
