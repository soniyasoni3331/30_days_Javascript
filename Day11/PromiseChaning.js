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
