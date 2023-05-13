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

