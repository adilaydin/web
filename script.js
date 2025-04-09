// Müzik dosyası
const muzik = new Audio("muzik.mp3");
muzik.loop = true;

// Sayfa yüklendiğinde yapılacaklar
window.onload = function () {
  const mod = localStorage.getItem("mod");
  const muzikDurum = localStorage.getItem("muzik");
  const volume = localStorage.getItem("volume");

  // Tema kontrolü
  if (mod === "gece") {
    geceModuAc();
  } else {
    gunduzModuAc();
  }

  // Ses düzeyi kontrolü
  if (volume !== null) {
    muzik.volume = parseFloat(volume); // 0.0 - 1.0 arası
    const slider = document.getElementById("sesSlider");
    if (slider) slider.value = parseFloat(volume) * 100;
  }

  // Müzik durumu
  if (muzikDurum === "acik") {
    muzik.play();
  }
};

// Modlar
function geceModuAc() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  localStorage.setItem("mod", "gece");
}

function gunduzModuAc() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  localStorage.setItem("mod", "gunduz");
}

// Müzik kontrolleri
function muzikBaslat() {
  muzik.play();
  localStorage.setItem("muzik", "acik");
}

function muzikDurdur() {
  muzik.pause();
  localStorage.setItem("muzik", "kapali");
}

// Ses ayarı
function sesiAyarla(deger) {
  const oran = deger / 100;
  muzik.volume = oran;
  localStorage.setItem("volume", oran);
}
