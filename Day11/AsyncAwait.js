const myPromiseFun = async (promise) => {
    try {
        const resolveValue = await promise;
        console.log(resolveValue);
    } catch (error) {
        console.log(error);
    }
};

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const value2 = 10;
        if (value2 > 10) {
            resolve("resolved!");
        } else {
            reject("rejected!");
        }
    }, 2000);
});

myPromiseFun(myPromise).then(() => {
    console.log("resolved");
}).catch(() => {
    console.log("rejected!");
});
