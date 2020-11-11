// var sign = "";
$(document).ready(function(){
  $("#birthdayRangeSelector").on("change", function(e) {
    console.log($(this).val());
  })

  // var dateSignMap = {
  //   "Sep 22 - Nov 21": "leo",
  //   "Nov 22 - Dec 21": "pisces",
  //   "Aug 23 - Sep 22": "aries",
  //   "Sep 23 - Nov 22": "sagitarious"
  // };





  var sign = 'pisces' 

  // 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'

  // Uses API to get horoscope
  // for (var i = 0; i < signArry.length; i++) {

    $.ajax({

      type:'POST',
      url:'https://aztro.sameerkumar.website?sign=' + sign + '&day=today',
      success:function(data){
      console.log(data);

      }

   });

  // }


})

// when user inputs their birthday match to range of signs birth date and retrieve sign name
  //
// {

// }







