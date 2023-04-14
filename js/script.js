// Globala variabler
var inp1Elem;       // Referering till inmatning i textfältet
var inp2Elem;       // Referering till inmatning i textfältet
var msgElem;        // Referens till div
var selFruitNr;     // Nummer på vald frukt!!!

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
// Start av första uppgiften
function showFruit () {
    let nr = getInput(inp1Elem, 5); // Anropning av getInput
    if (nr == -1) return;

    document.getElementById("fruitImg").src = getUrl(nr); // Visning av bild som skickas till getUrl
    selFruitNr = nr; // Spara numret i global variabel för att se typ av vald frukt
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

    nr = parseInt(nr); // Konvertering till heltal från ev decimaltal
    elem.value = nr;

    return nr; // Returnera avläst nummer
} // Slut getInput

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

function addFruits() {
/* egenskapad kod, troligen fel */
    let imgList = "";
    let nr = getUrl (selFruitNr);
    let fruitUrl;

/* kopierad kod, felmeddelande */
    for (let i = 0; i < amount; i++) {
        imgList += "<img src='" + fruitUrl + "' alt='frukt'>";
    }
    document.getElementById("selectedFruits").innerHTML += imgList;

    if (selFruit == 0) {
    msgElem.innerHTML = "Du måste först välja en frukt";
    return;
    }

    let amount = getInput(inp2Elem, 9); {
    if (amount == -1) return;
    }

} // Slut addFruits