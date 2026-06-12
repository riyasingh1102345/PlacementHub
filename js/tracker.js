const topics = [
{
    key: "/pages/tracker/arrays.html",
    total: 40,
    element: "arrays-progress"
},
{
    key: "/pages/tracker/strings.html",
    total: 14,
    element: "strings-progress"
},
{
    key: "/pages/tracker/linkedlist.html",
    total: 40,
    element: "linkedlist-progress"
},
{
    key: "/pages/tracker/stack.html",
    total: 19,
    element: "stack-progress"
},
{
    key: "/pages/tracker/queue.html",
    total: 35,
    element: "queue-progress"
},
{
    key: "/pages/tracker/trees.html",
    total: 30,
    element: "trees-progress"
},
{
    key: "/pages/tracker/graphs.html",
    total: 35,
    element: "graphs-progress"
},
{
    key: "/pages/tracker/dp.html",
    total: 35,
    element: "dp-progress"
}
];

let overallSolved = 0;
let overallTotal = 0;

topics.forEach(topic => {

    const saved =
        JSON.parse(localStorage.getItem(topic.key)) || [];

    const solved =
        saved.filter(item => item).length;

    overallSolved += solved;
    overallTotal += topic.total;

    const element =
        document.getElementById(topic.element);

    if (element) {
        element.textContent =
            `${solved} / ${topic.total} Solved`;
    }
});

const overallProgress =
    document.getElementById("overall-progress");

if (overallProgress) {
    overallProgress.textContent =
        `${overallSolved} / ${overallTotal} Questions Solved`;
}

const percentage =
    (overallSolved / overallTotal) * 100;

const progressFill =
    document.querySelector(".progress-fill");

if (progressFill) {
    progressFill.style.width = `${percentage}%`;
}