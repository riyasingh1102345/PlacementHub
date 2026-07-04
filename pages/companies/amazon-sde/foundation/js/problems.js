console.log(arrayQuestions);

const params = new URLSearchParams(window.location.search);
console.log(params);

const id = params.get("id");
console.log(id);

const question = arrayQuestions.find(q => q.id === id);
console.log(question);

const completeBtn = document.getElementById("complete-btn");

completeBtn.addEventListener("click", function () {

    let completedQuestions =
        JSON.parse(localStorage.getItem("completedQuestions")) || [];

    if (!completedQuestions.includes(question.id)) {

        completedQuestions.push(question.id);

        localStorage.setItem(
            "completedQuestions",
            JSON.stringify(completedQuestions)
        );

        alert("Question marked as completed! 🎉");

    }

});

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

document.getElementById("example2").textContent = `Input:
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

const bruteForce = document.getElementById("brute-force");

bruteForce.innerHTML = `
<details>
    <summary>⚡ ${question.bruteForce.title}</summary>
    <p>${question.bruteForce.description}</p>
</details>
`;

const optimalApproach = document.getElementById("optimal-approach");

optimalApproach.innerHTML = `
<details>
    <summary>🚀 ${question.optimalApproach.title}</summary>
    <p>${question.optimalApproach.description}</p>
</details>
`;