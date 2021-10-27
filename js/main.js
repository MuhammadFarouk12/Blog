let articles = [
    {
        thumnail: "images/articles/hacking.jpg",
        name: "How To Hack Nasa With HTML",
        summary: "Belive it or not, Nasa really can be hacked with HTML and CSS, Read This article to know how",
        writer: "محمد خالد",
    },
    {
        thumnail: "images/articles/hacking.jpg",
        name: "How To Hack Nasa With HTML",
        summary: "Belive it or not, Nasa really can be hacked with HTML and CSS, Read This article to know how",
        writer: "محمد خالد",
    },
    {
        thumnail: "images/articles/hacking.jpg",
        name: "How to learn programming",
        summary: "Wanna Learn programming but you have no idea how this article was created for you by our writer",
        writer: "محمد خالد",
    },
    {
        thumnail: "images/articles/redmi.jpg",
        name: "How To Know Wheather Or Not Your Redmin Phone Is a Global Version",
        summary: "If you are buying new redmi phone, be careful not to be tricked by sellers. Check your phone origanility by this way",
        writer: "محمد خالد",
    },
    {
        thumnail: "images/articles/hacking.jpg",
        name: "How To Hack Nasa With HTML",
        summary: "Belive it or not, Nasa really can be hacked with HTML and CSS, Read This article to know how",
        writer: "محمد خالد",
    },
    {
        thumnail: "images/articles/hacking.jpg",
        name: "How To Hack Nasa With HTML",
        summary: "Belive it or not, Nasa really can be hacked with HTML and CSS, Read This article to know how",
        writer: "محمد خالد",
    },
];
let lastArticles = [articles[articles.length-1],articles[articles.length-2],articles[articles.length-3],articles[articles.length-4]];
// Start Work Of Articles
const lastArticlesSection = document.querySelector(`section#lastArticles .container.lastArtcicles .lastArticlesSide`);
lastArticles.forEach(lastArticle =>{
    let article = document.createElement('article');
    article.innerHTML = `
    <a href=''><div class='thumnail' style='background: url(${lastArticle.thumnail})'></div></a>
    <div class='text'>
        <h3>${lastArticle.name}</h2>
        <p>${lastArticle.summary}</p>
        <footer>
            <a href=''>قراءة المزيد</a>
            <time datatime='2021-10-27'>2021-10-27</time>
            <span class='writer'><i class='fas fa-user-edit'></i> ${lastArticle.writer}</span>
        </footer>
    </div>
    `;
    lastArticlesSection.append(article);
});
let hashes = ['Web', 'Back-end', 'Linux', 'React', 'Python', 'Oracle'];
hashes.forEach((hash,i)=>{
    let hashSpan = document.createElement('div');
    hashSpan.innerHTML = `#${hash}`;
    hashSpan.classList.add('hash');
    document.querySelector('.hashes').append(hashSpan);
})