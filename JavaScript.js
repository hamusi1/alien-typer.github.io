var button = document.getElementById("ng");
var seconds = parseInt(document.getElementById("info"));
const words = 'apple beach chair dance eagle forest garden house island kite lemon magic notebook orange picnic quiet rainbow summer travel umbrella village window yellow zebra capture feature rescue glance steady moment silent proper follow single believe certain distance instead gather market wonder expand figure include defend recent hidden middle forward energy service absent nature balance shadow random engine signal border surface motion income supply wisdom curious problem master station arrive mirror pocket shadow create basket ignore silver adjust memory finish repeat jacket winter hidden'.split(separator = ' ')
const sleep = ms => new Promise(r => setTimeout(r, ms));
const length = words.length;
var run = false;
var inpField = null;
var wor = null;
let charind = 0;
var input = null;
var mistake = 0;
var cpm = 0;
var wpm = 0;
document.addEventListener("DOMContentLoaded", (event) => {
    wor = document.getElementById("words")
    inpField = document.querySelector(".field");
    inpField.addEventListener("input", inittyping);
    input = document.getElementById("tex");
    input.disabled = true
    
});

async function startgame() {
    if (run == true) {
        return
    }
    run = true
   
    const pa = paragraph();

   
    for (var se = 3; se >= 1; se--) {
        document.getElementById("start").innerText = se;
        await sleep(1000);
        
    }
    input = document.getElementById("tex");
    input.disabled = false;
    document.getElementById("start").innerText = "START!     ";
    for (seconds = 30; seconds >= 0; seconds--) {

        document.getElementById("info").innerText = seconds;
        await sleep(1000);

    }
    document.getElementById("time over").innerHTML = "Time Over"
    run = false
    document.addEventListener("keydown", function () {
        inpField.focus();

    })
    wor = document.addEventListener("click", inpField.focus());
    inpu = document.getElementById("tex");
    input.disabled = true
    cpm = (charind - mistake) / 2
    document.getElementById("cpm").innerHTML = "CPM: " +cpm
}
function test() {
    console.log("work")
}


function inittyping() {
    const characters = wor.querySelectorAll("span");
    let typedchar = inpField.value.split("")[charind];
    if (typedchar == null) {
        charind--;
        characters[charind].classList.remove("correct", "incorrect");
    } else {
        if (characters[charind].innerText == typedchar) {

            characters[charind].classList.add("correct");

        }
        else {

            characters[charind].classList.add("incorrect");
           
            mistake++;
            document.getElementById("mistake").innerText = "MISTAKES: " + mistake;
        }
        charind++;
        cpm = (charind - mistake) / 2
        document.getElementById("cpm").innerHTML = "CPM: " + cpm
        wpm = ((charind - mistake) / 5) / 2;
        document.getElementById("wpm").innerHTML = "WPM: " + wpm;
        
    }
}

function paragraph() {
    wor.innerHTML = ''; 
    var p = '';
    for (var i = 0; i <= 50; i++) {
        const random = Math.floor(Math.random() * length);
        const word = words[random];
        p += word+' ';
       
    }
    p = p.split('');
    for (i = 0; i < p.length; i++) {
        wor.innerHTML += "<span>" + p[i] + "</span>";
    }
    return p;
}
