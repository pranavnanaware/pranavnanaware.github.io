/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pranav's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pranav Nanaware Portfolio",
    type: "website",
    url: "http://pranavnanaware.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Pranav Nanaware",
  logo_name: "PranavNanaware",
  subTitle:
    "As a passionate and experienced Full Stack Software Engineer. My journey in the tech world is marked by a series of successful web and mobile application projects, where I've excelled in designing, developing, and deploying scalable solutions across the entire product lifecycle.",
  resumeLink:
    "https://drive.google.com/file/d/1clw7X0YU7iTnmapTA3g6Z5FY1eUeo2Ks/view?usp=sharing",
  githubProfile: "https://github.com/pranavnanaware",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/pranavnanaware",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/pranavnanaware",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pranavnanaware/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:nanawarepranav@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Next.js/React",
        "⚡ Developing cross-platform mobile applications using Flutter,React Native. ",
        "⚡ Creating application backend in Node, Express & Python",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "vscode-icons:file-type-node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "vscode-icons:file-type-python",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture and DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Automating CI/CD pipelines and cost optimization",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/nanawarepranav/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Massachusetts, Dartmouth",
      subtitle: "MS in Computer Science",
      logo_path: "umass_logo.png",
      alt_name: "Umass Dartmouth",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Relevant Coursework:",
        "Theoretical Computer Science, Algorithms and Complexity, Secure Software Development, Paradigmatic Software Development, Big Data, Data Visualization, Gamification Design, UI Design, Mobile Robotics",
      ],
    },
    {
      title: "Savitribai Phule Pune University",
      subtitle: "B.E in Computer Engineering",
      logo_path: "sppu_logo.png",
      alt_name: "Pune University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Relevant Coursework:",
        "Data Structures and Algorithms, Advanced Data Structures, Object Oriented Programming,  Database Management Systems, Software Engineering and Project Management, Artificial Intelligence, High Performance Computing",
      ],
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Full Stack Software Engineer currently working towards Master’s degree in Computer Science. Successful in designing, developing, and deploying scalable web and mobile applications across entire product lifecycles. Proficient in frontend (React, Next, Flutter) and backend technologies (Node.js, Python) to support database management, cloud infrastructure, and API integration. Skilled in translating user requirements into high-quality code, ensuring optimal functionality and intuitive user interface. Proficient in developing technical solutions which increase productivity & lower operational costs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Virtoustack Softwares",
          company_url: "https://virtoustack.com/",
          logo_path: "virtoustack.jpeg",
          duration: "July 2022 - July 2022",
          location: "Pune, India",
          description:
            "Full stack Software Developer, directed multiple backend systems, managed, deployed and scaled cloud-infrastructure, Designed and developed efficient databases, automated c/cd pipelines, wrote resusable and responsive front-end components, developed multiple cross-platforms mobile applications using flutter.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Zealonic Technologies.",
          company_url: "https://www.zealonic.com/",
          logo_path: "zealonic.jpeg",
          duration: "Sept 2019 - May 2020",
          location: "Pune, India",
          description:
            "I streamlined HR processes with an Ionic app saving them 10 hours a week. I teamed up to build APIs and user interfaces using React and Angular, and brought websites to life gathering requirements and crafting designs. I'm a full-stack developer who thrives in both mobile and web worlds.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to tinker with latest tools and technologies and build scalable and innovative products.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pranav.png",
    description: "",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://pranavnanaware.github.io/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "+1 (774) 301-6082",
    subtitle: "Mobile",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
