fetch('articles.json').then(function(result){
    return result.json();
}).then(function(articles){
    let lastArticles = [articles[articles.length-1],articles[articles.length-2],articles[articles.length-3],articles[articles.length-4]];
// Start Work Of Articles;
const lastArticlesSection = document.querySelector(`section#lastArticles .container.lastArtcicles .lastArticlesSide`);
lastArticles.forEach(lastArticle =>{
    let article = document.createElement('article');
    article.innerHTML = `
    <a target='_blank' href='${lastArticle.link}'><div class='thumnail' style='background: url(${lastArticle.thumnail})'></div></a>
    <div class='text'>
        <h3>${lastArticle.name}</h2>
        <p dir='${lastArticle.english?'ltr':'rtl'}'>${lastArticle.summary}</p>
        <footer>
            <div class='cont'><a target='_blank' href='${lastArticle.link}'>قراءة المزيد</a></div>
            <time datatime='2021-10-27'>2021-10-27</time>
            <span class='writer'><i class='fas fa-user-edit'></i> ${lastArticle.writer}</span>
        </footer>
    </div>
    `;
    lastArticlesSection.append(article);
});
})
fetch('hashes.json').then((r)=>r.json()).then((hashes)=>{
    hashes.forEach((hash,i)=>{
        let hashSpan = document.createElement('div');
        hashSpan.innerHTML = `#${hash}`;
        hashSpan.classList.add('hash');
        document.querySelector('.hashes').append(hashSpan);
    });
})
// End Work Of Artcicles;
// Start footer contents;
let contents = document.querySelectorAll('.container.contents a');
contents.forEach((link, i)=>{
    link.innerHTML = i+1;
})