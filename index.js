const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
  }
});

// Fixed Nav
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fix-nav");
  } else {
    nav.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = nav.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position;
    }

    window.scrollTo({
      top: position,
      left: 0,
    });

    menu.classList.remove("show");
  });
});

AOS.init();


// sending emails

    
// (function () {
//   // emailjs.init("USERID");
//   emailjs.init("ZMuZ6kfJ7Na8nsEaS");
// })();



// function validate() {
//   let loader = document.querySelector(".loader");
//   let name = document.querySelector(".name");
//   let mail = document.querySelector(".email");
//   let msg = document.querySelector(".message");


// function sendmail(name, mail, msg) {
//   emailjs.send("service_x9fw0wr", "template_ertnsfs", {
 
//     from_name: name,
//     email: mail,
//     message: msg,
   
//   });
// }
// // email: email,
// function emptyerror() {
//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Fields cannot be empty!",
//   });
// }

// function error() {
//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Something went wrong!",
//   });
// }

// function success() {
//   Swal.fire({
//     icon: "success",
//     title: "Success...",
//     text: "Successfully sent message",
//   });
// }
// let btn = document.querySelector(".form");

//   btn.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (name.value == "" || mail.value == "" || msg.value == "") {
//       emptyerror();
//     } else {
//       loader.style.display = "flex";
//       sendmail(name.value, mail.value, msg.value);
//       success();
//       loader.style.display = "none";
//     }
//   });
// }
// validate();



