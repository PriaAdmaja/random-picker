
let inputNama = document.getElementById("input-nama");
let dataPeserta = document.getElementById("data-peserta");
let hasil = document.getElementById("hasil");
let modal = document.getElementById("modal-container")
let modalResult = document.getElementById("modal-result");
var close = document.getElementsByClassName("close")[0];


let daftarNama = [];
let i = 0;
let pick;

function saveNama() {
    if (inputNama.value == '') {

    } else {
        daftarNama.push(inputNama.value);
        let newData = document.createElement('tr');
        newData.innerHTML = `${i + 1}. ${daftarNama[i].toString()}`;
        dataPeserta.appendChild(newData);
        i++;
    }
}

function setPilih() {
    pick = Math.floor(Math.random() * daftarNama.length);
    hasil.value = daftarNama[pick].toString();
    modalResult.innerHTML = `The winner is ${hasil.value}`;
    modal.style.display = "flex";
    return;
}

function reset() {
    location.reload();
}

function closeModal() {
    modal.style.display = "none";
}

close.onclick = function() {
    modal.style.display = "none";
}
