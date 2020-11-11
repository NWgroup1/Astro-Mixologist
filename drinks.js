
$(document).ready(function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
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

        var aqarius = [(response.drinks[80].strDrink), (response.drinks[10].strDrink), (response.drinks[16].strDrink)];
        var drinkSet11 = [(response.drinks[80].strDrinkThumb), (response.drinks[10].strDrinkThumb), (response.drinks[16].strDrinkThumb)];

        console.log(drinkSet11[0])
        console.log(drinkSet11[1])
        console.log(drinkSet11[2])
        console.log(aqarius[0])  
        console.log(aqarius[1])  
        console.log(aqarius[2])

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

   