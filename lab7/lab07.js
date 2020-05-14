const works = [

    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },

    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },

    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },

    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }

];
//创造各个元素，数组形式
var sDiv = document.getElementsByClassName("flex-container justify");

var script = document.getElementsByTagName("script");

var dItems = [];

var topicsH4 = [];

var dAuthors = [];

var dPops = [];

var authorsH3 = [];

var livesH5 = [];

var popularH3 = [];

var photos = [];

var button = [];

//用数组

for(var i = 0;i < 4;i++){

    dItems[i] = document.createElement("div");

    dItems[i].className = "item";

    topicsH4 [i] = document.createElement("h4");

    dAuthors[i] =  document.createElement("div");

    dPops[i] =  document.createElement("div");

    dAuthors[i].className = "inner-box";

    dPops[i].className = "inner-box";

    authorsH3[i] = document.createElement("h3");

    livesH5[i] = document.createElement("h5");

    popularH3[i] = document.createElement("h3");

    button[i] = document.createElement("button");

    topicsH4[i].innerText = "Genre : "+ works[i].tips;

    authorsH3[i].innerText = works[i].author;

    authorsH3[i].style.display = "inline";

    livesH5[i].innerText = "lifetime:"+works[i].lifetime;

    livesH5[i].style.display = "inline";

    livesH5[i].style.marginLeft = "1em";

    popularH3[i].innerText = "Popular Photos";

    button[i].innerText = "Visit";

    dPops[i].append(popularH3[i]);

    for(var j = 0;j<works[i].photos.length;j++){

        photos[j] = document.createElement("img");

        photos[j].className = "photo";

        photos[j].src = works[i].photos[j];

        dPops[i].append(photos[j]);

    }

    dAuthors[i].append(authorsH3[i]);

    dAuthors[i].append(livesH5[i]);

    dItems[i].append(authorsH3[i]);

    dItems[i].append(dAuthors[i]);

    dItems[i].append(dPops[i]);

    dItems[i].append(button[i]);

    sDiv[0].insertBefore(dItems[i], script[0]);

}