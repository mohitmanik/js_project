const rect = document.querySelector("#box");

rect.addEventListener("mousemove",(details)=>{
  
    
    var recloc = rect.getBoundingClientRect(); 

    var insiderval = details.clientX-recloc.left; 
    var outsiderval = recloc.right - details.clientX; 
    if(insiderval<recloc.width/2){
          var redcolor = gsap.utils.mapRange(
            0,recloc.width/2,255,0,insiderval
          ); 

          gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,ease:Power4
          }); 
    }else{
        var bluecolor = gsap.utils.mapRange(
            0,recloc.width/2,255,0,outsiderval
          );

          gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,ease:Power4
          }); 
    }
})


rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:`rgb(255,255,255)`,ease:Power4
      }); 
})