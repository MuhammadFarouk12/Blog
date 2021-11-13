let socialIcons = Array.from(document.querySelectorAll(".container.lastArtcicles .bussenissSide .social .icons i"));
document.querySelector('.first').onclick = _=>{
    socialIcons.forEach(e=>{
        e.classList.toggle('active');
    })
}