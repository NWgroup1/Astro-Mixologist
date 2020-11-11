// var sign = "";
$(function(){

  var sign = ''

  $("#birthdayRangeSelector").on("change", function(e) {
    // console.log($(this).val());
    sign = $(this).val()
    $(this.val).text(sign)
    console.log(sign)





    $.ajax({

      type:'POST',
      url:'https://aztro.sameerkumar.website?sign=' + sign + '&day=today',
      success:function(data){
        console.log(data);

      }

    });

  })


})







