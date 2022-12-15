let trazeniBroj = Math.floor(Math.random() * 101);
let broj = 0;
let brojPokušaja = 0;
console.log(trazeniBroj);
// console.log(document.getElementById("broj").value);
function posalji(event) {
    event.preventDefault();
brojPokušaja.innerHTML= brojPokušaja +=1;
document.brojPokušaja;
    let uneseniBroj = document.getElementById("broj").value;
    if (uneseniBroj >100 || uneseniBroj % 1 !==0){
    //console.log("Unesi broj između 0 i 100");
document.getElementById("rezultat").innerText = "Unesi cijeli broj između 0 i 100";
    }
    else if (uneseniBroj <0 ){
    //console.log("Unesi broj između 0 i 100");
document.getElementById("rezultat").innerText = "Unesi cijeli broj između 0 i 100";
    }
    else if (uneseniBroj == trazeniBroj) {
       // console.log("Bravo!");
document.getElementById("rezultat").innerText = "Bravo!";

    } else if (uneseniBroj > trazeniBroj) {
       // console.log("Probaj s manjim brojem");
document.getElementById("rezultat").innerText = "Probaj s manjim brojem";

    } else {
        //console.log("Probaj s većim brojem");
document.getElementById("rezultat").innerText = "Probaj s većim brojem";

    }
   
    //console.log(brojPokušaja);
document.getElementById("brojPokušaja").innerText = brojPokušaja;
}

