
$(document).ready(function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        var aries = [(response.drinks[70].strDrink), (response.drinks[0].strDrink), (response.drinks[43].strDrink)];

        console.log(aries[0])  
        console.log(aries[1])  
        console.log(aries[2])

        var taurus = [(response.drinks[71].strDrink), (response.drinks[98].strDrink), (response.drinks[59].strDrink)];

        console.log(taurus[0])  
        console.log(taurus[1])  
        console.log(taurus[2])

        var gemini = [(response.drinks[72].strDrink), (response.drinks[2].strDrink), (response.drinks[60].strDrink)];

        console.log(gemini[0])  
        console.log(gemini[1])  
        console.log(gemini[2])

        var cancer = [(response.drinks[73].strDrink), (response.drinks[3].strDrink), (response.drinks[64].strDrink)];

        console.log(cancer[0])  
        console.log(cancer[1])  
        console.log(cancer[2])

        var leo = [(response.drinks[74].strDrink), (response.drinks[4].strDrink), (response.drinks[92].strDrink)];

        console.log(leo[0])  
        console.log(leo[1])  
        console.log(leo[2])

        var virgo = [(response.drinks[75].strDrink), (response.drinks[5].strDrink), (response.drinks[89].strDrink)];

        console.log(virgo[0])  
        console.log(virgo[1])  
        console.log(virgo[2])

        var libra = [(response.drinks[76].strDrink), (response.drinks[6].strDrink), (response.drinks[87].strDrink)];

        console.log(libra[0])  
        console.log(libra[1])  
        console.log(libra[2])

        var scorpio = [(response.drinks[77].strDrink), (response.drinks[7].strDrink), (response.drinks[86].strDrink)];

        console.log(scorpio[0])  
        console.log(scorpio[1])  
        console.log(scorpio[2])

        var sagittarius = [(response.drinks[78].strDrink), (response.drinks[8].strDrink), (response.drinks[54].strDrink)];

        console.log(sagittarius[0])  
        console.log(sagittarius[1])  
        console.log(sagittarius[2])

        var capricorn = [(response.drinks[79].strDrink), (response.drinks[9].strDrink), (response.drinks[61].strDrink)];

        console.log(capricorn[0])  
        console.log(capricorn[1])  
        console.log(capricorn[2])

        var aqarius = [(response.drinks[80].strDrink), (response.drinks[10].strDrink), (response.drinks[16].strDrink)];

        console.log(aqarius[0])  
        console.log(aqarius[1])  
        console.log(aqarius[2])

        var pisces = [(response.drinks[81].strDrink), (response.drinks[11].strDrink), (response.drinks[19].strDrink)];

        console.log(pisces[0])  
        console.log(pisces[1])  
        console.log(pisces[2])

    });

})

   