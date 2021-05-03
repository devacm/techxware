let enterContentByJS = document.getElementById("enterContentByJS");
let lateSoft= document.getElementById("lateSoft");
let sec2= document.getElementById("sec2");
let downImageMain= document.getElementById("downImageMain");
let sec= document.getElementById("sec");
let cate= document.getElementById("cate");
let home= document.getElementById("home");
let search= document.getElementById("search");
let search_icon= document.getElementById("search_icon");
let signInNav= document.getElementById("signInNav");
let myobj = [home, lateSoft, cate, signInNav] ;


window.addEventListener("scroll", function () {
    const nav = document.getElementById("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
});

lateSoft.addEventListener("click", function () {
    sec2.scrollIntoView({
        behavior: "smooth"
    });
    
});
search_icon.addEventListener("click", function () {
       if (search.style.display!="flex") {
           search.style.display="flex";
        } else {
           search.style.display="none";
           
       }
    
});

downImageMain.addEventListener("click", function () {
    sec2.scrollIntoView({
        behavior: "smooth"
    });
    
});

cate.addEventListener("click", function () {
    sec3.scrollIntoView({
        behavior: "smooth"
    });
    
});

home.addEventListener("click", function () {
    sec.scrollIntoView({
        behavior: "smooth"
    });
    
});
