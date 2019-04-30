// Synchronous

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// Assume that it takes 5 seconds to create a post
//  so the getPosts() function isn't actually implemented until the posts.push(post); step is completed.

// Maybe it could be useful to think of this as a "callafter" function, because the getPosts() function is called after the posts.push(post) step is called.
function createPost(post){

    // resolve: we've done what we doing
    // reject: if there are errors we want to throw
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            posts.push(post);    

            const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
                  
            
            
        }, 5000);

    });

    
}

// Assume that it takes 1 second to get all the posts
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
    
}

// We will see all the posts after : 5 secs of createPost + 1 sec of getPosts = Total 6 seconds

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts)
.catch(function(err){
    document.body.innerHTML = err;
    console.log(err);
});


// getPosts();
console.log(posts);