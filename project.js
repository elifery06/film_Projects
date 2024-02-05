const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody =document.querySelectorAll(".card-body")[1];

// UI Objesini başlat
const ui = new UI();

//Storge Objesini Üret
const Storage = new Storage();

//Tüm eventleri yükleme 
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

    });

    cardbody.addEventListener("click",deleteFilm);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        // Hata 
        UI.displayMessages("Tüm alanları doldurun...","danger");

    }
    else {
        // Yeni Film
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme

        UI.displayMessages("Film başarıyla eklendi...","success");


    }
ui.clearInputs(titleElement,urlElement,directorElement);//Inputları temizleme;

    e.preventDefault();//
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı...","success");
    }
}
