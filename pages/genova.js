// Array STAYS
const stays = [
    {
      type: "apartment",
      description: "Cozy apartment",
      city: "Genova",
      ratings: "4.5",
      review: 28,
    },
    {
      type: "house",
      description: "Spacious house",
      city: "Genova",
      ratings: "5.0",
      review: 0,
    },
    {
      type: "room",
      description: "Private room",
      city: "Genova",
      ratings: "4.0",
      review: 6,
    },
    {
      type: "apartment",
      description: "Modern loft",
      city: "Genova",
      ratings: "4.8",
      review: 17,
    },
    {
      type: "house",
      description: "Historic house",
      city: "Genova",
      ratings: "4.7",
      review: 0,
    },
    {
      type: "room",
      description: "Comfortable room",
      city: "Genova",
      ratings: "4.2",
      review: 14,
    },
    {
      type: "apartment",
      description: "Charming apartment",
      city: "Genova",
      ratings: "4.6",
      review: 21,
    },
    {
      type: "house",
      description: "Family-friendly house",
      city: "Genova",
      ratings: "4.9",
      review: 33,
    },
    {
      type: "room",
      description: "Room with balcony",
      city: "Genova",
      ratings: "4.3",
      review: 10,
    },
    {
      type: "apartment",
      description: "Luxurious penthouse",
      city: "Genova",
      ratings: "5.0",
      review: 25,
    }
];

// Puntatore testo che mostra il numero di  alloggi
const stayTextCounter = document.getElementById("stayCounter");
stayTextCounter.textContent = `${stays.length} ${stays.length > 1 ? 'stays' : 'stay'}`

// Puntatore Stays sections
const sectionStays = document.querySelectorAll(".row.gx-3");

// Inizializzo il contatore degli alloggi
let stayCounter = 0;

for (let i = 0; i <= stays.length; i++) {

  sectionStays.forEach(sectionStay => {

    // Se il contatore degli alloggi supera il 5 allora passo alla prossima iterazione (alla prossima sectionStay)
    if (stayCounter >= 5) {
      return;
    }

    // Creo il div che contiene le info sull'alloggio
    let stayColumn = document.createElement("div");
    
    // Aggiungo al div le classi bootstrap
    stayColumn.classList.add("col-6", "col-md-4", "col-lg", "d-flex", "flex-column");
    
    // Innserisco le info dell'alloggio nel div
    stayColumn.innerHTML = `
      <a href="appartamento.html" class="text-decoration-none text-black">
        <img src="../assets/1.webp" class="rounded-4 img-thumbnail border-0" alt="${stays[i].description}" />
        <div class="d-flex align-items-center">
          <div class="align-text-bottom">
            ${stays[i].review ? `<i class="bi-star-fill text-danger"></i><strong class="ps-2">${stays[i].ratings}</strong>` : ''}
          </div>
          ${stays[i].review ? `<span class="px-1">•</span>`: ''}
          <span>${stays[i].review} ratings</span>
        </div>
        <div class="d-flex">
          <span>${stays[i].type}</span>
          <span class="px-1">•</span>
          <span>${stays[i].city}</span>
        </div>
        <p>${stays[i].description}</p>
      </a>
    `;
  
    // Aggiungo il div contenitore dell'annuncio al sectionStay
    sectionStay.appendChild(stayColumn);

  });

  // Aumento contatore degli annunci
  stayCounter++;
};