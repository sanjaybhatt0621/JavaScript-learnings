
const throttle = (array, limit, callback, delay = 0) => {
    let queue = [...array];
    let shouldThrottle = false;
    const context = this; // explain the this value
    return function() {

        if(shouldThrottle) {
            console.log("need to wait");
            return;
        }
        else
        {
            shouldThrottle = true;
            setTimeout(() => {
            shouldThrottle = false;
            }, delay);
            const ele = queue.splice(0, limit);
            console.log(this); // explain the this value
            console.log(context);
            callback.apply(context,[ele]); // callback(ele);
        }
    }
}

const btn = document.getElementById("btn");

const thorttleCall = throttle([1,2,3,4,5,6,7,8],2,(tasks) => console.log(tasks),2000);
btn.addEventListener('click', thorttleCall);