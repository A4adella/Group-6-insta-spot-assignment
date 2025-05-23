// CARD RENDERING --> WISE
const cardsData = [
  {
    image: "./Images/val-thorens.png",
    title: "Val Thorens",
    liked: false,
  },
  {
    image: "./Images/restaurant-terrace.png",
    title: "Restaurant-terrace",
    liked: false,
  },
  {
    image: "./Images/an-outdoor-cafe.png",
    title: "An outdoor cafe",
    liked: false,
  },
  {
    image: "./Images/long-bridge.png",
    title: "A very long bridge over the forest...",
    liked: false,
  },
  {
    image: "./Images/tunnel.png",
    title: "Tunnel with morning light",
    liked: false,
  },
  {
    image: "./Images/mountain-house.png",
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

// Oma
window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".each-card");

  if (cards.length > 0) {
    cards.forEach((card) => {
      // Add accessibility attributes
      card.setAttribute("role", "button");
      const title = card.querySelector("p")?.textContent?.trim() || "Card";
      card.setAttribute("aria-label", `Card: ${title}`);

      // Make card focusable
      card.setAttribute("tabindex", "0");

      // Apply focus visual style
      const applyFocusStyle = () => {
        card.style.boxShadow = "0 0 0 3px #722c2c";
        card.style.borderRadius = "8px";
        card.style.backgroundColor = " #722c2c";
        card.style.outline = "4px solid #552424";
        card.style.color = " #e58c8c";
      };

      // Remove all focus visual styles
      const removeFocusStyle = () => {
        card.style.boxShadow = "none";
        card.style.backgroundColor = "transparent";
        card.style.outline = "none";
        card.style.color = " #212121";
      };

      // Apply/remove on focus/blur
      card.addEventListener("focus", applyFocusStyle);
      card.addEventListener("blur", removeFocusStyle);

      // Mouse enters: apply focus
      card.addEventListener("mouseenter", () => card.focus());

      // Mouse leaves: blur (which triggers style removal)
      card.addEventListener("mouseleave", () => {
        if (document.activeElement === card) {
          card.blur();
        }
      });

      // Mouse click: also focuses card
      card.addEventListener("click", () => card.focus());
    });

    // Autofocus the first card
    cards[0].focus();

    // Blur any focused card when Tab is pressed
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        const active = document.activeElement;
        if (active && active.classList.contains("each-card")) {
          active.blur(); // Triggers removeFocusStyle
        }
      }
    });
  }
});

// Ola

// Adella

// EDIT PROFILE FUNCTIONALITY --> INNOCENT
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

  // Update the profile name and profession
  if (name) {
    document.getElementById("profileName").textContent = name;
  }

  if (profession) {
    document.getElementById("profileProfession").textContent = profession;
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
