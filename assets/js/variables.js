
// information to be added to the about section
var about = {
    image: "assets/images/profile.JPG",
    text: [
        {
            p: "Ever since I was a kid, I have always been interested in creating things. From my early childhood of building Legos, to drawing, cooking and coding. I have always been interested in doing something that combines creativity, design and technical skills."
        },
        {
            p: "Because of this interest I was drawn towards web development and coding during my undergraduate degree in Business. I decided to explore my interest and enrolled in a Web development coding bootcamp, where I received my certification as a full stack web developer. After the course, I began working as a teaching assistant in the same coding bootcamp, helping students from all different walks of life learn to code."
        },
        {
            p: "In my free time I enjoy cooking, watching movies and playing video games, craft beer, learning history, and above all, traveling. After I graduated from University, I spent 7 weeks traveling around Europe on my own and had the most incredible experience of my life. I learned more about myself, and the world around me than I ever imagined, and it sparked my desire make my life about travel and exploration."
        }
    ]
}


// skills lists that will be appended to the skills section in the html 
var skills = [
    // skill list 1
    {
        title: "Front End Skills",
        image: "assets/images/front-end.png",
        skills: ["HTML5", "CSS3", "SASS", "JavaScript", "jQuery", "React"]
    },
    // skill list 2
    {
        title: "Back End Skills",
        image: "assets/images/gears.svg",
        skills: ["Node", "Express", "MongoDB", "MySQL", "Template Engines", "MERN"]
    },
    // skill list 3
    {
        title: "Other Skills",
        image: "assets/images/otherSkills.png",
        skills: ["Customer Service", "Microsoft Office", "Public Speaking", "Marketing"]
    }
];


// portfolio items to be appended to the portfolio section
var portfolio = [
    {
        projectID: 1,
        projectName: "Friend Finder",
        titleImage: "assets/images/game-of-thrones.jpg",
        teaser: "Take the survey to find your Game of Thrones best friend!",
        descriptionImage: "assets/images/friend-finder.jpg",
        description: "In this node express app, the user will fill out a 10 question survey, then an alogorithm will match them with their best matched Game of Thrones character",
        features: [
            {
                title: "Front End",
                image: "assets/images/front-end.png",
                skills: ["HTML5", "CSS3", "Materialize", "JavaScript", "jQuery"]
            },
            {
                title: "Back End",
                image: "assets/images/back-end.png",
                skills: ["Node", "Express"]
            }
        ],
        link1: "https://github.com/evanejtucker/FriendFinder",
        link2: "https://aqueous-harbor-99526.herokuapp.com/"
    },
    {
        projectID: 2,
        projectName: "Bamazon",
        titleImage: "assets/images/shopping.jpg",
        teaser: "Make some purchases in this Node SQL command line app",
        descriptionImage: "assets/images/shopping-carts.jpg",
        description: "Use the command line to interact with a SQL databse to make purchases, add products and stock to this online store",
        features: [
            {
                title: "Back End",
                image: "assets/images/back-end.png",
                skills: ["Node", "MySQL", "Javascript"]
            }
        ],
        link1: "https://github.com/evanejtucker/Bamazon",
        link2: "https://aqueous-harbor-99526.herokuapp.com/"
    },
    {
        projectID: 3,
        projectName: "Clicky Game",
        titleImage: "assets/images/mario-kart.jpg",
        teaser: "Play this Mario Kart themed React memory game",
        descriptionImage: "assets/images/clicky-game.jpg",
        description: "In this front end react app, try and click on all the Mario characters without repeating",
        features: [
            {
                title: "Front End",
                image: "assets/images/front-end.png",
                skills: ["React", "Reactstrap", "JSX", "AnimateCSS", "Bootstrap"]
            }
        ],
        link1: "https://github.com/evanejtucker/Clicky-Game",
        link2: "https://evanejtucker.github.io/clicky-game/"
    }
]


