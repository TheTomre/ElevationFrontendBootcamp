// const isEven = (number) => {
//     return(number % 2 == 0)
// }

// function printOdd(array) {
//     for (let i in array) {
//         if (isEven(i) == false) {
//             console.log(i)
//         }

//     }
// }

// function checkExist(array, number) {
//     return(number in array)
// }

// function increaseByNameLength(money, name) {
//     return money * name.length
// }

// function makeRegal(name) {
//     return("His Royal Highness, " + name)
// }
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.splice(1,2);
// numbers[3] = 1;
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.reverse()
// numbers.push(0)
// numbers.reverse()

function test() {
    const reservations = {
        Bob: { claimed: false },
        Ted: { claimed: true },
    };

    const name = prompt("Please enter the name for your reservation")
        .toLowerCase()[0]
        .toUpperCase();

    if (name in reservations) {
        if (reservations[name].claimed) {
            console.log("Hmm, someone already claimed this reservation");
        } else if (!reservations[name].claimed) {
            console.log("Welcome, " + name);
        }
    } else {
        reservations[name] = { claimed: true };
    }

    console.log(reservations);
}

const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: [],
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" },
        ],
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: [],
    },
];

function deleteID(newid) {
    for (let post of posts) {
        if (post.id == newid) {
            post.comments.splice(2, 1);
        }
    }
}

deleteID(2);

//   const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
//   }

//   for (let key of Object.keys(dictionary)) {
//     console.log("Words that begin with " + key)
//     for (word of dictionary[key]) {
//         console.log(word)
//     }
//   }

people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!",
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub",
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power",
    },
];

const getSummary = function (person) {
    let showAge = () => {
        if (person.age > 55) {
            currentAge = "55+";
        } else if (person.age < 21) {
            currentAge = "underage";
        } else {
            currentAge = person.age + " year old";
        }
        return currentAge;
    };

    let capitalizePorf = (prof) => {
        let words = prof.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
    };
    let summary =
        capitalize(person.name) +
        " is a " +
        showAge() +
        " " +
        capitalizePorf(person.profession) +
        " from " +
        capitalize(person.city) +
        ", " +
        capitalize(person.country) +
        ". " +
        capitalize(person.name) +
        " loves to say " +
        capitalize(person.catchphrase);
    return summary;
};

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const summary1 = getSummary(people_info[2]);
console.log(summary1);


const story =
    "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

