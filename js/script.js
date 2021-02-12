// *************** set date ****************
const date = (document.getElementById('date')
.innerHTML = new Date().getFullYear());

// *************** nav toggel ***************
const navBtn = document.getElementById("nav__toggle");
const links = document.getElementById("nav__links");

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links")
});

// *************** nav fixed ***************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
   if (window.pageYOffset >  54.38) {
       navbar.classList.add("fixed");
   } else {
       navbar.classList.remove("fixed");
   }
});

// ************ back to top ****************
  $(window).scroll(function () {
      let position = $(this).scrollTop();
      if (position >= 718) {
          $('#back-to-top').addClass('scrollTop');
      } else {
          $('#back-to-top').removeClass('scrollTop');
      }
  })

// ************** smooth scroll ****************

const scrollLinks = document.querySelectorAll(".scroll__link")

scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        
        links.classList.remove("show-links");
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
    //  position :
        let position;
        if(navbar.classList.contains("fixed")) {
            position = element.offsetTop - 48;
        } else {
              position = element.offsetTop - 96;
        }
        if (window.innerWidth < 992) {
          if(navbar.classList.contains("fixed")) {
            position = element.offsetTop - 48;
        } else {
            position = element.offsetTop - 332 - 48;
        }
      }
  // window scrollTo
      window.scrollTo ({
          left: 0,
          top : position,
          behavior: "smooth"
      });
    });
});