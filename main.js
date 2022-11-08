const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

const postsContainer = document.getElementById('container');

for(let i = 0; i < posts.length; i++){
    const user = posts[i];

    const post = document.createElement("div");
    post.classList.add('post');

    const post__header = document.createElement("div");
    post__header.classList.add('post__header');
    post.append(post__header);

    const post_meta = document.createElement("div");
    post_meta.classList.add('post-meta');
    post__header.append(post_meta);

    const post_meta__icon = document.createElement("div");
    post_meta__icon.classList.add('post-meta__icon');
    post_meta__icon.innerHTML = user.media;
    post_meta.append(post_meta__icon);

    const post_meta__data = document.createElement("div");
    post_meta__data.classList.add('post-meta__data');
    post_meta.append(post_meta__data);
    
    const post_meta__author = document.createElement("div");
    post_meta__author.classList.add('post-meta__author');
    post_meta__author.innerHTML = user.author.name;
    post_meta__data.append(post_meta__author);
    
    const post_meta__time = document.createElement("div");
    post_meta__time.classList.add('post-meta__time');
    post_meta__time.innerHTML = user.created;
    post_meta__data.append(post_meta__time);

    const post__text = document.createElement("div");
    post__text.classList.add('post__text');
    post__text.innerHTML = user.content;
    post.append(post__text);
    
    const post__image = document.createElement("div");
    post__image.classList.add('post__image');
    post__image.innerHTML = user.media;
    post.append(post__image);

    const post__footer = document.createElement("div");
    post__footer.classList.add('post__footer');
    post.append(post__footer);

    const js_likes = document.createElement("div");
    js_likes.classList.add('likes', 'js-likes');
    post__footer.append(js_likes);

    const likes__cta = document.createElement("div");
    likes__cta.classList.add('likes__cta');
    js_likes.append(likes__cta);

    const like_button = document.createElement("a");
    like_button.classList.add('like-button', 'js-like-button');
    likes__cta.append(like_button);

    const like_button__icon = document.createElement("i");
    like_button__icon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');
    like_button.append(like_button__icon);

    const like_button__label = document.createElement("span");
    like_button__label.classList.add('like-button__label');
    like_button__label.innerHTML = 
    `
    ${'Mi'} ${'Piace'}
    `;
    like_button.append(like_button__label);

    const likes__counter = document.createElement("div");
    likes__counter.classList.add('likes__counter');
    likes__counter.innerHTML = 
    `
    ${'Piace'} ${'a'}
    `;
    js_likes.append(likes__counter);

    const js_likes_counter = document.createElement("b");
    js_likes_counter.classList.add('js-likes-counter');
    js_likes_counter.innerHTML = user.likes;
    likes__counter.append(js_likes_counter);

    postsContainer.append(post);
}

console.log(postsContainer)
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

const button = document.querySelector('.js-like-button');

addEventListener ('click', function() {
    button.classList.add('like-button--liked')
});
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.