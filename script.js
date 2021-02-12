'use strict';
const cardsContainer=document.querySelector('.cards');
const titleField=document.getElementById('title');
const directorField=document.getElementById('director');
const starsField=document.getElementById('stars');
const streamingField=document.getElementById('streaming');
let webShows=[];
class WebSeries{
    constructor(title, director, stars, streamingPlatform){
        this._title = title;
        this._director= director;
        this._stars= stars;
        this._streamingPlatform= streamingPlatform;
        webShows.unshift(this);

    }
    get title(){
        return this._title.toUpperCase();
    }
    set title(title){
        this._title= title;
    }
    get director(){
        return this._director;

    }
    set director(director){
        this._director= director;
    }
    get stars(){
        return this._stars;
    }
    set stars(stars){
        this._stars= stars;
    }
    get streamingPlatform(){
        return this._streamingPlatform;
    }
    set streamingPlatform(streamingPlatform){
        this._streamingPlatform= streamingPlatform;
    }

    static showData(){
        console.log(webShows[0].title, webShows[0].director, webShows[0].stars, webShows[0].streamingPlatform);
        
    }
}
const webshow1=new WebSeries('F.R.I.E.N.D.S', 'David Crane', 'Mathew Perry', 'Netflix');
const webShow2= new WebSeries('Big Bang Theory','Mark Cendrowski', 'Jim parsons', 'Netflix');
const webShow3= new WebSeries('Panchayat', 'Deepak Kumar Mishra', 'Jitendra Kumar', 'Amazon Prime');
const webShow4= new WebSeries('Tripling', 'Sameer Saxena', 'Sumeet Vyas','Hotstar');
const webShow5= new WebSeries('Money heist', 'Jesus Colmenar', 'Alvaro Morte', 'Netflix');
const webShow6= new WebSeries('Mismatched', 'Akarsh Khurana', 'Prajakta Koli', 'Netflix');

const showWebSeries=function(){
    cardsContainer.innerHTML="";
    let count=0;
    for(const show of webShows){
        const content= `<div class="show">
        <ul>
            <li><span>Title:</span> <span class="tvalue">${show.title}</span></li>
            <li><span>Director:</span> <span>${show.director} </span></li>
            <li><span>Stars:</span> <span>${show.stars}</span></li>
            <li><span>Streaming On:</span> <span>${show.streamingPlatform}</span></li>
        </ul>
        <div class="delete">
         Delete
         </div>     
    </div>`
    cardsContainer.insertAdjacentHTML('beforeend', content);
    count++;
    if(count===6)
    break;
    }
}
 if(cardsContainer.innerHTML===""){
    showWebSeries();
}
const clearFields=function(){
    titleField.value="";
    directorField.value="";
    starsField.value="";
    streamingField.selectedIndex=0;
}

const addShow = function(title, director, stars, streamingPlatform){
    const webShow= new WebSeries(title, director, stars, streamingPlatform);
    clearFields();
    WebSeries.showData();
    showWebSeries();
    return false;
}
const deleteCard=function(title){
    let index;
    const show=webShows.find((show)=>{
    if(show.title===title){
    index=webShows.indexOf(show);
    return show;
    }}); 

    webShows.splice(index,1);
    console.log(webShows.length);
    showWebSeries();
}
cardsContainer.addEventListener('click', function(e){
    const element=e.target;
    if(element.classList.contains('delete')){
        let card=element.parentNode;
        let cardTitle=card.querySelector('.tvalue').innerHTML;
        console.log(cardTitle);  
        deleteCard(cardTitle);
    }
    
})














