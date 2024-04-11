// Array città
const cities = [
    {
        location: "Genova",
        distance: "15 min drive",
        image: "assets/locations/location_1.png"
    },
    {
        location: "Inverness",
        distance: "2 hrs flight",
        image: "assets/locations/location_2.png"
    },
    {
        location: "Edimburgh",
        distance: "1.5 hrs flight",
        image: "assets/locations/location_3.png"
    },
    {
        location: "Rapallo",
        distance: "2 hrs drive",
        image: "assets/locations/location_4.png"
    },
    {
        location: "Milan",
        distance: "1.5 hrs drive",
        image: "assets/locations/location_1.png"
    },
    {
        location: "Montecarlo",
        distance: "2 hrs drive",
        image: "assets/locations/location_2.png"
    },
    {
        location: "Kirwall",
        distance: "1 hr drive",
        image: "assets/locations/location_3.png"
    },
    {
        location: "NordKapp",
        distance: "10 hrs flight",
        image: "assets/locations/location_4.png"
    }
]

// Puntatore cities sections
const sectionCities = document.getElementById("sectionCities");

cities.forEach(city => {

    // Creo il div che contiene le info della città
    let cityColumn = document.createElement("div");
    
    // Aggiungo al div le classi bootstrap
    cityColumn.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "d-flex", "flex-column" );

    // Innserisco le info della città nel div
    cityColumn.innerHTML = `
    <a href="pages/genova.html" class="text-decoration-none text-black mb-3">
        <div class="d-flex align-items-center pe-3">
            <img src="${city.image}" class="city rounded-4 img-thumbnail border-0" alt="${city.location}" />
            <div class="d-flex flex-column ps-3">          
                <p class="fw-bold my-1">${city.location}</p>
                <span class="text-black-50">${city.distance}</span>
            </div>
        </div>
    </a>
    `;

    // Aggiungo il div contenitore della città al sectionCity
    sectionCities.appendChild(cityColumn);
})