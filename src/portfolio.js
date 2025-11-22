/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import React from "react"; // ✅ Needed for JSX inside title

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "", //the text that appears in html tag
  title: (
    <>
      Hello, I'm <span className="username">Khadija Saeed</span>
    </>
  ),
  subTitle: emoji(
    "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khadijasaeed683",
  linkedin: "https://www.linkedin.com/in/khadija-saeed-85681329a",
  gmail: "khadijasaeed683@gmail.com",
  gitlab: "https://gitlab.com/Khadija_Saeed1",
  facebook: "https://www.facebook.com",
  //medium: "https://medium.com",
  //stackoverflow: "https://stackoverflow.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop responsive and visually engaging websites and web apps using HTML, CSS, JavaScript, React, and Node.js."
    ),
    emoji(
      "⚡ Build efficient backend systems and APIs with ASP.NET, SQL, and MongoDB."
    ),
    emoji(
      "⚡ Design and prototype intuitive user interfaces and graphics with Figma, Canva, and Adobe tools."
    ),
    // emoji(
    //   "⚡ Develop 2D/3D games in Unity with interactive elements, animations, and gameplay mechanics."
    // ),
    emoji(
      "⚡ Work with AI and Machine Learning models — including Vision Transformers — for real-world problem solving."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstarp",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Keep true to show this section
  schools: [
    {
      schoolName: "University of Engineering and Technology (UET), Lahore",
      logo: require("./assets/images/UETlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2023 - 2027",
      desc: "Focused on software development, AI/ML, and database systems with a strong academic record (CGPA: 3.56).",
      descBullets: [
        "Completed 8+ academic and personal projects, including AI, web, and game development.",
        "Active member of multiple societies — Graphic Design Co-Lead at Dev Jirgah and PR Team Lead at Dev Connect."
      ],
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/PGClogo.png"), // You can replace with actual Punjab College logo
      subHeader: "Intermediate in Computer Science (ICS - Physics)",
      duration: "2021 - 2023",
      desc: "Graduated with Grade A+, developing a solid foundation in programming, databases, and problem-solving.",
      descBullets: [
        "Earned Microsoft Office Specialist certification.",
        "Participated in multiple coding competitions and tech events."
      ],
    },
  ],
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show Work Experience Section
  experience: [
    {
      role: "Game Developer Intern",
      company: "MLabs",
      companylogo: require("./assets/images/MlabLogo.png"), // replace with your actual logo if available
      date: "June 2024 – August 2024",
      desc: "Developed a 3D hyper-casual game 'Froggy’s Fate' using Unity 3D as part of MLabs Summer Program.",
      descBullets: [
        "Implemented slingshot-based game mechanics, animations, and sounds.",
        "Collaborated in a fast-paced environment to design engaging gameplay experiences."
      ],
    },
    {
      role: "Odoo Developer (Intern)",
      company: "Ustadam",
      companylogo: require("./assets/images/ustadam.png"), // replace with real logo if available
      date: "June 2024 – August 2024",
      desc: "Worked collaboratively with the Ustadam team on Odoo ERP system development and customization.",
      descBullets: [
        "Customized Odoo modules to meet client needs.",
        "Integrated backend functionalities with a focus on automation and data management."
      ],
    },
    {
      role: "Freelance Developer & Designer",
      company: "Self-Employed",
      companylogo: require("./assets/images/selfEmployed.jpeg"), // optional placeholder
      date: "March 2021 – Present",
      desc: "Delivered freelance projects across software development, UI/UX design, databases, and graphic design.",
      descBullets: [
        "Created responsive websites and UI designs using Figma, Canva, and Adobe tools.",
        "Built software solutions in C++, C#, and Python for various client requirements."
      ],
    },
    
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Logo2.png"),
      projectName: "Eventnest",
      projectDesc: "MERN Stack web application to manage societies, events, and members effectively.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/chess.jpeg"),
      projectName: "Chess",
      projectDesc: "A 2D chess game developed in Unity with AI opponent, multiplayer mode, and intuitive UI.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Office Specialist",
      subtitle:
        "Earned the official Microsoft Office Specialist certification for acheiving advanced proficiency in Microsoft Office tools.",
      image: require("./assets/images/MSBadge.png"),
      imageAlt: "MS Logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/850910ad-2236-4fec-a263-7cfaa6f5722d/public_url"
        }
      ]
    },
    {
      title: "MLabs Summer Program",
      subtitle:
        "Developed a 3D Unity Game with slingshot mechanism and earned thecompletion certificate.",
      image: require("./assets/images/MLABS.png"),
      imageAlt: "MLabs Logo",
      footerLink: [
        {
          name: "Certificate",
          // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Building AI Products: Security Essentials",
      subtitle: "Earned a LinkedIn Learning certification in Building AI Products, covering AI product security, responsible AI practices, and risk mitigation.",
      image: require("./assets/images/LinkedInAICertificate.png"),
      imageAlt: "AI Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Credentials",
          url: "https://www.linkedin.com/learning/certificates/366c10a04c68f6e9f98ae8759727efc4d33a3b3a871c8c74768827cf534617ac?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bho1x3GthTuSO9hHJfwZpFA%3D%3D"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3244241050",
  email_address: "khadijasaeed683@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
