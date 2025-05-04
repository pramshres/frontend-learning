const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function render() {
    const mainEl = document.querySelector('main');
    mainEl.innerHTML = "";
    
    posts.forEach((post, index) => {
        mainEl.innerHTML += 
        
        `<section class="post-container">
            <div class="post-author">
                <img class="profile-picture" src="${post.avatar}" alt="${post.name}'s profile picture">
                <div class="profile-info">
                    <p class="name">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </div>
        
            <img class="post-image" src="${post.post}" alt="${post.name}'s post picture">                                        
            
            <div class="post-reactions">
                <img src="images/icon-heart.png">
                <img src="images/icon-comment.png">
                <img src="images/icon-dm.png">
            </div>
            
            <p class="post-likes">${post.likes} likes</p>
            
            <p class="post-comments"><span class="username">${post.username}</span> ${post.comment}</p>            
        </section>`
        
        if (index < posts.length - 1) {
            mainEl.innerHTML += `<div class="filler"></div>`;
        }    
    })
}

render()

