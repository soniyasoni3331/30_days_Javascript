const URL1 = 'https://jsonplaceholder.typicode.com/posts/1';
const URL2 = 'https://jsonplaceholder.typicode.com/posts/2';
const URL3 = 'https://jsonplaceholder.typicode.com/posts/3';

const fetchPost = (url)=>{
    return fetch(url).then(response => response.json());
}

// Promice.all
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

// Promise.race()
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
