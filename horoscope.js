// var sign = "";
$(function(){

  var sign = ''

  $("#birthdayRangeSelector").on("change", function(e) {


    sign = $(this).val()
    $(this.val).text(sign)

    $.ajax({

      type:'POST',
      url:'https://aztro.sameerkumar.website?sign=' + sign + '&day=today',
      success:function(data){

        var zodiac = $("#zodiac")
        var userSign = ("Sign: " + sign)
        var reading = ("Zodiac Reading: " + data.description)
        var compatibility = ("Compatibility: " + data.compatibility)

        console.log(userSign)
        console.log(reading)
        console.log(compatibility)
        console.log(data);

        

      }


    });

    })


})







