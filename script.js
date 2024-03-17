function myFunc(){
  var x =document.getElementById("nav_links");
  
  var y = document.getElementById("icons");
 
  /*
  if(y.classList.contains("fa fa-bars")){
    y.classList.add("fa-solid fa-xmark");
  }else{
    y.classList.add("fa fa-bars");
  }
  */
  if(x.style.display==="block"){
    x.style.display="none";
    
  }else{
    x.style.display="block"
  }
}