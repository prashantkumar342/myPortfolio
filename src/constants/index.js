// Personal Information
export const PERSONAL_INFO = {
  name: "Prashant Kumar Tuhania",
  title: "Node.js Developer | MERN Stack Engineer",
  location: "Sadulpur, Churu, Rajasthan, India",
  email: "prashantkumartuhania342@hotmail.com",
  phone: "+91 78779 00904",
  linkedin: "https://linkedin.com/in/prashanttuhania",
  github: "https://github.com/prashantkumar342",
  tagline:
    "Passionate about building scalable backends, real-time applications, and modern web solutions.",
  intro:
    "I'm a Node.js Developer with 2 years of hands-on experience in designing and implementing scalable server-side applications and APIs. I specialize in building performant backends using Node.js, Express.js, and MongoDB, and integrating real-time features with Socket.IO and GraphQL. My goal is to craft efficient, secure, and reliable web solutions that scale.",
};

// Skills Data
export const SKILLS = [
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-600/10 to-purple-600/10",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "Firebase (FCM)",
    ],
  },
  {
    id: "database",
    title: "Database & Authentication",
    icon: "Database",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-600/10 to-emerald-600/10",
    skills: ["MongoDB", "MongoDB Atlas", "Mongoose", "JWT", "OAuth", "bcrypt"],
  },
  {
    id: "realtime",
    title: "Real-time Communication",
    icon: "Wifi",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-600/10 to-pink-600/10",
    skills: ["Socket.IO", "WebSockets", "GraphQL Subscriptions"],
  },
  {
    id: "frontend",
    title: "Frontend (for integration)",
    icon: "Monitor",
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-600/10 to-blue-600/10",
    skills: [
      "React.js",
      "React Native",
      "Next.js",
      "Redux",
      "Zustand",
      "UI Libraries",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: "Settings",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-600/10 to-red-600/10",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Linux",
      "AWS (EC2, S3, awsCLI)",
    ],
  },
];

// Projects Data
export const PROJECTS = [
  {
    id: "viawave",
    title: "ViaWave",
    subtitle: "Professional Networking Platform",
    icon: "Users",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-600/20 to-cyan-600/20",
    description:
      "A professional networking platform enabling real-time interactions with GraphQL subscriptions. Features include media uploads, user connections, and seamless real-time chat — delivering a modern and interactive social experience.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Apollo GraphQL",
      "Multer",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "administrative-world",
    title: "Administrative World",
    subtitle: "EdTech Platform",
    icon: "GraduationCap",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-600/20 to-emerald-600/20",
    description:
      "An EdTech web app backend supporting JWT-based authentication, Razorpay integration for secure payments, and real-time live classes powered by Mediasoup. Features multi-role access and interactive instructor–student sessions.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Mediasoup",
    ],
    liveUrl: "https://administrativeworld.live",
    githubUrl: "#",
  },
  {
    id: "quickies",
    title: "Quickies",
    subtitle: "Real-Time Dating App",
    icon: "Heart",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-600/20 to-rose-600/20",
    description:
      "A dating platform supporting instant chat, live location-based matching, and robust authentication. Designed for real-time engagement with optimized socket communication and scalability.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "GeoLocation"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Navigation Items
export const NAV_ITEMS = [
  { name: "Home", id: "home", path: "/" },
  { name: "Skills", id: "skills", path: "/#skills" },
  { name: "Projects", id: "projects", path: "/#projects" },
  { name: "Contact", id: "contact", path: "/contact" },
];

// Contact Information
export const CONTACT_INFO = [
  {
    icon: "Mail",
    title: "Email",
    value: "prashantkumartuhania342@hotmail.com",
    link: "mailto:prashantkumartuhania342@hotmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "Phone",
    title: "Phone",
    value: "+91 78779 00904",
    link: "tel:+917877900904",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Sadulpur, Churu, Rajasthan, India",
    link: "https://maps.google.com/?q=Sadulpur,Churu,Rajasthan,India",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "Github",
    title: "GitHub",
    value: "github.com/prashantkumar342",
    link: "https://github.com/prashantkumar342",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: "Linkedin",
    title: "LinkedIn",
    value: "linkedin.com/in/prashanttuhania",
    link: "https://linkedin.com/in/prashanttuhania",
    color: "from-blue-600 to-blue-800",
  },
];

// Optimized Animation Variants for Better Performance
export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.3,
      },
    },
  },
  item: {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
  card: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.15,
      },
    },
  },
  fadeInUp: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },
  fadeInLeft: {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },
  fadeInRight: {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },
  // Simplified variants for better performance
  simpleFade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  },
  simpleSlide: {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  },
};
