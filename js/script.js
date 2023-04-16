// Globala variabler
var inp1Elem;       // Referering till inmatning i textfältet
var inp2Elem;       // Referering till inmatning i textfältet
var msgElem;        // Referens till div
var selFruitNr;     // Vilken vald frukt 

// --------------------------------------------------
// Initiering av globala variabler och händelsehanterare
function init() {
    inp1Elem = document.getElementById("input1");
    inp2Elem = document.getElementById("input2");
    msgElem = document.getElementById("message");
    document.getElementById("btn1").onclick = showFruit;// Programsats för anropning av showFruit vid klick på knapp
    document.getElementById("btn2").onclick = addFruits; // Programsats för anropning av addFruits vid klick på knapp
    selFruitNr = 0; // Ingen frukt är vald
} // Slut init

window.onload = init; // Se till att init aktiveras då sidan är inladdad

// --------------------------------------------------
// Start avläsning andra textfältet
function showFruit () {
    let nr = getInput(inp1Elem, 5); // Anropning av getInput
    if (nr == -1) return;

    document.getElementById("fruitImg").src = getUrl(nr); // Visning av bild som skickas till getUrl
    selFruitNr = nr; // Spara numret i global variabel för att se typ av vald frukt
} // Slut showFruit

// --------------------------------------------------
// Kontroll av siffror mellan 1 och 5
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

    nr = parseInt(nr); // Konvertering till heltal från ev decimaltal
    elem.value = nr;

    return nr; // Returnera avläst nummer
} // Slut getInput

// --------------------------------------------------
// Funktion för båda textfält för översättning av bildnummer
function getUrl(nr) {
    let url; // Bild url
    switch (nr) {
        case 1: url = "img/apple.png"; break;
        case 2: url = "img/banana.png"; break;
        case 3: url = "img/pineapple.png"; break;
        case 4: url = "img/orange.png"; break;
        case 5: url = "img/pear.png"; break;
        default: url= "img/nofruit.png";
    }
    return url;
} // Slut getUrl

// --------------------------------------------------
// Start avläsning andra textfältet
function addFruits() {
    let imgList = "";
    let fruitUrl = getUrl (selFruitNr);

let amount = getInput(inp2Elem, 9); {
    if (amount == -1) return;

    }
    for (let i = 0; i < amount; i++) {
        imgList += "<img src='" + fruitUrl + "' alt='frukt'>";
    }
    document.getElementById("selectedFruits").innerHTML += imgList; 
    // Utbyggande av fler frukter

    if (selFruit == 0) { // Kontroll av antal frukter
    msgElem.innerHTML = "Du måste först välja en frukt";
    return;
    }
} // Slut addFruits