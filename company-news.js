//
// const news1 = {
//     fullName: "Alice Atom",
//     date: "12-27-2021",
//     content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
// };
//
// const news2 = {
//     fullName:"Blake Bleak",
//     date:"12-28-2021",
//     content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
// };
//
// const news3 = {
//     fullName:"Cara Cole",
//     date:"12-29-2021",
//     content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
// };
//
// console.log(news1);
// console.log(news2);
// console.log(news3);

const allNews = [{
        fullName: "Alice Atom",
        date: "12-27-2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
        }, {fullName:"Blake Bleak",
            date:"12-28-2021",
            content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
        }, {fullName:"Cara Cole",
            date:"12-29-2021",
            content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur ducimus eveniet facere id, ipsa iusto provident quas veritatis!"
}]; //made allnews into an array(list)

console.log(allNews); //shows that array in the console

const newsShow = document.getElementById('compnews'); //set a const for existing company news

for(const key in allNews){
    const newsExist = document.createElement('div'); //creates a div

    newsExist.innerHTML=` //contents of created div
            <div>
            <h3 className="font-semibold text-lg underline" id="author">Alice Atom</h3>
            <h5 className="mb-2" id="date">12-27-2021</h5>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consequatur
                ducimus eveniet facere id, ipsa iusto provident quas veritatis!
            </p>
        </div>`
    ;

    newsShow.appendChild(newsExist); //adds new div to existing div(in html)
}

