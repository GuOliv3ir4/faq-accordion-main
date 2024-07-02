function Mudarestado(el) {
    var display = document.getElementById(el).style.display;

    var botao = document.getElementById("btn");
    
    if(display == "none") {
        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "<img src='images/icon-minus.svg' alt='Mostrar' width='30' heigth='30'>";
         
    } else {
        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "<img src='images/icon-plus.svg' alt='Esconder' width'30' height='30'>";
    }
};

function Mudarestado2(el) {
    var display = document.getElementById(el).style.display;

    var botao2 = document.getElementById("btm");

    if (display == "none") {
        document.getElementById(el).style.display = 'block';
        botao2.innerHTML = "<img src='images/icon-minus.svg' alt='Mostrar' width='30' heigth='30'>";
    } else {
        document.getElementById(el).style.display = 'none';
        botao2.innerHTML = "<img src='images/icon-plus.svg' alt='Esconder' width'30' height='30'>";
    }
};

function Mudarestado3(el) {
    var display = document.getElementById(el).style.display;

    var botao3 = document.getElementById("btl");

    if (display == "none") {
        document.getElementById(el).style.display = 'block';
        botao3.innerHTML = "<img src='images/icon-minus.svg' alt='Mostrar' width='30' heigth='30'>";
    } else {
        document.getElementById(el).style.display = 'none';
        botao3.innerHTML = "<img src='images/icon-plus.svg' alt='Esconder' width'30' height='30'>";
    }
};

function Mudarestado4(el) {
    var display = document.getElementById(el).style.display;

    var botao4 = document.getElementById("btk");

    if (display == "none") {
        document.getElementById(el).style.display = 'block';
        botao4.innerHTML = "<img src='images/icon-minus.svg' alt='Mostrar' width='30' heigth='30'>";
    } else {
        document.getElementById(el).style.display = 'none';
        botao4.innerHTML = "<img src='images/icon-plus.svg' alt='Esconder' width'30' height='30'>";
    }
};


