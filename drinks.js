
$(document).ready(function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.drinks[0].strDrink)
        var drink = document.getElementById('first')
        var drinkBox = document.createElement("p");
        drinkBox.append(response.drinks[0].strDrink)
        drink.appendChild(drinkBox)
    });
})