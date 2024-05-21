function compareToNum(obj) {
    return new Promise((resolve, reject) => {
        if (obj.isAboveNum > obj.num) {
            resolve(true);
        } else reject(false);
    });
}

compareToNum({ num: 10, isAboveNum: 5 }) //will reject
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
