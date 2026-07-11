const roadmapData = [

{
    step:"STEP 01 OF 07",

    title:"Master the skills Amazon actually tests.",

    badges:[
    "5-6 Weeks",
    "High Priority",
    "Foundation"
    ],

    desc:"Build speed and depth across core data structures, algorithms and CS fundamentals.",

    skills:[
        "DSA Patterns",
        "CS Fundamentals",
        "Code Quality",
        "Complexity Analysis"
    ],

    page:"foundation.html",

    ready:"You can solve medium problems confidently."
},

{
    step:"STEP 02 OF 07",

    title:"Build an ATS friendly resume.",

    badges:[
    "2-3 Days",
    "ATS Ready",
    "Resume"
    ],

    desc:"Craft a resume that gets shortlisted by recruiters and hiring managers.",

    skills:[
        "Resume Format",
        "Projects Section",
        "Achievements",
        "ATS Keywords"
    ],

     page:"./resumeforge/resumeforge.html",

    ready:"Your resume clearly highlights impact."
},

{
    step:"STEP 03 OF 07",

    title:"Application strategy.",

    badges:[
    "1 Week",
    "Networking",
    "Applications"
],

    desc:"Apply through referrals, career portals and networking channels.",

    skills:[
        "LinkedIn",
        "Referrals",
        "Career Pages",
        "Cold Outreach"
    ],

    page:"application.html",

    ready:"You are applying consistently every week."
},

{
    step:"STEP 04 OF 07",

    title:"Coding interview preparation.",

    badges:[
    "3-4 Weeks",
    "DSA Focus",
    "Coding Rounds"
],

    desc:"Prepare company-focused DSA questions and mock interviews.",

    skills:[
        "Arrays",
        "Trees",
        "Graphs",
        "Dynamic Programming"
    ],

     page:"coding-interview.html",

    ready:"You can solve medium-hard problems confidently."
},

{
    step:"STEP 05 OF 07",

    title:"Leadership principles.",

    badges:[
    "4-5 Days",
    "Behavioral",
    "Leadership"
],

    desc:"Prepare STAR stories around Amazon's leadership principles.",

    skills:[
        "Ownership",
        "Customer Obsession",
        "Dive Deep",
        "Bias For Action"
    ],
 
     page:"leadership.html",

    ready:"You have stories for every principle."
},

{
    step:"STEP 06 OF 07",

    title:"System design fundamentals.",

    badges:[
    "2 Weeks",
    "Scalability",
    "System Design"
],

    desc:"Learn scalable systems and architecture basics.",

    skills:[
        "Caching",
        "Databases",
        "Load Balancing",
        "Microservices"
    ],

      page:"system-design.html",

    ready:"You can explain design tradeoffs."
},

{
    step:"STEP 07 OF 07",

    title:"Offer and negotiation.",

    badges:[
    "1-2 Days",
    "Compensation",
    "Negotiation"
],

    desc:"Understand compensation and negotiate confidently.",

    skills:[
        "CTC Breakdown",
        "Negotiation",
        "Benefits",
        "Joining Decisions"
    ],

    page:"negotiation.html",

    ready:"You can evaluate multiple offers."
}
];

const badge1 =
document.getElementById("badge1");

const badge2 =
document.getElementById("badge2");

const badge3 =
document.getElementById("badge3");

const steps = document.querySelectorAll(".step");

const stepTag = document.getElementById("stepTag");

const contentTitle =
document.getElementById("contentTitle");

const contentDesc =
document.getElementById("contentDesc");

const skillsGrid =
document.getElementById("skillsGrid");

const readyBox =
document.getElementById("readyBox");

const exploreLink = document.getElementById("exploreLink");



steps.forEach((step,index)=>{

    step.addEventListener("click",()=>{

        document
        .querySelector(".step.active")
        ?.classList.remove("active");

        step.classList.add("active");

        const data = roadmapData[index];

        stepTag.textContent =
        data.step;

        contentTitle.textContent =
        data.title;

        contentDesc.textContent =
        data.desc;

        readyBox.textContent =
        "READY WHEN: " + data.ready;

        badge1.textContent =
        data.badges[0];

        badge2.textContent =
        data.badges[1];

        badge3.textContent =
        data.badges[2];

        exploreLink.href = data.page;

        skillsGrid.innerHTML = "";

        data.skills.forEach(skill=>{

            skillsGrid.innerHTML += `
                <div class="skill-card">
                    ${skill}
                </div>
            `;

        });

    });

});
