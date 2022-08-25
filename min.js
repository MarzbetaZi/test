const pages = document.getElementById("PageX");
let servic = document.getElementsByClassName("page");
var logo = document.getElementsByClassName("logo");
let follow = document.getElementsByClassName("follow");
let followEventList = document.getElementsByClassName("myFollow");
let wide=0;
var limit = 1;
var activePost =[];
var setLimit=3;
function loadPage() {
    var PGS = PGSdata.filter(function(x) {
        return localStorage.getItem(x.id) == null
    });
    for (var i = 0; i < PGS.length; i++) {
        SFU[i] = PGS[i];
    }
    let foryou = SFU.map(function(fu) {
        return "<div class='page'>"+"<div class='logodiv'>"+"<embed class='logo'src='"+fu.embed+"'/>"+"</div>"+"<a href='"+fu.home+"'><span class='name'>"+fu.name+"</span></a>"+"<button class='follow'>Follow</button>"+"</div>";
    });
     if(SFU.length==0){
        pages.innerHTML="<img src='resource/search.jpg'id='nopage'/><h1>No Page found</h1>";
    }else{
    pages.innerHTML = foryou.join("");
    }
    for (var i = 0; i < follow.length; i++) {
        follow[i].onclick = SFU[i].ID;
        visit[i].onclick = SFU[i].letfetch;
    }
}
//Post Algorithm
function postView() {
    let postSize = postDATA.filter(function(m) {
        return localStorage.getItem(m.id) !== null;
    });
    if(setLimit <=postSize.length){
        setLimit+=1;
    }else if(setLimit >=postSize.length){
        setLimit =postSize.length;
        noti.style.display="none";
    }
    for (var i = 0; i <setLimit; i++) {
    activePost[i] =postSize[i];
    }
    let posting = activePost.map(function(p) {
        return "<div class='style'>"+"<div id='desc'class='hide'>"+"<embed class='profile'src='"+p.admLOGO+"'/>"+"<a href='"+p.home+"'>"+"<span class='head'>"+p.adm+"</span></a>"+"<tt class='date'>"+p.date+"</tt>"+"<code class='type'>"+p.type+"</code>"+"</div>"+"<button class='button'><i class='i'></i></button>"+"<div class='postBody'>"+"<p class='descTiTle'>"+"please wait..!"+"</p>"+"<div class='frame'>"+"</div>"+"<span class='max'>max</span>"+"</div>"+"</div>"+"<div class='backpress'><div class='leftarrow'></div><tt class='view'>View</tt></div>"+"<hr/>";
    });
    MainActivity.innerHTML = posting.join("");
    activePost.forEach(function(x,y){

            fetch(activePost[y].desc).then(ct=>ct.text()).then(gt=>descrip[y].innerHTML=gt);
        
    });
    for (var i = 0; i < activePost.length; i++) {
        favSet[i].onclick = function() {
            this.style.backgroundColor = "#CCCCCC";
        };
        favSet[i].onmousedown = activePost[i].fav;
        let setData = activePost[i].photos.map(function(x) {
            return "<embed class='photoRC'src='"+x+"'/>";
        });
        frame[i].innerHTML = setData.join("");
        favArray[i] = activePost[i];
    }
    for (var i = 0; i < rf.length; i++) {
        rf[i].onclick = function() {
                read+=1;
 if (read==1) {
        read+=0;
        this.style.position = "fixed";
        this.style.top = "50px";
        this.style.left = "0px";
        this.style.width = "100%";
        this.style.height = "86.5%";
        this.style.margin = "0px";
        this.style.overflow = "scroll";
        this.style.maxHeight = "100%";
        this.backgroundColor = "#E0E0E0";
for (var h = 0; h < hide.length; h++) {
    hide[h].style.transform="scale(0)";
                }
for(var d=0;d<down.length;d++){
    down[d].style.display="none";
}
 }if(read==0){
     this.style.maxHeight="550px";
     this.style.position="static";
     this.style.overflow="hidden";
   }
  for (var i = 0; i < backpress.length; i++) {
    backpress[i].style.transform="scale(1)";
    leftarrow[i].onclick=function(){
        wide=0;
        read=0;
     if(read==0){
        for(var d=0;d<down.length;d++){
    down[d].style.display="block";
}
          for (var rc = 0; rc <rf.length; rc++) {
     rf[rc].style.maxHeight="550px";
     rf[rc].style.position="static";
     rf[rc].style.overflow="hidden";
     backpress[rc].style.transform="scale(0)";
     hide[rc].style.transform="scale(1)";
      }
     }
     photoRSD();
    }
   }
  }
 }
    photoRS();
    for (var i = 0; i <MAX.length; i++) {
        let photoI =frame[i].getElementsByClassName("photoRC");
        MAX[i].innerText=photoI.length+" photos";
    }
}

function setFav(sf) {
    localStorage.setItem(sf, "favorite");
}
function IDSET(id) {
    localStorage.setItem(id, "Active");
}
function IDRM(ie) {
    localStorage.removeItem(ie);
}
function photoRS(){
        for (var l = 0; l < frame.length; l++) {
        let cv = frame[l].getElementsByClassName("photoRC");
        frame[l].onclick = function() {
            for (var i = 0; i < cv.length; i++) {
                cv[i].style.display = "block";
                cv[i].style.width = "95%";
                cv[i].style.margin = "5px auto"
            }
        }
        switch (cv.length) {
            case 1: for (var i = 0; i < cv.length; i++) {
                cv[i].style.width = "100%";
                cv[i].style.maxHeight = "400px";
            };
                break;

            case 2:
                for (var i = 0; i < cv.length; i++) {
                    cv[i].style.width = "45%";
                    cv[i].style.height= "auto";
                    cv[0].style.marginLeft="15px"
                }
                break;

            case 3:
                cv[0].style.width = "46%";
                cv[1].style.width = "46%";
                cv[0].style.maxHeight = "215px";
                cv[1].style.maxHeight = "215px";
                cv[2].style.width = "auto";
                cv[2].style.margin = "auto auto";
                cv[2].style.display = "block";
                cv[2].style.maxHeight = "215px";
                break;
            case 4:
                for (var i = 0; i < cv.length; i++) {
                    cv[i].style.width = "46%";
                    cv[i].style.maxHeight = "215px";
                    frame[i].style.height = "fit-content";
                }
                break;
        }
        if (cv.length > 4) {
            for (var i = 4; i < cv.length; i++) {
                cv[i].style.display = "none";
            }
            for (var lo = 0; lo < 4; lo++) {
                cv[lo].style.width = "47%";
                cv[lo].style.height = "auto";
            }
        }
      for (var i = 0; i < cv.length; i++) {
           cv[i].onclick =function(){
               wide+=1;
               if(wide>1){
    localStorage.setItem("carryer",this.src);
     setTimeout(function() {
         open("support.html")
     }, 500);
               }
           }
       }
    }
}
function photoRSD(){
    for (var i = 0; i <frame.length; i++) {
        let rsp=frame[i].getElementsByClassName("photoRC");
        if(rsp.length==2){
            for (var t = 0; t <2; t++) {
                rsp[t].style.width="45%";
                rsp[t].style.display="inline";
                rsp[t].style.margin="5px";
            }
        } if(rsp.length==3){
            for (var t = 0; t <2; t++) {
                rsp[t].style.width="45%";
                rsp[t].style.display="inline";
                rsp[t].style.margin="5px";
            }
        } 
        if(rsp.length>4){
            for (var t = 0; t <4; t++) {
                rsp[t].style.width="45%";
                rsp[t].style.display="inline";
                rsp[t].style.margin="5px";
        for (var h = 4; h <rsp.length; h++) {
                rsp[h].style.display="none";
                }
            }
        }
    }
}
 function MaxLength(){
     setTimeout(function() {
 for (var i = 0; i < frame.length; i++) {
  let max=frame[i].getElementsByClassName("photoRC");
  MAX[i].innerText=max.length+" photos";
         }
     }, 10);
 }