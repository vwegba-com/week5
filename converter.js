const meters = document.getElementById('meter');

meters.addEventListener("input",meterConverter);

function meterConverter(j) {
    let meterC = j.target.value;
    document.getElementById('feets').value = meterC * 3.2808
    document.getElementById('yards').value = meterC * 1.0936
    document.getElementById('inches').value = meterC * 39.370
}

const feets = document.getElementById('feets');

feets.addEventListener("input", feetConverter);

function feetConverter(j) {
    let feetC = j.target.value;
    document.getElementById('meter').value = feetC / 3.2808
    document.getElementById('yards').value = feetC * 12
    document.getElementById('inches').value = feetC * 0.333;
}


const inches = document.getElementById('inches');

inches.addEventListener("input", inchesConverter);

function inchesConverter(j) {
    let inchesC = j.target.value;
    document.getElementById('meter').value = inchesC /39.370
    document.getElementById('yards').value = inchesC * 0.02778
    document.getElementById('feets').value = inchesC * 0.08333
}

const yards = document.getElementById('yards');

yards.addEventListener("input",yardsConverter);

function yardsConverter(j) {
    let yardsC = j.target.value;
    document.getElementById('feets').value = yardsC * 3
    document.getElementById('meter').value = yardsC / 1.0936
    document.getElementById('inches').value = yardsC * 36
}
