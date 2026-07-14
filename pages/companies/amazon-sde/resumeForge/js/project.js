// PROJECT

const addBtn = document.getElementById("addProject");
const container = document.getElementById("projectContainer");

let projectCount = 1;

// Update Project Titles
function updateProjectTitles() {

    const cards = container.querySelectorAll(".project-card");

    cards.forEach((card, index) => {

        card.querySelector(".card-title").textContent =
            `Project ${index + 1}`;

    });

    projectCount = cards.length;
}

// Attach Delete Event
function attachDeleteEvent(card) {

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        const cards = container.querySelectorAll(".project-card");

        if (cards.length === 1) {
            alert("At least one project is required.");
            return;
        }

        card.remove();

        updateProjectTitles();

    });

}

// Attach delete to first project
attachDeleteEvent(container.querySelector(".project-card"));


// Add Project
addBtn.addEventListener("click", () => {

    const firstCard = container.querySelector(".project-card");

    const newCard = firstCard.cloneNode(true);

    // Clear Inputs
    newCard.querySelectorAll("input").forEach(input => {

        input.value = "";

    });

    // Clear Textarea
    newCard.querySelectorAll("textarea").forEach(textarea => {

        textarea.value = "";

    });

    // Reset Selects
    newCard.querySelectorAll("select").forEach(select => {

        select.selectedIndex = 0;

    });

    container.appendChild(newCard);

    attachDeleteEvent(newCard);

    updateProjectTitles();

});
