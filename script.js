document.querySelector("#elem1").addEventListener("mousemove",function(){
    document.querySelector("#elem1-img1").style.opacity = 0
    document.querySelector("#elem1-img2").style.opacity = 1

});
document.querySelector("#elem1").addEventListener("mouseleave",function(){
    document.querySelector("#elem1-img1").style.opacity = 1
    document.querySelector("#elem1-img2").style.opacity = 0

});

document.querySelector("#elem2").addEventListener("mousemove",function(){
    document.querySelector("#elem2-img1").style.opacity = 0
    document.querySelector("#elem2-img2").style.opacity = 1

});
document.querySelector("#elem2").addEventListener("mouseleave",function(){
    document.querySelector("#elem2-img1").style.opacity = 1
    document.querySelector("#elem2-img2").style.opacity = 0

});
