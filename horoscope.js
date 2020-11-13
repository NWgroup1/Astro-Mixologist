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

        // elements
        var signEl = $("#sign")
        var readingEl = $("#reading")
        var compEl = $("#comp")

        //object variable

        var userSign = ("Sign: " + sign)
        var reading = ("Reading: " + data.description)
        var compatibility = ("Compatibility: " + data.compatibility)

        appendData()


        function appendData() {


          signEl.text(userSign)
          readingEl.text(reading)
          compEl.text(compatibility)



        }

      }


    });

    })


})







