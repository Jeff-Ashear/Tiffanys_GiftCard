let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;
let clicked7 = false;
let clicked8 = false;
let clicked9 = false;
// $(document).ready(function() {
//    let audioElement = document.createElement('audio');
//    audioElement.setAttribute('src', 'assets/audio/nice.m4a');

//    audioElement.addEventListener('ended', function() {
//       this.play();
//    }, false);

//    audioElement.addEventListener("canplay", function() {
//       $()
//    })

// })

// $(document).ready(function() {
//    let nice = document.createElement('audio');
//    nice.setAttribute('src', 'assets/audio/nice.m4a');

//    nice.addEventListener('ended', function() {
//       this.play();
//    }, false);

// })

$('#tiffAndWrenna').click(function () {
   console.log('clicked Tiff and Wrenna')
   setTimeout(function () {
      $('#tiffAndWrenna').attr('src', './assets/images/tiffAndWrenna.jpg')
      // $('#audio1').append('<audio src="assets/audio/nice.m4a"></audio>')
      // $('#nice').play(nice);
   }, 750);

   setTimeout(function () {
      $('#text1').text("Merry Christmas!  Keep scrolling down...")
   }, 2000);

    clicked1 = true;
   })

$('#rainbow').click(function () {
   if (clicked1 == true) {
      setTimeout(function () {
         $('#rainbow').attr('src', './assets/images/rainbow.jpg')
      }, 750);

      setTimeout(function () {
         $('#text2').text("I'm so happy that our little family can celebrate all together and cozy and safe.")
      }, 2000);
   } else {
      confirm("You missed a present!");
   }

   clicked2 = true;
})

$('#wrenna1').click(function() {
   if(clicked2 == true){
      setTimeout(function() {
         $('#text3').text('Wrenna loves you sooooo much.')
      }, 750);

      setTimeout(function() {
         $('#wrenna1').attr('src', './assets/images/wrenna1.jpg')
      }, 2000);
   } else {
      confirm("You missed a present!")
   }

   clicked3 = true;
});

$('#jeffAndWrenna').click(function() {
   if (clicked3 == true) {
      setTimeout(function() {
         $('#text4').text("And I love you sooooooooooooooooo much. Meep. :*")
      }, 750);

      setTimeout(function() {
         $('#jeffAndWrenna').attr('src', './assets/images/jeffAndWrenna.jpg')
      }, 2000);
   } else {
      confirm("You missed a present!")
   }

   clicked4 = true;
});

$('#frontWalk').click(function() {
   if (clicked4 == true) {
      setTimeout(function() {
         $('#text5').text("And Queso loves you sooooooooooooooooooooooo much. Mew.")
      }, 750);

      setTimeout(function() {
         $('#frontWalk').attr('src', './assets/images/frontWalk.jpg')
      }, 2000)
   } else {
      confirm("You missed a present!")
   }

   clicked5 = true;
});

$('#house1').click(function() {
   if (clicked5 == true){
      setTimeout(function() {
         $('#text6').text("Right now its cold outside")
      }, 750);

      setTimeout(function() {
         $('#house1').attr('src', './assets/images/house1.jpg')
      }, 2000);

      setTimeout(function() {
         $('#text7').text(`...and while it's very beautiful,`)
      }, 2750);
   } else {
      confirm("You missed a present!")
   }

   clicked6 = true;
});

$('#garden1').click(function() {
   if (clicked6 == true) {
      setTimeout(function() {
         $('#text8').text("soon it will be nice and warm.")
      }, 750);

      setTimeout(function() {
         $('#garden1').attr('src', './assets/images/garden1.JPG')
      }, 2000)
   } else {
      confirm("You missed a present!")
   }

   clicked7 = true;
});

$('#jeffAndQueso').click(function () {
   if (clicked7 == true) {
      setTimeout(function () {
         $("#text9").text("So we have a present for you!")
      }, 750)

      setTimeout(function () {
         $('#jeffAndQueso').attr('src', 'assets/images/JeffQueso.jpg')
      }, 2000)
      setTimeout(function () {
         $("#text10").text("Whaaaaat?")
      }, 2500)
   } else {
      confirm("You missed a present!")
   }

   clicked8 = true;
});

$('#outsideTogether').click(function() {
   if (clicked8 == true) {
      setTimeout(function() {
         $('#text11').text("Your family thinks you might like a trip to the nursery,")
      }, 750);

      setTimeout(function() {
         $('#outsideTogether').attr('src', './assets/images/outsideTogether.jpg')
      }, 2000);

      setTimeout(function() {
         $('#text12').text("...whether it's in real life or on the internet.")
      }, 2750);
   } else {
      confirm("You missed a present!")
   }

   clicked9 = true;
});

$('#giftCard').click(function() {
   if (clicked9 = true) {
      setTimeout(function() {
         $('#text13').text("Here it is!  Yay!!! ")
      }, 750);

      setTimeout(function() {
         $('#giftCard').attr('src', './assets/images/gift-flat.png')
      }, 2000);

      setTimeout(function() {
         $('#text14').text("I hear this place has great trees, and are experts at shipping them so they arrive alive and intact.")
      }, 3000);

      setTimeout(function() {
         $('#fastTrees').attr('href', 'http://www.fast-growing-trees.com');
         $('#fastTrees').text("Fast Growing Trees");
      }, 3500);
   
      setTimeout(function() {
         $('#text15').text("If you want to buy from them, just use the info on the card from your stocking.");
      }, 4000);

      setTimeout(function() {
         $('#text16').text("I have a discount code I will find for this place too if you're interested.");
      }, 5000);

      setTimeout(function() {
         $('#text17').text("If you want to go somewhere local, you can pick a place and I'll set everything up for you.")
      }, 6000);
      
      setTimeout(function() {
         $('#text18').text("MERRY CHRISTMAS TIFFANY! :*")
      }, 7000);
   } else {
      confirm("You missed a present!")
   }
})