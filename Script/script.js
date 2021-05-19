let enterContentByJS = document.getElementById("enterContentByJS");
let lateSoft = document.getElementById("lateSoft");
let sec2 = document.getElementById("sec2");
let downImageMain = document.getElementById("downImageMain");
let sec = document.getElementById("sec");
let cate = document.getElementById("cate");
let home = document.getElementById("home");
let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");
let signInNav = document.getElementById("signInNav");
let Search2 = document.getElementById("Search2");
let moreNavi = document.getElementById("moreNavi");
let Mobilehome = document.getElementById("Mobilehome");
let MobilelateSoft = document.getElementById("MobilelateSoft");
let Mobilecate = document.getElementById("Mobilecate");
let OptionForMobileP = document.getElementById("OptionForMobileP");
let myobj = [home, lateSoft, cate, signInNav];
let nav = document.getElementById("nav");
let ToTopBTN = document.getElementById("ToTopBTN");
moreNavi.addEventListener("click", function () {
    if (OptionForMobileP.className!="MobileTogg1") {
        OptionForMobileP.className="MobileTogg1"
    } else {
        OptionForMobileP.className="MobileTogg2"        
    }
});
MobilelateSoft.addEventListener("click", function () {
    sec2.scrollIntoView({
        behavior: "smooth"
    });

});
lateSoft.addEventListener("click", function () {
    sec2.scrollIntoView({
        behavior: "smooth"
    });

});
let Backbg = "url(/Files/crossIcon.png)";
let Backbg2 = "url(/Files/SearchIcon.PNG)";
search_icon.addEventListener("click", function () {
    search.classList.toggle("searchani");
    Search2.classList.toggle("SearchingTogg");
    search_icon.classList.toggle("SearchMainTogg");

});

downImageMain.addEventListener("click", function () {
    sec2.scrollIntoView({
        behavior: "smooth"
    });

});

Mobilecate.addEventListener("click", function () {
    sec3.scrollIntoView({
        behavior: "smooth"
    });

});
cate.addEventListener("click", function () {
    sec3.scrollIntoView({
        behavior: "smooth"
    });

});

Mobilehome.addEventListener("click", function () {
    sec.scrollIntoView({
        behavior: "smooth"
    });

});
home.addEventListener("click", function () {
    sec.scrollIntoView({
        behavior: "smooth"
    });

});
window.addEventListener("scroll", function () {
    // nav.classList.toggle("sticky", window.scrollY > 0)
    if (window.scrollY > 350) {
        ToTopBTN.style.display="flex"
    } else {
        ToTopBTN.style.display="none"
        
    }
});
ToTopBTN.addEventListener("click", function () {
    sec.scrollIntoView({
        behavior: "smooth"
    });
});
