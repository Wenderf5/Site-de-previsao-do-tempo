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
        const data1 = element.dt_txt;
        const clima1 = element.weather[0].main;
        meuArrayTempo.push(tempo1)
        meuArrayData.push(data1)
        meuArrayNuvens.push(clima1)
        console.log(data)
        console.log(meuArrayNuvens)
        ax10()
      });

    })
    .catch(error => {
      console.error('Erro:', error);
    })

  function ax10() {

    const graus = meuArrayTempo.map(datatamp => {
      return Math.floor(datatamp - 273);
    });

    const item1 = graus[0]
    const item2 = graus[1]
    const item3 = graus[2]
    const item4 = graus[3]
    const item5 = graus[4]
    const item6 = graus[5]
    const item7 = graus[6]
    const item8 = graus[7]

    const horasEMinutos = meuArrayData.map(timestamp => {
      const partes = timestamp.split(" ")[1];
      const [hora, minuto] = partes.split(":");
      return `${hora}:${minuto}`;
    });



    const item1d = horasEMinutos[0]
    const item2d = horasEMinutos[1]
    const item3d = horasEMinutos[2]
    const item4d = horasEMinutos[3]
    const item5d = horasEMinutos[4]
    const item6d = horasEMinutos[5]
    const item7d = horasEMinutos[6]
    const item8d = horasEMinutos[7]

    let hr1 = document.getElementById("0");
    hr1.innerHTML = item1;
    let hr2 = document.getElementById("1");
    hr2.innerHTML = item2;
    let hr3 = document.getElementById("2");
    hr3.innerHTML = item3;
    let hr4 = document.getElementById("3");
    hr4.innerHTML = item4;
    let hr5 = document.getElementById("4");
    hr5.innerHTML = item5;
    let hr6 = document.getElementById("5");
    hr6.innerHTML = item6;
    let hr7 = document.getElementById("6");
    hr7.innerHTML = item7;
    let hr8 = document.getElementById("7");
    hr8.innerHTML = item8;

    let hr1d = document.getElementById("0d");
    hr1d.innerHTML = item1d;
    let hr2d = document.getElementById("1d");
    hr2d.innerHTML = item2d;
    let hr3d = document.getElementById("2d");
    hr3d.innerHTML = item3d;
    let hr4d = document.getElementById("3d");
    hr4d.innerHTML = item4d;
    let hr5d = document.getElementById("4d");
    hr5d.innerHTML = item5d;
    let hr6d = document.getElementById("5d");
    hr6d.innerHTML = item6d;
    let hr7d = document.getElementById("6d");
    hr7d.innerHTML = item7d;
    let hr8d = document.getElementById("7d");
    hr8d.innerHTML = item8d;
  }

  const i1 = document.getElementById("1i");
  const i2 = document.getElementById("2i");
  const i3 = document.getElementById("3i");
  const i4 = document.getElementById("4i");
  const i5 = document.getElementById("5i");
  const i6 = document.getElementById("6i");
  const i7 = document.getElementById("7i");
  const i8 = document.getElementById("8i");

  const item1i = meuArrayNuvens[0]
  const item2i = meuArrayNuvens[1]
  const item3i = meuArrayNuvens[2]
  const item4i = meuArrayNuvens[3]
  const item5i = meuArrayNuvens[4]
  const item6i = meuArrayNuvens[5]
  const item7i = meuArrayNuvens[6]
  const item8i = meuArrayNuvens[7]

});

