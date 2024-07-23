// Using Promise
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

// Using Async Await
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