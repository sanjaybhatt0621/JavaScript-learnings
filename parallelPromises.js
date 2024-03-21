function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(value < 5) {
                reject(`Error ${value}`);
            }
            else {
                resolve(`Resolved value is ${value * 1000}`)
            }
        }, value*1000);
    })
}

const asyncTask = [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
]


// createAsyncTask().then((val) => {
//     console.log(val);
// }).catch((error) => {
//     console.error(error);
// });


const asyncParallel = (tasks, callback) => {
    const results = [];
    const errors = [];

    let completed = 0;

    tasks.forEach(task => {
        task.then((val) => { 
            results.push(val);
        })
        .catch((error) => {
            errors.push(error);
        })
        .finally(() => {
            completed++;

            if(completed >= tasks.length) {
                callback(errors, results);
            }
        })
    })
}

asyncParallel(asyncTask, (error, result) => {
    console.log(`Error ${error}`);
    console.log(`Result ${result}`);
})