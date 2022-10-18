fetch('https://data.nasa.gov/resource/gvk9-iz74.json?$$app_token=dNO2DmOzeH3kKLTJj79ao4ZWf')
    .then(res => res.json())
    .then(data => {
        data.forEach(facility => {
            let facilityName = facility.facility
            let facilityCity = facility.city
            let facilityLon = facility.location.longitude
            let facilityLat = facility.location.latitude
            
            let newFacility = document.createElement('section')
            newFacility.setAttribute('class', facilityCity)
            let nasaFacility = document.createElement('h2')
            let facilityLocation = document.createElement('h3')
            let facilityWeather = document.createElement('span')
            
            console.log(newFacility);
        
            document.body.appendChild(newFacility)
            newFacility.appendChild(nasaFacility)
            newFacility.appendChild(facilityLocation)
            newFacility.appendChild(facilityWeather)
            
            nasaFacility.innerText = facilityName
            facilityLocation.innerText = `Location: ${facilityCity}`
            
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${facilityLat}&longitude=${facilityLon}&current_weather=true&temperature_unit=fahrenheit`)
                .then(res => res.json())
                .then(data => {
                    let facilityWeatherFar = data.current_weather.temperature
                    
                    facilityWeather.innerText = `Current Weather:  ${facilityWeatherFar}°F`
                    
                    let facilityInfo = [facilityName, facilityCity, facilityLat, facilityLon, facilityWeatherFar]
                   // console.log(facilityInfo)
                })
                .catch (err => {
                    console.log(`error ${err}`)
                })
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })