
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
            items: 3,
          },
        },
      });

      $(".owl-carousel-four").owlCarousel({
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