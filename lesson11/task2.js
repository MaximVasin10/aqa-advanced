function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.error("Error in getTodo:", error));
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.error("Error in getUser:", error));
}


//PromiseAll
const allPromises = Promise.all([getTodo(), getUser()]);


allPromises
    .then((results) => {

        const todo = results[0];
        const user = results[1];

        console.log("Promise.all - Todo:", todo);
        console.log("Promise.all - User:", user);
    })
    .catch((error) => {
        console.error("One of requests is failed", error);
    });


//PromiseRace
const racePromise = Promise.race([getTodo(), getUser()])
    .then(first => {
        console.log("First ended task object:", first);
        return first;
    })
    .catch((error) => {
        console.error("First request is failed", error);
    });