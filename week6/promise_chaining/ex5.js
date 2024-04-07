function parseJsonData(jsonData) {
    return new Promise((resolve) => {
        resolve(jsonData);
    }).then((data) => {
        try {
            const newData = JSON.parse(data);
            console.log(newData);
        } catch (error) {
            console.log("Invalid JSON");
        }
    });
}

// parseJsonData('{"name": "Kirill", "surname": Shneiderman}')

async function asyncParse(jsonData) {
    try {
        const newData = await JSON.parse(jsonData);
        console.log(newData);
    } catch (error) {
        console.log("Invalid JSON");
    }
}

asyncParse('{"name": "Kirill", "surname": Shneiderman}');
