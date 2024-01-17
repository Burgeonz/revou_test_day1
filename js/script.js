function calculateSquare() {
    var side = parseFloat(document.getElementById("textbox").value);


if (isNaN(side) || side <= 0) {
    document.getElementById("output").innerHTML = "Masukkan angka positif yang valid agar dapat dihitung.";
    return;
}

var area = side * side;
var perimeter = 4 * side;

document.getElementById("output").innerHTML =
"Panjang Sisi: " + side.toFixed() +
"<br>Luas Persegi: " + area.toFixed() +
"<br>Rumus Luas: " + side.toFixed() + " * " + side.toFixed() + " = " + (side * side).toFixed() +
"<br>Keliling Persegi: " + perimeter.toFixed() +
"<br>Rumus Keliling: 4 * " + side.toFixed() + " = " + perimeter.toFixed();
}

function resetCalculator() {
   
    document.getElementById("textbox").value = "";
    document.getElementById("output").innerHTML = "";
}