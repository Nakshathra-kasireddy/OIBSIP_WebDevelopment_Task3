function convertTemperature(){

  let temp =
  document.getElementById("temp").value;

  let unit =
  document.getElementById("unit").value;

  let result =
  document.getElementById("result");

  if(temp === ""){
      result.innerHTML = "Enter Value";
      return;
  }

  temp = Number(temp);

  let converted;

  if(unit === "FtoC"){

      converted =
      (temp - 32) * 5 / 9;

      result.innerHTML =
      converted.toFixed(4) + " °C";

  }else{

      converted =
      (temp * 9 / 5) + 32;

      result.innerHTML =
      converted.toFixed(4) + " °F";
  }
}