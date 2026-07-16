// TECHNICAL SKILLS


const techInput = document.getElementById("techSkillInput");
const techContainer = document.getElementById("techSkillsContainer");
const addTechBtn = document.getElementById("addTechSkill");



// SOFT SKILLS


const softInput = document.getElementById("softSkillInput");
const softContainer = document.getElementById("softSkillsContainer");
const addSoftBtn = document.getElementById("addSoftSkill");


// CREATE SKILL TAG


function createSkillTag(skill, container){

    skill = skill.trim();

    if(skill === "") return;

    // Prevent duplicate skills

    const existing = [...container.querySelectorAll(".skill-tag span")];

    if(existing.some(tag => tag.textContent.toLowerCase() === skill.toLowerCase())){
        return;
    }

    const tag = document.createElement("div");
    tag.className = "skill-tag";

    tag.innerHTML = `
        <span>${skill}</span>
        <button type="button">&times;</button>
    `;

    tag.querySelector("button").addEventListener("click", () => {
        tag.remove();
    });

    container.appendChild(tag);

}


// ADD TECHNICAL SKILL


function addTechnicalSkill(){

    createSkillTag(techInput.value, techContainer);

    techInput.value = "";

    techInput.focus();

}

addTechBtn.addEventListener("click", addTechnicalSkill);

techInput.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        e.preventDefault();

        addTechnicalSkill();

    }

});

// ADD SOFT SKILL


function addSoftSkill(){

    createSkillTag(softInput.value, softContainer);

    softInput.value = "";

    softInput.focus();

}

addSoftBtn.addEventListener("click", addSoftSkill);

softInput.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        e.preventDefault();

        addSoftSkill();

    }

});


// QUICK TECHNICAL SKILLS


const quickTechSkills = document.querySelectorAll(".quick-skill");

quickTechSkills.forEach(skill => {

    skill.addEventListener("click", () => {

        createSkillTag(skill.textContent, techContainer);

    });

});


// QUICK SOFT SKILLS


const quickSoftSkills = document.querySelectorAll(".quick-soft-skill");

quickSoftSkills.forEach(skill => {

    skill.addEventListener("click", () => {

        createSkillTag(skill.textContent, softContainer);

    });

});

function getSkills(container){

    return [...container.querySelectorAll(".skill-tag span")]
        .map(skill => skill.textContent);
}

getSkills(techContainer);

function saveSkills(){

    const resumeData = getResumeData();

    resumeData.technicalSkills = getSkills(techContainer);

    resumeData.softSkills = getSkills(softContainer);

    saveResumeData(resumeData);

}