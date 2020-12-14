const menu = document.querySelector('ul.js-menu');

import postsList from '../menu.json';

import postTemplate from '../templates/posts.hbs';

const newPost = postTemplate(postsList);

menu.insertAdjacentHTML('afterbegin', newPost);
