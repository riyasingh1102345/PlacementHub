console.log(arrayQuestions);

// Easy
const beginner = arrayQuestions.filter(function(question){
    return question.difficulty === "Easy";
});

// Medium
const intermediate = arrayQuestions.filter(function(question){
    return question.difficulty === "Medium";
});

// Hard
const advanced = arrayQuestions.filter(function(question){
    return question.difficulty === "Hard";
});

// Function
function renderQuestions(questions, containerId){

    const container = document.getElementById(containerId);

    questions.forEach(function(question){

        container.innerHTML += `
            <div class="question-card">

                <h3>${question.title}</h3>

                <span class="difficulty ${question.difficulty.toLowerCase()}">
                    ${question.difficulty}
                </span>

                <a href="../problems.html?id=${question.id}">
                    Solve →
                </a>

            </div>
        `;

    });

}

// Render
renderQuestions(beginner, "beginner-list");
renderQuestions(intermediate, "intermediate-list");
renderQuestions(advanced, "advanced-list");