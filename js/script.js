function calculateSquare() {
    var side = parseFloat(document.getElementById("textbox").value);


if (isNaN(side) || side <= 0) {
    document.getElementById("output").innerHTML = "Masukkan angka positif yang valid untuk panjang sisi.";
    return;
}

var area = side * side;
var perimeter = 4 * side;

document.getElementById("output").innerHTML = "Luas Persegi: " + area.toFixed();
}

