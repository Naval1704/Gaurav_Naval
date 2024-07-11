import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  thynaa,
  ayata,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  androidStudio,
  portfolio,
  diabetes,
  customerSeg,
  bidirectional,
  emit,
  budget,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Flutter",
    icon: flutter
  },
  {
    name: "Android Studio",
    icon: androidStudio
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Ayata Intelligence Pvt. Ltd.",
    icon: ayata,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Led frontend development of a web application from inception to deployment using React.js and related technologies.",
      "Designed and implemented a responsive and visually appealing UI/UX, enhancing user interaction and experience.",
      "Deployed the application on Firebase hosting, ensuring scalability, reliability, and cross-browser compatibility.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Thynaa Healthy Naturally Pvt. Ltd.",
    icon: thynaa,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Lead end-to-end development using Dart and Flutter, crafting a user-centric frontend with features such as user registration, testimonials, real-time chat, crop image/audio/video upload, reviews & ratings.",
      "Architected and developed the backend of Samvedan using Express.js and MongoDB, ensuring robust data management, efficient API routing, and scalable operations for an agriculture healthcare platform. Created admin portals for enhanced control.",
      "Implemented a secure AWS authentication system and managed media uploads, ensuring data integrity and user privacy.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and experience, built to highlight professional achievements and capabilities.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Naval1704/Gaurav_Naval",
  },  
  {
    name: "Budget Tracker Application",
    description:
      "A budget tracking app that allows users to list, manage, and categorize their budgets efficiently. Built using Flutter for a seamless user experience, with an AWS backend ensuring robust and secure data management.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Amplify",
        color: "yellow-text-gradient",
      },
      {
        name: "Dart",
        color: "purple-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/Naval1704/Budget-Tracker-App",
  },   
  {
    name: "Diabetes Detection",
    description:
      "A machine learning model to detect diabetes based on user-provided medical data, offering early diagnosis and personalized health recommendations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "yellow-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "purple-text-gradient",
      },
      {
        name: "Data Preprocessing",
        color: "orange-text-gradient",
      },
    ],
    image: diabetes,
    source_code_link: "https://github.com/Naval1704/Diabetes-Detection",
  },
  {
    name: "Customer Segmentation Analysis",
    description:
      "A data analysis project that segments customers based on purchasing behavior, providing insights to optimize marketing strategies and improve customer targeting.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "yellow-text-gradient",
      },
      {
        name: "Clustering",
        color: "purple-text-gradient",
      },
      {
        name: "K-Means",
        color: "orange-text-gradient",
      },
    ],
    image: customerSeg,
    source_code_link: "https://github.com/Naval1704/Customer-Segmentation",
  },  
  {
    name: "Emit",
    description:
      "Created a voice-controlled assistant for voice-activated commands,  includes advanced voice search, voice-based YouTube search, sending WhatsApp voice messages, and more, offering over 20 unique commands.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Natural Language Processing",
        color: "green-text-gradient",
      },
      {
        name: "Speech recognition",
        color: "pink-text-gradient",
      },
    ],
    image: emit,
    source_code_link: "https://github.com/Naval1704/Emit-Voice-Controlled-Assistant",
  },
  {
    name: "Bi-Directional Charging",
    description:
      "Developed a bidirectional battery charging system using Dual active bridge Technology in MATLAB. Optimized. Conducted extensive simulations to evaluate system performance under varying conditions. system design and control Algorithms to ensure safe and efficient power transfer.",
    tags: [
      {
        name: "MATLAB",
        color: "blue-text-gradient",
      },
      {
        name: "Physical Electronics",
        color: "green-text-gradient",
      },
      {
        name: "Simulink",
        color: "pink-text-gradient",
      },
    ],
    image: bidirectional,
    source_code_link: "https://github.com/Naval1704/Bidirectional-Battery-Charger-For-Electric-Vehicle",
  },  
  {
    name: "PingPong Game",
    description:
      "Designed and Implemented the Ping-Pong Game on PYNQ Z2 board using concepts and Logical requirements of Digital Electronics Course. Using Vivado Xilinx software, coded the complete game and implemented Physically in Digital Electronics Lab.",
    tags: [
      {
        name: "Digital Electronics",
        color: "blue-text-gradient",
      },
      {
        name: "vivado xilinx",
        color: "green-text-gradient",
      },
      {
        name: "Verilog",
        color: "pink-text-gradient",
      },
      {
        name: "PYNQ-Z2 Board",
        color: "orange-text-gradient",
      },
    ],
    image: bidirectional,
    source_code_link: "https://github.com/Naval1704/PingPong_DigitalElectronics",
  },  
];

export { services, technologies, experiences, testimonials, projects };
