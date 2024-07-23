const promise = new Promise((resolve, rejected)=>{
    return setTimeout(()=>{
        const value = 10
        if(value >10){
            resolve();
        }else{
            rejected();
        }
    },2000)
})

promise.then(()=>{
    console.log("Promise is resolved");
}).catch(()=>{
    console.log("Promise is rejected")
})