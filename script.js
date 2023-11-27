var btn= document.getElementById('btn');
var errorMessage=document.getElementById('errorMessage');
var gallery=document.getElementById('gallery');
btn.addEventListener('click', async function fetchImage(){
  var inputValue=document.getElementById("input").value;
  if(inputValue>12|| inputValue<0){
    errorMessage.style.display="block";
    errorMessage.innerText="Number should be between 0 and 12."
    return 
  }
  imgs="";
  try{
    btn.style.display="none";
    var loading=`<img src="light.svg"/>`;
    gallery.innerHTML =loading;
    await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.floor(Math.random()*1000)}&client_id=FrBlDMGV835ss4PLFxDTBs5kk0vgEMaQtMgpd7pQYpk`).then((res)=>res.json().then((data)=>{
    if(data){
      data.forEach((pic)=>{
        // console.log(pic.urls.small);
        imgs += `<img src=${pic.urls.small} alt="image"/>`;
        gallery.style.display="block";
        gallery.innerHTML=imgs;
        btn.style.display="block";
      })
    }
  }))
  errorMessage.style.display="none";

  }catch(error){
     errorMessage.style.displau="block"
    errorMessage.innerHTML="An error happened,try again later."
    btn.style.display="block";
  }
   
    
  
  
})