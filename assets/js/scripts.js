let clicked1 = false;
let clicked2 = false;

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

$('#tiffAndWrenna').click(function() {
   setTimeout(function() {
      $('#tiffAndWrenna').attr('src', 'assets/images/tiffAndWrenna.jpg')
      // $('#audio1').append('<audio src="assets/audio/nice.m4a"></audio>')
      $('#nice').play(nice);
   }, 750);

   setTimeout(function() {
       $('#text1').text("Merry Christmas!  Keep scrolling down...")
   }, 1500);

   clicked1 = true;
   console.log(clicked1);
})

$('#rainbow').click(function() {
   setTimeout(function() {
      $('#rainbow').attr('src', 'assets/images/rainbow.jpg')
   }, 750);

   setTimeout(function() {
      $('#text2').text("I'm so happy that out little family can celebrate all together and cozy and safe.")
   }, 1500);

})

$('#jeffAndQueso').click(function() {
   if (clicked1 == true) {
   setTimeout(function() {
      $("#text2").text("We have a present for you!")
   }, 750)

   setTimeout(function() {
      $('#jeffAndQueso').attr('src', 'assets/images/JeffQueso.jpg')
   }, 2000)
   setTimeout(function() {
      $("#text3").text("Whaaaaat?")
   }, 2500)
} else {
   confirm("You missed a present!")
}
})


