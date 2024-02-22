export const Bio = {
  name: "Moejr",
  roles: ["Morning breathes knowledge,", "night exhales puzzles."],
  //  description:
  //    "",
  github: "https://github.com/m0ejr",
  linkedin: "https://www.linkedin.com/in/mohammed-638623219/",
  email: "mailto:mo3jrr@gmail.com",
  twitter: "https://twitter.com/m0ejr",
};

export const skills = [
  {
    title: "Languages & Libraries & Frameworks",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      },
      {
        name: "React",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Jest.js",
        image:
          "https://logowik.com/content/uploads/images/jest-js7858.logowik.com.webp",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Node",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express",
        image:
          "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      {
        name: "Git",
        image: "https://git-scm.com/images/logos/logomark-orange@2x.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "BrainScape",
    date: "November 2023",
    description:
      "This is a sophisticated full-stack web application designed for seamless performance and reliability. The robust backend, powered by Node.js and Express.js, leverages a real SQL database with PostgreSQL, ensuring efficient data management. Containerization using Docker and Docker-compose adds scalability and ease of deployment. Session storage is enhanced through Redis, optimizing user interactions. The integration of Clarifai API for facial recognition brings cutting-edge technology to the forefront. The sleek and responsive frontend is crafted with React.js, enriched by frameworks like Reactstrap, delivering an engaging user experience. Together, these technologies culminate in an innovative and feature-rich application that excels in both functionality and user interface.",
    image:
      "https://github.com/M0ejr/BrainScape/blob/master/src/components/brainScape.png?raw=true",
    tags: [
      "React",
      "Node",
      "Express",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Clarifai API",
      "Bcrypt",
      "Knex",
    ],
    category: "machine learning",
    github: "https://github.com/M0ejr/BrainScape",
    webapp: "https://brain-scape.vercel.app/",
  },
  {
    id: 1,
    title: "Robofriends Cards",
    date: "December 2023",
    description:
      "This React.js application, fortified with TypeScript and Redux, stands as a testament to modern web development practices. Employing Redux for state management ensures a streamlined and predictable data flow. The app seamlessly interacts with a mock API, retrieving user information dynamically and presenting it in visually appealing cards. Each user is accompanied by unique robot images, adding a delightful touch to the user interface. The combination of React.js, TypeScript, and Redux creates a powerful synergy, resulting in a responsive, well-organized, and visually engaging application.",
    image:
      "https://github.com/M0ejr/Robofriends/blob/master/robofriends.png?raw=true",
    tags: ["TypeScript", "React", "Redux"],
    category: "web app",
    github: "https://github.com/M0ejr/Robofriends",
    webapp: "https://m0ejr.github.io/Robofriends/",
  },
  {
    id: 2,
    title: "Background Generator",
    date: "September 2023",
    description:
      "This is a simple web tool made with HTML, CSS, and JavaScript. It helps you pick colors and gives you the CSS code, making it easy to use in your projects. Just click, copy, and paste for a quick color boost.",
    image:
      "https://github.com/M0ejr/Background-Generator/blob/main/BackgroundGenerator.png?raw=true",
    tags: [" Plain JavaScript"],
    category: "web app",
    github: "https://github.com/M0ejr/Background-Generator",
    webapp: "https://m0ejr.github.io/Background-Generator/",
  },
];
