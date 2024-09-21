var crsr = document.querySelector("#cursor");
var crsr1 = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(e){
    var x = e.clientX;
    var y = e.clientY;
    
    // Update cursor position
    crsr.style.left = x + "px";
    crsr.style.top = y + "px";
    
    // Update blurred cursor position with offset
    crsr1.style.left = (x - 200) + "px";
    crsr1.style.top = (y - 200) + "px";
});


gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger : "#nav",
        scroller : "body",
        //markers: true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }

});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger : "#main",
        scroller : "body",
        //markers: true,
        start : "top -25%",
        end : "top -70%",
        scrub : 2
    }
})