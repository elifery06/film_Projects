const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini başlat
const ui = new UI();

//Storge Objesini Üret
const Storage = new Storage();

//Tüm eventleri yükleme 

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}

function addFilm(e) {

const title =titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

if(title === "" || director === "" || url === ""){
    //Hata
    ui.displayMessages("Tüm alanları doldurunuz...","danger");
}
else{
    //Yeni film
    const newFilm = new Film(title,director,url);

    ui.addFilmToUI(newFilm); //Arayüze film ekleme
    storage.addFilmToStorage(newFilm);//Storage'a film ekleme
    ui.displayMessages("Film başarıyla eklendi...","success");


}
ui.clearInputs(titleElement,urlElement,directorElement);//Inputları temizleme;

    e.preventDefault();//
}
