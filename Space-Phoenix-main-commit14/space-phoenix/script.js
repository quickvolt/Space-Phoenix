
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



