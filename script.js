// CARD RENDERING --> WISE
const cardsData = [
  {
    image: "./Images/Mask group-5.png",
    title: "Val Thorens",
    liked: false,
  },
  {
    image: "./Images/Mask group-2.png",
    title: "Restaurant-terrace",
    liked: false,
  },
  {
    image: "./Images/Mask group-3.png",
    title: "An outdoor cafe",
    liked: false,
  },
  {
    image: "./Images/Mask group.png",
    title: "A very long bridge over the forest...",
    liked: false,
  },
  {
    image: "./Images/Mask group-1.png",
    title: "Tunnel with morning light",
    liked: false,
  },
  {
    image: "./Images/Mask group-4.png",
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
            class="heart-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="30"
            viewBox="0 0 256 256" >
            <path
          d="M128,224s-96-55.16-96-120A56,56,0,0,1,128,56a56,56,0,0,1,96,48C224,168.84,128,224,128,224Z"
        />
      </svg>
    </div> 
  </div>`;
});
// END OF CARD RENDERING  BY WISE

// Kosi
document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll(".heart-icon");

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("liked");
    });
  });
});

// Wait a moment for DOM to be ready (if this runs before cards are rendered)
setTimeout(() => {
  const heartIcons = document.querySelectorAll(".heart-icon");

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const currentColor = icon.getAttribute("fill");
      icon.setAttribute("fill", currentColor === "red" ? "gray" : "red");
    });
  });
}, 0);
// Oma

// EDIT PROFILE MODAL --> TAWA
const openBtn = document.querySelector(".edit-profile-btn");
const modalOverlay = document.querySelector("#modalOverlay");
const closeBtn = document.querySelector("#closeModalBtn");
const imageInput = document.getElementById("profileImage");
const imagePreview = document.getElementById("imagePreview");

openBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});

// IMAGE PREVIEW
imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      imagePreview.src = reader.result;
      imagePreview.style.display = "block";
    });

    reader.readAsDataURL(file);
  }
});
// END OF EDIT PROFILE MODAL BY TAWA

// Osamudiameh Image Preview Overlay
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeImageModal = document.getElementById("closeImageModal");
const modalCaption = document.getElementById("modalCaption");

cardContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("card-img")) {
    modalImage.src = e.target.src;
    modalImage.alt = e.target.alt;
    modalCaption.textContent = e.target.alt;
    imageModal.classList.remove("hidden");
  }
});

closeImageModal.addEventListener("click", function () {
  imageModal.classList.add("hidden");
});

imageModal.addEventListener("click", function (e) {
  if (e.target === imageModal) {
    imageModal.classList.add("hidden");
  }
});

// NEW POST MODAL --- Ola

// Get elements
const newPostModal = document.getElementById("newPostModal");
const newPostBtn = document.getElementById("newPostBtn");
const newPostcloseBtn = document.getElementById("newPostcloseBtn");

// Open modal
newPostBtn.addEventListener("click", () => {
  newPostModal.style.display = "block";
});

// Close modal
newPostcloseBtn.addEventListener("click", () => {
  newPostModal.style.display = "none";
});

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    newPostModal.style.display = "none";
  }
});

// Adella

// EDIT PROFILE FUNCTIONALITY --> INNOCENT
// Function to save changes made in the modal
function saveChanges() {
  const name = document.getElementById("userName").value;
  const profession = document.getElementById("professionInput").value;
  const imageInput = document.getElementById("imageInput");

  // Capitalize the first letter of each word
  function toTitleCase(str) {
    return str.replace(/\b\w/g, function (txt) {
      return txt.toUpperCase();
    });
  }
  const capitalizedName = toTitleCase(name);
  const capitalizedProfession = toTitleCase(profession);

  // Update the profile username and profession
  if (name) {
    document.getElementById("profileName").textContent = capitalizedName;
  }

  if (profession) {
    document.getElementById("profileProfession").textContent =
      capitalizedProfession;
  }

  // Update the profile image
  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(imageInput.files[0]);
  }
  // updated image uses the diffult image border-radius
  document.getElementById("profileImage").style.borderRadius = "5%";
  // updated image to maintain shape and well fitted without distortion or stretching
  document.getElementById("profileImage").style.objectFit = "cover";

  // Close the modal
  document.getElementById("modalOverlay").classList.add("hidden");

  // Clear the input fields
  document.getElementById("userName").value = "";
  document.getElementById("professionInput").value = "";
  document.getElementById("imageInput").value = "";
  document.getElementById("imagePreview").src = "";
  document.getElementById("imagePreview").style.display = "none";

  // Reset the image preview
  const imagePreview = document.getElementById("imagePreview");
  imagePreview.src = "";
  imagePreview.style.display = "none";
  // Reset the input field
  const imageInputField = document.getElementById("imageInput");
  imageInputField.value = "";
}
// END OF EDIT PROFILE FUNCTIONALITY BY INNOCENT

// Kachi

// Kareema

// Olaide
