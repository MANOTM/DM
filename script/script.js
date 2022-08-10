let showNav = document.getElementById("show-nav"),
  navBar = document.querySelector("header .nav");

showNav.onclick = () => {
    navBar.classList.toggle("activ");
  document.querySelector("header").classList.toggle("show");
};

let header=document.querySelector('header')
window.onscroll=()=>{
    if(this.scrollY>70){
      header.classList.add("activ")
    }else{
      header.classList.remove("activ")
    }
}
let servicesBar = document.querySelectorAll(".servicesBar div"),
  content = document.querySelector(".services .content");
servicesBar.forEach((item) => {
  item.onclick = () => {
    servicesBar.forEach((div) => div.classList.remove("activ"));
    item.classList.add("activ");

    content.classList.toggle("animation");
    if (item.dataset.service == "Apartments") {
      item.classList.remove("animation");
      content.querySelector("h1").innerHTML = "SEO Analysis & Daily Reports";
      content.querySelector("img").src = "images/services-image.jpg";
    } else if (item.dataset.service == "Food") {
      content.querySelector("h1").innerHTML = "Healthy Food & Life";
      content.querySelector("img").src = "images/services-image-02.jpg";
    } else if (item.dataset.service == "Cars") {
      content.querySelector("h1").innerHTML = "Car Re-search & Transport";
      content.querySelector("img").src = "images/services-image-03.jpg";
    } else if (item.dataset.service == "Shopping") {
      content.querySelector("h1").innerHTML = "Online Shopping & Tracking ID";
      content.querySelector("img").src = "images/services-image-04.jpg";
    } else if (item.dataset.service == "Traveling") {
      content.querySelector("h1").innerHTML = "Enjoy & Travel";
      content.querySelector("img").src = "images/services-image.jpg";
    }
  };
});
