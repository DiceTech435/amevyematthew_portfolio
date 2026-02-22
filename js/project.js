const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project_id");

const projects = [{
        id: "pro-seyi-345Kk@%-dev",
        projectName: "Copyup",
        techStack: "Next.js, React.js, Redux, Node.js",
        title: "A Learning Management System for Copywriters",
        liveDemo: "https://mycopyup.vercel.app/",
        sourceCode: "https://github.com/oluwaseyi9325/copy_front",
        description: [
            "Copyup is a feature-rich Learning Management System (LMS) designed for copywriters and content creators. Users can browse, purchase, and enroll in courses covering various aspects of copywriting. Courses are structured into modules and lessons, allowing for an organized learning experience.",
            "A progress-tracking system helps learners monitor their advancement and revisit completed lessons. Interactive quizzes and assignments provide a hands-on learning approach with instant feedback. Certificates are awarded upon course completion, motivating learners and adding credibility to their skills",

            "Built-in discussion forums and live Q&A sessions enable peer-to-peer interaction and instructor support. Instructors can create and manage courses easily through an intuitive dashboard. Copyup supports multiple content formats, including video lectures, PDFs, slides, and downloadable resources.",

        ],
        features: [
            "Secure user authentication with role-based access (Admin, Instructor, Student).",
            "Course management system (create, edit, delete courses with modules and lessons).",
            "Support for multiple content types (videos, PDFs, quizzes, and assignments).",
            "Personalized student dashboard to track progress and enrolled courses.",
            "Gamification features (badges, leaderboards, certificates).",
            "Quiz and assessment system with automated grading.",
            "Payment integration with Paystack for course purchases.",
            "Admin and instructor panel for course and user management.",
            "Mobile-responsive design for seamless learning on any device.",
            "Multi-language support for a global learning experience.",
            "Course subscription plans and one-time payment options.",

        ]
    },
    {
        id: "pro-dpay-12345",
        projectName: "D-PAY BANK",
        techStack: "React.js, Redux, Firebase",
        title: "A Secure Fund Transfer System",
        liveDemo: "#",
        sourceCode: "#",
        description: [
            "D-PAY BANK facilitates secure fund transfers between users by generating unique transfer codes with attached passwords.",
            "Recipients can redeem transfers using the provided code and password, ensuring a secure transaction process.",
            "Seamless integration with Firebase for authentication and real-time database updates.",
            "User-friendly dashboard for managing transactions, checking balances, and reviewing transaction history.",
            "Two-factor authentication for added security in transactions."
        ],
        features: [
            "Secure user authentication and OTP verification.",
            "Unique transaction codes with password protection.",
            "Real-time transaction tracking and history.",
            "Seamless UI/UX with Redux for state management.",
            "Firebase integration for real-time updates."
        ]
    },
    {
        id: "pro-pos-67890",
        projectName: "SeamlessPos",
        techStack: "Next.js, JSON-API",
        title: "A Simulated E-Commerce Platform",
        liveDemo: "#",
        sourceCode: "#",
        description: [
            "SeamlessPos is an e-commerce platform that utilizes a JSON Fake API to simulate backend data for product listings, cart management, and checkout processes.",
            "Users can browse products, add them to their cart, and complete transactions seamlessly.",
            "Supports product filtering, searching, and sorting for a smooth shopping experience.",
            "Minimalist UI/UX design optimized for performance and responsiveness."
        ],
        features: [
            "Product listing with dynamic data fetching.",
            "Cart management with local storage integration.",
            "Checkout process with simulated transactions.",
            "User authentication for personalized experiences.",
            "Dark mode support for better accessibility."
        ]
    },
    {
        id: "pro-notes-24680",
        projectName: "INoTes App",
        techStack: "React Native",
        title: "A Mobile Note-Taking Application",
        liveDemo: "#",
        sourceCode: "#",
        description: [
            "INoTes App provides users with a convenient platform to jot down notes, organize them into categories, and easily access them on their mobile devices.",
            "Allows users to create, edit, and delete notes with a clean and intuitive interface.",
            "Syncs data across devices for seamless access anywhere.",
            "Features dark mode and text formatting options for better usability."
        ],
        features: [
            "User authentication and secure cloud storage.",
            "Offline support for creating and managing notes.",
            "Categorization and tagging system for better organization.",
            "Search functionality for quickly finding notes.",
            "Dark mode and customizable themes."
        ]
    },
    {
        id: "pro-foodapp-09876",
        projectName: "Food Delivery App Clone",
        techStack: "React Native, Firebase, Redux",
        title: "A Mobile Clone of a Food Delivery App",
        liveDemo: "#",
        sourceCode: "#",
        description: [
            "A React Native mobile app that replicates popular food delivery platforms like UberEats and DoorDash.",
            "Users can browse restaurants, order food, track deliveries in real time, and make secure payments.",
            "Integrated Firebase backend for real-time data sync and order updates."
        ],
        features: [
            "Restaurant listing with search and filtering options.",
            "Cart and order management with live order tracking.",
            "User authentication with Firebase.",
            "Push notifications for order status updates.",
            "Payment gateway integration for seamless transactions."
        ]
    },
    {
        id: "pro-weather-12345",
        projectName: "Weather App",
        techStack: "React Native, OpenWeather API",
        title: "A Weather App with React Native",
        liveDemo: "#",
        sourceCode: "#",
        description: [
            "A simple weather forecasting mobile app built using React Native.",
            "Fetches real-time weather data using the OpenWeather API.",
            "Displays current temperature, humidity, wind speed, and a 7-day weather forecast."
        ],
        features: [
            "Search functionality for cities worldwide.",
            "GPS-based location detection for automatic weather updates.",
            "Dark mode and customizable themes.",
            "Real-time weather updates with API integration.",
            "Minimalist UI with smooth animations."
        ]
    },
    {
        id: "pro-jsonforge-99999",
        projectName: "JSONForge API",
        techStack: "Node.js, Svelte",
        title: "The Ultimate Fake API Playground",
        liveDemo: "#",
        sourceCode: "#",
        description: [
            "JSONForge API is a powerful tool for developers looking to test and prototype their applications using a fake API.",
            "It offers additional features and improved performance compared to JSONPlaceholder.",
            "Built with Node.js for high performance and Svelte for a sleek, interactive frontend.",
            "Supports multiple API endpoints for CRUD operations."
        ],
        features: [
            "Fully customizable fake API endpoints.",
            "Improved response time compared to JSONPlaceholder.",
            "Ability to generate dynamic mock data.",
            "Supports RESTful API testing and prototyping.",
            "User authentication for managing API requests."
        ]
    },
    {
        id: "pro-fintech-clone-56789",
        projectName: "Mobile Fintech App Clone",
        techStack: "React Native, Firebase, Redux",
        title: "A Clone of a Mobile Fintech App",
        liveDemo: "#",
        sourceCode: "#",
        description: [
            "A React Native mobile application that replicates core features of fintech apps like PayPal, Cash App, and Chime.",
            "Users can send and receive money, manage their digital wallets, and track transactions in real-time.",
            "Seamless user experience with biometric authentication and bank integrations."
        ],
        features: [
            "Secure user authentication with OTP and biometric login.",
            "Real-time transaction tracking and notifications.",
            "Wallet management with deposit and withdrawal functionality.",
            "QR code payments for seamless transactions.",
            "Integration with banks and third-party payment services."
        ]
    },
];
const project = projects.find(p => p.id === projectId);
if (project) {
    document.getElementById("container--main").innerHTML = `
        <a href="index.html">&#x2190; Go Back</a>
        <h1>${project.title}</h1>
        
        <ul>
            <li><a href="${project.liveDemo}" target="_blank">Live Demo</a></li>
            <li><a href="${project.sourceCode}" target="_blank">Source Code</a></li>
        </ul>
        ${project.description.map(desc => `<p>${desc}</p>`).join("")}
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>
        <div id="image-container">
         <div class="project-image-wrapper">
            <img  src="https://assets.justinmind.com/wp-content/uploads/2020/02/signup-form-pages-examples.png" alt="AfrikDish Screenshot 1" class="project-image" onclick="openModal(this)" >
            </div>
              <div class="project-image-wrapper">
            <img src="https://assets.justinmind.com/wp-content/uploads/2020/02/signup-form-pages-examples.png" alt="AfrikDish Screenshot 1" class="project-image">
            </div>
              <div class="project-image-wrapper">
            <img src="https://assets.justinmind.com/wp-content/uploads/2020/02/signup-form-pages-examples.png" alt="AfrikDish Screenshot 1" class="project-image">
            </div>
              <div class="project-image-wrapper">
            <img src="https://assets.justinmind.com/wp-content/uploads/2020/02/signup-form-pages-examples.png" alt="AfrikDish Screenshot 1" class="project-image">
            </div>
        </div>

        <div id="imageModal" class="modal">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="modalImage">
</div>
    `;
} else {
    document.getElementById("container--main-project").innerHTML = `<h1>Project Not Found</h1>`;
}



const container = document.querySelector(".page-section--page");
projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card--project");
    projectCard.innerHTML = `
            <a href="project.html?project_id=${project.id}"><span>🏆 </span>${project.title}</a>
        `;
    container.appendChild(projectCard);
});



// Open the modal
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

// Close the modal when clicking the close button
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};