window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})

//scrool infinity horizontal animation
const track = document.querySelector(".carousel-cards");
track.innerHTML += track.innerHTML;
