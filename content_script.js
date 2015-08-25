jQuery.ajaxSetup({async:false});

var useHaterade,
    currentUrl  = window.location.href;
    twitter     = "twitter.com",
    youTube     = "youtube.com",
    hackerNews  = "news.ycombinator.com",
    reddit      = "reddit.com",
    ratingUrl   = "https://hater-api.herokuapp.com/score-comment?comment=",
    tolerance   = 0.4,
    compliments = [
      "You have very smooth hair.",
      "You deserve a promotion.",
      "Good effort!",
      "What a fine sweater!",
      "I appreciate all of your opinions.",
      "I like your style.",
      "Your T-shirt smells fresh.",
      "I love what you've done with the place.",
      "You are like a spring flower; beautiful and vivacious.",
      "I am utterly disarmed by your wit.",
      "I really enjoy the way you pronounce the word 'ruby'.",
      "You complete me.",
      "Well done!",
      "I like your Facebook status.",
      "That looks nice on you.",
      "I like those shoes more than mine.",
      "Nice motor control!",
      "You have a good taste in websites.",
      "Your mouse told me that you have very soft hands.",
      "You are full of youth.",
      "I like your jacket.",
      "I like the way you move.",
      "You have a good web-surfing stance.",
      "You should be a poster child for poster children.",
      "Nice manners!",
      "I appreciate you more than Santa appreciates chimney grease.",
      "I wish I was your mirror.",
      "I find you to be a fountain of inspiration.",
      "You have perfect bone structure.",
      "I disagree with anyone who disagrees with you.",
      "Way to go!",
      "Have you been working out?",
      "With your creative wit, I'm sure you could come up with better compliments than me.",
      "I like your socks.",
      "You are so charming.",
      "Your cooking reminds me of my mother's.",
      "You're tremendous!",
      "You deserve a compliment!",
      "Hello, good looking.",
      "Your smile is breath taking.",
      "How do you get your hair to look that great?",
      "You are quite strapping.",
      "I am grateful to be blessed by your presence.",
      "Say, aren't you that famous model from TV?",
      "Take a break; you've earned it.",
      "Your life is so interesting!",
      "The sound of your voice sends tingles of joy down my back.",
      "I enjoy spending time with you.",
      "I would share my dessert with you.",
      "You can have the last bite.",
      "May I have this dance?",
      "I would love to visit you, but I live on the Internet.",
      "I love the way you click.",
      "You're invited to my birthday party.",
      "All of your ideas are brilliant!",
      "If I freeze, it's not a computer virus I was just stunned by your beauty.",
      "You're spontaneous, and I love it!",
      "You should try out for everything.",
      "You make my data circuits skip a beat.",
      "You are the gravy to my mashed potatoes.",
      "You get an A+!",
      "I'm jealous of the other websites you visit, because I enjoy seeing you so much!",
      "I would enjoy a roadtrip with you.",
      "If I had to choose between you or MrRogers, it would be you.",
      "I like you more than the smell of Grandma's home-made apple pies.",
      "You would look good in glasses OR contacts.",
      "Let's do this again sometime.",
      "You could go longer without a shower than most people.",
      "I feel the need to impress you.",
      "I would trust you to pick out a pet fish for me.",
      "I'm glad we met.",
      "Do that again!",
      "Will you sign my yearbook?",
      "You're so smart!",
      "We should start a band.",
      "You're cooler than ice-skating Fonzi.",
      "I made this website for you.",
      "I heard you make really good French Toast.",
      "You're cooler than Pirates and Ninjas combined.",
      "Oh, I can keep going.",
      "I like your pants.",
      "You're pretty groovy, dude.",
      "When I grow up, I want to be just like you.",
      "I told all my friends about how cool you are.",
      "You can play any prank, and get away with it.",
      "You have ten of the best fingers I have ever seen!",
      "I can tell that we are gonna be friends.",
      "I just want to gobble you up!",
      "You're sweeter than than a bucket of bon-bons!",
      "Treat yourself to another compliment!",
      "You're pretty high on my list of people with whom I would want to be stranded on an island.",
      "You're #1 in my book!",
      "Well played.",
      "You are well groomed.",
      "You could probably lead a rebellion.",
      "Is it hot in here or is it just you?",
      "<3",
      "You are more fun than a Japanese steakhouse.",
      "Your voice is more soothing than Morgan Freeman's.",
      "I like your sleevesThey're real big.",
      "You could be drinking whole milk if you wanted to.",
      "You're so beautiful, you make me walk into things when I look at you.",
      "I support all of your decisions.",
      "You are as fun as a hot tub full of chocolate pudding.",
      "I usually don't say this on a first date, but will you marry me?",
      "I don't speak much English, but with you all I really need to say is beautiful.",
      "Being awesome is hard, but you'll manage.",
      "Your skin is radiant.",
      "You will still be beautiful when you get older.",
      "You could survive a zombie apocalypse.",
      "You make me :)",
      "I wish I could move your furniture.",
      "I think about you while I'm on the toilet.",
      "You're so rad.",
      "You're more fun than a barrel of monkeys.",
      "You're nicer than a day on the beach.",
      "Your glass is the fullest.",
      "I find you very relevant.",
      "You look so perfect.",
      "The only difference between exceptional and amazing is you.",
      "Last night I had the hiccups, and the only thing that comforted me to sleep was repeating your name over and over.",
      "I like your pearly whites!",
      "Your eyebrows really make your pretty eyes stand out.",
      "Shall I compare thee to a summer's day?  Thou art more lovely and more temperate.",
      "I love you more than bacon!",
      "You intrigue me.",
      "You make me think of beautiful things, like strawberries.",
      "I would share my fruit Gushers with you.",
      "You're more aesthetically pleasant to look at than that one green color on this website.",
      "Even though this goes against everything I know, I think I'm in love with you.",
      "You're more fun than bubble wrap.",
      "Your smile could illuminate the depths of the ocean.",
      "You make babies smile.",
      "You make the gloomy days a little less gloomy.",
      "You are warmer than a Snuggie.",
      "You make me feel like I am on top of the world.",
      "Playing video games with you would be fun.",
      "Let's never stop hanging out.",
      "You're more cuddly than the Downy Bear.",
      "I would do your taxes any day.",
      "You are a bucket of awesome.",
      "You are the star of my daydreams.",
      "If you really wanted to, you could probably get a bird to land on your shoulder and hang out with you.",
      "My mom always asks me why I can't be more like you.",
      "You look great in this or any other light.",
      "You listen to the coolest music.",
      "You and Chuck Norris are on equal levels.",
      "Your body fat percentage is perfectly suited for your height.",
      "I am having trouble coming up with a compliment worthy enough for you.",
      "If we were playing kickball, I'd pick you first.",
      "You're cooler than ice on the rocks.",
      "You're the bee's knees.",
      "I wish I could choose your handwriting as a font.",
      "You definitely know the difference between your and you're.",
      "You have good taste.",
      "I named all my appliances after you.",
      "Your mind is a maze of amazing!",
      "Don't worry about procrastinating on your studies, I know you'll do great!",
      "I like your style!",
      "Hi, I'd like to know why you're so beautiful.",
      "If I could count the seconds I think about you, I will die in the process!",
      "If you were in a chemistry class with me, it would be 10x less boring.",
      "If you broke your arm, I would carry your books for you.",
      "I love the way your eyes crinkle at the corners when you smile.",
      "You make me want to be the person I am capable of being.",
      "You're a skilled driver.",
      "You are the rare catalyst to my volatile compound.",
      "You're a tall glass of water!",
      "I'd like to kiss youOften.",
      "You are the wind beneath my wings.",
      "Looking at you makes my foot cramps go away instantaneously.",
      "I like your face.",
      "You are a champ!",
      "You are infatuating.",
      "Even my cat likes you.",
      "There isn't a thing about you that I don't like.",
      "You're so cool, that on a scale of from 1-10, you're elevendyseven.",
      "OH, you OWN that ponytail.",
      "Your shoes are untiedBut for you, it's cool.",
      "You have the best laugh ever.",
      "We would enjoy a cookout with you!",
      "Your name is fun to say.",
      "I love you more than a drunk college student loves tacos.",
      "My camera isn't worthy to take your picture.",
      "You are the sugar on my rice krispies.",
      "Nice belt!",
      "I could hang out with you for a solid year and never get tired of you.",
      "You're real happening in a far out way.",
      "I bet you could take a punch from Mike Tyson.",
      "Your feet are perfect size!",
      "You have very nice teeth.",
      "Can you teach me how to be as awesome as you?",
      "Our awkward silences aren't even awkward.",
      "Don't worryYou'll do great.",
      "I enjoy you more than a good sneezeA GOOD one.",
      "You could invent words and people would use them.",
      "You have powerful sweaters.",
      "If you were around, I would enjoy doing my taxes.",
      "You look like you like to rock.",
      "You are better than unicorns and sparkles combined!",
      "You are the watermelon in my fruit saladYum!",
      "I dig you.",
      "You look better whether the lights are on or off.",
      "I am enchanted to meet you.",
      "I bet even your farts smell good.",
      "I would trust my children with you.",
      "You make me forget what I was going to...",
      "Your smile makes me smile.",
      "I'd wake up for an 8 a.mclass just so I could sit next to you.",
      "You have the moves like Jagger.",
      "You're so hot that you denature my proteins.",
      "All I want for Christmas is you!",
      "You are the world's greatest hugger.",
      "You have a perfectly symmetrical face.",
      "If you were in a movie you wouldn't get killed off.",
      "Your red ruby lips and wiggly hips make me do flips!",
      "I definitely wouldn't kick you out of bed.",
      "They should name an ice cream flavor after you.",
      "You're the salsa to my tortilla chipsYou spice up my life!",
      "You smell nice.",
      "You don't need make-up, make-up needs you.",
      "Me without you is like a nerd without braces, a shoe with out laces, asentencewithoutspaces.",
      "Just knowing someone as cool as you will read this makes me smile.",
      "I would volunteer to take your place in the Hunger Games.",
      "If I had a nickel for everytime you did something stupid, I'd be broke!",
      "I'd let you steal the white part of my Oreo.",
      "I'd trust you to perform open heart surgery on me..blindfolded!",
      "Nice butt! - According to your toilet seat",
      "Perfume strives to smell like you.",
      "I've had the time of my life, and I owe it all to you!",
      "The Force is strong with you.",
      "I like the way your nostrils are placed on your nose.",
      "I would hold the elevator doors open for you if they were closing.",
      "Your every thought and motion contributes to the beauty of the universe.",
      "You make me want to frolic in a field."
    ];

$("#tolerance").val(tolerance);
$("#toleranceNum").text(tolerance*100+"%");

chrome.storage.local.get(null,function(items){
  useHaterade = items.haterade;
  newTolerance = items.tolerance;
  if (useHaterade != undefined) {
    var checkedEl = document.getElementById('toggle--like');
    if (checkedEl) {
      checkedEl.checked = useHaterade;
    }
  };
  if(newTolerance != undefined) {
    tolerance = newTolerance;
    $("#tolerance").val(tolerance);
    $("#toleranceNum").text(Math.round(tolerance*100)+"%");
  }
  if(useHaterade) {
    runHaterade();
  }
});



var getRandomCompliment = function () {
  return compliments[Math.floor(Math.random() * compliments.length)]
}

var runHaterade = function() {
  if( ~currentUrl.indexOf(twitter) ){
    var $comments = $("[data-item-type='tweet']");
    setInterval(function(){
      var $newComments = $("[data-item-type='tweet']");
      if ($comments.length != $newComments.length) {
        $newComments.each(function() {
          $comment = $(this);
          if (tolerance == 1) {
          } else if (tolerance == 0) {
            $comment.find('.tweet-text').text(getRandomCompliment());
            $comment.find('.avatar').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');;
          } else {
            $.get(ratingUrl + $comment.html(),function(data){
              if (data.score >= tolerance) {
                $comment.find('.tweet-text').text(getRandomCompliment());
                $comment.find('.avatar').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');;
              }
            });
          }
        });
        // $("div.is-preview").each(function(){
        //   $(this).children().attr('src','https://s3.amazonaws.com/rapgenius/cats-animals-kittens-background.jpg');
        // });
        $comments = $newComments;
      };
    }, 1000);
    $comments.each(function() {
      $comment = $(this);
      if (tolerance == 1) {
      } else if (tolerance == 0) {
        $comment.find('.tweet-text').text(getRandomCompliment());
        $comment.find('.avatar').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');;
      } else {
        $.get(ratingUrl + $comment.html(),function(data){
          if (data.score >= tolerance) {
            $comment.find('.tweet-text').text(getRandomCompliment());
            $comment.find('.avatar').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');;
          }
        });
      }
    });
    // setTimeout(function(){
    //   $("div.is-preview").each(function(){
    //     $(this).children().data('img-src','https://s3.amazonaws.com/rapgenius/cats-animals-kittens-background.jpg');
    //     $(this).children().attr('src','https://s3.amazonaws.com/rapgenius/cats-animals-kittens-background.jpg');
    //   });
    // }, 1000);
  } else if ( ~currentUrl.indexOf(youTube) ) {
    var $comments = $(".comment-entry");
    setInterval(function(){
      var $newComments = $(".comment-entry");
      if ($comments.length != $newComments.length) {
        $newComments.each(function() {
          $comment = $(this);
          if (tolerance == 1) {
          } else if (tolerance == 0) {
            $comment.find('.comment-text-content').text(getRandomCompliment());
            $comment.find('.user-photo').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');
          } else {
            $.get(ratingUrl + $comment.html(),function(data){
              if (data.score >= tolerance) {
                $comment.find('.comment-text-content').text(getRandomCompliment());
                $comment.find('.user-photo').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');
              }
            });
          }
        });
        $comments = $newComments;
      };
    }, 1000);
    $comments.each(function() {
      $comment = $(this);
      if (tolerance == 1) {
      } else if (tolerance == 0) {
        $comment.find('.comment-text-content').text(getRandomCompliment());
        $comment.find('.user-photo').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');
      } else {
        $.get(ratingUrl + $comment.html(),function(data){
          if (data.score >= tolerance) {
            $comment.find('.comment-text-content').text(getRandomCompliment());
            $comment.find('.user-photo').attr('src','//www.reactionface.info/sites/default/files/images/1287666826226.png');
          }
        });
      }
    });
  } else if ( ~currentUrl.indexOf(hackerNews) ) {
    var $comments = $(".athing");
    $comments.each(function() {
      $comment = $(this).find(".c00");
      if (tolerance == 1) {
      } else if (tolerance == 0) {
        $comment.html(getRandomCompliment());
      } else {
        $.get(ratingUrl + $comment.html(),function(data){
          if (data.score >= tolerance) {
            $comment.html(getRandomCompliment());
          }
        });
      }
    });
  } else if ( ~currentUrl.indexOf(reddit) ) {
    var $comments = $(".comment");
    setInterval(function(){
      var $newComments = $(".comment");
      if ($comments.length != $newComments.length) {
        $newComments.each(function() {
          $comment = $(this).children(".entry").find('.md');
          if (tolerance == 1) {
          } else if (tolerance == 0) {
            $comment.text(getRandomCompliment());
          } else {
            $.get(ratingUrl + $comment.text(),function(data){
              if (data.score >= tolerance) {
                $comment.text(getRandomCompliment());
              }
            });
          }
        });
        $comments = $newComments;
      };
    }, 1000);

    $comments.each(function() {
      $comment = $(this).children(".entry").find('.md');
        if (tolerance == 1) {
        } else if (tolerance == 0) {
          $comment.text(getRandomCompliment());
        } else {
          $.get(ratingUrl + $comment.text(),function(data){
            if (data.score >= tolerance) {
              $comment.text(getRandomCompliment());
            }
          });
        }
    });
  };
};



$('#toggle--like').on('click', function(){
  var checked = document.getElementById('toggle--like').checked;
  chrome.storage.local.set({'haterade': checked});
});

$("#tolerance").on('input', function(){
  tolerance = parseFloat($(this).val());
  chrome.storage.local.set({'tolerance': tolerance});
  $("#toleranceNum").text(Math.round($(this).val()*100)+"%");
});


