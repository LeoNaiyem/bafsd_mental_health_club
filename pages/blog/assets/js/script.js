'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}
// create blogs
// Sample array of blog post objects
// const blogPosts = [
//   {
//     bannerSrc: "../../../../images/event/event-1.jpeg",
//     altText: "Building microservices with Dropwizard, MongoDB & Docker",
//     topic: "Database",
//     title: "Building microservices with Dropwizard, MongoDB & Docker",
//     content:
//       "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.",
//     author: {
//       name: "Julia Walker",
//       profileImage: "./assets/images/author.png",
//     },
//     date: "2022-01-17",
//     readTime: "3 min",
//   },
//   {
//     bannerSrc: "./assets/images/blog-1.png",
//     altText: "Building microservices with Dropwizard, MongoDB & Docker",
//     topic: "Database",
//     title: "Building microservices with Dropwizard, MongoDB & Docker",
//     content:
//       "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.",
//     author: {
//       name: "Julia Walker",
//       profileImage: "./assets/images/author.png",
//     },
//     date: "2022-01-17",
//     readTime: "3 min",
//   },
//   {
//     bannerSrc: "./assets/images/blog-1.png",
//     altText: "Building microservices with Dropwizard, MongoDB & Docker",
//     topic: "Database",
//     title: "Building microservices with Dropwizard, MongoDB & Docker",
//     content:
//       "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.",
//     author: {
//       name: "Julia Walker",
//       profileImage: "./assets/images/author.png",
//     },
//     date: "2022-01-17",
//     readTime: "3 min",
//   },
//   // Add more blog post objects as needed
// ];

// // Function to create a blog card dynamically
// function createBlogCard(blogPost) {
//   const blogCard = document.createElement("div");
//   blogCard.classList.add("blog-card");

//   blogCard.innerHTML = `
//     <div class="blog-card-banner">
//       <img src="${blogPost.bannerSrc}" alt="${blogPost.altText}" width="250" class="blog-banner-img" />
//     </div>
//     <div class="blog-content-wrapper">
//       <button class="blog-topic text-tiny">${blogPost.topic}</button>
//       <h3><a href="#" class="h3">${blogPost.title}</a></h3>
//       <p class="blog-text">${blogPost.content}</p>
//       <div class="wrapper-flex">
//         <div class="profile-wrapper">
//           <img src="${blogPost.author.profileImage}" alt="${blogPost.author.name}" width="50" />
//         </div>
//         <div class="wrapper">
//           <a href="#" class="h4">${blogPost.author.name}</a>
//           <p class="text-sm">
//             <time datetime="${blogPost.date}">${blogPost.date}</time>
//             <span class="separator"></span>
//             <ion-icon name="time-outline"></ion-icon>
//             <time datetime="PT${blogPost.readTime}">${blogPost.readTime}</time>
//           </p>
//         </div>
//       </div>
//     </div>`;

//   return blogCard;
// }

// // Function to append blog cards to a container
// function appendBlogCards(blogPosts) {
//   const container = document.getElementById("blog-container"); // replace "blog-container" with your actual container ID

//   blogPosts.forEach((post) => {
//     const blogCard = createBlogCard(post);
//     container.appendChild(blogCard);
//   });
// }

// // Call the function to generate and append blog cards
// appendBlogCards(blogPosts);
