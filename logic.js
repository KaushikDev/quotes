$(document).ready(function() {
  //this is where the code for random hard coded quotes is gonna go
  let currentQuote;
  let currentAuthor;
  let toBePosted;

  // let showPrev = document.querySelector("#show-prev-quote");
  // let showNext = document.querySelector("#show-next-quote");

  // document.addEventListener("keydown", navQuotes, false );

    $("#show-prev-quote").on("click", function() {
    $("#quote").html(localStorage.getItem("quote"));
    $("#author").html(localStorage.getItem("author"));
    $("#show-prev-quote").prop("disabled", true);
    $("#show-prev-quote").addClass("disabled");
    currentQuote = $("#quote").text();
    currentAuthor = $("#author").text();
  });

  $("#show-next-quote").on("click", function() {
    quotes();
    $("#show-prev-quote").prop("disabled", false);
    $("#show-prev-quote").removeClass("disabled");
  });



  function quotes() {
    var quoteArr = [
      ["Don't cry because it's over, smile because it happened.", "Dr. Seuss"],
      [
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        "Marilyn Monroe"
      ],
      ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
      [
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Albert Einstein"
      ],
      [
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "Bernard M. Baruch"
      ],
      [
        "A room without books is like a body without a soul.",
        "Marcus Tullius Cicero"
      ],
      [
        "You only live once, but if you do it right, once is enough.",
        "Mae West"
      ],
      ["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
      [
        "If you tell the truth, you don't have to remember anything.",
        "Mark Twain"
      ],
      [
        "Always forgive your enemies; nothing annoys them so much",
        "Oscar Wilde"
      ],
      [
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "Mahatma Gandhi"
      ],
      ["Without music, life would be a mistake.", "Friedrich Nietzsche"],
      [
        "Good friends, good books, and a sleepy conscience: this is the ideal life",
        "Mark Twain"
      ],
      [
        "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "William Shakespeare"
      ],
      [
        "I have not failed. I've just found 10,000 ways that won't work.",
        "Thomas A. Edison"
      ],
      [
        "It is not a lack of love, but a lack of friendship that makes unhappy marriages",
        "Friedrich Nietzsche"
      ],
      [
        "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        "Douglas Adams"
      ],
      ["A day without sunshine is like, you know, night.", "Steve Martin"],
      ["If you judge people, you have no time to love them", "Mother Teresa"],
      ["It is never too late to be what you might have been.", "George Eliot"],
      [
        "If you can't explain it to a six year old, you don't understand it yourself.",
        "Albert Einstein"
      ],
      ["Everything you can imagine is real.", "Pablo Picasso"],
      [
        "Logic will get you from A to Z; imagination will get you everywhere.",
        "Albert Einstein"
      ],
      [
        "Folks are usually about as happy as they make their minds up to be.",
        "Abraham Lincoln"
      ],
      [
        "The difference between genius and stupidity is: genius has its limits.",
        "Alexandre Dumas-fils"
      ],
      [
        "Anyone who has never made a mistake has never tried anything new.",
        "Albert Einstein"
      ],
      [
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        "Aristotle"
      ],
      [
        "I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.",
        "Albert Einstein"
      ],
      [
        "Only those who will risk going too far can possibly find out how far one can go.",
        "T. S. Eliot"
      ],
      [
        "If you don’t build your dream, someone else will hire you to help them build theirs.",
        "Dhirubhai Ambani"
      ],
      [
        "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
        "Robert Louis Stevenson"
      ],
      [
        "Pearls dont lie on the seashore. If you want one, you must dive for it.",
        "Chinese proverb"
      ],
      ["It is never too late to be what you might have been.", "George Eliot"],
      [
        "The question isn’t who is going to let me; it’s who is going to stop me.",
        "Ayn Rand"
      ],
      [
        "If things seem under control, you are just not going fast enough.",
        "Mario Andretti"
      ],
      [
        "Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.",
        "Oprah Winfrey"
      ],
      [
        "Saying it is impossible to live without failing at something is impossible. Unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default.",
        "J.K. Rowling"
      ],
      [
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        "Mark Twain"
      ],
      ["Do one thing every day that scares you.", "Eleanor Roosevelt"],
      [
        "In order to succeed, your desire for success should be greater than your fear of failure.",
        "Bill Cosby"
      ],
      ["Screw it, let’s do it!", "Richard Branson"],
      [
        "Your time is limited, so don’t waste it living someone else’s life.",
        "Steve Jobs"
      ],
      [
        "When you take risks you learn that there will be times when you succeed and there will be times when you fail, and both are equally important.",
        "Ellen DeGeneres"
      ],
      [
        "You can’t have everything you want, but you can have the things that really matter to you.",
        "Marissa Mayer"
      ],
      [
        "Trust your own instinct. Your mistakes might as well be your own, instead of someone else’s.",
        "Billy Wilder"
      ],
      [
        "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
        "Albert Einstein"
      ],
      [
        "Happiness is when what you think, what you say, and what you do are in harmony.",
        "Mahatma Gandhi"
      ],
      [
        "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
        "Abraham Lincoln"
      ],
      [
        "There is no passion to be found playing small – in settling for a life that is less than the one you are capable of living.",
        "Nelson Mandela"
      ],
      [
        "We make a living by what we get, but we make a life by what we give.",
        "Winston Churchill"
      ],
      [
        "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
        "Bill Gates"
      ],
      [
        "If you think you can do a thing or think you can’t do a thing, you’re right.",
        "Henry Ford"
      ],
      [
        "When you undervalue what you do, the world will undervalue who you are.",
        "Oprah Winfrey"
      ],
      [
        "One good thing about music, when it hits you, you feel no pain.",
        "Bob Marley"
      ],
      [
        "The image is one thing and the human being is another. It’s very hard to live up to an image, put it that way.",
        "Elvis Presley"
      ],
      [
        "You can’t put a limit on anything. The more you dream, the farther you get.",
        "Michael Phelps"
      ],
      [
        "The more you praise and celebrate your life, the more there is in life to celebrate.",
        "Oprah Winfrey"
      ],
      [
        "One of the greatest diseases is to be nobody to anybody.",
        "Mother Teresa"
      ],
      ["Everything you can imagine is real.", "Pablo Picasso"],
      [
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        "Thomas A. Edison"
      ],
      [
        "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
        "Mark Zuckerberg"
      ],
      [
        "I think it is possible for ordinary people to choose to be extraordinary.",
        "Elon Musk"
      ],
      [
        "The Way Get Started Is To Quit Talking And Begin Doing.",
        "Walt Disney"
      ],
      [
        "It is our choices that show what we truly are, far more than our abilities.",
        "J.K.Rowling"
      ],
      [
        "It is far better to be alone, than to be in bad company.",
        "George Washington"
      ],
      [
        "Whenever I climb I am followed by a dog called ‘Ego’.",
        "Friedrich Nietzsche"
      ]
    ];

    localStorage.setItem("quote", $("#quote").text());
    localStorage.setItem("author", $("#author").text());

    var randomQuote = Math.floor(Math.random() * quoteArr.length);
    $("#quote").html(quoteArr[randomQuote][0]);
    $("#author").html(quoteArr[randomQuote][1]);
      currentQuote = $("#quote").text();
      currentAuthor = $("#author").text();
  }


  $("#post-on-twitter").on("click", function() {
   
    toBePosted =
      "https://twitter.com/intent/tweet?hashtags=QuoteOfTheDay&text=" +
      encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor);
    window.open(toBePosted, "_blank");
  });

  $("#post-on-facebook").on("click", function() {
   toBePosted="https://www.facebook.com/sharer/sharer.php?u=https://kaushikdev.github.io/quotes&quote="+'"'+currentQuote+'" - '+currentAuthor;
   window.open(toBePosted, "_blank");  
});

  $("#post-on-sms").on("click", function() {
   toBePosted="sms:?&body="+currentQuote+'" - '+currentAuthor;
   window.open(toBePosted, "_blank");  
   "https://www.linkedin.com/shareArticle?mini=true&url=https://KaushikDev.github.io/sketch&title=Sketch App&summary=Checkout this simple sketch app by kaushikDev&source=Github"
  });

  $("#post-on-whatsapp").on("click", function() {
   toBePosted="whatsapp://send?text="+'"'+currentQuote+'" - '+currentAuthor;
   window.open(toBePosted, "_blank");  
});
});


// const navQuotes = (e) => {
//   if(e.keycode === 37){
//     $("#quote").html(localStorage.getItem("quote"));
//     $("#author").html(localStorage.getItem("author"));
//     $("#show-prev-quote").prop("disabled", true);
//     $("#show-prev-quote").addClass("disabled");
//     currentQuote = $("#quote").text();
//     currentAuthor = $("#author").text();
//   }  
//   else if(e.keycode === 39){
//     quotes();
//     $("#show-prev-quote").prop("disabled", false);
//     $("#show-prev-quote").removeClass("disabled");
//   }
// };