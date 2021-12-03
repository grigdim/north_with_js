let e = document.getElementById("toggle");
let cb = document.getElementById("closebtn");
let m = document.getElementById("mySidenav");

function setD() {
  if (window.innerWidth > 680) {
    e.style.display = "none";
    cb.style.display = "none";
    m.classList.add("menu");
    m.classList.remove("sidenav");
  } else {
    e.style.display = "flex";
    cb.style.display = "inline-block";
    m.classList.remove("menu");
    m.classList.add("sidenav");
  }
}

window.onresize = setD;
window.addEventListener("resize", setD);
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("toggle").style.visibility = "hidden";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("toggle").style.visibility = "visible";
  document.body.style.backgroundColor = "white";
}

// function myFunction() {
//   if (window.innerWidth <= 680 && e.style.display === "none") {
//     e.style.display = "flex";
//   } else if (window.innerWidth <= 680 && e.style.display === "flex")
//     e.style.display = "none";
// }
