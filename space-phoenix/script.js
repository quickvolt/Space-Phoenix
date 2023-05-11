//saat-ayarları//
function updateSaat() {
    var saatDiv = document.getElementById('time');
    var tarih = new Date();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    
    saatDiv.textContent = saat + ':' + dakika + ':' + saniye;
  }
  
  setInterval(updateSaat, 1000);
