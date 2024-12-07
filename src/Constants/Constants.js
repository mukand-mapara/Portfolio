import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

// cv
import cv from "../assets/cv.pdf";

// for project 1
import project1Img1 from "../assets/Project1/project1Img1.JPG";
import project1Img2 from "../assets/Project1/project1Img2.JPG";
import project1Img3 from "../assets/Project1/project1Img3.JPG";
import project1Img4 from "../assets/Project1/project1Img4.JPG";

// for project 2
import project2Img1 from "../assets/Project2/project2Img1.JPG";
import project2Img2 from "../assets/Project2/project2Img2.JPG";
// import project2Img3 from "../assets/Project2/3.png";
// import project2Img4 from "../assets/Project2/4.png";
// import project2Img5 from "../assets/Project2/5.png";
// import project2Img6 from "../assets/Project2/6.png";
// import project2Img7 from "../assets/Project2/7.png";

// for project 3
import project3Img1 from "../assets/Project3/1.png";
import project3Img2 from "../assets/Project3/2.png";
import project3Img3 from "../assets/Project3/3.png";
import project3Img4 from "../assets/Project3/4.png";
import project3Img5 from "../assets/Project3/5.png";

// for project 4
import project4Img1 from "../assets/Project4/project4Img1.JPG";
import project4Img2 from "../assets/Project4/project4Img2.JPG";
import project4Img3 from "../assets/Project4/project4Img3.JPG";

// for project 5
import project5Img1 from "../assets/Project5/project5Img1.JPG";
import project5Img2 from "../assets/Project5/project5Img2.JPG";
import project5Img3 from "../assets/Project5/project5Img3.JPG";
import project5Img4 from "../assets/Project5/project5Img4.JPG";
import project5Img5 from "../assets/Project5/project5Img5.JPG";

// socialIcons
import { FaFacebookF } from "react-icons/fa";

// lightModeImg
import lightModeImg from "../assets/lightModeImg.png";
import nightModeImg from "../assets/nightModeImg.png";

// institutesImages
import schoolLogo from "../assets/schoolLogo.png";
import collegeLogo from "../assets/collegeLogo.png";
import universityLogo from "../assets/aptech_11zon.png";
import smitLogo from "../assets/smitLogo.png";
import digiskillsLogo from "../assets/digiskillsLogo.png";

// navbarLogo
import navbarImg from "../assets/navbarLogo.jpeg";

const skillsSubTitle =
  "Crazy full stack developer who wants to explore every tech stack";

// name
const name = "Mukand Kirshna";

// navbarLogo
const navbarLogo = navbarImg;

// skillsIcons
const skillsIcons = [
  {
    icon: <FaHtml5 />,
    title: "Html-5",
  },
  {
    icon: <FaCss3Alt />,
    title: "css3",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
  },
  {
    icon: <RiReactjsLine />,
    title: "reactjs",
  },
  {
    icon: <IoLogoFirebase />,
    title: "firebase",
  },
  {
    icon: <TbBrandNextjs />,
    title: "Nextjs",
  },
];

// education
const education = [
  {
    img: collegeLogo,
    instituteName: "University of Sindh",
    degreeName: "AD Commerce 2 years Degree",
    duration: "March 2021 - March 2023",
  },
  // {
  //     img: schoolLogo,
  //     instituteName: "Mumtaz Vision Academy",
  //     degreeName: "Matriculation in Science Group",
  //     duration: "March 2019 - October 2021"
  // }
];

// resumeLink
const resume = cv;
// const resume = "https://drive.google.com/fi/le/d/1qQI_0lC0Sb-tmoMS5ZrvwonM-bkH6c9m/view?usp=sharing";

// professionalExperience
const professionalExperience = [
  {
    img: smitLogo,
    name: "Saylani Mass IT Training Program",
    role: "Trainer Assistant for Web Development Course",
    duration: "January 2024",
    certified: false,
  },
  {
    img: smitLogo,
    name: "Saylani Mass IT Training Program",
    role: "Web Development Course",
    duration: "June 2023",
    certified: false,
  },
];

// skillsList
const skillsList = [
  "Develop highly interactive Front-end / User Interfaces for your websites.",
  "Integration of third party services such as Firebase.",
  "Easily create responsive sites.",
];

// servicesList
const servicesList = [
  {
    title: "Website Development",
    description:
      "Create responsive and interactive websites for individuals, businesses, or organizations using your skills in HTML5, CSS3, JavaScript, and Bootstrap. Ensure that the websites are mobile-friendly and optimized for various devices and screen sizes.",
  },
  {
    title: "Frontend Development",
    description:
      "Specialize in frontend development by building user interfaces (UIs) and user experiences (UX) using HTML5, CSS3, JavaScript, and React.js. Develop single-page applications (SPAs) and ensure they are fast, responsive, and accessible.",
  },

  {
    title: "Web Hosting and Deployment",
    description:
      "Assist clients in deploying their websites and web applications to hosting platforms such as Firebase Hosting, Netlify, or traditional web servers. Optimize website performance and ensure secure connections (HTTPS).",
  },
  {
    title: "Maintenance and Updates",
    description:
      "Offer maintenance services to keep websites and web applications up-to-date with security patches, performance improvements, and feature enhancements. Provide regular backups and monitoring for uptime.",
  },
  {
    title: "Responsive Design Audits",
    description:
      "Evaluate existing websites for responsiveness across devices and browsers. Provide recommendations and implement improvements using CSS3 media queries and responsive design principles.",
  },
  {
    title: "Integration with APIs",
    description:
      "Integrate third-party APIs (such as social media APIs, or data APIs) into web applications using JavaScript and frameworks like React.js. Ensure secure and efficient data exchange between systems.",
  },
];

// portfolio
const portfolio = [
  {
    images: [project1Img1, project1Img2, project1Img3, project1Img4],
    title: "E-commerce-web",
    description:
      "This e-commerce website is a highly functional and visually appealing platform designed to deliver a seamless and engaging shopping experience.  user-first approach, it combines outstanding performance, elegant aesthetics, and intuitive usability to cater to diverse customer needs.",
    // link: "https://e-commerce-web-lemon.vercel.app/",
  },
  {
    images: [
      project2Img1,
      project2Img2,
      // project2Img3,
      // project2Img4,
      // project2Img5,
      // project2Img6,
      // project2Img7,
    ],
    title: "Expense Management System",
    description:
      "A React and Redux-based web app for tracking and managing expenses. It offers features like adding, editing, and deleting expenses with categorized views, ensuring a seamless and responsive user experience.",
    // link: "https://expense-management-delta.vercel.app/",
  },
  // {
  //   images: [
  //     project3Img1,
  //     project3Img2,
  //     project3Img3,
  //     project3Img4,
  //     project3Img5,
  //   ],
  //   title: "Blogging Website",
  //   description:
  //     "I've built a responsive blog website with JavaScript for seamless data operations using Firebase. Security is a top priority, leveraging Firebase features to protect user data. The focus is on delivering a precise, secure, and user-friendly blogging experience.",
  //   link: "https://blogging-website-huzaifa.vercel.app/",
  // },
  {
    images: [project4Img1, project4Img2, project4Img3],
    title: "React Demo Web-Page",
    description:
      "This React demo website showcases a modern and clean interface with a focus on responsive design and intuitive user experience. It includes a fully responsive layout that adapts seamlessly to various screen sizes, ensuring a consistent appearance on desktops, tablets, and mobile devices.",
    // link: "https://react-demo-website-2fv7zoksm-mukand-1303s-projects.vercel.app/",
  },
  {
    images: [
      project5Img1,
      project5Img2,
      project5Img3,
      project5Img4,
      project5Img5,
    ],
    title: "Restaurant Hub",
    description:
      "Restaurant Hub is a visually captivating platform designed to connect food lovers with their favorite dining spots effortlessly. This project combines functionality and aesthetics to create an intuitive experience for users exploring restaurant menus, reviews, and reservations.",
    // link: "https://restaurant-website-eight-iota.vercel.app/",
  },
];

// contact
const contact = {
  whatsapp: "+92333-2548247",
  number: "+92333-2548247",
  email: "mukandkirshana1606@gmail.com",
  location: "Newtown jail chowrangi Karachi",
};

// socialLinks
const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/mukand-mapara",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/mukand-kirshana/",
  },
];

const themes = {
  lightModeImg,
  nightModeImg,
};

export {
  skillsSubTitle,
  skillsIcons,
  skillsList,
  servicesList,
  portfolio,
  contact,
  socialLinks,
  name,
  themes,
  education,
  professionalExperience,
  resume,
  navbarLogo,
};
