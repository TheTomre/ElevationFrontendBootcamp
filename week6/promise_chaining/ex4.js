new Promise((resolve) => {
    setTimeout(resolve, 2000);
})
    .then(() => console.log("Hello"))
    .then(() =>
        new Promise((resolve) => {
            setTimeout(resolve, 1000);
        }).then(() => console.log("World"))
    );
