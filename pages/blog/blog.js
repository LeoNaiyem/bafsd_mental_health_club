document.addEventListener("DOMContentLoaded", function () {
  // Example data (replace this with your array of objects)
  const blogPosts = [
    {
      title: "Post Title 1",
      imageURL: "https://example.com/image1.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      writer: {
        name: "John Doe",
        avatarURL: "https://example.com/avatar1.jpg",
      },
    },
    {
      title: "Post Title 2",
      imageURL: "https://example.com/image2.jpg",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      writer: {
        name: "Jane Smith",
        avatarURL: "https://example.com/avatar2.jpg",
      },
    },
    // Add more objects as needed
  ];

  displayBlogPosts(blogPosts);
});

function displayBlogPosts(posts) {
  const blogContainer = document.getElementById("blog-posts-container");

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const writerElement = document.createElement("div");
    writerElement.classList.add("writer-info");

    const avatarElement = document.createElement("img");
    avatarElement.src = post.writer.avatarURL;
    avatarElement.alt = post.writer.name;
    avatarElement.classList.add("avatar");

    const writerNameElement = document.createElement("p");
    writerNameElement.textContent = post.writer.name;

    const imageElement = document.createElement("img");
    imageElement.src = post.imageURL;
    imageElement.alt = post.title;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    writerElement.appendChild(avatarElement);
    writerElement.appendChild(writerNameElement);

    postElement.appendChild(titleElement);
    postElement.appendChild(writerElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);

    blogContainer.appendChild(postElement);
  });
}
//hamburger for mobile menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

