const div = document.createElement("div");
div.style.textAlign = "center";
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "number");
input.setAttribute("placeholder", "ENTER THE ID")

const button = document.createElement("button")
button.setAttribute("type", "button");
button.innerHTML = "search"
button.addEventListener("click", foo);

let ability = document.createElement("div");
ability.setAttribute("id", "ability");

let moves = document.createElement("div");
moves.setAttribute("id", "moves");

let weight = document.createElement("div");
weight.setAttribute("id", "weight");

div.append(input, button, weight, moves, ability);
document.body.append(div);

async function foo() {
    
    let res = document.getElementById("number").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${res}/`;
    
    let result = await fetch(url);
    let result1 = await result.json();
   
    weight.innerHTML = `Weight by ID : ${result1.weight}`;
    moves.innerHTML = `Moves by ID : ${result1.moves[0].move.name}`;
    ability.innerHTML = `Ability by ID : ${result1.abilities[0].ability.name}`;
}


