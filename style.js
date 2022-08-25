let html = document.querySelector("html");
let body = document.querySelector("body");
let dots = document.getElementById("dots");
let menu = document.getElementById("menu");
let back = document.getElementById("back");
let page = document.getElementById("page");
let down =document.getElementsByClassName("i");
let search = document.getElementById("search");
let main = document.getElementById("main");
let fav = document.getElementById("fav");
let noti =document.getElementById("alert");
var SFU=[];
let request=document.getElementById("request");
let b="blue";
let c="white";
let backpress =document.getElementsByClassName("backpress");
let f="Times New Roman";
var read = 0;
let leftarrow=document.getElementsByClassName("leftarrow");
let visit=document.getElementsByClassName("name");
let frameFAV=document.getElementsByClassName("frameFAV");
let rf=document.getElementsByClassName("postBody");
let rff=document.getElementsByClassName("postBodyfav");
let View = document.getElementById("View");
let MainActivity = document.getElementById('MainActivity');
let SecondActivity = document.getElementById("SecondActivity");
let ThirdActivity = document.getElementById("ThirdActivity");
let FourthActivity = document.getElementById("FourthActivity");
let toolbar = document.querySelector("#toolbar");
let zero = 0;
let more = document.getElementById("more");
let current = 393;
var postLength = localStorage.getItem("postLength");
let FAVPAGE=document.getElementById("FavX");
let l = 0;
let film = document.getElementById("film");
let mail = document.getElementById("mail");
let frame = document.getElementsByClassName("frame");
let rc = document.getElementsByClassName("photoRC");
let rcf = document.getElementsByClassName("photoRCF");
let preView = document.getElementsByClassName("style");
var cur = 1;
let hide=document.getElementsByClassName("hide");
let MAX =document.getElementsByClassName("max");
let favArray=[];
let favSet=document.getElementsByClassName("button");
let photoRCFAV=document.getElementsByClassName("photoRCFAV");
let photoRC=document.getElementsByClassName("photoRC");
let unlike=document.getElementsByClassName("unlike");
let descrip=document.getElementsByClassName("descTiTle");
let favTxt=document.getElementsByClassName("descFAV");
document.body.onload=function(){
     for (var i = 0; i <PGSdata.length; i++) {
         if(localStorage.getItem(PGSdata[i].id)==null){
        localStorage.setItem("Hello","active");
         }else{
             localStorage.removeItem("Hello");
         }
     }
    localStorage.removeItem("postLength");
}
window.addEventListener("load", function() {
    MaxLength();wide=0;
    noti.style.display="block";
    setTimeout(function() {
    for (var i = 0; i < descrip.length; i++) {
        if (descrip[i].innerHTML=="Not Found") {
            descrip[i].innerHTML="";
        }
    }
    },500);
     setTimeout(function() {
         postView();
         noti.style.display="none";
         
     }, 10);favHitEV();
    if (postLength == null) {
        postLength = 0;
    }
    html.width = window.innerWidth;
    html.height = window.innerHeight;
    if (window.innerWidth > 393 && window.innerHeight < 776) {
        body.style.width = "776px";
        body.style.height = "309px";
    }
    MainActivity.style.height = window.innerHeight-120;
});
dots.onclick = function() {
    menu.style.transform = "scale(1)";
}
back.onclick = function() {
    menu.style.transform = "scale(0)";
}
page.onclick = function() {
    let to = current;
    film.style.marginLeft = `-${to}`;
    loadPage();
    return read = 0;
}
search.onclick = function() {
    let to = current*2;
    film.style.marginLeft = `-${to}`;
    return read = 0;
}
main.onclick = function() {
    film.style.marginLeft = 0;
    noti.style.display="block";
    setTimeout(function() {
    MaxLength();
    postView();
    noti.style.display="none";
    }, 200);
}
fav.onclick = function() {
        favPageLoad();
    let to = current*3;
    film.style.marginLeft = `-${to}`;
    return read = 0;
}
mail.onclick = function() {
    let to = current*4;
    film.style.marginLeft = `-${to}`;
    Less();
    return read = 0;
}
/*This function will help for more data loading when we get more user search for more*/
function RMFav(id){
    localStorage.removeItem(id);
}
function favPageLoad(){
    let ufp=postDATA.filter(function(fva){
         return localStorage.getItem(fva.pid)!==null;
     });
     let userFPost =ufp.map(function(p) {
        return "<div class='style'>"+"<div id='desc'class='hide'>"+"<embed class='profile'src='"+p.admLOGO+"'/>"+"<span class='head'>"+p.adm+"</span>"+"<tt class='date'>"+p.date+"</tt>"+"<code class='type'>"+p.type+"</code>"+"</div>"+"<button class='unlike'><i class='i'></i></button>"+"<div class='postBodyfav'>"+"<div class='frameFAV'>"+"</div>"+"<p class='descFAV'>Data Loading....</p>"+"</div>"+"</div>";
    });
     setTimeout(function() {
        for (var u = 0; u <unlike.length; u++) {
            unlike[u].onclick=ufp[u].rml;
            unlike[u].onmouseover=function(){
                this.style.backgroundColor="white";
            }
          if(favTxt[u].innerHTML=="Not Found"){
                favTxt[u].innerHTML="";
            }
        };
     }, 100);
     if(ufp.length == 0){
         FAVPAGE.innerHTML ="<div id='n'><h1 id='o'>No Favorite Post</h1></div>";
     }else{
FAVPAGE.innerHTML=userFPost.join("");
    }
    for (var f = 0; f <ufp.length; f++) {
        let fIMG=ufp[f].photos.map(function(fimg){
            return "<embed class='photoRCFAV'src='"+fimg+"'/>";
        });
        frameFAV[f].innerHTML=fIMG.join(" ");
    }
    for (var l = 0; l < frameFAV.length; l++) {
        let cvf = frameFAV[l].getElementsByClassName("photoRCFAV");
        frameFAV[l].onclick=function(){
            for (var i = 0; i <cvf.length; i++) {
                cvf[i].style.display="block";
                cvf[i].style.width="95%";
                cvf[i].style.margin="5px auto"
            }
        }
        switch (cvf.length) {
            case 1:for (var i = 0; i < cvf.length; i++) {
                    cvf[i].style.width = "100%";
                    cvf[i].style.maxHeight ="400px";
                };
                break;

            case 2:
                for (var i = 0; i < cvf.length; i++) {
                    cvf[i].style.width = "45%";
                    cvf[i].style.height = "auto";
                }
                break;

            case 3:
                cvf[0].style.width = "46%";
                cvf[1].style.width = "46%";
                cvf[0].style.maxHeight = "215px";
                cvf[1].style.maxHeight = "215px";
                cvf[2].style.width = "45%";
                cvf[2].style.margin = "auto auto";
                cvf[2].style.display = "block";
                cvf[2].style.maxHeight = "215px";
                break;
            case 4:
                for (var i = 0; i < cvf.length; i++) {
                    cvf[i].style.width = "46%";
                    cvf[i].style.maxHeight = "215px";
                     frameFAV[i].style.height="fit-content";
                }
                break;
        }
        if(cvf.length >4){
            for (var i =4; i <cvf.length; i++) {
                cvf[i].style.display="none";
            }
              for (var lo = 0; lo <4; lo++) {
            cvf[lo].style.width="46%";
            cvf[lo].style.height="auto";
            cvf[lo].style.display=""
        }
        }
    }
    for (var i = 0; i <rff.length; i++) {
        rff[i].onclick=function(){
            read+=1;
            if(read==1){
            this.style.position="fixed";
            this.style.top="0px";
            this.style.left="0px";
            this.style.width="100%";
            this.style.height="100%";
            this.style.margin="0px";
            this.style.overflow="scroll";
            this.style.maxHeight="100%";
            this.backgroundColor="#E0E0E0";
            for (var h = 0; h < hide.length; h++) {
               hide[h].style.display="none";
            }
            for (var i = 0; i < photoRCFAV.length; i++) {
          photoRCFAV[i].onclick=function(){
              open(this.src);
          }
      }
        for (var i = 0; i < photoRC.length; i++) {
          photoRC[i].onmouseover=function(){
              open(this.src);
          }
      }
            }else{
            read=0;
            this.style.position="static";
            this.style.height="fit-content";
            this.style.paddingBottom="5px";
            this.style.margin="0px";
            this.style.overflow="hidden";
            this.style.maxHeight="570px"
            this.style.margin="10px auto";
            for (var h = 0; h < hide.length; h++) {
               hide[h].style.display="grid";
            }
            }
        }
    }
    ufp.forEach(function(z,e){
        for (var i = 0; i <ufp.length; i++) {
            fetch(ufp[e].desc).then(tpl=>tpl.text()).then(s=>favTxt[e].innerHTML=s);
        }
    });
}