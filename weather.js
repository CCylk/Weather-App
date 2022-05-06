let input = document.querySelector('.input-text');
let main = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let button = document.querySelector('.submit');
let clearSky = document.querySelector('.clear-sky');
let fewClouds = document.querySelector('.few-clouds');
let sClouds = document.querySelector('.s-clouds');
let bClouds = document.querySelector('.b-clouds');
let sRain = document.querySelector('.s-rain');
let rain = document.querySelector('.rain');
let thunder = document.querySelector('.thunder');
let snow = document.querySelector('.snow');
let mist = document.querySelector('.mist');
let clearSkyN = document.querySelector('.clear-sky-n');
let fewCloudsN = document.querySelector('.few-clouds-n');
let sCloudsN = document.querySelector('.s-clouds-n');
let bCloudsN = document.querySelector('.b-clouds-n');
let sRainN = document.querySelector('.s-rain-n');
let rainN = document.querySelector('.rain-n');
let thunderN = document.querySelector('.thunder-n');
let snowN = document.querySelector('.snow-n');
let mistN = document.querySelector('.mist-n');
let card = document.querySelector('.card');


button.addEventListener("click", async function weather() {
    let key = 'b0432e7a77178ed756d91a25f826447f';
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`)
      .then(response => response.json())
      .then(data => {
        let tempValue = Math.round(data['main']['temp']);
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];
        let iconValue = data['weather'][0]['icon'];

        main.innerHTML = nameValue;
        desc.innerHTML = descValue;
        temp.innerHTML = tempValue + "°C";

        console.log(data);

        if (iconValue === '01d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(251, 180, 0, 0.5)",
            clearSky.classList.add('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '02d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(251, 180, 0, 0.5)",
            fewClouds.classList.add('show'),
            clearSky.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '03d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(152, 161, 159, 0.5)",
            sClouds.classList.add('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '04d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(20, 22, 22, 0.5)",
            bClouds.classList.add('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '09d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(183, 192, 246, 0.5)",
            sRain.classList.add('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '10d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(183, 192, 246, 0.5)",
            rain.classList.add('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '11d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(233, 238, 147, 0.5)",
            thunder.classList.add('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '13d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(218, 234, 237, 0.5)",
            snow.classList.add('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            mist.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            mistN.classList.remove('show');
        } else if (iconValue === '50d') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(218, 234, 237, 0.5)",
            mist.classList.add('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show');
        } else if (iconValue === '01n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(251, 180, 0, 0.5)",
            clearSkyN.classList.add('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '02n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(251, 180, 0, 0.5)",
            fewCloudsN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show'),
            clearSky.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '03n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(152, 161, 159, 0.5)",
            sCloudsN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '04n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(20, 22, 22, 0.5)",
            bCloudsN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '09n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(183, 192, 246, 0.5)",
            sRainN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '10n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(183, 192, 246, 0.5)",
            rainN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '11n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(233, 238, 147, 0.5)",
            thunderN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            snowN.classList.remove('show'),
            mistN.classList.remove('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            snow.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '13n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(218, 234, 237, 0.5)",
            snowN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            mistN.classList.remove('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            mist.classList.remove('show');
        } else if (iconValue === '50n') {
          card.style.boxShadow = "0px 0px 10px 5px  rgba(218, 234, 237, 0.5)",
            mistN.classList.add('show'),
            clearSkyN.classList.remove('show'),
            fewCloudsN.classList.remove('show'),
            sCloudsN.classList.remove('show'),
            bCloudsN.classList.remove('show'),
            sRainN.classList.remove('show'),
            rainN.classList.remove('show'),
            thunderN.classList.remove('show'),
            snowN.classList.remove('show'),
            clearSky.classList.remove('show'),
            fewClouds.classList.remove('show'),
            sClouds.classList.remove('show'),
            bClouds.classList.remove('show'),
            sRain.classList.remove('show'),
            rain.classList.remove('show'),
            thunder.classList.remove('show'),
            snow.classList.remove('show');
        };

      })

      .catch(error => alert("Invalid city name"));
  });

