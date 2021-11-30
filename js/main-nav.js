setTimeout(function() {
    Array.from(document.querySelectorAll('nav.links .container > ul li')).forEach(link=>{
        link.style.setProperty('--color', link.getAttribute('data-color'));
    });
    mainSearch.onclick = ()=>{
        mainSearch.firstElementChild.classList.toggle('active');
        mainSearch.firstElementChild.focus();
    };
    burger.onclick = ()=>{
        options.classList.toggle('active');
        burger.classList.toggle('active');
    };
    changeTheme.onclick = ()=>document.firstElementChild.classList.toggle('dark');
    console.log('hello world');
},1000)