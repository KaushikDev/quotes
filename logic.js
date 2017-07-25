
	
$(document).ready(function(){

	

	
<!--this is where the code for random hard coded quotes is gonna go -->

$("#getRealQuote").on("click", function() {
   realQuotes();
   
   });
 
$("#setTweet").on("click", function() {
   tweetIt();
   
   });
 /*
 $("#setPost").on("click", function() {
   postIt();
   
   });
 */
 $("#getQuote").on("click", function(){
myQuotes();
});
  
  

  
   
/*
function myQuotes(){
	var quotes=[["It's either my way or no way", "Kaushik"],
	    ["I am the Power", "He-Man"],
	    ["Dont poke me or i'll throw you out","Stone Cold"],
	    ["Know your role and shut your mouth", "The Rock"],
	    ["YabaDabaDoo", "Flintstones"],
	    ["Yikes","Shaggy"],
	    ["Rest In Peace","The Undertaker"],
	    ["Dee Dee", "Dexter"],
	    ["We've got two words for ya","DX"],
	    ["Woooooooooooooooooooo","Nature Boy Ric Flair"],
	    ["You'reeeeee Fired", "Mr. McMahon"],
	    ["With great power comes great resposibility", "Uncle Ben"],
	    ["Why do we fall, Bruce?", "Mr. Wayne"],
	    ["Omlette Du Fromage", "Dexter"]];
	
var randQuote = Math.floor(Math.random()*quotes.length);
$(".quote").html(quotes[randQuote][0]);
$(".author").html(quotes[randQuote][1]);
}

*/
   
function realQuotes(){
	var realquotes=[["Don't cry because it's over, smile because it happened.", "Dr. Seuss"],
["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best", "Marilyn Monroe"], 
["Be yourself; everyone else is already taken.","Oscar Wilde"], 
["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch"], 
["A room without books is like a body without a soul.","Marcus Tullius Cicero"],
["You only live once, but if you do it right, once is enough.","Mae West"],
["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
 ["If you tell the truth, you don't have to remember anything.","Mark Twain"],
 ["Always forgive your enemies; nothing annoys them so much","Oscar Wilde"],
 ["Live as if you were to die tomorrow. Learn as if you were to live forever.","Mahatma Gandhi"],
 ["Without music, life would be a mistake.","Friedrich Nietzsche"],
 ["Good friends, good books, and a sleepy conscience: this is the ideal life","Mark Twain"],
 ["The fool doth think he is wise, but the wise man knows himself to be a fool.","William Shakespeare"],
 ["I have not failed. I've just found 10,000 ways that won't work.","Thomas A. Edison"],
 ["It is not a lack of love, but a lack of friendship that makes unhappy marriages","Friedrich Nietzsche"],
 ["I may not have gone where I intended to go, but I think I have ended up where I needed to be.","Douglas Adams"],
 ["A day without sunshine is like, you know, night.","Steve Martin"],
 ["If you judge people, you have no time to love them","Mother Teresa"],
 ["It is never too late to be what you might have been.","George Eliot"],
 ["If you can't explain it to a six year old, you don't understand it yourself.","Albert Einstein"],
 ["Everything you can imagine is real.","Pablo Picasso"],
 ["Logic will get you from A to Z; imagination will get you everywhere.","Albert Einstein"],
 ["Folks are usually about as happy as they make their minds up to be.","Abraham Lincoln"],
 ["The difference between genius and stupidity is: genius has its limits.","Alexandre Dumas-fils"],
 ["Anyone who has never made a mistake has never tried anything new.","Albert Einstein"]];	
var randRealQuote = Math.floor(Math.random()*realquotes.length);
$(".quote").html(realquotes[randRealQuote][0]);
$(".author").html(realquotes[randRealQuote][1]);
}
          
function tweetIt () {
 var currentQuote=document.getElementById("quotation").innerText;
var currentAuthor=document.getElementById("authored").innerText;
var tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(' " ' + currentQuote + ' " ' + currentAuthor);
window.open(tweetUrl, "_blank");
}
	
	
function postIt () {
 var currentQuote=document.getElementById("quotation").innerText;
var currentAuthor=document.getElementById("authored").innerText;
var tweetUrl = "https://www.facebook.com/sharer/sharer.php?u=";
//window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(' " ' + currentQuote + ' " ' + currentAuthor));
	window.open(tweetUrl, "_blank");
	}	  
		  
});  
