// var sign = "";


var signArry = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']

// Uses API to get horoscope
$.ajax({
  type:'POST',
  url:'https://aztro.sameerkumar.website?sign=' + signArry[i] + '&day=today',
  success:function(data){
  console.log(data);
  }
});

// for (var i = 0; i < signArry.length; i++) {

// }




