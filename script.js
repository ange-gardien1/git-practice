
function calculateTotal(toppingArray) {  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    

    let toppingString = "Toppings: ";

    // For Loop

    // total = baseCost + cost of all toppings

    // set DOM total += total   
    // use DOM: = orderString   
    // use DOM: = toppingString 
}

let crust = document.getElementById("crust");
let sauce = document.getElementById("sauce");
let toppings = [];

let formButton = document.getElementById("btn");
formButton.addEventListener("click", function(event) {
    event.preventDefault();
    let topping1 = document.getElementById("Topping1").value;
    let topping2 = document.getElementById("Topping2").value;
    let topping3 = document.getElementById("Topping3").value;

    toppings.push(topping1, topping2, topping3);

    calculateTotal(toppings);
}

)
;

function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50;
    let orderString = "Crust " + crust.value + " pizza with " + sauce.value + ".";
    let toppingString = "Toppings: ";

    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i] !== "") {
            total += toppingCost;
            toppingString += toppingArray[i] + " ";
        }
    }

    total += baseCost;

    document.getElementById("total").innerHTML += "$" + total;
    document.getElementById("pizzaOrder").innerHTML = orderString;
    document.getElementById("toppings").innerHTML = toppingString;
}