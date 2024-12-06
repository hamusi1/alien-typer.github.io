var button = document.getElementById("ng");
var seconds = parseInt(document.getElementById("info"));
const words = 'apple beach chair dance eagle forest garden house island kite lemon magic notebook orange picnic quiet rainbow summer travel umbrella village window yellow zebra capture feature rescue glance steady moment silent proper follow single believe certain distance instead gather market wonder expand figure include defend recent hidden middle forward energy service absent nature balance shadow random engine signal border surface motion income supply wisdom curious problem master station arrive mirror pocket shadow create basket ignore silver adjust memory finish repeat jacket winter hidden'.split(separator = ' ')
const sleep = ms => new Promise(r => setTimeout(r, ms));
const length = words.length;
var run = false;
var inpField = document.querySelector(".field");;
var wor = document.getElementById("words");
let charind = 0;

var mistake = 0;
var cpm = 0;
var wpm = 0;
var acc;
var input = document.getElementById("txtinp");
inpField.addEventListener("input", inittyping);

async function startgame() {



    run = false
    input.disabled = false;
    charind = 0;
    mistake = 0;
    cpm = 0;
    wpm = 0;
    acc = 0;
   


    document.getElementById("info").innerText = "15";
    document.getElementById("mistake").innerText = "MISTAKES: 0";
    document.getElementById("cpm").innerHTML = "CPM: 0";
    document.getElementById("wpm").innerHTML = "WPM: 0";
    document.getElementById("acc").innerHTML = "ACCURACY: 0%";
    document.getElementById("timeover").innerHTML = "";
  

    wor = document.getElementById("words");
    if (wor) wor.innerHTML = "";
    input.value = "";
   
    const pa = paragraph();

    
    
   


}
async function timer() {
    if (run == true) {
        return;
        
    }
    else if (run == false) {
        
        run = true     
    for(seconds = 15; seconds >= 0; seconds--) {
        if (run == false) {
            document.getElementById("info").innerText = "15"
            return;
        } else {
            document.getElementById("info").innerText = seconds;
            await sleep(1000);
        }

    }

    document.getElementById("timeover").innerHTML = "Time Over"
    run = false
    input.disabled = true;
}
   
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

            mistake ++;
            document.getElementById("mistake").innerText = "MISTAKES: " + mistake;
        }
        charind++;
        characters[charind].classList.add("active");
        cpm = (charind - mistake) * 4;
        document.getElementById("cpm").innerHTML = "CPM: " + cpm
        wpm = ((charind - mistake) / 5) * 4;
        document.getElementById("wpm").innerHTML = "WPM: " + wpm;

        if (charind > 0) {
            var acc = Math.round(((charind - mistake) / charind) * 100);
            document.getElementById("acc").innerHTML = "ACCURACY: " + acc + "%";
        } else {
            document.getElementById("acc").innerHTML = "ACCURACY: 0%";
        }
    }
}

function paragraph() {

    var p = '';
    for (var i = 0; i <= 50; i++) {
        const random = Math.floor(Math.random() * length);
        const word = words[random];
        p += word + ' ';

    }
    p = p.split('');
    for (i = 0; i < p.length; i++) {
        wor.innerHTML += "<span>" + p[i] + "</span>";
    }
    return p;
}
function easter() {
    document.getElementById("wpm").innerText = "WPM: 999999"
    document.getElementById("mistake").innerText = "MISTAKES: 0"
    document.getElementById("cpm").innerText = "CPM: 999999"
    document.getElementById("acc").innerText = "ACCURACY: 10000%"
}
