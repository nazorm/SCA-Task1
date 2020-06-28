var quotes = ["Live and Love!", 

"The purpose of our lives is to be happy. — Dalai Lama.",

 "Life is what happens when you're busy making other plans. — John Lennon.",

 "You only live once, but if you do it right, once is enough. — Mae West.",

 "Keep calm and carry on. — Winston Churchill"


    ];
var quote = document.querySelector(".quote")


const changeQuote = () =>{
    var newQuote = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[newQuote];
   
}