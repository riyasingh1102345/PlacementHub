const skillsContainer = document.getElementById("skillsContainer");

const resumeData = JSON.parse(localStorage.getItem("resumeData")) || {};

const skills = resumeData.technicalSkills || [];

skillsContainer.innerHTML = "";

skills.forEach(skill => {

    const item = document.createElement("div");

    item.className = "skill-item";

    item.textContent = skill;

    skillsContainer.appendChild(item);

});