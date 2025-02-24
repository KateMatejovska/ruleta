const nmbr = Number(prompt('Zadej číslo z rulety:'));


if ((nmbr % 2 == 0) && ((nmbr >= 1 && nmbr <= 10) || (nmbr >= 19 && nmbr <= 28))) {
    document.body.innerHTML += `<p>Zadané číslo ${nmbr} je sudé a černé.</p>`;
} else if ((nmbr % 2 == 0) && ((nmbr >= 11 && nmbr <= 18) || (nmbr >= 29 && nmbr <= 36))) {
    document.body.innerHTML += `<p>Zadané číslo ${nmbr} je sudé a červené.</p>`;
} else if ((nmbr % 2 == 1) && ((nmbr >= 1 && nmbr <= 10) || (nmbr >= 19 && nmbr <= 28))) {
    document.body.innerHTML += `<p>Zadané číslo ${nmbr} je liché a červené.</p>`;
} else if ((nmbr % 2 == 1) && ((nmbr >= 11 && nmbr <= 18) || (nmbr >= 29 && nmbr <= 36))) {
    document.body.innerHTML += `<p>Zadané číslo ${nmbr} je liché a černé.</p>`;
} else if (nmbr == 0) {
    document.body.innerHTML += `<p>Zadané číslo je nula.</p>`;
} else {
    document.body.innerHTML += `<p>Zadané číslo není na ruletě nebo nejde o číslo.</p>`;
}
