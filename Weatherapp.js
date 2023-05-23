let weather = {
    "apiKey": "e56209a25977b2465f2f62739cd457b8", //API Key

    fetchWeather: function (city){ //Gets the weather data
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey

        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){ //Displays the weather
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".show-heading").innerText = "Weather in " + name; //Changes the Weather Location
        document.querySelector(".show-temp").innerText = temp + "°C"; //Changes the temperature for the location searched
        document.querySelector(".show-alert").innerText = description; //shows a description of what is happening in that location
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        
        //When search button is clicked change the background to whatever the icon matches
            // if(icon == "01n"){
                
            // }else if(icon == "02n"){
                
            // }else if(icon == "03n"){
                
            // }else if(icon == "04n"){
               
            // }else if(icon == "09n"){
               
            // }else if(icon == "10n"){
               
            // }else if(icon == "11n"){
               
            // }else if(icon == "13n"){
               
            // }else if(icon == "50n"){
                

            // }else{
                
            // }
        
    },

    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};


   //search box
    function searchbutton() {
        weather.search();
    }



//Opens Search Bar
    function opensearchbar(){
        var shows = document.getElementById("searchbar");
        var showb = document.getElementById("searchbutton");

        if((shows.style.display === "none") && (showb.style.display === "none")){
            shows.style.display = "inline-block";
            showb.style.display = "inline-block";
        }else{
            shows.style.display = "none";
            showb.style.display = "none";
        }
    }

//This Functions searches for the location that is looked up using the search bar
    function lookup(){

    }

