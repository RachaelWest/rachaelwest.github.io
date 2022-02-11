
let quotes= [
    '\"All our dreams can come true if we have the courage to pursue them.\" \- Walt Disney',

    '\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" \- Winston Churchill',

    '\"Believe you can and you\'re halfway there.\" \- Theodore Roosevelt',

    '\"Happiness is not something readymade. It comes from your own actions.\" \- Dalai Lama',

    '\"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.\" \- William James',
    
    '\"You are never too old to set another goal or to dream a new dream.\" \- C.S. Lewis',
    
    '\"Everything you\'ve ever wanted is on the other side of fear.\" \- George Addair',

    '\"Life is like riding a bicycle. To keep your balance, you must keep moving.\" \- Albert Einstein',

    '\"You learn more from failure than from success. Don\'t let it stop you. Failure builds character.\" \- Unknown',

    '\"To see what is right and not do is a lack of courage.\" \- Confucius'
  
];

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}