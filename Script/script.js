// All Global Variable Here
let MainLogo = document.getElementById("MainLogo");
let ThreeDotBtnMain = document.getElementById("ThreeDotBtnMain");
let MainSearchInNav = document.getElementById("MainSearchInNav");
let windowOfThreeDotBtn = document.getElementById("windowOfThreeDotBtn");
let mainNav = document.getElementById("mainNav");
let NaviLinksSec = document.getElementById("NaviLinksSec");
let SearchInNavP = document.getElementById("SearchInNavP");
let imgP = document.getElementById("imgP");
let signInInNav = document.getElementById("signInInNav");
let MainBtnSubmitInNav = document.getElementById("MainBtnSubmitInNav");
let textHeadLatestSoftware = document.getElementById("textHeadLatestSoftware");
let darkmodeBtnMain = document.getElementById("darkmodeBtnMain");
let BiggestPrent = document.getElementById("BiggestPrent");
let navigation = document.getElementById("navigation");
let LinkInNav1 = document.getElementById("LinkInNav1");
let LinkInNav2 = document.getElementById("LinkInNav2");
let LinkInNav3 = document.getElementById("LinkInNav3");
let LinkInNav4 = document.getElementById("LinkInNav4");
let DotsInThreeDotBtn1 = document.getElementById("DotsInThreeDotBtn1");
let DotsInThreeDotBtn2 = document.getElementById("DotsInThreeDotBtn2");
let DotsInThreeDotBtn3 = document.getElementById("DotsInThreeDotBtn3");
let latestContent1 = document.getElementById("latestContent1");
let latestContent2 = document.getElementById("latestContent2");
let latestContent3 = document.getElementById("latestContent3");
let latestContent4 = document.getElementById("latestContent4");
let latestContent5 = document.getElementById("latestContent5");
let latestContent6 = document.getElementById("latestContent6");
let latestContent7 = document.getElementById("latestContent7");
let latestContent8 = document.getElementById("latestContent8");
let latestContent9 = document.getElementById("latestContent9");
let WindowsGame1 = document.getElementById("WindowsGame1");
let WindowsGame2 = document.getElementById("WindowsGame2");
let WindowsGame3 = document.getElementById("WindowsGame3");
let WindowsGame4 = document.getElementById("WindowsGame4");
let WindowsGame5 = document.getElementById("WindowsGame5");
let WindowsGame6 = document.getElementById("WindowsGame6");
let WindowsGame7 = document.getElementById("WindowsGame7");
let WindowsGame8 = document.getElementById("WindowsGame8");
let WindowsGame9 = document.getElementById("WindowsGame9");
let MainContainerOfWindowsGames = document.getElementById("MainContainerOfWindowsGames");
let feedback = document.getElementById("feedback");
let otherSites = document.getElementById("otherSites");
let helpinNav = document.getElementById("helpinNav");
let imgOfDark = document.getElementById("imgOfDark");
let appltthemetext = document.getElementById("appltthemetext");
let CreateAnAccount = document.getElementById("CreateAnAccount");
let MainContainerOfLatestSoftware = document.getElementById("MainContainerOfLatestSoftware");
let body = document.body;
let x_Axis = body.scrollLeft;

// My Object 
let MyObj = [NaviLinksSec,MainContainerOfLatestSoftware,MainContainerOfWindowsGames,BiggestPrent, SearchInNavP, imgP];

// Function Section Here 



//All Events Here
MainLogo.addEventListener('contextmenu', event => event.preventDefault());
ThreeDotBtnMain.addEventListener("click", function () {
   if (windowOfThreeDotBtn.style.display!="flex") {
    windowOfThreeDotBtn.style.display="flex";
   } else {
    windowOfThreeDotBtn.style.display="none";
   }
});


//Dark Theme Swiching Event & Function Here 
//Color Variables
let LiteBlack = "#1f1f1f";
let MoreLiteBlack = "#363636";
let Black = "black";
let White = "White";
let inputTextColor = "#fff7006b";
let previesColorTextBack = "#66ff0017";

// For Loop In Array    
let myobj1 = [LinkInNav1, LinkInNav2, LinkInNav3, LinkInNav4]
let myobj2 = [DotsInThreeDotBtn1, DotsInThreeDotBtn2, DotsInThreeDotBtn3];
let myobj3 = [darkmodeBtnMain, feedback,  otherSites, signInInNav, latestContent1, latestContent2, latestContent3, latestContent4, latestContent5, latestContent6, latestContent7, latestContent8, latestContent9,WindowsGame1, WindowsGame2, WindowsGame3, WindowsGame4, WindowsGame5, WindowsGame6, WindowsGame7, WindowsGame8, WindowsGame9];
// This Object is for white to lite black backgroud
let myobj4 = [MainContainerOfLatestSoftware, MainContainerOfWindowsGames]; 



darkmodeBtnMain.addEventListener("click", function () {
    if (body.style.backgroundColor!=Black) {
        for (let i = 0; i < myobj1.length; i++) {
            myobj1[i].style.backgroundColor=Black;
        }
        for (let i = 0; i < myobj2.length; i++) {
            myobj2[i].style.backgroundColor=White;
        }
        for (let i = 0; i < myobj3.length; i++) {
            myobj3[i].style.backgroundColor=MoreLiteBlack;
            myobj3[i].style.color=White;
        }
        for (let i = 0; i < myobj4.length; i++) {
            myobj4[i].style.backgroundColor=LiteBlack;
            // myobj4[i].style.color=White;
        }
        appltthemetext.textContent="Apply Light Theme";
        body.style.backgroundColor=Black;
        navigation.style.backgroundColor=LiteBlack;
        NaviLinksSec.style.backgroundColor=LiteBlack;
        ThreeDotBtnMain.style.backgroundColor=LiteBlack;
        windowOfThreeDotBtn.style.backgroundColor=LiteBlack;
        MainSearchInNav.style.backgroundColor=MoreLiteBlack;
        MainSearchInNav.style.color=White;
        textHeadLatestSoftware.style.color="#ff6a00";
        CreateAnAccount.style.color="#c593ff";
        MainBtnSubmitInNav.style.backgroundColor="#ffe8e8";
        MainBtnSubmitInNav.style.borderColor=White;
        imgOfDark.setAttribute("src", "Files/daymode.png")
        helpinNav.setAttribute("src", "Files/helpdark.png")
        
    } else {
        textHeadLatestSoftware.style.color="#0400ff";
        appltthemetext.textContent="Apply Dark Theme";
        MainSearchInNav.style.color=Black;
        CreateAnAccount.style.color="#551a8b";
        helpinNav.setAttribute("src", "Files/help.png")
        imgOfDark.setAttribute("src", "Files/darknight.png")
        ThreeDotBtnMain.style.backgroundColor=White;
        windowOfThreeDotBtn.style.backgroundColor=White;
        MainSearchInNav.style.backgroundColor=previesColorTextBack;
        MainBtnSubmitInNav.style.borderColor=Black;
        body.style.backgroundColor="whitesmoke";
        navigation.style.backgroundColor=White;
        NaviLinksSec.style.backgroundColor=White;
        for (let i = 0; i < myobj1.length; i++) {
            myobj1[i].style.backgroundColor="rgb(250, 250, 250)";
        }
        for (let i = 0; i < myobj2.length; i++) {
            myobj2[i].style.backgroundColor=Black;
        }
        for (let i = 0; i < myobj3.length; i++) {
            myobj3[i].style.backgroundColor="whitesmoke";
            myobj3[i].style.color=Black;
        }
        for (let i = 0; i < myobj4.length; i++) {
            myobj4[i].style.backgroundColor=White;
            // myobj4[i].style.color=Black;
        }
    }
});

// Some Variable Here
let containsSoftwreByCategoryMainP = document.getElementById("containsSoftwreByCategoryMainP");



// Event With "For" Loop
for (let i = 0; i < MyObj.length; i++) {
    MyObj[i].addEventListener("click", function () {
        if (windowOfThreeDotBtn.style.display!="none") {
            windowOfThreeDotBtn.style.display="none";
           }});
}

//Scroll Section
// window.onscroll = function() {myFunction()};
// function myFunction() {
//     if (document.documentElement.scrollTop > 80) {
//         mainNav.style.position="fixed";
//         mainNav.style.marginTop="-1rem";
        
//     } else {
//         mainNav.style.marginTop="0rem";
//         mainNav.style.position="relative";
        
//     }
// };
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.documentElement.scrollTop > 60) {
        MainContainerOfWindowsGames.className="AniArtiClass";
        containsSoftwreByCategoryMainP.className="AniArtiClass3ForP";
        containsSoftwreByCategoryMainP.className="AniArtiClass4ForP";
        
        
    } else {
        containsSoftwreByCategoryMainP.className="AniArtiClass3ForPReverse";
        MainContainerOfWindowsGames.className="AniArtiClass2";
        
    }
};
//if else Section Here
