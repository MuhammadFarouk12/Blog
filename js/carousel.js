let current = 0;
let length = Array.from(document.querySelectorAll("header#carousel .carousel img")).length;
Array.from(document.querySelectorAll("header#carousel .carousel img")).forEach(function(img){
    let bullet = document.createElement('div');
    bullet.classList.add("bullet");
    bullets.append(bullet);
});
if(Array.from(document.querySelectorAll(".bullet"))[0])Array.from(document.querySelectorAll(".bullet"))[0].classList.add('active')
function changeBy(current){
    Array.from(document.querySelectorAll("header#carousel .carousel img")).forEach(function(img){
        img.classList.remove("active");
    })
    Array.from(document.querySelectorAll("header#carousel .carousel img"))[current].classList.add('active')
    Array.from(document.querySelectorAll(".bullet")).forEach(function(img){
        img.classList.remove("active");
    })
    Array.from(document.querySelectorAll(".bullet"))[current].classList.add('active')
}
// console.log(current);
next.addEventListener('click', function(){
    current > length - 2 ? current = 0 : current++;
    changeBy(current)
})
prev.addEventListener('click', function(){
    current < 1 ? current = length - 1 : current--
    changeBy(current)
})
setInterval(function(){
    current > length - 2 ? current = 0 : current++;
    changeBy(current)
}, 5000)