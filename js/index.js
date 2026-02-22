const workHistory = [{
        position: "SOFTWARE DEVELOPER | FREELANCE",
        icon: "🚧",
        duration: "2022 - Present",
        location: "",
        description: "Developing high-performance web and mobile applications for various clients.",
        responsibilities: [
            "Built scalable full-stack applications using MERN stack.",
            "Developed cross-platform mobile apps using React Native.",
            "Integrated payment gateways, authentication systems, and real-time databases."
        ],
        url: ""
    },
    {
        position: "FRONTEND DEV & CODING INSTRUCTOR | RUBIES TECHNOLOGY",
        icon: "🚧",
        duration: "2020 - Present",
        location: "",
        description: "Developed company software and instructed students in front-end development.",
        responsibilities: [
            "Developed company software using Next.js and Tailwind CSS for styling.",
            "Integrated Next.js with RESTful APIs for seamless data exchange.",
            "Taught HTML, CSS, and JavaScript to kids, ensuring their proficiency in front-end development."
        ],
        url: "https://foundation.rubiestech.org/"
    },
    {
        position: "FRONTEND DEVELOPER LEAD | AFRIKDISH",
        icon: "🚧",
        duration: "May 2024 - Present",
        location: "Canada (Remote)",
        description: "Developed an e-commerce platform for African food delivery in Canada, integrating Stripe for payments. Managed user, vendor, and admin dashboards to ensure a seamless experience.",
        responsibilities: [
            "Collaborated with the UI/UX designer to ensure a seamless user interface.",
            "Led the software team and conducted weekly Scrum meetings.",
            "Worked closely with the DevOps engineer for proper deployment.",
            "Developed and optimized dashboards for users, vendors, and admins.",
            "Integrated Stripe for secure and smooth payment processing."
        ],
        url: "https://afrikdish.com/"
    }, {
        position: "MOBILE DEVELOPER (REACT NATIVE) | PORCHPLUS",
        icon: "🚧",
        duration: "January 2024 – Present",
        location: "Lagos State, Nigeria",
        description: "Developing a real estate app for landlords and renters.",
        responsibilities: [
            "Built and maintained a real estate app for landlords and renters.",
            "Implemented push notifications and geolocation features for enhanced user engagement.",
            "Stayed up to date with the latest technology trends and ensured the team followed best practices.",
            "Conducted code reviews and provided constructive feedback to improve code quality."
        ],
        url: "https://porchplus.com/"
    },
    {
        position: "MOBILE DEVELOPER (REACT NATIVE) | SHAPERLY AFRICA",
        icon: "🚧",
        duration: "January 2023 – July 2023",
        location: "River State, Nigeria",
        description: "Developed a logistics app for drivers and customers.",
        responsibilities: [
            "Collaborated with a senior React Native developer on logistics app development.",
            "Worked on both the driver and customer apps, ensuring seamless integration and functionality.",
            "Connected mobile applications to back-end systems using RESTful APIs.",
            "Implemented offline data synchronization for improved usability in low-connectivity areas."
        ],
        url: "https://porchplus.com/"
    },
    {
        position: "SOFTWARE DEVELOPER (NEXT.JS & NODE.JS) | COPYUP",
        icon: "🚧",
        duration: "October 2022 – August 2023",
        location: "Ikeja, Lagos, Nigeria",
        description: "Developed and optimized web applications while leading a development team.",
        responsibilities: [
            "Led a team of junior developers, providing guidance and mentorship.",
            "Collaborated with cross-functional teams and stakeholders to ensure project success.",
            "Ensured project delivery on time and within budget constraints.",
            "Implemented automated testing and CI/CD pipelines to improve development efficiency."
        ],
        url: "https://porchplus.com/"
    },
    {
        position: "SOFTWARE DEVELOPER INSTRUCTOR | SQI COLLEGE OF ICT",
        icon: "🚧",
        duration: "August 2020 – May 2023",
        location: "Ogbomoso, Oyo State, Nigeria",
        description: "Instructed and mentored students in modern web technologies and software development.",
        responsibilities: [
            "Specialized in teaching Next.js, Node.js, GraphQL, and Cloud Hosting.",
            "Produced educational content, including technology showcases, tutorials, and interviews.",
            "Mentored students on real-world software development practices and project management."
        ],
        url: "https://porchplus.com/"
    }
];


// const workHistoryContainer = document.getElementById("work-history");

//     workHistory.forEach(job => {
//         const jobElement = document.createElement("div");
//         jobElement.classList.add("card--work-history");
//         jobElement.innerHTML = `
//             <strong>${job.icon} ${job.position}</strong>
//             <p>${job.duration} ${job.location ? `| ${job.location}` : ""}</p>
//             <p>${job.description}</p>
//             <ul>
//                 ${job.responsibilities.map(item => `<li>${item}</li>`).join("")}
//             </ul>
//         `;
//         workHistoryContainer.appendChild(jobElement);
//     });

const workHistoryContainer = document.getElementById("work-history");

// List of different AOS animations
const animations = ["fade-left", "fade-right", "fade-up", "fade-down", "zoom-in", "zoom-out"];

workHistory.forEach((job, index) => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("card--work-history");

    // Assign a different animation for each job
    jobElement.setAttribute("data-aos", animations[index % animations.length]);

    jobElement.innerHTML = `
        <strong>${job.icon} ${job.position} | <a href="${job.url}" target="_blank" style="color:blue;"><small >Link</small></a></strong>
        <p>${job.duration} ${job.location ? `| ${job.location}` : ""}</p>
        <p>${job.description}</p>
        <ul>
            ${job.responsibilities.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;

    workHistoryContainer.appendChild(jobElement);
});

// Reinitialize AOS to detect new elements
AOS.refresh();



const techStack = [{
        category: "Programming Languages",
        skills: "Python, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS / Bootstrap"
    },
    {
        category: "Frontend Frameworks",
        skills: "React.js, Next.js"
    },
    {
        category: "Backend Development",
        skills: "Node.js, Express.js, RESTful API, Authentication (JWT), API security basics"
    },
    {
        category: "Database Management",
        skills: "MongoDB, MySQL"
    },
    {
        category: "Authentication & Security",
        skills: "JWT Authentication, API protection"
    },
    {
        category: "Tools & Workflow",
        skills: "Git & GitHub, VS Code, NPM/Package management, Deployment(Render, Vercel, Railway)"
    },
    {
        category: "Soft Skills",
        skills: "Communication, Collaboration, Problem Solving, Time Management"
    }
];

const techStackContainer = document.getElementById("wrapper--techstack__items");

techStack.forEach(stack => {
    const stackElement = document.createElement("div");
    stackElement.classList.add("card--techstack");

    const textElement = document.createElement("span");
    textElement.innerText = `${stack.category}: ${stack.skills}`;

    stackElement.appendChild(textElement);
    techStackContainer.appendChild(stackElement);
});