// Globala variabler
var inp1Elem;       // Referens till textfält för input
var inp2Elem;       // Referens till textfält för input
var msgElem;        // Referens till div

// --------------------------------------------------
// Initiering av globala variabler och händelsehanterare
function init() {
    inp1Elem = document.getElementById("input1");
    inp2Elem = document.getElementById("input2");
    msgElem = document.getElementById("message");
    document.getElementById("btn1").onclick = showFruit;
	
} // Slut init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// --------------------------------------------------

function showFruit () {
    let nr = Number(inp1Elem.value); // För att avläsa fruktens tal från input 1
    let url; // Bild url
    switch (nr) {
        case 1: url = "img/apple.png"; break;
        case 2: url = "img/banana.png"; break;
        case 3: url = "img/pineapple.png"; break;
        case 4: url = "img/orange.png"; break;
        case 5: url = "img/pear.png"; break;
        default: url= "img/nofruit.png";
    }
    document.getElementById("fruitImg").src = url;
} // Slut showFruit