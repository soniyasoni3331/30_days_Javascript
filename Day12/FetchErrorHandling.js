// using promises
const URL = 'https://jsonplaceholder.typicode.com/postss'

const fetchFun =()=>{
    fetch(URL).then((response)=>{
        if(!response.ok){
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json()
    }).then((data)=>{
        console.log(data)
    }).catch(()=>
        console.error("data is not fetched!")
    )
    
}
fetchFun()

// Using async await
const fetchData = async () =>{
    try {
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error",error.message);
    }
}
fetchData()