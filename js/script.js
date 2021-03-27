let projectList = [
    {
        id: 0,
        name: "Connect the Paws Game",
        description: "A game that requires 2 players taking turns in using a single computer. I based it from the Connect the Dots/Dots and Lines game.",
        used: "DrRacket",
        src: "images/connect_the_paws_game.png"
    },
    {
        id: 1,
        name: "Website Game",
        description: "A trivia game where the player has to type a command in order to answer. It has an account and ranking system, and the data is stored in JSON format using HTML local storage.",
        used: "HTML, CSS, JavaScript, PHP, Apache",
        src: "images/website_game.png"
    },
    {
        id: 2,
        name: "Single Page Website",
        description: "A simple single-page app which dynamically changes when a user adds a post. The user data and posts are stored using MySQL database, and the communication between the front end and database is done using AJAX. Express is used for handling requests.",
        used: "HTML, CSS, Node.js, Express, MySQL/MariaDB",
        src: "images/single_page_website.png"
    },
    {
        id: 3,
        name: "Progressive Web App",
        description: "An installable web app that works offline. It has two types of users: student and provider. Student user type can view all courses and rate them while Provider user type can only view its own courses and is able to edit, delete or add new ones. Fetch is used to access data which is stored in MongoDB.",
        used: "HTML, CSS, Vue.js, Node.js, Express, MongoDB, Service Worker",
        src: "images/progressive_web_app.png"
    },
    {
        id: 4,
        name: "Data Visualisation Website",
        description: "Hosted on the cloud using AWS S3. Numerical data is downloaded from Dark Sky API and text data is downloaded from Twitter APi. The data is uploaded to online database, which triggers Lambda functions for generating predictions and sentiment analysis. New data is pushed to clients using WebSockets.",
        used: "HTML, CSS, Node.js, TypeScript, Plotly, AWS: S3, Lambda, DynamoDB, Comprehend, SageMaker, API Gateway",
        src: "images/data_visualisation_website.png"
    },
    {
        id: 5,
        name: "Discord Bot",
        description: "This is a bot that I made for a mobile game that I used to play. Its main purpose is to send reminders for daily events. I also added a function for quiz search where users can easily type part of the question and get the right answer. The questions and answers were compiled from online resources and some were contributed by guildmates.",
        used: "Node.js, Discord.js, cron",
        src: "images/discord_bot.png"
    }
];

let app = new Vue({
    el: '#vue',
    data: {
        projects: projectList,
        isNavShown: false
    },
    methods: {
        moveTo(id) {
            this.showNav();
            if (id == 0) {
                introSection.scrollIntoView({behavior: "smooth"});
            }
            else if (id == 1) {
                aboutSection.scrollIntoView({behavior: "smooth"});
            }
            else if (id == 2) {
                projectsSection.scrollIntoView({behavior: "smooth"});
            }
            else {
                contactSection.scrollIntoView({behavior: "smooth"});
            }
        },
        showNav() {
            if (window.innerWidth < 600) {
                if (!this.isNavShown) {
                    this.isNavShown = true;
                    navIcon.classList.add("change");
                    navIcon.classList.add("show-nav-icon");
                    nav.classList.add("show-nav");
                    navContent.classList.add("animate__slideInRight");
                    document.body.style.overflow = "hidden";
                }
                else {
                    this.isNavShown = false;
                    navIcon.classList.remove("change");
                    navIcon.classList.remove("show-nav-icon");
                    nav.classList.remove("show-nav");
                    navContent.classList.remove("animate__slideInRight");
                    document.body.style.overflow = "auto";
                }
            }
        },
        showModal(id) {
            modal.classList.add("show-modal");
            modalPic.src = this.projects[id].src;
            document.body.style.overflow = "hidden";
        },
        closeModal() {
            modal.classList.remove("show-modal");
            document.body.style.overflow = "auto";
        }
    }
});

let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
let navContent = document.getElementById("nav-content");
let introSection = document.getElementById("intro");
let aboutSection = document.getElementById("about");
let projectsSection = document.getElementById("projects");
let contactSection = document.getElementById("contact");
let modal = document.getElementById("pic-modal");
let modalPic = document.getElementById("pic-preview");

window.onresize = () => {
    if (window.innerWidth < 600) {
        app.isNavShown = true;
        app.showNav();
    }
}

window.onclick = (event) => {
    if (event.target == nav) {
        app.showNav();
    }
    if (event.target == modal) {
        app.closeModal();
    }
}

ScrollReveal().reveal('.reveal', { delay: 100 });