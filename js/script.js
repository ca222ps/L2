// Globala variabler
var inp1Elem;       // Referering till inmatning i textfältet
var inp2Elem;       // Referering till inmatning i textfältet
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
// Start av första uppgiften
function showFruit () {
    let nr = getInput(inp1Elem, 5); // Anropning
    if (nr == -1) return;
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

// --------------------------------------------------
function getInput (elem, high) { // Lokala variabler
    msgElem.innerHTML = ""; // Tar bort kvarliggande felmeddelande
    let nr = Number(elem.value); // Avläsning av textfält
    
    if (isNaN(nr)) { // Kontroll av tal
        msgElem.innerHTML = "Du måste skriva ett tal med siffror";
        return -1; // Returnera vid fel
    }

    if (nr < 1 || nr > high) { // Kontroll av tal utanför intervall
        msgElem.innerHTML = "Du måste skriva ett tal mellan 1 och " + high;
        return - 1; // Avbryt funktion om tal utanför intervall
    }

    return nr; // Returnera avläst nummer
} // Slut getInput

