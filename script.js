//select dropdown option of country
const countryCurrencyMap = [
    { country: "Afghanistan", currency: "AFN" },
    { country: "Albania", currency: "ALL" },
    { country: "Algeria", currency: "DZD" },
    { country: "Andorra", currency: "EUR" },
    { country: "Angola", currency: "AOA" },
    { country: "Argentina", currency: "ARS" },
    { country: "Armenia", currency: "AMD" },
    { country: "Australia", currency: "AUD" },
    { country: "Austria", currency: "EUR" },
    { country: "Azerbaijan", currency: "AZN" },
    { country: "Bahamas", currency: "BSD" },
    { country: "Bahrain", currency: "BHD" },
    { country: "Bangladesh", currency: "BDT" },
    { country: "Barbados", currency: "BBD" },
    { country: "Belarus", currency: "BYN" },
    { country: "Belgium", currency: "EUR" },
    { country: "Belize", currency: "BZD" },
    { country: "Benin", currency: "XOF" },
    { country: "Bhutan", currency: "BTN" },
    { country: "Bolivia", currency: "BOB" },
    { country: "Bosnia and Herzegovina", currency: "BAM" },
    { country: "Botswana", currency: "BWP" },
    { country: "Brazil", currency: "BRL" },
    { country: "Brunei", currency: "BND" },
    { country: "Bulgaria", currency: "BGN" },
    { country: "Burkina Faso", currency: "XOF" },
    { country: "Burundi", currency: "BIF" },
    { country: "Cambodia", currency: "KHR" },
    { country: "Cameroon", currency: "XAF" },
    { country: "Canada", currency: "CAD" },
    { country: "Cape Verde", currency: "CVE" },
    { country: "Central African Republic", currency: "XAF" },
    { country: "Chad", currency: "XAF" },
    { country: "Chile", currency: "CLP" },
    { country: "China", currency: "CNY" },
    { country: "Colombia", currency: "COP" },
    { country: "Comoros", currency: "KMF" },
    { country: "Congo", currency: "XAF" },
    { country: "Costa Rica", currency: "CRC" },
    { country: "Croatia", currency: "HRK" },
    { country: "Cuba", currency: "CUP" },
    { country: "Cyprus", currency: "EUR" },
    { country: "Czech Republic", currency: "CZK" },
    { country: "Denmark", currency: "DKK" },
    { country: "Djibouti", currency: "DJF" },
    { country: "Dominica", currency: "XCD" },
    { country: "Dominican Republic", currency: "DOP" },
    { country: "East Timor", currency: "USD" },
    { country: "Ecuador", currency: "USD" },
    { country: "Egypt", currency: "EGP" },
    { country: "El Salvador", currency: "USD" },
    { country: "Equatorial Guinea", currency: "XAF" },
    { country: "Eritrea", currency: "ERN" },
    { country: "Estonia", currency: "EUR" },
    { country: "Eswatini", currency: "SZL" },
    { country: "Ethiopia", currency: "ETB" },
    { country: "Fiji", currency: "FJD" },
    { country: "Finland", currency: "EUR" },
    { country: "France", currency: "EUR" },
    { country: "Gabon", currency: "XAF" },
    { country: "Gambia", currency: "GMD" },
    { country: "Georgia", currency: "GEL" },
    { country: "Germany", currency: "EUR" },
    { country: "Ghana", currency: "GHS" },
    { country: "Greece", currency: "EUR" },
    { country: "Grenada", currency: "XCD" },
    { country: "Guatemala", currency: "GTQ" },
    { country: "Guinea", currency: "GNF" },
    { country: "Guinea-Bissau", currency: "XOF" },
    { country: "Guyana", currency: "GYD" },
    { country: "Haiti", currency: "HTG" },
    { country: "Honduras", currency: "HNL" },
    { country: "Hungary", currency: "HUF" },
    { country: "Iceland", currency: "ISK" },
    { country: "India", currency: "INR" },
    { country: "Indonesia", currency: "IDR" },
    { country: "Iran", currency: "IRR" },
    { country: "Iraq", currency: "IQD" },
    { country: "Ireland", currency: "EUR" },
    { country: "Israel", currency: "ILS" },
    { country: "Italy", currency: "EUR" },
    { country: "Jamaica", currency: "JMD" },
    { country: "Japan", currency: "JPY" },
    { country: "Jordan", currency: "JOD" },
    { country: "Kazakhstan", currency: "KZT" },
    { country: "Kenya", currency: "KES" },
    { country: "Kiribati", currency: "AUD" },
    { country: "Kuwait", currency: "KWD" },
    { country: "Kyrgyzstan", currency: "KGS" },
    { country: "Laos", currency: "LAK" },
    { country: "Latvia", currency: "EUR" },
    { country: "Lebanon", currency: "LBP" },
    { country: "Lesotho", currency: "LSL" },
    { country: "Liberia", currency: "LRD" },
    { country: "Libya", currency: "LYD" },
    { country: "Liechtenstein", currency: "CHF" },
    { country: "Lithuania", currency: "EUR" },
    { country: "Luxembourg", currency: "EUR" },
    { country: "Madagascar", currency: "MGA" },
    { country: "Malawi", currency: "MWK" },
    { country: "Malaysia", currency: "MYR" },
    { country: "Maldives", currency: "MVR" },
    { country: "Mali", currency: "XOF" },
    { country: "Malta", currency: "EUR" },
    { country: "Marshall Islands", currency: "USD" },
    { country: "Mauritania", currency: "MRU" },
    { country: "Mauritius", currency: "MUR" },
    { country: "Mexico", currency: "MXN" },
    { country: "Micronesia", currency: "USD" },
    { country: "Moldova", currency: "MDL" },
    { country: "Monaco", currency: "EUR" },
    { country: "Mongolia", currency: "MNT" },
    { country: "Montenegro", currency: "EUR" },
    { country: "Morocco", currency: "MAD" },
    { country: "Mozambique", currency: "MZN" },
    { country: "Myanmar", currency: "MMK" },
    { country: "Namibia", currency: "NAD" },
    { country: "Nauru", currency: "AUD" },
    { country: "Nepal", currency: "NPR" },
    { country: "Netherlands", currency: "EUR" },
    { country: "New Zealand", currency: "NZD" },
    { country: "Nicaragua", currency: "NIO" },
    { country: "Niger", currency: "XOF" },
    { country: "Nigeria", currency: "NGN" },
    { country: "North Korea", currency: "KPW" },
    { country: "North Macedonia", currency: "MKD" },
    { country: "Norway", currency: "NOK" },
    { country: "Oman", currency: "OMR" },
    { country: "Pakistan", currency: "PKR" },
    { country: "Palau", currency: "USD" },
    { country: "Panama", currency: "PAB" },
    { country: "Papua New Guinea", currency: "PGK" },
    { country: "Paraguay", currency: "PYG" },
    { country: "Peru", currency: "PEN" },
    { country: "Philippines", currency: "PHP" },
    { country: "Poland", currency: "PLN" },

];
var selectOption = document.getElementById("countryValue");

countryCurrencyMap.forEach(item => {
    // console.log(item.currency)
    selectOption.innerHTML += `
         <option value="${item.country}" data-currency="${item.currency}">
            ${item.country}
        </option>
        `;
})


document.getElementById("viewDetails").addEventListener("click", () => {
    var selectedOption = document.getElementById("countryValue").selectedOptions[0];

    // Retrieve the country and currency using data attributes
    var selectedCountry = selectedOption.value;
    var selectedCurrency = selectedOption.getAttribute('data-currency');

    //call the function
    fetchData(selectedCountry, selectedCurrency);
});


async function fetchData(country, currency) {
    let selectedCountry = country.trim();
    let selectedCurency = currency.trim();
    // console.log(selectedCurency)
    // console.log(selectedCountry)

    if (selectedCountry != "") {
        try {
            // Fetch weather data
            const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=3e68147ecbbe4ff3aa962738242709&q=${selectedCountry}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const weatherData = await weatherResponse.json();

            // Check if weather data contains expected properties
            if (!weatherData || !weatherData.current || !weatherData.location) {
                throw new Error("Invalid weather data");
            }

            // Fetch currency exchange rate data
            const currencyResponse = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_yEpv8oVRsW5pWzqDcOnLMcWvTBc1cFTMQbYa98aj`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const currencyData = await currencyResponse.json();
            //console.log(currencyData.data[selectedCurency].code)

            if (!currencyData || !currencyData.data) {
                throw new Error("Invalid currency data");
            }

            // Extract weather information
            let description = weatherData.current.condition.text;
            let icon = weatherData.current.condition.icon;
            let temperature = weatherData.current.temp_c;
            let country = weatherData.location.country;
            let city = weatherData.location.name;
            let humidity = weatherData.current.humidity;

            // Extract currency information 
            let currencyCode = currencyData.data[selectedCurency].code;
            let exchangeRate = currencyData.data[selectedCurency].value.toFixed(2);
            // console.log(currencyCode)
            // console.log(exchangeRate)

            // Display the weather and currency data in the card
            if (weatherData && currencyData) {
                document.getElementById("card_container").innerHTML =
                    (`
            <div id="countryCard" class="flex flex-col items-center w-full  space-y-4 rounded-md py-10">
                <div>
                    <img class="w-[100px]" src="${icon}" alt="icon"/>
                </div>
                <div class="w-full flex flex-col items-center space-y-2">
                    <h1 class="text-4xl font-bold">${temperature}°C</h1>
                    <p class="text-xl">${country}, ${city}</p>
                </div>
                <div class="flex items-center w-1/2 justify-around">
                    <p class="text-sm">Humidity: ${humidity}</p>
                    <p class="text-sm">${description}</p>
                </div>
                <div class="flex items-center w-full justify-around">
                    <p class="text-sm">Exchange Rate: 1 USD = ${exchangeRate}  ${currencyCode}</p>
                </div>
            </div>`);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else {
        alert("Select the country");
    }
}
