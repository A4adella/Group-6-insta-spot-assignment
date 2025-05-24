///////////////////////////////////////////////
// CARD RENDERING
//////////////////////////////////////////////
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

function createCard(title, imageUrl) {
  return `
    <div class="each-card">
      <div class="cardImg-div">
        <img src="${imageUrl}" alt="${title}" class="card-img" />
      </div>
      <div class="text-icon">
        <p>${title}</p>
        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="" viewBox="0 0 256 256">
            <path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"></path>
        </svg>     
      </div> 
    </div>
  `;
}

cardsData.forEach(
  (card) => (cardContainer.innerHTML += createCard(card.title, card.image))
);

///////////////////////////////////////////////
//NEW POST MODAL
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
  if (e.target == newPostModal) {
    newPostModal.style.display = "none";
  }
});

///////////////////////////////////////////////
// Card Redering Dynamically
const imageUpload = document.getElementById("imageUpload");
const postTitle = document.getElementById("postTitle");
const uploadBtn = document.querySelector(".upload-btn");
const titleError = document.getElementById("titleError");

// toggle btn fñ
function setUploadButtonState(enabled) {
  uploadBtn.disabled = !enabled;
  uploadBtn.style.opacity = enabled ? 1 : 0.6;
  uploadBtn.style.cursor = enabled ? "pointer" : "not-allowed";
}

function validateTitle(title, min) {
  if (!title) return "Title is required.";
  if (title.length < min) return `Title must be at least ${min} characters.`;
  return "";
}

function checkInputs() {
  const title = postTitle.value.trim();
  const fileSelected = imageUpload.files.length > 0;

  // const minLength = postTitle.minLength;
  const minLength = parseInt(postTitle.minLength, 10) || 0;

  const errorMessage = validateTitle(title, minLength);
  titleError.textContent = errorMessage;

  const isFormValid = errorMessage === "" && fileSelected;
  setUploadButtonState(isFormValid);
}

// listen for input change
postTitle.addEventListener("input", checkInputs);
imageUpload.addEventListener("change", checkInputs);

// btn Initial state
setUploadButtonState(false);

uploadBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = postTitle.value.trim();
  const file = imageUpload.files[0];

  const imgUrl = URL.createObjectURL(file);
  const newCard = createCard(capitalizedFirstLetter(title), imgUrl);

  cardContainer.insertAdjacentHTML("beforeend", newCard);

  // Reset
  postTitle.value = "";
  imageUpload.value = "";
  newPostModal.style.display = "none";
});

function capitalizedFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

///////////////////////////////////////////////
//Click Heart Icon
cardContainer.addEventListener("click", (e) => {
  if (e.target.closest(".heart-icon")) {
    const icon = e.target.closest(".heart-icon");
    icon.classList.toggle("liked");

    const currentColor = icon.getAttribute("fill") || "gray";
    icon.setAttribute("fill", currentColor === "red" ? "gray" : "red");
  }
});

///////////////////////////////////////////////
// Image Preview Overlay
///////////////////////////////////////////////
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

const closePreviewModal = () => imageModal.classList.add("hidden");

closeImageModal.addEventListener("click", closePreviewModal);
imageModal.addEventListener("click", closePreviewModal);

///////////////////////////////////////////////
// EDIT PROFILE MODAL
///////////////////////////////////////////////
const openBtn = document.querySelector(".edit-profile-btn");
const modalOverlay = document.querySelector("#modalOverlay");
const closeBtn = document.querySelector("#closeModalBtn");
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

openBtn.addEventListener("click", openModalWithDefaults);

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});

// PROFILE IMAGE PREVIEW
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

///////////////////////////////////////////////
// EDIT PROFILE FUNCTIONALITY

function openModalWithDefaults() {
  const currentName = document.getElementById("profileName").textContent;
  const currentProfession =
    document.getElementById("profileProfession").textContent;
  const currentImageSrc = document.getElementById("profileImage").src;

  document.getElementById("userName").value = currentName;
  document.getElementById("professionInput").value = currentProfession;
  document.getElementById("imagePreview").src = currentImageSrc;
  document.getElementById("imagePreview").style.display = "block";

  document.getElementById("modalOverlay").classList.remove("hidden");
}

// Function to save changes made in the modal
function saveChanges() {
  const name = document.getElementById("userName").value;
  const profession = document.getElementById("professionInput").value;
  const imageInput = document.getElementById("imageInput");

  // Capitalize the first letter of the name and profession
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const capitalizedName = toTitleCase(name);
  const capitalizedProfession = toTitleCase(profession);

  // Update the profile name and profession
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

  // Close the modal
  document.getElementById("modalOverlay").classList.add("hidden");

  // Reset the form (optional)
  document.getElementById("userName").value = "";
  document.getElementById("professionInput").value = "";
  imageInput.value = "";
  document.getElementById("imagePreview").src = "";
  document.getElementById("imagePreview").style.display = "none";
}

///////////////////////////////////////////////
// Focus on load
///////////////////////////////////////////////
const focusFirstInputOnload = (modal) => {
  setTimeout(() => {
    const inputs = modal.querySelectorAll("input");
    const firstInput = inputs[0];
    if (!firstInput) return;

    // Utility to apply/remove outline
    const addOutline = (el) => {
      el.style.outlineOffset = "2px";
    };
    const removeOutline = (el) => {
      el.style.outline = "none";
    };

    inputs.forEach((input) => {
      // Focus and blur
      input.addEventListener("focus", () => addOutline(input));
      input.addEventListener("blur", () => removeOutline(input));

      // Hover effects and auto-blur first input
      input.addEventListener("mouseenter", () => {
        addOutline(input);
        if (firstInput !== input && document.activeElement === firstInput) {
          firstInput.blur();
        }
      });

      input.addEventListener("mouseleave", () => {
        if (document.activeElement !== input) {
          removeOutline(input);
        }
      });
    });

    // Focus the first input on open
    addOutline(firstInput);
    firstInput.focus();
  }, 0);
};

openBtn.addEventListener("click", () => focusFirstInputOnload(modalOverlay));
newPostBtn.addEventListener("click", () => focusFirstInputOnload(newPostModal));

///////////////////////////////////////////////
//Esc key to close edit profile modal
///////////////////////////////////////////////
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalOverlay.classList.add("hidden");

    imageModal.classList.add("hidden");

    newPostModal.style.display = "none";
  }
});
