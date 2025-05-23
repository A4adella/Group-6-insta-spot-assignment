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
// END OF CARD RENDERING  BY WISE

// Kosi
// Add event listener for the heart icon
const heartIcons = document.querySelectorAll("svg");

heartIcons.forEach((icon) => {
  icon.setAttribute("fill", "none"); // set default fill to none

  icon.addEventListener("click", () => {
    const currentFill = icon.getAttribute("fill");
    icon.setAttribute("fill", currentFill === "red" ? "none" : "red");
  });
});

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

// Osamudiaameh Image Preview Overlay
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeImageModal = document.getElementById("closeImageModal");

cardContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("card-img")) {
    modalImage.src = e.target.src;
    modalImage.alt = e.target.alt;
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
