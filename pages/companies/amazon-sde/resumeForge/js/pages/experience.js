const addBtn = document.getElementById("addExperience");
const container = document.getElementById("experienceContainer");

let experienceCount = 1;

// Function to update titles
function updateExperienceTitles(){

    const cards = container.querySelectorAll(".experience-card");

    cards.forEach((card,index)=>{

        card.querySelector(".card-title").textContent =
        `Experience ${index+1}`;

    });

    experienceCount = cards.length;
}

// Function to attach delete event
function attachDeleteEvent(card){

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click",()=>{

        const cards = container.querySelectorAll(".experience-card");

        if(cards.length===1){
            alert("At least one experience section is required.");
            return;
        }

        card.remove();

        updateExperienceTitles();

    });

}

// Attach delete to first card
attachDeleteEvent(container.querySelector(".experience-card"));

// Add Experience
addBtn.addEventListener("click",()=>{

    const firstCard = container.querySelector(".experience-card");

    const newCard = firstCard.cloneNode(true);

    // Clear all inputs
    newCard.querySelectorAll("input").forEach(input=>{

        if(input.type==="checkbox"){
            input.checked=false;
        }
        else{
            input.value="";
        }

    });

    // Clear textarea
    newCard.querySelectorAll("textarea").forEach(textarea=>{
        textarea.value="";
    });

    // Reset dropdowns
    newCard.querySelectorAll("select").forEach(select=>{
        select.selectedIndex=0;
    });

    container.appendChild(newCard);

    attachDeleteEvent(newCard);

    updateExperienceTitles();

});

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {

    window.location.href = "./education.html";

});

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    saveExperience();

    window.location.href = "./project.html";

});