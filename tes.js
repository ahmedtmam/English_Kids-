 setInterval(function(){localStorage.clear();},5000);

 document.getElementById("submit").addEventListener("click",function(e){
    
 document.getElementById("showchar").removeChild("button");
 document.getElementById("showimg").removeChild("charimg");

})
 var submit =document.getElementById("submit");
 submit.addEventListener("click",makeid);
 submit.addEventListener("click",function(e) {
   var btngener=e.type+", "+ e.target +","+new Date();
   var old = localStorage.getItem("clickgenerate");
   if(old === null) 
   window.localStorage.setItem("clickgenerate",btngener);
   else
   window.localStorage.setItem("clickgenerate",old + btngener);
});
function makeid() {
   var text=document.getElementById("t");
   var numb=text.value;
    var result    = '';
    var characters    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var Lengthcharacters = characters.length;
    if(numb>0&&numb<27){
    for ( var i = 0; i < numb; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * Lengthcharacters));
    } createbutton(result); 
    }}
function createbutton(result)
   {  var showchar=document.getElementById("showchar");
	   if(showchar.innerHTML !=null)
		showchar.innerHTML=null;
       for(var i=0;i<result.length;i++)
	   {
var buttonchar = document.createElement("input");
  showchar.appendChild(buttonchar);
buttonchar.setAttribute("type","submit");
buttonchar.setAttribute("value",result[i]);
buttonchar.setAttribute("class","char");
buttonchar.addEventListener("click",function(e){
   var e_btnalphabet=e.type+", "+ e.target +","+new Date();
 var old = localStorage.getItem("clickalphabet");
    if(old === null) 
    window.localStorage.setItem("clickalphabet",e_btnalphabet);
	 else
    window.localStorage.setItem("clickalphabet",old + e_btnalphabet);
var showimg=document.getElementById("showimg");
var image=document.createElement("img");
		
		showimg.innerHTML=null;
		showimg.appendChild(image);
		image.src=e.target.value+".jpg ";
		image.setAttribute("class","charimg");
	   });

	}  
}



    
    
 