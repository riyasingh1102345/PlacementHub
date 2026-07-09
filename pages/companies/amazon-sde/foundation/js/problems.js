const params = new URLSearchParams(window.location.search);
console.log(params);

const id = params.get("id");
console.log(id);

const module = params.get("module");

let questions;

if (module === "arrays") {
    questions = arrayQuestions;
}
else if (module === "strings") {
    questions = stringsQuestions;
}
else if (module === "linkedList") {
    questions = linkedListQuestions;
}
else if (module === "stack") {
    questions = stackQuestions;
}
else if (module === "queue") {
    questions = queueQuestions;
}

const question = questions.find(q => q.id === id);
console.log(question);

console.log(module);
console.log(id);
console.log(questions);
console.log(question);

const completeBtn = document.getElementById("complete-btn");

let completedQuestions =
    JSON.parse(localStorage.getItem("completedQuestions")) || [];

// Page load pe sirf button ka text set karo
if (completedQuestions.includes(question.id)) {
    completeBtn.textContent = "❌ Mark as Incomplete";
} else {
    completeBtn.textContent = "✅ Mark as Completed";
}


completeBtn.addEventListener("click", function () {

    if (completedQuestions.includes(question.id)) {

        completedQuestions = completedQuestions.filter(function(id) {
            return id !== question.id;
        });

        completeBtn.textContent = "✅ Mark as Completed";

    } else {

        completedQuestions.push(question.id);

        completeBtn.textContent = "❌ Mark as Incomplete";
    }

    localStorage.setItem(
        "completedQuestions",
        JSON.stringify(completedQuestions)
    );

});

const title = document.getElementById("question-title");
title.textContent = question.title;

document.getElementById("question-title").textContent = question.title;
document.getElementById("hero-description").textContent = question.heroDescription;


const tagsContainer = document.getElementById("question-tags");
tagsContainer.innerHTML = `<span class="tag easy">${question.difficulty}</span>`;

document.getElementById("pattern").textContent = question.pattern;
document.getElementById("difficulty").textContent = question.difficulty;
document.getElementById("time").textContent = question.time;
document.getElementById("acceptance").textContent = question.acceptance;

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

const currentIndex = questions.findIndex(function(q){
    return q.id === id;
});

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

if(currentIndex > 0){

        previousBtn.href =
`problems.html?module=${module}&id=${questions[currentIndex - 1].id}`;

    previousBtn.textContent =
        `← ${questions[currentIndex - 1].title}`;

}
else{

    previousBtn.classList.add("hidden");

}

if(currentIndex < questions.length - 1){
 
nextBtn.href =
`problems.html?module=${module}&id=${questions[currentIndex + 1].id}`;

    nextBtn.textContent =
        `${questions[currentIndex + 1].title} →`;

}
else{

    nextBtn.classList.add("hidden");

}