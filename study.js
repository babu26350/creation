var scroll=document.getElementsByClassName("scroll")[0]
var ul=document.getElementsByTagName("ul")[0]


var listBar =document.getElementById("listbar")
listBar.setAttribute("onclick","newFun()")
  

function newFun(){
  scroll.style.display="inline-block"
scroll.style.width ="200px"
scroll.style.opacity ="10"
ul.style.justifyContent="flex-end"
ul.style.flexDirection="reverse"
listBar.innerHTML="&times"
listBar.setAttribute("onclick","myFun()")
goBack();

}
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    alert(decodedCookie)
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
  
  function myFun(){
    
scroll.style.width="0px"

listBar.setAttribute("onclick","newFun()")
ul.style.justifyContent="flex-start"
listBar.innerHTML=`<i class="material-icons">list</i>`

  }
  var dup =document.getElementById("ulDup")
  dup.style.display="none"
  var menu=document.getElementsByClassName("menu")[0]
  
function showNav(){
  
  dup.style.display="inline-block"

  dup.style.width="90px"
  menu.getAttributeNode("onclick").value= "goBack()"
  menu.innerHTML=`&times`
  
 
 
  
  

dup.style.zIndex="1"
myFun();
}
function goBack(){
  dup.style.width="0px"
  dup.style.display="none"

  
  menu.getAttributeNode("onclick").value= "showNav()"
  menu.innerHTML=`<i class="material-icons">menu</i>`
  
  }


 
 var val1 = ""
 var val2 = ""
 async function test(){
                
  const responce =await fetch("https://654f6363358230d8f0cd4325.mockapi.io/content/ret")
  const student = responce.json();
  return student;
}
test().then((res)=>{
  var js = [JSON.stringify(res)];
  var par =JSON.parse(js)

for(var i=3;i<par.length;i++){
val1+= `<div class="dd">
<button class="dd-btn">${par[i].Heading}</button>

<div class="dd-content">
   <a href="#">${par[i].subhead.sub1}</a>
   <a href="#">${par[i].subhead.sub2}</a>
   <a href="#">${par[i].subhead.sub3}</a>
</div>
</div>`

val2+=`<div class="content">
<h2 class="padding inline">${par[i].content1}</h2>
<img id="img"
src="${par[i].content2}"
style="padding: 20px;text-align:center;">

<p class="padding">${par[i].content3}</p>
<button class="btn">READ</button>
<button class="btn">BACK</button>
</div>`
document.getElementsByClassName("ds")[0].innerHTML=val1
document.getElementsByClassName("box")[0].innerHTML=val2

document.getElementsByClassName("aside")[0].innerHTML+=` <div class="asidBox">
<img id="smallimg" src="${par[i].content2}">
<p>${par[i].content1}</p>
</div> `

}});
var button =document.getElementsByClassName("dd-btn") 
  for(var i=0;i<button.length;i++){
   button[i].onclick=function(){
    var child =this.parentElement.children[1].children
     for(var x=0;x<child.length;x++){
      child[x].onclick=function(){
     alert("yes")
       }
     }
    }
   }

