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

function createCard(title, imageUrl) {
  return `
    <div class="each-card">
      <div class="cardImg-div">
        <img src="${imageUrl}" alt="${title}" class="card-img" />
      </div>
      <div class="text-icon">
        <p>${title}</p>
        <svg
          class="heart-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          viewBox="0 0 256 256">
          <path
            d="M128,224s-96-55.16-96-120A56,56,0,0,1,128,56a56,56,0,0,1,96,48C224,168.84,128,224,128,224Z"
          />
        </svg>
      </div> 
    </div>
  `;
}

cardsData.forEach(
  (card) => (cardContainer.innerHTML += createCard(card.title, card.image))
);

// END OF CARD RENDERING  BY WISE

cardContainer.addEventListener("click", (e) => {
  if (e.target.closest(".heart-icon")) {
    const icon = e.target.closest(".heart-icon");
    icon.classList.toggle("liked");

    const currentColor = icon.getAttribute("fill") || "gray";
    icon.setAttribute("fill", currentColor === "red" ? "gray" : "red");
  }
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

//OMA
//Focus for the edit profile modal
openBtn.addEventListener("click", () => {
  setTimeout(() => {
    const inputs = modalOverlay.querySelectorAll("input");
    const firstInput = inputs[0];
    if (!firstInput) return;

    // Utility to apply/remove outline
    const addOutline = (el) => {
      el.style.outline = "2px solid #722c2c";
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
          firstInput.blur(); // remove focus from first input if hovering another
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
});

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
  if (e.target === newPostModal) {
    newPostModal.style.display = "none";
  }
});

// OMA
//Focus for the new post modal
// newPostBtn.addEventListener("click", () => {
//   newPostModal.style.display = "block";

//   // Delay focus and setup to ensure modal is visible
//   setTimeout(() => {
//     const inputs = newPostModal.querySelectorAll("input");
//     const firstInput = inputs[0];
//     if (!firstInput) return;

//     // Outline utility
//     const addOutline = (el) => {
//       el.style.outline = "2px solid darkgreen";
//       el.style.outlineOffset = "2px";
//     };
//     const removeOutline = (el) => {
//       el.style.outline = "none";
//     };

//     // Add focus, blur, mouseenter, and mouseleave to all inputs
//     inputs.forEach((input) => {
//       input.addEventListener("focus", () => addOutline(input));
//       input.addEventListener("blur", () => removeOutline(input));
//       input.addEventListener("mouseenter", () => {
//         addOutline(input);
//         if (firstInput !== input && document.activeElement === firstInput) {
//           firstInput.blur(); // blur first input if hovering another
//         }
//       });
//       input.addEventListener("mouseleave", () => {
//         if (document.activeElement !== input) removeOutline(input);
//       });
//     });

//     // Focus and highlight the first input
//     addOutline(firstInput);
//     firstInput.focus();
//   }, 0);
// });

// Adella

//Esc key to close edit profile modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalOverlay.classList.add("hidden");

    //Esc key to close image modal
 imageModal.classList.add("hidden");
 
   //Esc key to close new post modal
   newPostModal.style.display = "none";
  }
});

//End of Esc key to close modals by Adella




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
// Card Redering Dynamically
const imageUpload = document.getElementById("imageUpload");
const postTitle = document.getElementById("postTitle");
const uploadBtn = document.querySelector(".upload-btn");

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

  const minLength = postTitle.minLength;

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

// start with capital letter
function capitalizedFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// todo:
// * join tawa, ola and olaide's code together
// rearrange other codes
// work on inline validation
