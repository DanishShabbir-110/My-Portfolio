export interface ProjectLink {
  name: string;
  url: string;
  type?: 'app' | 'backend' | 'github' | 'live';
}

export interface Project {
  title: string;
  subtitle?: string;
  category: 'Android Apps' | 'Full Stack & AI' | 'All';
  badge?: string;
  tagline?: string;
  flagship?: boolean;
  architecture?: string[];
  stack: string[];
  bullets: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  duration?: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  status?: string;
  description?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  type?: string;
  description?: string;
  skills?: string[];
}

export const resumeData = {
  basics: {
    name: "Danish Shabbir",
    title: "Android Application Developer & Full Stack Developer",
    summary: "Software Developer specializing in native Android engineering with Kotlin, Jetpack Compose, Clean Architecture, MVVM, and MVI, along with dependency injection using Hilt and Koin. Experienced in the 4 fundamental Android components (Activities, Services, Broadcast Receivers, Content Providers), background concurrency with Coroutines & StateFlow, and full-stack web engineering with React, Node.js, FastAPI, and PostgreSQL. Focused on architecting scalable, resilient, and user-centered software solutions.",
    location: "Rawalpindi, Pakistan",
    email: "danishshabbir110@gmail.com",
    phone: "+92-3020058872",
    rawPhone: "923020058872",
    photo: "/profile.jpeg",
    resume: "/resume.pdf",
    github: "https://github.com/DanishShabbir-110",
    linkedin: "https://www.linkedin.com/in/danishshabbir110",
    status: "Open to opportunities"
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "Full Stack Web Development",
      dates: "June 2026 – August 2026",
      duration: "(2 Months)",
      location: "Hybrid / Remote",
      summary: "Full-stack web development using React, Node.js, and PostgreSQL.",
      bullets: [
        "Built responsive, modern user interfaces using React, TypeScript, and Tailwind CSS.",
        "Developed and maintained backend RESTful APIs and server logic with Node.js.",
        "Managed relational database schemas and optimized data queries with PostgreSQL.",
        "Collaborated across frontend and backend modules to ship complete application features."
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "TypeScript", "JavaScript", "REST APIs"]
    }
  ] as ExperienceItem[],
  projects: [
    {
      title: "MEye-Pro With Timetable & Attendance",
      subtitle: "AI-Powered Academic Management & Automated Attendance System",
      category: "Full Stack & AI",
      flagship: true,
      badge: "Final Year Capstone Project",
      tagline: "Android • FastAPI • Face Recognition",
      architecture: [
        "Native Android Client (Kotlin & XML)",
        "FastAPI Python Microservice Backend",
        "Real-Time Face Recognition Engine",
        "Asynchronous Timetable Sync & SQL Database"
      ],
      stack: ["Android", "Kotlin", "XML", "FastAPI", "Python", "SQL Database", "Face Recognition", "REST APIs"],
      bullets: [
        "Engineered the native Android client using Kotlin and XML for an AI-powered security and attendance system utilizing real-time facial recognition.",
        "Collaborated with a four-developer team, integrating the mobile application with a centralized FastAPI Python backend and SQL database.",
        "Implemented secure authentication, asynchronous network operations, timetable scheduling, and live student attendance tracking.",
        "Delivered a dependable mobile client with smooth camera integrations and low-latency API response handling."
      ],
      links: []
    },
    {
      title: "AI-Powered ATS CV Builder App",
      subtitle: "Intelligent Resume Generator with Gemini AI & Firebase",
      category: "Android Apps",
      badge: "Google Gemini AI Integrated",
      tagline: "Jetpack Compose • MVVM • Cloud Firestore",
      architecture: [
        "Modern Jetpack Compose Declarative UI",
        "Google Gemini API Multi-Step Prompting",
        "Reactive MVVM with Kotlin StateFlow",
        "Firebase Auth & Firestore Real-Time Sync"
      ],
      stack: ["Android", "Kotlin", "Jetpack Compose", "Google Gemini AI", "Firebase Auth", "Firestore", "MVVM", "StateFlow"],
      bullets: [
        "Developed a native Android application using Kotlin and Jetpack Compose that leverages Google Gemini AI to generate professionally formatted, ATS-optimized resumes.",
        "Implemented Firebase Authentication and Cloud Firestore for secure user credentials and real-time document synchronization.",
        "Structured the codebase using MVVM design pattern with Kotlin StateFlow for reactive, predictable state transitions across multi-step creation flows.",
        "Built comprehensive features including real-time CV previews, education/work history management, and clean PDF export functionality."
      ],
      links: []
    },
    {
      title: "Smart Expense Tracker App",
      subtitle: "Personal Finance Analytics & Budget Tracking Application",
      category: "Android Apps",
      badge: "Offline-First Analytics",
      tagline: "Room DB • MPAndroidChart • Kotlin",
      architecture: [
        "High-Performance Local Room (SQLite) Storage",
        "Interactive MPAndroidChart Analytics",
        "Zero-Latency CRUD & Category Distribution",
        "Offline-First Architecture"
      ],
      stack: ["Android", "Kotlin", "XML", "Room Database (SQLite)", "MPAndroidChart", "Data Persistence"],
      bullets: [
        "Engineered a personal finance and expense tracking Android application with real-time financial metrics and category-wise spending breakdowns.",
        "Integrated MPAndroidChart to display interactive graphical analytics, budget tracking charts, and automated distribution calculations.",
        "Employed Room Database (SQLite) for high-performance offline data storage, seamless local persistence, and zero-latency CRUD operations."
      ],
      links: []
    },
    {
      title: "Mini Task Tracker Application",
      subtitle: "Offline-First Task Management with .NET API Sync",
      category: "Android Apps",
      badge: "Client-Server Sync",
      tagline: "Room DB • ASP.NET Web API • REST",
      architecture: [
        "Offline Task Caching with Room SQLite",
        "ASP.NET Web API Server Communication",
        "Conflict-Free State Sync on Reconnection",
        "Native Android XML & Material Components"
      ],
      stack: ["Android", "Kotlin", "XML", "ASP.NET Web API", "Room Database (SQLite)", "REST APIs"],
      bullets: [
        "Built an offline-first Android task tracking application in Kotlin and XML integrated with an ASP.NET Web API backend.",
        "Utilized Room Database for local task caching, ensuring instant UI updates and seamless data synchronization when connectivity is restored."
      ],
      links: []
    },
    {
      title: "Event Management System",
      subtitle: "Desktop Event Booking & Management System",
      category: "Full Stack & AI",
      badge: "Desktop Architecture & RBAC",
      tagline: "Windows Forms • SQL Server • C#",
      architecture: [
        "Multi-Tier Windows Forms Architecture",
        "Role-Based Access Control (RBAC)",
        "Relational Schema Design & Stored Procedures",
        "Automated Transaction Validation"
      ],
      stack: ["Windows Forms", ".NET Framework", "SQL Server", "C#", "RBAC"],
      bullets: [
        "Developed a desktop event booking and scheduling system using Windows Forms (.NET Framework) and Microsoft SQL Server.",
        "Implemented role-based access control (RBAC) separating administrator management dashboards from standard user reservation modules.",
        "Designed comprehensive database schemas, automated form validation, and transactional data operations."
      ],
      links: []
    }
  ] as Project[],
  skills: [
    {
      category: "Android Development",
      description: "Clean Architecture, MVI/MVVM paradigms, dependency injection, and native system components",
      items: ["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM & MVI", "Hilt (Dagger)", "Koin DI", "Android Core Components", "Room Database (SQLite)", "Coroutines & StateFlow", "Android XML"]
    },
    {
      category: "Frontend Development",
      description: "Modern web interfaces, component architecture, and responsive styling",
      items: ["React", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5 & CSS3", "Responsive Web Design"]
    },
    {
      category: "Backend Development",
      description: "Server-side logic, RESTful API architecture, and access control",
      items: ["Node.js", "FastAPI (Python)", "ASP.NET Web API", "RESTful API Design", "Authentication & Authorization (RBAC)"]
    },
    {
      category: "Databases & Storage",
      description: "Relational database modeling, query optimization, and offline caching",
      items: ["PostgreSQL", "Microsoft SQL Server", "SQLite (Room)", "Firebase Firestore", "Stored Procedures & Queries"]
    },
    {
      category: "AI & Integrations",
      description: "AI model integrations, computer vision, and third-party APIs",
      items: ["Google Gemini AI API", "Computer Vision / OpenCV", "Facial Recognition", "Firebase Authentication", "Google Maps API"]
    },
    {
      category: "Tools & Workflow",
      description: "Version control, development environments, and API testing",
      items: ["Android Studio", "Git & GitHub", "Postman", "Visual Studio", "VS Code"]
    }
  ] as SkillGroup[],
  education: [
    {
      institution: "Barani Institute of Information Technology",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      dates: "2022 – 2026",
      status: "Final Year / In Progress",
      location: "Rawalpindi, Pakistan",
      description: "Comprehensive coursework in data structures, algorithms, software engineering, mobile application development, database management systems, and web technologies.",
      highlights: ["Mobile App Development (Android / Kotlin)", "Data Structures & Algorithms", "Database Systems (PostgreSQL / SQL)", "Full Stack Web Engineering"]
    },
    {
      institution: "Govt. Post Graduate College Satellite Town",
      degree: "Intermediate in Computer Science (ICS)",
      dates: "2020 – 2022",
      status: "Completed",
      location: "Rawalpindi, Pakistan",
      description: "Strong academic foundation in mathematics, analytical problem solving, programming principles, and statistics.",
      highlights: ["Programming Fundamentals", "Computer Architecture", "Applied Mathematics", "Statistics"]
    }
  ] as EducationItem[],
  certifications: [
    {
      title: "DevOps Workshop",
      issuer: "Hands-on Technical Workshop",
      year: "2024",
      type: "Technical Workshop",
      description: "Hands-on training in containerization workflows, continuous integration & delivery, and automated deployment pipelines.",
      skills: ["Docker", "CI/CD Pipelines", "Git Workflow", "Automation"]
    },
    {
      title: "Nascon Speed Programming Competition",
      issuer: "FAST-NUCES NASCON",
      year: "2023",
      type: "Coding Competition",
      description: "Competitive collegiate programming competition testing speed, algorithmic problem solving, and data structures.",
      skills: ["Data Structures", "Algorithms", "Competitive Programming", "Problem Solving"]
    }
  ] as CertificationItem[]
};
