$(document).ready(function() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $('#birthdayRangeSelector').change(function() { 
            if ($(this).val() === 'aries'){
                display1();
            }
            if ($(this).val() === 'taurus'){
                display2();
            }
            if ($(this).val() === 'gemini'){
                display3();
            }
            if ($(this).val() === 'cancer'){
                display4();
            }
            if ($(this).val() === 'leo'){
                display5();
            }
            if ($(this).val() === 'virgo'){
                display6();
            }
            if ($(this).val() === 'libra'){
                display7();
            }
            if ($(this).val() === 'scorpio'){
                display8();
            }
            if ($(this).val() === 'sagittarius'){
                display9();
            }
            if ($(this).val() === 'capricorn'){
                display10();
            }
            if ($(this).val() === 'aquarius'){
                display11();
            }
            if ($(this).val() === 'pisces'){
                display12();
            }
        });

        function display1() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + aries[0] + " " + "|" + " " + aries[1] + " " + "|" + " " + aries[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/dj8n0r1504375018.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg');
        }

        function display2() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + taurus[0] + " " + "|" + " " + taurus[1] + " " + "|" + " " + taurus[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/92h3jz1582474310.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/wqstwv1478963735.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/qtwxwr1483387647.jpg');
        }

        function display3() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + gemini[0] + " " + "|" + " " + gemini[1] + " " + "|" + " " + gemini[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg');
        }

        function display4() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + cancer[0] + " " + "|" + " " + cancer[1] + " " + "|" + " " + cancer[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/g12lj41493069391.jpg');
        }

        function display5() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + leo[0] + " " + "|" + " " + leo[1] + " " + "|" + " " + leo[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg');
        }

        function display6() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + virgo[0] + " " + "|" + " " + virgo[1] + " " + "|" + " " + virgo[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/qspqxt1472720078.jpg');
        }

        function display7() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + libra[0] + " " + "|" + " " + libra[1] + " " + "|" + " " + libra[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/iloasq1587661955.jpg');
        }

        function display8() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + scorpio[0] + " " + "|" + " " + scorpio[1] + " " + "|" + " " + scorpio[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/vvop4w1493069934.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/yuurps1472667672.jpg');
        }

        function display9() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + sagittarius[0] + " " + "|" + " " + sagittarius[1] + " " + "|" + " " + sagittarius[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/xwryyx1472719921.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/vtytxq1483387578.jpg');
        }

        function display10() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + capricorn[0] + " " + "|" + " " + capricorn[1] + " " + "|" + " " + capricorn[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/urystu1478253039.jpg');
        }

        function display11() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + aquarius[0] + " " + "|" + " " + aquarius[1] + " " + "|" + " " + aquarius[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/trptts1454514474.jpg');
        }

        function display12() {
            var drinks1 = document.getElementById("drinks")
            while (drinks1.hasChildNodes()) {
                drinks1.removeChild(drinks1.lastChild);
              }
            $("#drinks").append("Your Drinks:" + " " + pisces[0] + " " + "|" + " " + pisces[1] + " " + "|" + " " + pisces[2])
            $("#pic1").attr("src",'https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg');
            $("#pic2").attr("src",'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg');
            $("#pic3").attr("src",'https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg');
        }

        console.log(response)

        var aries = [(response.drinks[70].strDrink), (response.drinks[0].strDrink), (response.drinks[43].strDrink)];
        var drinkSet1 = [(response.drinks[70].strDrinkThumb), (response.drinks[0].strDrinkThumb), (response.drinks[43].strDrinkThumb)];

        console.log(drinkSet1[0])
        console.log(drinkSet1[1])
        console.log(drinkSet1[2])
        console.log(aries[0])  
        console.log(aries[1])  
        console.log(aries[2])

        var taurus = [(response.drinks[71].strDrink), (response.drinks[98].strDrink), (response.drinks[59].strDrink)];
        var drinkSet2 = [(response.drinks[71].strDrinkThumb), (response.drinks[98].strDrinkThumb), (response.drinks[59].strDrinkThumb)];

        console.log(drinkSet2[0])
        console.log(drinkSet2[1])
        console.log(drinkSet2[2])
        console.log(taurus[0])  
        console.log(taurus[1])  
        console.log(taurus[2])

        var gemini = [(response.drinks[72].strDrink), (response.drinks[2].strDrink), (response.drinks[60].strDrink)];
        var drinkSet3 = [(response.drinks[72].strDrinkThumb), (response.drinks[2].strDrinkThumb), (response.drinks[60].strDrinkThumb)];

        console.log(drinkSet3[0])
        console.log(drinkSet3[1])
        console.log(drinkSet3[2])
        console.log(gemini[0])  
        console.log(gemini[1])  
        console.log(gemini[2])

        var cancer = [(response.drinks[73].strDrink), (response.drinks[3].strDrink), (response.drinks[64].strDrink)];
        var drinkSet4 = [(response.drinks[73].strDrinkThumb), (response.drinks[3].strDrinkThumb), (response.drinks[64].strDrinkThumb)];

        console.log(drinkSet4[0])
        console.log(drinkSet4[1])
        console.log(drinkSet4[2])
        console.log(cancer[0])  
        console.log(cancer[1])  
        console.log(cancer[2])

        var leo = [(response.drinks[74].strDrink), (response.drinks[4].strDrink), (response.drinks[92].strDrink)];
        var drinkSet5 = [(response.drinks[74].strDrinkThumb), (response.drinks[4].strDrinkThumb), (response.drinks[92].strDrinkThumb)];

        console.log(drinkSet5[0])
        console.log(drinkSet5[1])
        console.log(drinkSet5[2])
        console.log(leo[0])  
        console.log(leo[1])  
        console.log(leo[2])

        var virgo = [(response.drinks[75].strDrink), (response.drinks[5].strDrink), (response.drinks[89].strDrink)];
        var drinkSet6 = [(response.drinks[75].strDrinkThumb), (response.drinks[5].strDrinkThumb), (response.drinks[89].strDrinkThumb)];

        console.log(drinkSet6[0])
        console.log(drinkSet6[1])
        console.log(drinkSet6[2])
        console.log(virgo[0])  
        console.log(virgo[1])  
        console.log(virgo[2])

        var libra = [(response.drinks[76].strDrink), (response.drinks[6].strDrink), (response.drinks[87].strDrink)];
        var drinkSet7 = [(response.drinks[76].strDrinkThumb), (response.drinks[6].strDrinkThumb), (response.drinks[87].strDrinkThumb)];

        console.log(drinkSet7[0])
        console.log(drinkSet7[1])
        console.log(drinkSet7[2])
        console.log(libra[0])  
        console.log(libra[1])  
        console.log(libra[2])

        var scorpio = [(response.drinks[77].strDrink), (response.drinks[7].strDrink), (response.drinks[86].strDrink)];
        var drinkSet8 = [(response.drinks[77].strDrinkThumb), (response.drinks[7].strDrinkThumb), (response.drinks[86].strDrinkThumb)];

        console.log(drinkSet8[0])
        console.log(drinkSet8[1])
        console.log(drinkSet8[2])
        console.log(scorpio[0])  
        console.log(scorpio[1])  
        console.log(scorpio[2])

        var sagittarius = [(response.drinks[78].strDrink), (response.drinks[8].strDrink), (response.drinks[54].strDrink)];
        var drinkSet9 = [(response.drinks[78].strDrinkThumb), (response.drinks[8].strDrinkThumb), (response.drinks[54].strDrinkThumb)];

        console.log(drinkSet9[0])
        console.log(drinkSet9[1])
        console.log(drinkSet9[2])
        console.log(sagittarius[0])  
        console.log(sagittarius[1])  
        console.log(sagittarius[2])

        var capricorn = [(response.drinks[79].strDrink), (response.drinks[9].strDrink), (response.drinks[61].strDrink)];
        var drinkSet10 = [(response.drinks[79].strDrinkThumb), (response.drinks[9].strDrinkThumb), (response.drinks[61].strDrinkThumb)];

        console.log(drinkSet10[0])
        console.log(drinkSet10[1])
        console.log(drinkSet10[2])
        console.log(capricorn[0])  
        console.log(capricorn[1])  
        console.log(capricorn[2])

        var aquarius = [(response.drinks[80].strDrink), (response.drinks[10].strDrink), (response.drinks[16].strDrink)];
        var drinkSet11 = [(response.drinks[80].strDrinkThumb), (response.drinks[10].strDrinkThumb), (response.drinks[16].strDrinkThumb)];

        console.log(drinkSet11[0])
        console.log(drinkSet11[1])
        console.log(drinkSet11[2])
        console.log(aquarius[0])  
        console.log(aquarius[1])  
        console.log(aquarius[2])

        var pisces = [(response.drinks[81].strDrink), (response.drinks[11].strDrink), (response.drinks[19].strDrink)];
        var drinkSet12 = [(response.drinks[81].strDrinkThumb), (response.drinks[11].strDrinkThumb), (response.drinks[19].strDrinkThumb)];

        console.log(drinkSet12[0])
        console.log(drinkSet12[1])
        console.log(drinkSet12[2])
        console.log(pisces[0])  
        console.log(pisces[1])  
        console.log(pisces[2])

    });

})



    
       