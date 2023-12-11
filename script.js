"use strict"
//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
AOS.init();
const quotes = document.querySelector('.quotes');
const author = document.querySelector('.author');
const newQuote = document.querySelector('.newQuotes');
const tweet = document.querySelector('.tweetMe');
let realData = "";
let quotesData = "";
const tweetNow = () => {
    let tweetPost = "https://twitter.com/intent/tweet?text="+quotesData.text;
    window.open(tweetPost);
}


const getNewQuotes = () => {
    let num = Math.floor(Math.random() * 15);
    quotesData = realData[num];
    quotes.innerHTML = `${quotesData.text}`;
    let authorName = quotesData.author.split(',')
    //here author name is followed by "type.fit" so i have to remove that
    author.innerHTML = authorName[0] == "type.fit" ? "unknown" : authorName[0];
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {
        console("some problem occured")
    }
}

tweet.addEventListener('click', tweetNow)
newQuote.addEventListener('click', getNewQuotes);
getQuotes();
