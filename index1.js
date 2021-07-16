var btn = document.getElementById("btn")
var ul = document.getElementById("list")

btn.onclick = () => {
    ul.innerHTML = "";
    var input = document.getElementById("input").value
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 
    "http://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=359cfb54f052a2238bb32c4101d3d3cf", true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.response)
            obj = JSON.parse(this.responseText);
            console.log(obj)
            console.log(new Date(obj.dt*1000-(obj.timezone*1000)));
            var wind = document.createElement("li")
            wind.appendChild(document.createTextNode("Wind Speed : " + obj.wind.speed))

            var min= obj.main.temp_min - 273.15
            var max = obj.main.temp_max - 273.15

            min = min.toFixed(2)
            max = max.toFixed(2)

            var min_temp = document.createElement("li")
            min_temp.appendChild(document.createTextNode("Minimum Temperature : " + min + " C"))

            var max_temp = document.createElement("li")
            max_temp.appendChild(document.createTextNode("Maximum Temperature : " + max + " C"))

            var date = document.createElement("li")
            date.appendChild(document.createTextNode("Date : " + new Date(obj.dt*1000-(obj.timezone*1000))))

            var visibility = document.createElement("li")
            visibility.appendChild(document.createTextNode("Visibility : " + obj.visibility))

            var country = document.createElement("li")
            country.appendChild(document.createTextNode("Country : " + obj.sys.country))

            var city = document.createElement("li")
            city.appendChild(document.createTextNode("City : " + obj.name))

            list.appendChild(city)
            list.appendChild(country)
            list.appendChild(date)
            list.appendChild(max_temp)
            list.appendChild(min_temp)
            list.appendChild(wind)
            list.appendChild(visibility)
            
        }
        else {
            console.log("Area not found");
        }
    }

    // At last send the request
    xhr.send();
}