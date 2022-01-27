let allNews = [{
        fullName: "Alice Atom",
        date: "12-27-2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
        }, {fullName:"Blake Bleak",
            date:"12-28-2021",
            content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
        }, {fullName:"Cara Cole",
            date:"12-29-2021",
            content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!",
        },
            {   fullName: "Drew Dean",
                date: "12-30-2021",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
}]; //made allnews into an array(list)



const newsShow = document.getElementById('compnews');

const form = document.getElementById('add-news');

//event listener for add-news
form.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    console.log(document.getElementById('author-new').value);
    console.log(document.getElementById('date-new').value);
    console.log(document.getElementById('new-content').value);

    const addedNews = {
        fullName:document.getElementById('author-new').value,
        date:document.getElementById('date-new').value,
        content:document.getElementById('new-content').value,

    }
    console.log(allNews);
    console.log(addedNews)

    allNews = [...allNews, addedNews];

    console.log(allNews);

});



//loop showing all news items
for(const key in allNews){
    const newsExist = document.createElement('div');

    newsExist.innerHTML=` 
            <div>
            <h3 class="font-semibold text-lg underline">${allNews[key].fullName}</h3>
            <h5 class="mb-2">${allNews[key].date}</h5>
            <p class="mb-2">${allNews[key].content}</p>
        </div>`
    ;

    newsShow.appendChild(newsExist); //adds new div to existing div(in html)
}


