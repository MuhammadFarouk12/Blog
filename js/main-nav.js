mainSearch.onmouseover = ()=>mainSearch.firstElementChild.classList.add('active');
mainSearch.onmouseout = ()=>mainSearch.firstElementChild.classList.remove('active');
burger.onclick = ()=>{
    options.classList.toggle('active');
    burger.classList.toggle('active');
};
changeTheme.onclick = ()=>document.firstElementChild.classList.toggle('dark');