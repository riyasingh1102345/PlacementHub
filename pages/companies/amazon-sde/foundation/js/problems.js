console.log(arrayQuestions);

const params = new URLSearchParams(window.location.search);
console.log(params);

const id = params.get("id");
console.log(id);

const question = arrayQuestions.find(q => q.id === id);
console.log(question);

const title = document.getElementById("question-title");
title.textContent = question.title;

document.getElementById("question-title").textContent = question.title;
document.getElementById("hero-description").textContent = question.heroDescription;

const tagsContainer = document.getElementById("question-tags");
tagsContainer.innerHTML = `<span class="tag easy">${question.difficulty}</span>`;
question.tags.forEach(tag => {
    tagsContainer.innerHTML += `<span class="tag">${tag}</span>`;
});

document.getElementById("problem-statement").textContent = question.problemStatement;

const companyList = document.getElementById("company-list");
question.companies.forEach(function(company) {
    companyList.innerHTML += `<div class="company-chip">${company}</div>`;
});

document.getElementById("example1").textContent = `Input:
${question.example1.input}
Output:
${question.example1.output}
Explanation:
${question.example1.explanation}`;

document.getElementById("example1").textContent = `Input:
${question.example2.input}
Output:
${question.example2.output}
Explanation:
${question.example2.explanation}`;


document.getElementById("constraints").textContent = question.constraints;
document.getElementById("time-complexity").textContent = question.timeComplexity;
document.getElementById("space-complexity").textContent = question.spaceComplexity;

const hintsContainer = document.getElementById("hints-container");
question.hints.forEach(function(hint) {
    hintsContainer.innerHTML += `
    <details>
        <summary>💡 Hint</summary>
        <p>${hint}</p>
    </details>
    `;
});