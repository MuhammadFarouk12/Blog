let link = location.href;
let pageSId = Number(document.body.getAttribute('data-index'))
fetch("articles.json").then(function(result){
    let articles = result.json();
    return articles;
}).then(function(articles){
    let article = articles[pageSId];
    document.title = article.name;
    document.querySelectorAll('meta')[3].setAttribute('description', article.summary);
    // creating the background thumnail;
    article.date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`;
    const thum = 
    `<div class='thumCont'>
        <div class='thumImg' style="background-image: url(${article.thumnail})"></div>
    </div>
    <div class='container separator'></div>`;
    document.body.innerHTML += thum;

    let articleBody = document.createElement('section');
    articleBody.classList.add('lastArticles');
    articleBody.id = 'articleBody';
    articleBody.innerHTML = `
    <div class="container">
        <h1>${article.name}</h1>
    </div>

    <div class="container lastArtcicles">
        <div class="lastArticlesSide" dir='${article.english?'ltr':'rtl'}'>
        <time datatime='${article.date}' style='color: var(--main-cyan-color);float: right; margin-right: 40px;'>${article.date}</time>
        <span class='writer' style='color: var(--main-cyan-color);float: left; margin-left: 40px;'><i class='fas fa-user-edit'></i> ${article.writer}</span>
        <main style='color: var(--black)' class='article-content'>
            ${article.content}
        </main>
    </div>

    <div class="bussenissSide">
            <div class="social">
                <h4 class="title">Social Media</h4>
                <div class="icons"><i class="fab fa-facebook"></i><i class="fab fa-instagram"></i><i class="fab fa-twitter"></i><i class="fab fa-telegram-plane"></i><i class="first fas fa-heart"></i></div>
            </div>

            <div class="ads">
                <h4 class="title">Advertisment</h4>
                <div class="ad"></div>
            </div>

            <div class="hashtags">
                <h4 class="title">Hashtags</h4>
                <div class="hashes"></div>
            </div>
        </div>
    </div>

    <div class="container separator"></div>
    `;
    document.body.append(articleBody);
    // Start commentSection =================================================================;

    const commentSection = document.createElement('section');
    commentSection.classList.add('commentSection', 'container');
    document.body.append(commentSection);
    commentSection.innerHTML = `
    <h2 class='title-2'>التعليقات:</h2>
    
    <form method='post' class='comment-form'>
        <input class='input' type='text' name='name' placeholder='* الاسم' />
        <input class='input' type='email' name='email' placeholder='* البريد الإلكتروني' />
        <textarea class='input' placeholder='* إكتب تعليقك هنا ...'></textarea>

        <div>
            <input class='btn' type='submit' value='إرسال'>
        </div>

    </form>
    
    <div class='container separator'></div>
    
    <!---->
    <div class='commentsCont container'>
        <div class='comment comment-blue'>
            <div id='name'>${'أحمد قاسم'}</div>
            <time datatime='${'04:30'}'>${'04:30'}</time>
            <p class='comment-text'>${'أهلا أنا من محبي الموقع'}</p>
        </div>

        <div class='comment comment-green'>
            <div id='#name'>${'محمد علي'}</div>
            <time datatime='${'04:30'}'>${'04:30'}</time>
            <p class='comment-text'>${'مرحباً أنا من محبي الموقع'}</p>
        </div>
        <button class='btn more'>المزيد</button>
    </div>
    <!---->
    <div class='container separator'></div>
    <div class='container topicsMay'>

        <a href='' class='topicMay'>
            <div class='img' style='background-image: url(${articles[0].thumnail})'></div>
            <h4 class='name'>${articles[0].name}</h4>
        </a>

        <a href='' class='topicMay'>
            <div class='img' style='background-image: url(${articles[1].thumnail})'></div>
            <h4 class='name'>${articles[1].name}</h4>
        </a>

        <a href='' class='topicMay'>
            <div class='img' style='background-image: url(${articles[2].thumnail})'></div>
            <h4 class='name'>${articles[2].name}</h4>
        </a>

        <div class='separator'></div>
    </div>
    </div>
    `;
    document.body.innerHTML += `
    <footer id="footer">
        <div class="whoAreWe">
            <h2>من نحن ؟</h2>
            <p>إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.</p>
        </div>
        <div class="separator"></div>
        <form class="signIn" action="post">
            <input type="email" name="email" placeholder="البريد الإلكتروني" required>
            <input type="submit" value="إرسال">
        </form>
    </footer>
    <footer id="copyRights"></footer>
    `
    copyRights.innerHTML = `جميع الحقوق محفوضة لدى <a href="index.html"> الغابة الذكية</a> &copy; ${new Date().getFullYear()}`
});
// start hashes
fetch('hashes.json').then((r)=>r.json()).then((hashes)=>{
    hashes.forEach((hash,i)=>{
        let hashSpan = document.createElement('div');
        hashSpan.innerHTML = `#${hash}`;
        hashSpan.classList.add('hash');
        document.querySelector('.hashes').append(hashSpan);
    });
});
// Start comments Section;
// window.onload = function(){
//     console.clear();
// };s