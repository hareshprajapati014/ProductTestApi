import fetch from 'node-fetch';

// (1)

async function getPosts(){

   const myPosts = await fetch("https://fakestoreapi.com/products");
   const response = await myPosts.json();
   console.log(response);
}

getPosts();


// (2)

async function getDemo(){

    const myPosts = await fetch('https://fakestoreapi.com/products/1');
    const response = await myPosts.json();
    console.log(response);
 }
 
 getDemo();
 

