//Вставка тегов
let activeTextarea = null;

document.addEventListener('focusin', (e) => {
    if (e.target.tagName === 'TEXTAREA') {
        activeTextarea = e.target;
    }
});

function insertTag(openTag, closeTag = '') {
    if (!activeTextarea) return;

    const textarea = activeTextarea;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const value = textarea.value;

    textarea.value =
        value.slice(0, start) +
        openTag +
        value.slice(start, end) +
        closeTag +
        value.slice(end);

    const cursorPos = start + openTag.length;
    textarea.setSelectionRange(cursorPos, cursorPos);
    textarea.focus();
}

// Кнопки для добавления новостей и анекдотов в блок
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-news-btn')) {
        const btn = e.target;
        const news = document.createElement('div');
        news.innerHTML = `
            <div class="news-text-block">
                <input class="news-h3" placeholder="Название новости">
                <textarea class="news-text"></textarea>
            </div>
        `;

        btn.before(news.firstElementChild);
    } else if (e.target.classList.contains('add-anecdote-btn')) {
        const btn = e.target;
        const anecdote = document.createElement('div');
        anecdote.innerHTML = `
            <div class="anecdote-text-block">
                <input class="anecdote-name" placeholder="Название анекдота">
                <textarea class="anecdote-text"></textarea>
            </div>
        `;

        btn.before(anecdote.firstElementChild);
    }
});

// Кнопка для добавления блока новости
const addNewsBlockBtn = document.getElementById('add-news-block-btn');
addNewsBlockBtn.addEventListener('click', () => {
    const newsBlock = document.createElement('div');
    newsBlock.innerHTML = `
        <div class="news-block">
            <input class="news-h2" placeholder="От n месяца N">
            <div class="news-text-block">
                <input class="news-h3" placeholder="Название новости">
                <textarea class="news-text"></textarea>
            </div>
            <button class="add-news-btn">Добавить новость в блок</button>
        </div>
    `;

    addNewsBlockBtn.before(newsBlock.firstElementChild);
});

// Кнопка для добавления рисунка
const addArtBtn = document.getElementById('add-art-btn');
addArtBtn.addEventListener('click', () => {
    const art = document.createElement('div');
    art.innerHTML = `
        <div class="art-block">
            <input class="art-link" placeholder="Ссылка на сообщение">
            <input class="art-link-img" placeholder="Ссылка на изображение">
            <input class="art-author" placeholder="Автор">
            <input class="art-date" placeholder="Дата">
        </div>
    `;

    addArtBtn.before(art.firstElementChild);
});

// Кнопка для добавления интервью
const addInterviewBtn = document.getElementById('add-interview-btn');
addInterviewBtn.addEventListener('click', () => {
    const interview = document.createElement('div');
    interview.innerHTML = `
        <div class="interview-block">
            <input class="interview-subtitle" placeholder="Пользователь (только никнейм)">
            <input class="interview-date" placeholder="Дата">
            <textarea class="interview-text"></textarea>
        </div>
    `;

    addInterviewBtn.before(interview.firstElementChild);
});

// Кнопка для добавления цитаты
const addQuoteBtn = document.getElementById('add-quote-btn');
addQuoteBtn.addEventListener('click', () => {
    const quote = document.createElement('div');
    quote.innerHTML = `
        <div class="quote-block">
            <textarea class="quote-text"></textarea>
            <input class="quote-link-avatar" placeholder="Ссылка на аватар пользователя">
            <input class="quote-author" placeholder="Автор">
        </div>
    `;

    addQuoteBtn.before(quote.firstElementChild);
});

// Кнопка для добавления загадки
const addQuestionBtn = document.getElementById('add-question-btn');
addQuestionBtn.addEventListener('click', () => {
    const question = document.createElement('div');
    question.innerHTML = `
        <div class="question-block">
            <input class="question-text" placeholder="Вопрос">
            <input class="question-answer" placeholder="Ответ">
        </div>
    `;

    addQuestionBtn.before(question.firstElementChild);
});

// Кнопка для добавления блока анекдотов
const addAnecdoteBlockBtn = document.getElementById('add-anecdote-block-btn');
addAnecdoteBlockBtn.addEventListener('click', () => {
    const anecdoteBlock = document.createElement('div');
    anecdoteBlock.innerHTML = `
        <div class="anecdote-block">
            <input class="anecdote-author" placeholder="Автор">
            <div class="anecdote-text-block">
                <input class="anecdote-name" placeholder="Название анекдота">
                <textarea class="anecdote-text"></textarea>
            </div>
            <button class="add-anecdote-btn">Добавить анекдот</button>
        </div>
    `;

    addAnecdoteBlockBtn.before(anecdoteBlock.firstElementChild);
});

// Кнопка для добавления автора газеты
const addRedactorBtn = document.getElementById('add-newspaper-author-btn');
addRedactorBtn.addEventListener('click', () => {
    const redactor = document.createElement('div');
    redactor.innerHTML = `
        <input class="newspaper-author" placeholder="Пользователь N — отличный пользователь.">
    `;

    addRedactorBtn.before(redactor.firstElementChild);
});

// Кнопка компиляции
const compileBtn = document.getElementById('compile-btn');
compileBtn.addEventListener('click', () => {
    // Переменные для разметки новости
    let resultText = '';
    let resultText2 = '';
    let mobileNav = '';
    let desktopNav = '';
    let short = '';

    // style + корректное отображение изображений
    const adminpanel = document.getElementById('adminpanel').value;
    resultText += `<style>@media (max-width:1079px){#rtDesktopNav{display:none!important}#rtMobileNav{display:block!important}.rtBody{flex-direction:column-reverse!important;align-items:normal!important}#rtPlus,#rtMinus{display:none!important}}a,a:hover,a:active{text-decoration:none!important}.conteiner3,.conteiner{overflow:visible}.sidebar,.body__sidebar,.footer,.dle-speedbar,#dle-speedbar,#yandex_rtb_R-A-1617534-9,#yandex_rtb_C-A-1617534-10{display:none!important}.news__footer,.news__footer--full,.news__related,.related-news,.comment-new,.forum__last-messages,.comments-tree-list{max-width:908px}.content{width:1178px}p,div{margin:0;padding:0}.rtBody{display:flex;flex-direction:row;justify-content:space-evenly;gap:20px;align-items:flex-start;font:13pt "Arimo"}.rtNav{position:sticky;top:20px;padding:20px;border-radius:15px;min-width:270px;max-height:calc(100vh - 40px);overflow:hidden}#rtMobileNav{display:none;position:static;max-height:none}.rtNavContent{max-height:calc(100vh - 138px);overflow-y:auto}#rtMobileNav .rtNavContent,#rtMobileNav .rtNavContent{max-height:none;overflow:visible;overflow-y:visible}body:has(.navbar-wrapper) .rtNav{top:72px;max-height:calc(100vh - 92px)}body:has(.topmenu-wrapper) .rtNav{top:55px;max-height:calc(100vh - 75px)}body:has(.navbar-wrapper) .rtNavContent{max-height:calc(100vh - 190px)}body:has(.topmenu-wrapper) .rtNavContent{max-height:calc(100vh - 173px)}.rtNavContent>*{margin:0 0 5px 0}.rtNavContent>p:last-child{margin:0}.rtNavContent{scrollbar-width:none}.rtNavContent::-webkit-scrollbar{display:none}.rtNavTitle{font-weight:900;font-size:24pt;margin:0 0 10px 0}.rtNavSubLink{padding:0 0 0 20px}.rtNavSub2Link{padding:0 0 0 40px}.rtNavLink,.rtNavSubLink,.rtNavSub2Link{max-width:1500px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:.5s}.rtNavLink:hover,.rtNavSubLink:hover,.rtNavSub2Link:hover{white-space:normal}.rtNav a{color:#000000!important;font-weight:normal!important;text-decoration:none!important}.rtNav a:hover{color:#424242!important}.rtNavSpoiler2>*{margin:5px 0 0 0}.rtNavSpoiler2 *:first-child{margin:0}.rtNavSpoilerTitle2{list-style:none;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.rtNavSpoilerTitle2::-webkit-details-marker{display:none}.rtNavSpoilerTitle2 .rtMinus2{display:none}.rtNavSpoiler2[open] .rtMinus2{display:inline}.rtNavSpoiler2[open] .rtPlus2{display:none}[id]{scroll-margin-top:52px}.rtBorder{border:5px dashed #ffbc6b;background:#ffe6b5;border-radius:15px}.rtPreview{background-image:url("https://ru-minecraft.ru/uploads/posts/2026-01/1768673346_rumine_times_preview.png");background-size:cover;text-align:center;padding:100px 20px 100px 20px;margin:0 0 20px 0}.rtPreviewTitle{font-weight:900;font-size:33pt}.rtPreviewSubtext{margin:10px 0 0 0}.rtH1{padding:20px;margin:0 0 20px 0}.rtH1Title{font-size:24pt;font-weight:900}.rtH1Subtext{margin:10px 0 0 0}.rtH2{font-size:18pt;font-weight:900;margin:0 0 20px 0}.rtH3{font-size:15pt;font-weight:900;margin:0 0 10px 0}.rtH1,.rtH2,.rtH3,.rtNav,.rtPreview,.rtFooter{font-family:"Comic Sans MS"}.rtText{margin:0 0 10px 0}.rtBlock{margin:0 0 20px 0}.rtBlockBorder{padding:0 0 0 20px;border-left:5px solid #ffbc6b}.rtQuote{background:#ffffe0;border-radius:15px;border:3px solid #eaeab2;padding:15px;margin:0 0 10px 0}.rtQuote p:last-child{margin:0}.rtQuoteAuthor{font-weight:600;display:flex;flex-direction:row;align-items:center;gap:5px}.rtQuoteAuthor img{max-width:20px;height:20px}.rtRageFace{vertical-align:middle}.rtArt{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}.rtArtEl{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;padding:20px;border-radius:15px;border:3px solid #dbdbdb;background-color:#f4f4f4;font-weight:400!important;color:#000000!important;transition:.1s!important}.rtArtEl:hover{background-color:#e5e5e5;border-color:#c6c6c6;color:#000000!important}.rtArtEl:active{transform:translateY(3px)}.rtArtEl img{max-height:128px;max-width:128px;border-radius:10px;border:3px solid #dbdbdb;transition:.1s!important}.rtArtEl:hover img{border-color:#c6c6c6}.rtArtAuthor{font-weight:600!important}.rtPainting{width:100%;border-radius:15px;margin:0 0 10px 0}.rtInterviewer{font-weight:600}.rtAnswer{color:#F4F4F4;background:#F4F4F4;transition-duration:.5s}.rtAnswer:hover{color:black;background:none;transition-duration:.5s}.rtFooter{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.rtFooterEl{display:block;text-align:center;padding:10px;border-radius:15px;border:3px solid #dbdbdb;background-color:#f4f4f4;font-size:18pt;font-weight:900!important;color:#000000!important;transition:.1s!important}.rtFooterEl:hover{background-color:#e5e5e5;border-color:#c6c6c6;color:#000000!important}.rtFooterEl:active{transform:translateY(3px)}img[alt="${adminpanel}"]{float:right;margin:0 0 10px 10px}.rtClear{clear:both}</style>\n`;

    // Переменные для превью
    const previewTitle = document.getElementById('preview-title').value.trim();
    const previewSubtitle = document.getElementById('preview-subtitle').value.trim();

    // Переменные для приветственного текста
    const introTextFull = document.getElementById('intro-text-full').value.trim().split(/\r?\n/);
    const introTextShort = document.getElementById('intro-text-short').value.trim().split(/\r?\n/);

    // Переменные для новостей
    const mainNewsSubtitle = document.getElementById('main-news-subtitle').value.trim();
    const newsBlocks = document.querySelectorAll('.news-block');
    let newsID = 1;
    const newsIDs = [];

    // Переменные для рисунков
    const arts = document.querySelectorAll('.art-block');

    // Переменные для рубрики "У камина с Румине"
    const paintingSubtitle = document.getElementById('painting-subtitle').value.trim();
    const paintingImgLink = document.getElementById('painting-link-img').value.trim();
    const paintingText = document.getElementById('painting-text').value.trim().split(/\r?\n/);

    // Переменные для рубрики "Микрофон Включен"
    const interviewBlock = document.querySelectorAll('.interview-block');
    const interviewUsers = [];

    // Переменные для рубрики "Цитаты"
    const quotes = document.querySelectorAll('.quote-block');

    // Переменные для рубрики "Игры" + "Загадки"
    const questions = document.querySelectorAll('.question-block');

    // Переменные для рубрики "Анекдоты"
    const anecdoteBlocks = document.querySelectorAll('.anecdote-block');
    const anecdoteAuthors = [];

    //Переменные для раздела "Немного о газете"
    const endText = document.getElementById('end-text').value.trim().split(/\r?\n/);
    const newspaperAuthor = document.querySelectorAll('.newspaper-author');

    // Вывод превью
    resultText += `<div class="rtBody">
    <div class="rtMain" id="start">
        <div class="rtPreview rtBorder">
            <p class="rtPreviewTitle">${previewTitle}</p>
            <p class="rtPreviewSubtext">${previewSubtitle}</p>
        </div>
        <div class="rtBlock">\n`;

    // Вывод текста
    introTextFull.forEach(line => {
        const trimmed = line.trim();
        resultText += `            <p class="rtText">${trimmed}</p>\n`;
    });

    resultText += `        </div>\n`;

    // Вывод заголовка "Главные новости"
    resultText2 += `        <div class="rtH1 rtBorder" id="news">
            <p class="rtH1Title">Главные новости</p>
            <p class="rtH1Subtext">${mainNewsSubtitle}</p>
        </div>\n`;

    // Вывод новостей
    newsBlocks.forEach(newsBlock => {
        const title = newsBlock.querySelector('.news-h2').value.trim();

        resultText2 += `        <div class="rtBlock rtBlockBorder">\n`;
        resultText2 += `            <p class="rtH2">${title}</p>\n`;

        const news = newsBlock.querySelectorAll('.news-text-block');
        news.forEach(newsText => {
            let inQuote = false;
            const subtitle = newsText.querySelector('.news-h3').value.trim();
            resultText2 += `            <p class="rtH3" id="news_${newsID}">${subtitle}</p>\n`;

            newsIDs.push({ newsID, subtitle });

            const lines = newsText.querySelector('.news-text').value.split(/\r?\n/);
            lines.forEach(line => {
                const trimmed = line.trim();

                if (trimmed === "@q") {
                    resultText2 += `            <div class="rtQuote">\n`;
                    inQuote = true;
                    return;
                } else if (trimmed.startsWith("@avatar")) {
                    const parts = trimmed.split(" | ");
                    resultText2 += `                <p class="rtText rtQuoteAuthor"><img src="${parts[2]}" />${parts[1]}</p>\n`;
                    return;
                } else if (trimmed === "@qend") {
                    inQuote = false;
                    resultText2 += `            </div>\n`;
                    return;
                } else if (trimmed === "@clear") {
                    resultText2 += `            <div class="rtClear"></div>\n`;
                    return;
                } else if (trimmed.startsWith("[thumb]")) {
                    resultText2 += `            ${trimmed}\n`;
                    return;
                }

                if (inQuote) {
                    resultText2 += `                <p class="rtText">${trimmed}</p>\n`;
                } else {
                    resultText2 += `            <p class="rtText">${trimmed}</p>\n`;
                }
            });

            newsID += 1;
        });

        resultText2 += `        </div>\n`;
    });

    // Вывод заголовка "Руминское искусство"
    resultText2 += `        <div class="rtH1 rtBorder" id="art">
            <p class="rtH1Title">«Руминское искусство»</p>
        </div>
        <div class="rtArt rtBlock">\n`;

    arts.forEach(art => {
        const link = art.querySelector('.art-link').value.trim();
        const linkImg = art.querySelector('.art-link-img').value.trim();
        const author = art.querySelector('.art-author').value.trim();
        const date = art.querySelector('.art-date').value.trim();

        resultText2 += `            <a class="rtArtEl" href="${link}">
                <img src="${linkImg}" />
                <p class="rtArtAuthor">${author}</p>
                <p class="rtArtDate">${date}</p>
            </a>\n`;
    });

    // Вывод рубрики "У камина с Румине"
    resultText2 += `        </div>
        <div class="rtH1 rtBorder" id="painting">
            <p class="rtH1Title">«У камина с Румине»</p>
            <p class="rtH1Subtext">${paintingSubtitle}</p>
        </div>
        <img src="${paintingImgLink}" class="rtPainting" />
        <div class="rtBlock">\n`;

    paintingText.forEach(line => {
        const trimmed = line.trim();
        resultText2 += `            <p class="rtText">${trimmed}</p>\n`;
    });

    // Вывод рубрики "Микрофон Включен"
    resultText2 += `        </div>
        <div class="rtH1 rtBorder" id="interview">
            <p class="rtH1Title">«Микрофон Включен»</p>
        </div>\n`;

    interviewBlock.forEach(block => {
        const subtitle = block.querySelector('.interview-subtitle').value.trim();
        const date = block.querySelector('.interview-date').value.trim();
        const text = block.querySelector('.interview-text').value.trim().split(/\r?\n/);
        let inQuote = false;

        resultText2 += `        <div class="rtBlock rtBlockBorder">
            <p class="rtH2" id="interview_${subtitle}">Интервью с пользователем ${subtitle}</p>
            <p class="rtH3">${date}</p>\n`;

        text.forEach(line => {
            const trimmed = line.trim();

            if (trimmed.startsWith("@i")) {
                resultText2 += `            <p class="rtText"><span style="font-weight:600;">litovetz:</span> ${trimmed.slice(3)}</p>\n`;
                return;
            } else if (trimmed.startsWith("@p")) {
                resultText2 += `            <p class="rtText"><span style="font-weight:600;">${subtitle}:</span> ${trimmed.slice(3)}</p>\n`;
                return;
            } else if (trimmed.startsWith("@center")) {
                resultText2 += `            <p class="rtText" style="text-align:center;">${trimmed.slice(8)}</p>\n`;
                return;
            } else if (trimmed === "@q") {
                resultText2 += `            <div class="rtQuote">\n`;
                inQuote = true;
                return;
            } else if (trimmed.startsWith("@avatar")) {
                const parts = trimmed.split(" | ");
                resultText2 += `                <p class="rtText rtQuoteAuthor"><img src="${parts[2]}" />${parts[1]}</p>\n`;
                return;
            } else if (trimmed === "@qend") {
                inQuote = false;
                resultText2 += `            </div>\n`;
                return;
            } else if (trimmed === "@clear") {
                resultText2 += `            <div class="rtClear"></div>\n`;
                return;
            } else if (trimmed.startsWith("[thumb]")) {
                resultText2 += `            ${trimmed}\n`;
                return;
            }

            if (inQuote) {
                resultText2 += `                <p class="rtText">${trimmed}</p>\n`;
            } else {
                resultText2 += `            <p class="rtText">${trimmed}</p>\n`;
            }
        });

        interviewUsers.push(subtitle);

        resultText2 += `        </div>\n`;
    });

    // Вывод рубрики "Интересные цитаты известных юзеров"
    resultText2 += `        <div class="rtH1 rtBorder" id="quotes">
            <p class="rtH1Title">Интересные цитаты известных юзеров</p>
        </div>
        <div class="rtBlock">\n`;

    quotes.forEach(quote => {
        resultText2 += `            <div class="rtQuote">\n`;

        const text = quote.querySelector('.quote-text').value.trim().split(/\r?\n/);
        text.forEach(line => {
            const trimmed = line.trim();
            resultText2 += `                <p class="rtText">${trimmed}</p>\n`;
        });

        const author = quote.querySelector('.quote-author').value.trim();
        const avatar = quote.querySelector('.quote-link-avatar').value.trim();
        resultText2 += `                <p class="rtText rtQuoteAuthor"><img src="${avatar}" />${author}</p>
            </div>\n`;
    });

    // Вывод рубрики "Игры" + "Загадки"
    resultText2 += `        </div>
        <div class="rtH1 rtBorder" id="games">
            <p class="rtH1Title">Игры</p>
        </div>
        <div class="rtBlock rtBlockBorder" id="games_riddles">
            <p class="rtH2">Загадки</p>\n`;

    questions.forEach((question, index) => {
        const questionText = question.querySelector('.question-text').value.trim();
        const answer = question.querySelector('.question-answer').value.trim();

        resultText2 += `            <p class="rtText">${index + 1}. ${questionText} <span class="rtAnswer">${answer}</span></p>\n`;
    });

    // Вывод рубрики "Анекдоты"
    resultText2 += `        </div>
        <div class="rtH1 rtBorder" id="jokes">
            <p class="rtH1Title">Анекдоты</p>
        </div>\n`;

    anecdoteBlocks.forEach(anecdoteBlock => {
        const author = anecdoteBlock.querySelector('.anecdote-author').value.trim();

        resultText2 += `        <div class="rtBlock rtBlockBorder" id="jokes_${author}">\n`;
        resultText2 += `            <p class="rtH2">От ${author}</p>\n`;

        const anecdotes = anecdoteBlock.querySelectorAll('.anecdote-text-block');
        anecdotes.forEach(anecdote => {
            const name = anecdote.querySelector('.anecdote-name').value.trim();
            let inQuote = false;

            resultText2 += `            <p class="rtH3">${name}</p>\n`;

            const lines = anecdote.querySelector('.anecdote-text').value.trim().split(/\r?\n/);
            lines.forEach(line => {
                const trimmed = line.trim();

                if (trimmed === "@q") {
                    resultText2 += `            <div class="rtQuote">\n`;
                    inQuote = true;
                    return;
                } else if (trimmed.startsWith("@avatar")) {
                    const parts = trimmed.split(" | ");
                    resultText2 += `                <p class="rtText rtQuoteAuthor"><img src="${parts[2]}" />${parts[1]}</p>\n`;
                    return;
                } else if (trimmed === "@qend") {
                    inQuote = false;
                    resultText2 += `            </div>\n`;
                    return;
                } else if (trimmed === "@clear") {
                    resultText2 += `            <div class="rtClear"></div>\n`;
                    return;
                } else if (trimmed.startsWith("[thumb]")) {
                    resultText2 += `            ${trimmed}\n`;
                    return;
                }

                if (inQuote) {
                    resultText2 += `                <p class="rtText">${trimmed}</p>\n`;
                } else {
                    resultText2 += `            <p class="rtText">${trimmed}</p>\n`;
                }
            });
        });

        anecdoteAuthors.push(author);

        resultText2 += `        </div>\n`;
    });

    // Вывод раздела "Немного о газете"
    resultText2 += `        <div class="rtH1 rtBorder" id="end">
            <p class="rtH1Title">Немного о газете</p>
        </div>
        <div class="rtBlock">\n`;

    let inQuote = false;
    endText.forEach(line => {
        const trimmed = line.trim();

        if (trimmed === "@q") {
            resultText2 += `            <div class="rtQuote">\n`;
            inQuote = true;
            return;
        } else if (trimmed.startsWith("@avatar")) {
            const parts = trimmed.split(" | ");
            resultText2 += `                <p class="rtText rtQuoteAuthor"><img src="${parts[2]}" />${parts[1]}</p>\n`;
            return;
        } else if (trimmed === "@qend") {
            inQuote = false;
            resultText2 += `            </div>\n`;
            return;
        }

        if (inQuote) {
            resultText2 += `                <p class="rtText">${trimmed}</p>\n`;
        } else {
            resultText2 += `            <p class="rtText">${trimmed}</p>\n`;
        }
    });

    resultText2 += `        </div>
        <div class="rtBlock rtBlockBorder">
            <p class="rtH2">Над газетой работали</p>\n`;

    newspaperAuthor.forEach(author => {
        const trimmed = author.value.trim();
        const parts = trimmed.split(" — ");
        resultText2 += `            <p class="rtText"><span style="font-weight: 600;">${parts[0]}</span> — ${parts[1]}</p>\n`;
    });

    // Вывод подвала
    resultText2 += `        </div>
        <div class="rtFooter" id="links">
            <a href="https://gzthk.github.io/GZTHK-NewWebsite/" class="rtFooterEl">Наш сайт</a>
            <a href="https://ru-minecraft.ru/forum/showtopic-24883/" class="rtFooterEl">Наша тема на форуме</a>
        </div>
    </div>\n`;

    // Вывод навигации
    desktopNav += `        <div class="rtNav rtBorder" id="rtDesktopNav">
        <p class="rtNavTitle">Навигация</p>
        <div class="rtNavContent">
            <p class="rtNavLink"><a href="#start">Начало</a></p>
            <details class="rtNavSpoiler2">
                <summary class="rtNavLink rtNavSpoilerTitle2">Главные новости<span class="rtPlus2">[+]</span><span class="rtMinus2">[-]</span></summary>\n`;
    mobileNav += `        <div class="rtNav rtBlock rtBorder" id="rtMobileNav">
            <p class="rtNavTitle">Навигация</p>
            <div class="rtNavContent">
                <p class="rtNavLink"><a href="#start">Начало</a></p>
                <details class="rtNavSpoiler2">
                    <summary class="rtNavLink rtNavSpoilerTitle2">Главные новости<span class="rtPlus2">[+]</span><span class="rtMinus2">[-]</span></summary>\n`;

    // Вывод новостей в навигацию
    newsIDs.forEach(e => {
        desktopNav += `                <p class="rtNavSubLink"><a href="#news_${e.newsID}">${e.subtitle}</a></p>\n`;
        mobileNav += `                    <p class="rtNavSubLink"><a href="#news_${e.newsID}">${e.subtitle}</a></p>\n`;
    });

    desktopNav += `            </details>
            <p class="rtNavLink"><a href="#art">«Руминское искусство»</a></p>
            <p class="rtNavLink"><a href="#painting">«У камина с Румине»</a></p>
            <p class="rtNavLink"><a href="#interview">«Микрофон Включен»</a></p>\n`;
    mobileNav += `                </details>
                <p class="rtNavLink"><a href="#art">«Руминское искусство»</a></p>
                <p class="rtNavLink"><a href="#painting">«У камина с Румине»</a></p>
                <p class="rtNavLink"><a href="#interview">«Микрофон Включен»</a></p>\n`;

    // Вывод интервью в навигацию
    interviewUsers.forEach(user => {
        desktopNav += `            <p class="rtNavSubLink"><a href="#interview_${user}">Интервью с ${user}</a></p>\n`;
        mobileNav += `                <p class="rtNavSubLink"><a href="#interview_${user}">Интервью с ${user}</p>\n`;
    });

    desktopNav += `            <p class="rtNavLink"><a href="#quotes">Интересные цитаты</a></p>
            <p class="rtNavLink"><a href="#games">Игры</a></p>
            <p class="rtNavSubLink"><a href="#games_riddles">Загадки</a></p>
            <p class="rtNavLink"><a href="#jokes">Анекдоты</a></p>\n`;
    mobileNav += `                <p class="rtNavLink"><a href="#quotes">Интересные цитаты</a></p>
                <p class="rtNavLink"><a href="#games">Игры</a></p>
                <p class="rtNavSubLink"><a href="#games_riddles">Загадки</a></p>
                <p class="rtNavLink"><a href="#jokes">Анекдоты</a></p>\n`;

    // Вывод авторов анекдотов в навигацию
    anecdoteAuthors.forEach(author => {
        desktopNav += `            <p class="rtNavSubLink"><a href="#jokes_${author}">От ${author}</a></p>\n`;
        mobileNav += `                <p class="rtNavSubLink"><a href="#jokes_${author}">От ${author}</a></p>\n`;
    });

    desktopNav += `            <p class="rtNavLink"><a href="#end">Немного о газете</a></p>
        </div>
    </div>
</div>`;
    mobileNav += `                <p class="rtNavLink"><a href="#end">Немного о газете</a></p>
            </div>
        </div>\n`;

    // Вывод краткой
    short += `<style>p,div{margin:0;padding:0}.rtBorder{border:5px dashed #ffbc6b;background:#ffe6b5;border-radius:15px}.rtPreview{background-image:url("https://ru-minecraft.ru/uploads/posts/2026-01/1768673346_rumine_times_preview.png");background-size:cover;text-align:center;padding:100px 20px 100px 20px;margin:0 0 20px 0;font-family:"Comic Sans MS"}.rtPreviewTitle{font-weight:900;font-size:33pt}.rtPreviewSubtext{margin:10px 0 0 0;font-size:13pt}.rtText{font:13pt "Arimo";text-align:center;margin:0 0 10px 0}.rtText:last-child{margin:0}</style>
<div class="rtPreview rtBorder">
    <p class="rtPreviewTitle">${previewTitle}</p>
    <p class="rtPreviewSubtext">${previewSubtitle}</p>
</div>\n`;

    introTextShort.forEach(line => {
        const trimmed = line.trim();
        short += `<p class="rtText">${trimmed}</p>\n`;
    });

    document.getElementById('result-full').value = resultText + mobileNav + resultText2 + desktopNav;
    document.getElementById('result-short').value = short;

});

