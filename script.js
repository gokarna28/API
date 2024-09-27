document.getElementById("viewDetails").addEventListener("click", () => {
    var country = document.getElementById("countryValue").value;
    // call the fetch function 
    fetchData(country);
});
async function fetchData(country, e) {

    let selectedCountry = country;
    // console.log(selectedCountry);
    // e.preventDefault();
    if (selectedCountry != "") {

        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3e68147ecbbe4ff3aa962738242709&q=${selectedCountry}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            //console.log(data);
            let description = data.current.condition.text;
            let icon = data.current.condition.icon;
            let temperature = data.current.temp_c;
            let country = data.location.country;
            let city = data.location.name;
            let humidity = data.current.humidity;

            if (data) {
                document.getElementById("card_container").innerHTML =
                    (`
            <div id="countryCard" class="bg-sky-100 border flex flex-col items-center w-1/2 mt-20 space-y-4 rounded-md py-10">
                <div>
                <img class="w-[100px]" src="${icon}" alt="icon"/>
                </div>
                <div class="w-full flex flex-col items-center space-y-2">
                    <h1 class="text-4xl font-bold">${temperature}°C</h1>
                    <p class="text-xl">${country}, ${city}</p>
                </div>
                <div class="flex items-center w-1/2 justify-around">
                    <p class="text-sm">humidity:${humidity}</p>
                    <p class="text-sm">${description}</p>
                </div>
                
            </div>`);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else {
        alert("select the country")
    }

}


//currency rate
  fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_yEpv8oVRsW5pWzqDcOnLMcWvTBc1cFTMQbYa98aj")
  .then(response => response.json()) // Parse the JSON data
  .then(data => console.log(data)) // Log the data
  .catch(error => console.error('Error fetching data:', error)); // Handle errors


  fetch("https://openexchangerates.org/api/currencies.json")
  .then(response => response.json()) // Parse the JSON data
  .then(data => console.log(data)) // Log the data
  .catch(error => console.error('Error fetching data:', error)); // Handle errors
