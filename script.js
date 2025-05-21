// CARD RENDERING --> WISE
const cardsData = [
  {
    image: "images/val-thorens.png",
    title: "Val Thorens",
    liked: false,
  },
  {
    image: "images/restaurant-terrace.png",
    title: "Restaurant-terrace",
    liked: false,
  },
  {
    image: "images/an-outdoor-cafe.png",
    title: "An outdoor cafe",
    liked: false,
  },
  {
    image: "images/long-bridge.png",
    title: "A very long bridge over the forest...",
    liked: false,
  },
  {
    image: "images/tunnel.png",
    title: "Tunnel with morning light",
    liked: false,
  },
  {
    image: "images/mountain-house.png",
    title: "Mountain house",
    liked: false,
  },
];

const cardContainer = document.getElementById("card-container");

cardsData.forEach((card) => {
  cardContainer.innerHTML += `
  <div class="each-card">
    <div class="cardImg-div">
        <img src="${card.image}" alt="${card.title}" class="card-img" />
    </div>
    <div class="text-icon">
      <p>${card.title}</p>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="30"
            fill=""
            viewBox="0 0 256 256" >
            <path
                d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"
            ></path>
      </svg>
    </div> 
  </div>`;
});

// Kosi

// Oma

// EDIT PROFILE MODAL --> TAWA

  const openBtn = document.querySelector('.edit-profile-btn');
  const modalOverlay = document.querySelector('#modalOverlay');
  const closeBtn = document.querySelector('#closeModalBtn');
  const imageInput = document.getElementById('profileImage');
  const imagePreview = document.getElementById('imagePreview');

  openBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('hidden');
    }
  });
  
  // IMAGE PREVIEW
  imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      imagePreview.src = reader.result;
      imagePreview.style.display = 'block';
    });

    reader.readAsDataURL(file);
  }
});
// END OF EDIT PROFILE MODAL BY TAWA

// Osas

// Ola

// Adella

// Innocent

// Kachi

// Kareema

// Olaide
