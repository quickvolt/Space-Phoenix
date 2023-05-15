// var fotoDiv = document.getElementById("Gallery");


//     var img = document.createElement("img");

//     img.src ="img/Gallery/gallery-1.jpg";


//     fotoDiv.appendChild(img);
var fotografListesi = ['img/Gallery/gallery-1.jpg', 'img/Gallery/gallery-10.jpg', 'img/Gallery/gallery-11.png', 'img/Gallery/gallery-12.jpg', 'img/Gallery/gallery-13.png', 'img/Gallery/gallery-14.jpg', 'img/Gallery/gallery-15.jpg', 'img/Gallery/gallery-16.jpg', 'img/Gallery/gallery-17.jpg', 'img/Gallery/gallery-18.jpg', 'img/Gallery/gallery-19.jpg', 'img/Gallery/gallery-2.jpg', 'img/Gallery/gallery-20.jpg', 'img/Gallery/gallery-21.jpg', 'img/Gallery/gallery-22.jpg', 'img/Gallery/gallery-23.jpg', 'img/Gallery/gallery-24.jpg', 'img/Gallery/gallery-25.jpg', 'img/Gallery/gallery-26.jpg', 
'img/Gallery/gallery-27.jpg', 'img/Gallery/gallery-28.jpg', 'img/Gallery/gallery-29.jpg', 'img/Gallery/gallery-3.png', 'img/Gallery/gallery-30.jpg', 'img/Gallery/gallery-31.jpg', 'img/Gallery/gallery-32.jpg', 'img/Gallery/gallery-4.jpg', 'img/Gallery/gallery-5.jpg', 'img/Gallery/gallery-6.jpg', 'img/Gallery/gallery-7.jpg', 'img/Gallery/gallery-8.jpg', 'img/Gallery/gallery-9.jpg']
  function fotografKaristir(fotografListesi) {
    var currentIndex = fotografListesi.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = fotografListesi[currentIndex];
      fotografListesi[currentIndex] = fotografListesi[randomIndex];
      fotografListesi[randomIndex] = temporaryValue;
    }
  
    return fotografListesi;
  }
  
  var karisikFotografListesi = fotografKaristir(fotografListesi);
  function fotografKaristir(fotografListesi) {
    var currentIndex = fotografListesi.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = fotografListesi[currentIndex];
      fotografListesi[currentIndex] = fotografListesi[randomIndex];
      fotografListesi[randomIndex] = temporaryValue;
    }
  
    return fotografListesi;
  }
  
  var karisikFotografListesi = fotografKaristir(fotografListesi);

  var fotoDiv = document.getElementById("Gallery"); // <div> elementini seçin

// Karıştırılmış fotoğraf dizisindeki her bir fotoğraf için <img> elementi oluşturun ve <div> elementine ekleyin
karisikFotografListesi.forEach(function(fotograf) {
  var img = document.createElement("img");
  img.src = fotograf;
  img.height=150;
  img.classList.add("gallery-photo");
  fotoDiv.appendChild(img);
});

    
