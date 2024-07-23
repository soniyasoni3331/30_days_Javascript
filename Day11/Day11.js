// Task 1
const promise = new Promise((resolve)=>{
    return setTimeout(()=>{
        resolve();
    },2000)
})

promise.then(()=>{
    console.log("Promise is resolved");
})

// Task 2
const promise2 = new Promise((resolve, rejected)=>{
    return setTimeout(()=>{
        const value = 10
        if(value >10){
            resolve();
        }else{
            rejected();
        }
    },2000)
})

promise2.then(()=>{
    console.log("Promise is resolved");
}).catch(()=>{
    console.log("Promise is rejected")
})

// Task 3
const fetchData = (url, delay) =>{
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            resolve(`Data from ${url}`);
        },delay)
    })
}

fetchData('https://jsonplaceholder.typicode.com/posts/1',1000)
        .then((data)=>{
            console.log('first fetch:',data)
            return fetchData('https://jsonplaceholder.typicode.com/posts/2',2000);
        })
        .then((data)=>{
            console.log('second fetch:',data)
            return fetchData('https://jsonplaceholder.typicode.com/posts/2',3000);
        })
        .then((data)=>{
            console.log('Third fetch:',data)
        })
        .catch((error) =>{
            console.error('Error fetching data:', error);
        })


// Task 4 & Task 5
const myPromiseFun = async (promise)=>{
    try {
        const resolveValue = await promise
        console.log(resolveValue)
    } catch (error) {
        console.log(error)
    }
}
const myPromise = new Promise((resolve, rejected)=>{
    return setTimeout(()=>{
        const value2 = 10; 
        if(value2 > 10){
            resolve("resolved!")
        }else{
            rejected("rejected!")
        }
    },2000)
})
myPromiseFun(myPromise).then(()=>{
    console.log("resolved");
}).catch(()=>{
    console.log("rejected!");
})

// Task 6
const URL = 'https://jsonplaceholder.typicode.com/posts'
const getPosts = ()=>{
    fetch(URL).then((response)=>{
        return response.json();
    }).then(data=>console.log(data))
    .catch(()=>{
        console.log("error!")
    })
}
getPosts();

// Task 7
const getPosts2 =async ()=>{
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
getPosts2().then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error");
})

// Task 8
const URL1 = 'https://jsonplaceholder.typicode.com/posts/1';
const URL2 = 'https://jsonplaceholder.typicode.com/posts/2';
const URL3 = 'https://jsonplaceholder.typicode.com/posts/3';

const fetchPost = (url)=>{
    return fetch(url).then(response => response.json());
}

const getAllPosts = async ()=>{
    try {
        const [post1, post2, post3] = await Promise.all([fetchPost(URL1),
            fetchPost(URL2),
            fetchPost(URL3)]);
        console.log(post1, post2, post3)
    } catch (error) {
        console.log("Error: ", error)
    }
}

getAllPosts();

// Task 9
const getAllPosts2 = async ()=>{
    try {
        const firstResolvedPost = await Promise.race([fetchPost(URL1),
            fetchPost(URL2),
            fetchPost(URL3)]);
        console.log(firstResolvedPost)
    } catch (error) {
        console.log("Error: ", error)
    }
}

getAllPosts2();
