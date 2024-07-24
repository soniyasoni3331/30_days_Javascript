const randomPromise2 = ()=>{
    return new Promise((resolve, rejected)=>{
        const isSuccess = Math.random() > 0.5
        setTimeout(()=>{
            if(isSuccess){
                resolve("Promise resolved!");
            }else{
                rejected(new Error("Promise rejected!"))
            }
        },1000)
    })
}

async function handlePromise(){
    try {
        const result = await randomPromise2()
        console.log(result)
    } catch (error) {
        console.error("An error occured:",error.message)
    }
}
handlePromise();