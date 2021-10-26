mainSearch.onmouseover = ()=>mainSearch.firstElementChild.classList.add('active');
mainSearch.onmouseout = ()=>mainSearch.firstElementChild.classList.remove('active');
burger.onclick = ()=>{
    options.classList.toggle('active');
    burger.classList.toggle('active');
};

Array.from(document.querySelectorAll('nav.links .container ul li')).forEach(link=>{
    link.style.setProperty('--color', link.getAttribute('data-color'));
})
