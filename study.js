var scroll=document.getElementsByClassName("scroll")[0]
var ul=document.getElementsByTagName("ul")[0]


var listBar =document.getElementById("listbar")
listBar.setAttribute("onclick","newFun()")
  
var date=new Date()
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
                
  const responce =await fetch("https://660ac426ccda4cbc75dbc0e1.mockapi.io/ser1/astroser2")
  const student = responce.json();
  return student;
}
test().then((res)=>{
  var js = [JSON.stringify(res)];
  var par =JSON.parse(js)

for(var i=0;i<par.length;i++){
val1+= `<div class="dd">
<button class="dd-btn"><a href="#${par[i].Heading}">${par[i].Heading}</a></button>


</div>`

val2+=`<div class="content">
<h1 id="${par[i].Heading}" class="padding inline">${par[i].Heading}</h1>
<img id="img"
src="${par[i].image}"
style="padding: 20px;text-align:center;">
<p style="font-size:10px;color:gray;">${date}<p>
<p class="padding">${par[i].content}</p>
<button id="${i}" class="btn"><a href="#${i-1}">BACK</a></button>
<button class="btn"><a href="#${i+1}">NEXT</a></button>

</div>`


//document.getElementsByClassName("aside")[0].innerHTML+=` <div class="asidBox">
//<img id="smallimg" src="${par[i].content2}">
//<p>${par[i].content1}</p>
//</div> `

}
document.getElementsByClassName("ds")[0].innerHTML=val1
document.getElementsByClassName("box")[0].innerHTML+=val2

});
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

