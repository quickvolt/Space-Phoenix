var fotografListesi = [['img/Gallery/gallery-1.jpg',"Halley Teleskobu tarafından çekilmiş Andromoda Galaksisi"], ['img/Gallery/gallery-10.jpg',"Dünyadan Gece Gökyüzü Görüntüsü"], ['img/Gallery/gallery-11.png',"Ay Kraterlerinin Astronotlar Tarafından Çekilmiş Bir Görüntüsü"], ['img/Gallery/gallery-12.jpg',"Marsa Yollanan Araştırma Aracının Fotoğrafı"], ['img/Gallery/gallery-13.png',"Mars'ın Pho-1 Uydusu Tarafından Çekilmiş Bir Görüntüsü"], ['img/Gallery/gallery-14.jpg',"Güneş Tutulmasının Bir Fotoğrafı"], ['img/Gallery/gallery-15.jpg',"Samanyolu Galaksisi'ndeki Bir Göktaşı"], ['img/Gallery/gallery-16.jpg',"Bir SP Astronotunun Görüntüsü"], ['img/Gallery/gallery-17.jpg',"Pho-1 Uydusun Görüntüsü"], ['img/Gallery/gallery-18.jpg',"Nunmulrus Galaksisi'nin Bir Görüntüsü"], ['img/Gallery/gallery-19.jpg',"Güneş'in Çekilen En Yüksek Kalitedeki Görüntüsü"], ['img/Gallery/gallery-2.jpg',"Nasa Uzay İstasyonundan Dünya Fotoğrafı"], ['img/Gallery/gallery-20.jpg',"Ay Kraterlerinin Yakında Bir Fotoğrafı"], ['img/Gallery/gallery-21.jpg',"Milyonlarca Yıldız Tek Bir Görüntüde"], ['img/Gallery/gallery-22.jpg',"Sebvini Nebulasının S-Pho Teleskobundan Alınan Görüntüsü"], ['img/Gallery/gallery-23.jpg',"Uzaya Yollanan Pho-4'ün Gece Çekilmiş Görüntüsü"], ['img/Gallery/gallery-24.jpg',"Tazutmun Nebulası'nın S-Pho Teleskobundan Çekilmiş Bir Fotoğraf"], ['img/Gallery/gallery-25.jpg',"Uzayda En Net Görüntülenen Sataemal Nebulası"], ['img/Gallery/gallery-26.jpg',"Gronmula Galaksisi'nin Bir Görüntüsü"],['img/Gallery/gallery-27.jpg',"Lakazluna Galaksisi'nin PHO-T Telesekobundan Alınmış Fotoğrafı"], ['img/Gallery/gallery-28.jpg',"SP Astronotlarının Araştırma Aracı İle Görüntüsü"], ['img/Gallery/gallery-29.jpg',"Dünya'nın Ay'dan Çekilmiş Bir Fotoğrafı"], ['img/Gallery/gallery-3.png',"Dünya'nın Uzaydan Çekilmiş En Net Görüntüsü"], ['img/Gallery/gallery-30.jpg',"GJ 367b Ötegezegeninin Pho-T Teleskobundan Bir Görüntüsü"], ['img/Gallery/gallery-31.jpg',"Jüpiter'in Uzaydan Çekilmiş Görüntüsü"], ['img/Gallery/gallery-32.jpg',"Ay Tutulması'nın Bir Görüntüsü"], ['img/Gallery/gallery-4.jpg',"Binlerce Galaksinin Pho-T Teleskobuyla Çekilmiş Bir Fotoğrafı"], ['img/Gallery/gallery-5.jpg',"PHO-S Roketi'nin Uzaya Fırlatılışı"], ['img/Gallery/gallery-6.jpg',"Jüpiter'in Uzaktan Çekilmiş Görüntüsü"], ['img/Gallery/gallery-7.jpg',"Neptün'ün S-Pho Teleskobundan Bir Görüntüsü "], ['img/Gallery/gallery-8.jpg',"Çekilebilen İlk Karadelik Fotoğrafı"],
 ['img/Gallery/gallery-9.jpg',"Ay Tutulmasının Pho-1 Uydusundan Görüntüsü"]]
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
  console.log(karisikFotografListesi);


  var fotoDiv = document.getElementById("Gallery"); // <div> elementini seçin

karisikFotografListesi.forEach(function(fotograf) {
  var div=document.createElement("div");
  var img = document.createElement("img");
  var content=document.createElement("div");

  div.classList.add("gallery-item");
  content.classList.add("caption")
  img.classList.add("gallery-photo");
  
  content.innerHTML=fotograf[1];
  img.src = fotograf[0];
  img.height=150;
  
  div.appendChild(img);
  div.appendChild(content);
  fotoDiv.appendChild(div);
});

    
