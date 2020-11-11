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



  //   "Sep 22 - Nov 21": "leo",
  //   "Nov 22 - Dec 21": "pisces",
  //   "Aug 23 - Sep 22": "aries",
  //   "Sep 23 - Nov 22": "sagitarious"
  // };


  // var zodiacDates = {
  //   aries:'Mar 21 - Apr 20',
  //   taurus:'Apr 21 - May 20',
  //   gemini:'May 21 - Jun 21',
  //   cancer:'Jun 22 - Jul 22',
  //   leo:'Jul 23 - Aug 22',
  //   virgo:'Aug 23 - Sep 22',
  //   libra:'Sep 23 - Oct 22',
  //   scorpio:'Oct 23 - Nov 22',
  //   sagittarius:'Nov 23 - Dec 21',
  //   capricorn:'Dec 22 - Jan 19',
  //   aquarius:'Jan 20 - Feb 18',
  //   pisces:'Feb 19 - Mar 20',
  // }






