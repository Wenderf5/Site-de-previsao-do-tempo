const ApiKey = '015d353fec5aba233c320e10ddd7aa86';
let input = document.getElementById("input");

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

  function ax1() {
    let cidade1 = document.getElementById("cidade1");
    let bloco2 = document.getElementById("bloco2");
    let imgprincipal = document.getElementById("imgprincipal");

    cidade1.style.display = "flex";
    bloco2.style.display = "flex";
    imgprincipal.style.display = "none";
  }
  ax1()

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${ApiKey}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.list.forEach(element => {
        const tempo1 = element.main.temp;
        console.log(tempo1);
      });

    })
    .catch(error => {
      console.error('Erro:', error);
    });
});

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Hora', 'clima'],
    ['0:00', 15],
    ['3:00', 18],
    ['6:00', 20],
    ['9:00', 21],
    ['12:00', 25],
    ['15:00', 27],
    ['18:00', 23],
    ['21:00', 20],
    ['24:00', 17],
  ]);

  var options = {
    title: '',
    hAxis: { title: '', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    legend: {position: 'none', maxLines: 1},
    vAxis: {
      minValue: 0,
      ticks: []
    }
  };
  
  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

