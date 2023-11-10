const ApiKey = '015d353fec5aba233c320e10ddd7aa86';
let input = document.getElementById("input");
meuArrayTempo = []
meuArrayData = []
meuArrayNuvens = []

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let btnlupa = document.getElementById("btnlupa")
    btnlupa.click();
  }
});

document.getElementById("btnlupa").addEventListener("click", function () {
  let erro = document.getElementById("erro");
  let cidade = input.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${ApiKey}`)
    .then(response => {
      if (!response.ok) {
        erro.style.display = "block";
        imgprincipal.style.display = "block";
        cidade1.style.display = "none";
        bloco2.style.display = "none";
        img0.style.display = "none"
      }
      else if (erro.style.display == "block") {
        erro.style.display = "none";
      }
      return response.json();
    })
    .then(data => {
      let clima = document.getElementById("clima");
      let umidade = document.getElementById("umidade");
      let vento = document.getElementById("vento");
      let cidade1 = document.getElementById("cidade");
      let climaKelvin = data.main.temp;
      let climaKelvin1 = parseInt(climaKelvin);
      const temperaturaCelsius = climaKelvin1 - 273;
      const nuvens = data.weather[0].main;

      cidade1.innerHTML = data.name;
      clima.innerHTML = temperaturaCelsius;
      umidade.innerHTML = data.main.humidity;
      vento.innerHTML = data.wind.speed;
      codigoPais = data.sys.country;
      bandeira.src = `https://flagsapi.com/${codigoPais}/flat/32.png`;

      if (nuvens == "Clear") {
        const texto1 = document.getElementById("texto1");
        texto1.innerHTML = "Ensolarado"
      }
      if (nuvens == "Rain") {
        const texto1 = document.getElementById("texto1");
        texto1.innerHTML = "Chuvoso"
      }
      if (nuvens == "Clouds") {
        const texto1 = document.getElementById("texto1");
        texto1.innerHTML = "Nublado"
      }
      if (nuvens == "Clear") {
        const img1 = document.getElementById("img1");
        img1.src = "img/Ensolarado.png"
      }
      if (nuvens == "Rain") {
        const img1 = document.getElementById("img1");
        img1.src = "img/Chuva.png"
      }
      if (nuvens == "Clouds") {
        const img1 = document.getElementById("img1");
        img1.src = "img/Nublado.png"
      }
    })
    .catch(error => {
      console.error('Erro:', error);
    });

  function ax1() {
    let cidade1 = document.getElementById("cidade1");
    let bloco4 = document.getElementById("bloco4");
    let imgprincipal = document.getElementById("imgprincipal");
    let img0 = document.getElementById("img0")

    cidade1.style.display = "flex";
    bloco4.style.display = "flex";
    imgprincipal.style.display = "none";
    img0.style.display = "flex"
    bloco2.style.display = "flex";

  }
  ax1()
});


let latitude;
let longitude;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    function (error) {
      console.error(`Erro ao obter a localização: ${error.message}`);
    }
  );
} else {
  console.error("Geolocalização não suportada neste navegador");
}

document.addEventListener("DOMContentLoaded", function() {
  if (latitude !== undefined && longitude !== undefined) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`)
      .then(response => response.json())
      .then(data => {
          let clima = document.getElementById("clima");
          let umidade = document.getElementById("umidade");
          let vento = document.getElementById("vento");
          let cidade1 = document.getElementById("cidade");
          let climaKelvin = data.main.temp;
          let climaKelvin1 = parseInt(climaKelvin);
          const temperaturaCelsius = climaKelvin1 - 273;
          const nuvens = data.weather[0].main;

          cidade1.innerHTML = data.name;
          clima.innerHTML = temperaturaCelsius;
          umidade.innerHTML = data.main.humidity;
          vento.innerHTML = data.wind.speed;
          codigoPais = data.sys.country;
          bandeira.src = `https://flagsapi.com/${codigoPais}/flat/32.png`;

          if (nuvens == "Clear") {
            const texto1 = document.getElementById("texto1");
            texto1.innerHTML = "Ensolarado"
          }
          if (nuvens == "Rain") {
            const texto1 = document.getElementById("texto1");
            texto1.innerHTML = "Chuvoso"
          }
          if (nuvens == "Clouds") {
            const texto1 = document.getElementById("texto1");
            texto1.innerHTML = "Nublado"
          }
          if (nuvens == "Clear") {
            const img1 = document.getElementById("img1");
            img1.src = "img/Ensolarado.png"
          }
          if (nuvens == "Rain") {
            const img1 = document.getElementById("img1");
            img1.src = "img/Chuva.png"
          }
          if (nuvens == "Clouds") {
            const img1 = document.getElementById("img1");
            img1.src = "img/Nublado.png"
          }
          console.log(data)
      })
      .catch(error => {
        console.error('Erro na solicitação ao OpenWeatherMap:', error);
      });
  } else {
    console.error('Latitude ou longitude não definidas.');
  }
});