








 function hi() {
    event.preventDefault();
var Name   =document.getElementById("name").value;
var Prenom =document.getElementById("prenom").value;
var AgeJ   =document.getElementById("AgeJ").value;
var AgeM    =document.getElementById("AgeM").value;
var AgeA    =document.getElementById("AgeA").value;
var  Password =document.getElementById("password").value;
var  PasswordC =document.getElementById("passwordC").value;

  
   if ( (Name.length==0)){
       document.getElementById("Erour1").innerHTML='nom non valide';
   }
   else  if ((Prenom.length==0)) {
       document.getElementById("Erour2").innerHTML='prénom non valide';
   }
   
    else if ((AgeJ>=31)||(AgeJ<=1)){
        document.getElementById("Erour4").innerHTML='jour non valide';
     }
     else  if ((AgeM>=12)||(AgeM<=1)){
       document.getElementById("Erour5").innerHTML='mois non valide';
    }
    else if ((AgeA>=2021)||(AgeA<=1900)){
       document.getElementById("Erour6").innerHTML='année non valide';
    }
   else if ( (Password.length==0)||(Password.length>=8)){
       document.getElementById("Erour7").innerHTML='Password non valide';
   }
   else if ( PasswordC==!Password){
       document.getElementById("Erour8").innerHTML='Password non valide';
   }

   
   
  
   
  else{
    
       alert('<br>"+"hello "+text+ Name +" <br>"+Prenom+" <br>"+"<br> "+AgeJ+" /"+AgeM+" /"+AgeA  +" <br>"+"<hr>"' ) ;
       vide();
      
   }
   function vide() {
           var inputs = document.querySelectorAll("input");
           var eros = document.getElementsByClassName("ero");
           
           for (let i = 0; i < inputs.length; i++) {
             inputs[i].value = "";
           }
           for (let i = 0; i < eros.length; i++) {
               eros[i].innerHTML = "";
             }
            }
           
}





var ok =document.getElementById("ok");

var h1z = document.querySelectorAll(".h1z");

  var pageNum=1;

ok.addEventListener("click",function(){
    var xReq = new XMLHttpRequest();
xReq.open('get','veille'+ pageNum +'.json');
xReq.onload = function(){
var xdata =JSON.parse(xReq.responseText);

       addHtml(xdata);
};
    pageNum++;
xReq.send();
if (pageNum>1 ){
    ok.classList.add("btnx");
    ok.style.backgroundColor="#eee";
    ok.style.color =" lightgray";
}
});


function addHtml(xdata){
    
        var a,b;
        for (i=0; i<xdata.length; i++){
            a +="<tr>"+"<td>"+xdata[i].Titre+"</td>"+"<td>"+xdata[i].date_exposé+"</td>"+"<td>"+xdata[i].Réailiser+"</td>"+"<td>"+xdata[i].line+"</td>"+"<tr>";
            b+="<br>"+xdata[i].Titre+xdata[i].date_exposé+"<br>"+xdata[i].Réailiser+xdata[i].line+"</br>";

          }
         h1z[0].insertAdjacentHTML('beforeend',a);
         h1z[1].insertAdjacentHTML('beforeend',b);

}














// recharche 





var clkik = document.getElementById("clkik");
clkik.addEventListener("click",function(){
    event.preventDefault();
    
    var xReq = new XMLHttpRequest();
xReq.open('get','veille1.json');
xReq.onload = function(){

var xdata =JSON.parse(xReq.responseText);
for (i=0;i<xdata.length;i++){
    if(xdata[i].Titre==document.getElementById("search").value){
      
        var h1z = document.querySelectorAll(".h1z");
     h1z[0].innerHTML+="<tr>"+"<td>"+xdata[i].Titre+"</td>"+"<td>"+xdata[i].date_exposé+"</td>"+"<td>"+xdata[i].Réailiser+"</td>"+"<td>"+xdata[i].line+"</td>"+"</tr>"
     
    }
    
   
 
}
};
    
xReq.send();

});
