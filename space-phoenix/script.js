//saat-ayarları//
function updateSaat() {
    var saatDiv = document.getElementById('time');
    var tarih = new Date();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    saat = ("0" + saat).slice(-2);
  
    dakika = ("0" + dakika).slice(-2);
    saniye = ("0" + saniye).slice(-2);
  
    saatDiv.textContent=saat + ':' + dakika + ':' + saniye;
  }
  
  setInterval(updateSaat, 40);

// Sayfa yüklenince animasyon başlatılır
window.onload = function() {
  document.querySelector('.jenerik').classList.add('animated');
};
//hakkımızda kısmı için yazının baştan başlamasını sağlıyor//
const jenerikKutusu = document.querySelector('.jenerik-kutusu');
const jenerikListesi = document.querySelector('.jenerik-listesi');
const yeniYazi = document.createElement('li');
yeniYazi.textContent = 'Yeni yazı';

jenerikListesi.addEventListener('animationend', function() {
  // Jenerik yazıları bittiğinde, yeni bir yazı ekleyin ve animasyonu başlatın
  jenerikListesi.appendChild(yeniYazi);
  yeniYazi.classList.add('yeni-yazi');
});

