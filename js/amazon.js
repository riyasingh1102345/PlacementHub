const roadmapData = [

{
step:"STEP 01 OF 07",
title:"Master The Skills Amazon Actually Tests",
desc:"Build strong DSA and CS fundamentals.",

skills:[
"Arrays & Strings",
"Trees & Graphs",
"Dynamic Programming",
"Core CS Subjects"
],

ready:"You can solve medium problems comfortably.",

page:"essential-skills.html"
},

{
step:"STEP 02 OF 07",
title:"Build An ATS Friendly Resume",
desc:"Create a resume that gets shortlisted.",

skills:[
"Resume Format",
"Projects",
"Achievements",
"ATS Keywords"
],

ready:"Resume score should be 80+.",

page:"resume-preparation.html"
},

{
step:"STEP 03 OF 07",
title:"Application Strategy",
desc:"Apply through referrals and portals.",

skills:[
"LinkedIn",
"Referrals",
"Career Pages",
"Cold Outreach"
],

ready:"You are applying consistently every week.",

page:"application-process.html"
},

{
step:"STEP 04 OF 07",
title:"Coding Interview Preparation",
desc:"Practice Amazon-style coding rounds.",

skills:[
"Blind 75",
"Amazon OA",
"Mock Interviews",
"Patterns"
],

ready:"You solve medium questions in under 30 mins.",

page:"coding-interview.html"
},

{
step:"STEP 05 OF 07",
title:"Leadership Principles",
desc:"Prepare STAR format answers.",

skills:[
"Customer Obsession",
"Ownership",
"Dive Deep",
"Bias For Action"
],

ready:"You have 2 stories per principle.",

page:"leadership-principles.html"
},

{
step:"STEP 06 OF 07",
title:"System Design",
desc:"Learn HLD and LLD concepts.",

skills:[
"Scalability",
"Databases",
"Caching",
"APIs"
],

ready:"You can design basic systems.",

page:"system-design.html"
},

{
step:"STEP 07 OF 07",
title:"Offer & Negotiation",
desc:"Handle compensation discussions.",

skills:[
"CTC Breakdown",
"Negotiation",
"Joining",
"Benefits"
],

ready:"You understand compensation structure.",

page:"offer-negotiation.html"
}

];

const steps = document.querySelectorAll(".step");

steps.forEach((step,index)=>{

    step.addEventListener("click",()=>{

        steps.forEach(btn=>{
            btn.classList.remove("active");
        });

        step.classList.add("active");

        const data = roadmapData[index];

        document.querySelector(".step-number").textContent =
        data.step;

        document.querySelector(".detail-title").textContent =
        data.title;

        document.querySelector(".detail-desc").textContent =
        data.desc;

        document.querySelector(".skill1").textContent =
        data.skills[0];

        document.querySelector(".skill2").textContent =
        data.skills[1];

        document.querySelector(".skill3").textContent =
        data.skills[2];

        document.querySelector(".skill4").textContent =
        data.skills[3];

        document.querySelector(".ready-text").textContent =
        data.ready;

        document.getElementById("detailsBtn").href =
        data.page;
    });

});