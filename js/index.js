
      const menuToggler = document.getElementsByClassName("menu-toggler")[0];
      const navLinks = document.getElementsByClassName("nav-links")[0];
      const submenuTogglerAbout = document.querySelector('.about-link .plus-minus');
      const toggleAboutSubmenu = document.querySelector('.about-link');
      const submenuTogglerCourses = document.querySelector('.courses-link .plus-minus');
      const toggleCoursesSubmenu = document.querySelector('.courses-link');
      const submenuTogglerProjects = document.querySelector('.projects-link .plus-minus');
      const toggleProjectsSubmenu = document.querySelector('.projects-link');
      const submenuTogglerServices = document.querySelector('.services-link .plus-minus');
      const toggleServicesSubmenu = document.querySelector('.services-link');


    // function for active class toggle
    function toggleActiveClass (clicked, target) {
      clicked.classList.toggle('active');
      target.classList.toggle('active'); 
      
    }
    // function for active class remove
    function removeActiveClass (menu1, menu2, menu3, menu4, menu5, menu6) {
      menu1.classList.remove('active');
      menu2.classList.remove('active');
      menu3.classList.remove('active');
      menu4.classList.remove('active');
      menu5.classList.remove('active');
      menu6.classList.remove('active');
      
    }

    //   js code for toggle menu links
      menuToggler.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggler.classList.toggle("active");
      });


// owl carousel js code
      $(".owl-carousel-one").owlCarousel({
        slideSpeed: 4000,
        paginationSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        dotsEach: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 15,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 3,
          },
        },
      });
      $(".owl-carousel-two").owlCarousel({
        slideSpeed: 4000,
        paginationSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        autoplayHoverPause: true,
        loop: true,
        margin: 15,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        },
      });
      $(".owl-carousel-three").owlCarousel({
        slideSpeed: 4000,
        paginationSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 15,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 3,
          },
        },
      });

      $(".owl-carousel-four").owlCarousel({
        slideSpeed: 4000,
        paginationSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 15,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });

      // js code for fixed menu
      window.addEventListener("scroll", function() {
        const navBarTag = document.querySelector(".nav-bar");
        navBarTag.classList.toggle("fixed", window.scrollY > 0);

      })

      //js code for load quotes dynamically
// const quotesArray = [
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Steve Jobs",
//     role: "CEO OF APPLE",
//     quoteText:
//       "Your present circumstances don’t determine where you go; they merely determine where you start.",
//   },
//   {
//     avatarSrc: "../images/quotes/AdamAnt.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
//   {
//     avatarSrc: "../images/quotes/Steve-Jobs.jpg",
//     name: "Adam Ant",
//     role: "Musician",
//     quoteText:
//       "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with.",
//   },
// ];

// // Function to create a quotes card dynamically
// function createQuotesCard(quote) {
//   const quotesCard = document.createElement("div");
//   quotesCard.classList.add("item");

//   quotesCard.innerHTML = `

//     <div class="quotes-card d-flex">
//                 <div class="quotes-card-avatar">
//                   <img
//                     src="${quote.avatarSrc}"
//                     class="rounded-circle shadow-4"
//                     alt="Avatar"
//                   />
//                 </div>
//                 <div
//                   class="quotes-card-name d-flex align-items-center flex-column justify-content-center"
//                 >
//                   <h6>${quote.name}</h6>
//                   <span>${quote.role}</span>
//                 </div>
//                 <div class="quotes-card-text">
//                   ${quote.quoteText}
//                 </div>
//               </div>
//   `;

//   return quotesCard;
// }

// // Function to append quotes cards to a container
// function appendQuotesCards(quotesArray) {
//   const container = document.getElementById("quotes-container"); // replace "quotes-container" with your actual container ID

//   quotesArray.forEach((quote) => {
//     const quotesCard = createQuotesCard(quote);
//     container.appendChild(quotesCard);
//   });
// }

// // Call the function to generate and append quotes cards
// appendQuotesCards(quotesArray);
