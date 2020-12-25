let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;
let clicked7 = false;
let clicked8 = false;
let clicked9 = false;
<<<<<<< HEAD

=======
>>>>>>> 23e78611489ebd0409c52ea159e3546331073706
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

<<<<<<< HEAD
$('#tiffAndWrenna').click(function () {
   setTimeout(function () {
      $('#tiffAndWrenna').attr('src', 'assets/images/tiffAndWrenna.jpg')
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
         $('#rainbow').attr('src', 'assets/images/rainbow.jpg')
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
         $('#text3').text('Wrenna loves you sooooo much. :"')
      }, 750);

      setTimeout(function() {
         $('#wrenna1').attr('src', 'assets/images/wrenna1.jpg')
      }, 2000);
   } else {
      confirm("You mised a present!")
   }

   clicked3 = true;
});

$('#jeffAndWrenna').click(function() {

});








$('#jeffAndQueso').click(function () {
   if (clicked1 == true) {
      setTimeout(function () {
         $("#text2").text("We have a present for you!")
      }, 750)

      setTimeout(function () {
         $('#jeffAndQueso').attr('src', 'assets/images/JeffQueso.jpg')
      }, 2000)
      setTimeout(function () {
         $("#text3").text("Whaaaaat?")
      }, 2500)
   } else {
      confirm("You missed a present!")
   }
})


=======
$("#tiffAndWrenna").click(function () {
  setTimeout(function () {
    $("#tiffAndWrenna").attr("src", "assets/images/tiffAndWrenna.jpg");
    // $('#audio1').append('<audio src="assets/audio/nice.m4a"></audio>')
    $("#nice").play(nice);
  }, 750);

  setTimeout(function () {
    $("#text1").text("Merry Christmas!  Keep scrolling down...");
  }, 1500);

  clicked1 = true;
  console.log(clicked1);
});

$("#rainbow").click(function () {
  if (clicked1 == true) {
    setTimeout(function () {
      $("#rainbow").attr("src", "assets/images/rainbow.jpg");
    }, 750);

    setTimeout(function () {
      $("#text2").text(
        "I'm so happy that out little family can celebrate all together and cozy and safe."
      );
      clicked2 = true;
    }, 1500);
  } else {
    confirm("You missed a present! :*");
  }
});

$("#wrenna1").click(function () {
   if (clicked2 == true) {
      setTimeout(function)
   }
});

$("#jeffAndQueso").click(function () {
  if (clicked1 == true) {
    setTimeout(function () {
      $("#text2").text("We have a present for you!");
    }, 750);

    setTimeout(function () {
      $("#jeffAndQueso").attr("src", "assets/images/JeffQueso.jpg");
    }, 2000);
    setTimeout(function () {
      $("#text3").text("Whaaaaat?");
    }, 2500);
  } else {
    confirm("You missed a present!");
  }
});
>>>>>>> 23e78611489ebd0409c52ea159e3546331073706
