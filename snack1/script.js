// Esercizio: Snack1

/* Traccia: 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

// Array creation
const bikes = [
    {
        name: "Giant",
        weight: 22
    },
    {
        name: "Cannondale",
        weight: 20
    },
    {
        name: "Specialized",
        weight: 21
    },
    {
        name: "Canyon",
        weight: 25
    },
    {
        name: "Bianchi",
        weight: 23
    }
]

console.log(bikes) //print list

// main code
let name_low 
let weight_low
result = get_low_weight(bikes)
console.log(result[0],result[1]) // print function results

// function definition to find bike with minimum weight
function get_low_weight(bikes){
    let min_value = 0
    let bike_model
    for (let i = 0; i<bikes.length; i++){
        let actual_obj = bikes[i] 
        console.log(actual_obj)
        if (actual_obj["weight"] < min_value || min_value == 0){
            min_value = actual_obj["weight"] 
            bike_model = actual_obj["name"] 
        }
    }
    return [bike_model,min_value]
}