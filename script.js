function letrehoz() {
    //Lépések, amit követhet:
    //Az üres DIV megkeresése. Ebbe tesszük majd a listát
    var div = document.getElementById("DIV_generalt_lista");
    div.innerHTML = ""; // előző lista törlése

    //Az <ol> elem (node) létrehozása
    var ol = document.createElement("ol");

    //Behelyezés a DIV-be
    div.appendChild(ol);

    //Jöhetnek az <li> elemek
    //Hány elem van? Olvassuk ki!
    var darab = document.getElementById("elemek_szam").value;

    //Egy listaelem létrehozása, utána az <ol> gyermekeként felvétel
    for (var i = 1; i <= darab; i++) {
        var li = document.createElement("li");
        li.innerHTML = "Elem " + i;
        ol.appendChild(li);
    }
}

function szinez() {
    var n = parseInt(document.getElementById("nth_n").value);
    var first = parseInt(document.getElementById("nth_first").value);
    var szin = document.getElementById("szinek_listaja").value;

    var div = document.getElementById("DIV_generalt_lista");
    var ol = div.getElementsByTagName("ol")[0];
    if (!ol) return; 

    var li = ol.getElementsByTagName("li");
    var darab = li.length;

    for (var i = 0; i < darab; i++) {
        if ((i + 1 - first) % n === 0 && (i + 1 - first) >= 0) {
            li[i].style.backgroundColor = szin;
        }
    }
}

function szelektorParamterValtozas(kuldo, mi_valtozott) {
    document.getElementById(mi_valtozott).innerHTML = kuldo.value;
}

function szinekTorles() {
    let osszes_li_elem = document.getElementsByTagName("li");

    for (let index = 0; index < osszes_li_elem.length; index++) {
        osszes_li_elem[index].style.backgroundColor = "";
    }
}