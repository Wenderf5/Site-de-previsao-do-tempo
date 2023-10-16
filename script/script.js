const ApiKey = '015d353fec5aba233c320e10ddd7aa86'; 
let input = document.getElementById("input");

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

      cidade1.innerHTML = data.name;
      clima.innerHTML = temperaturaCelsius;
      umidade.innerHTML = data.main.humidity;
      vento.innerHTML = data.wind.speed;
      codigoPais = data.sys.country;
      bandeira.src = `https://flagsapi.com/${codigoPais}/flat/32.png`;
    })
    .catch(error => {
      console.error('Erro:', error);
    });

    function ax1(){
      let cidade1 = document.getElementById("cidade1");
      let bloco2 = document.getElementById("bloco2");
      let imgprincipal = document.getElementById("imgprincipal");

      cidade1.style.display = "flex";
      bloco2.style.display = "flex";
      imgprincipal.style.display = "none";
  }
  ax1()
});

