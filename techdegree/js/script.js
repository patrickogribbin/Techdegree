var randomq;
var HTML = ' ';
//array of quotes.
var quotes = [
    {
      quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
      source: 'Dr. Suess'

    },
    {
      quote:'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.' ,
      source:'Marilyn Monroe'

    },
    {
      quote: 'Get busy living or get busy dying.',
      source:'Stephen King '

    },
    {
      quote:'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.' ,
      source:'Mark Caine'

    },
    {
      quote:'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.' ,
      source:'Helen Keller'

    }
];

//function getting random quote
function getRandomQuote(array){
    var randomNumber = Math.ceil( Math.random() * quotes.length ) - 1;
    for (var i = 0; i < quotes.length; i++){
      var randomQuote = quotes[randomNumber];
    }
    return randomQuote;
    };



//function printing out quote with css classes
function printQuote( array ){
    randomq = getRandomQuote();
    HTML = '<p class="quote"> ' + randomq.quote + '</p>' ;
    HTML += '<p class="source">' + randomq.source + '</p>';
    document.getElementById('quote-box').innerHTML = HTML;
return randomq;
};


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
