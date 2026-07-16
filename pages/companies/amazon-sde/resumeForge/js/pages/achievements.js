const addAchievementBtn = document.getElementById("addAchievement");
const achievementContainer = document.getElementById("achievementContainer");

let achievementCount = 1;

function updateAchievementTitles() {

    const cards = achievementContainer.querySelectorAll(".achievement-card");

    cards.forEach((card, index) => {

        card.querySelector(".card-title").textContent =
            `Achievement ${index + 1}`;

    });

    achievementCount = cards.length;

}

function attachDeleteEvent(card) {

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        const cards = achievementContainer.querySelectorAll(".achievement-card");

        if (cards.length === 1) {

            alert("At least one achievement is required.");
            return;

        }

        card.remove();

        updateAchievementTitles();

    });

}

attachDeleteEvent(
    achievementContainer.querySelector(".achievement-card")
);

addAchievementBtn.addEventListener("click", () => {

    const firstCard =
        achievementContainer.querySelector(".achievement-card");

    const newCard = firstCard.cloneNode(true);

    newCard.querySelectorAll("input").forEach(input => {

        input.value = "";

    });

    newCard.querySelectorAll("textarea").forEach(textarea => {

        textarea.value = "";

    });

    newCard.querySelectorAll("select").forEach(select => {

        select.selectedIndex = 0;

    });

    achievementContainer.appendChild(newCard);

    attachDeleteEvent(newCard);

    updateAchievementTitles();

});

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {

    window.location.href = "./skills.html";

});

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    saveAchievements();

    window.location.href = "./finalize.html";

});