function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){//Storage a film ekleme
let films = this.getFilmsFromStorage();

films.push(newFilm);//Arraya film ekleme
 


localStorage.setItem("films",)
}

Storage.prototype.getFilmsFromStorage = function(){

    let films;

if(localStorage.getItem("films") === null){
    films = [];
}
else{
    films = JSON.parse(localStorage.getItem("films"));

}
return films;
}