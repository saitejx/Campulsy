export const mockProjects = [
  {
    id: 1,
    title: "Campus Events App",
    description: "A mobile application to discover and manage university events and club activities.",
    technologies: ["React Native", "Firebase", "TypeScript"],
    difficulty: "Intermediate",
    contributors: 4,
    github: "https://github.com/example/campus-events"
  },
  {
    id: 2,
    title: "Course Scheduler",
    description: "An algorithm-based tool that helps students generate optimal schedules without conflicts.",
    technologies: ["Python", "Flask", "React", "PostgreSQL"],
    difficulty: "Advanced",
    contributors: 2,
    github: "https://github.com/example/course-scheduler"
  },
  {
    id: 3,
    title: "Study Buddy Finder",
    description: "Match with students in your classes to form study groups based on availability and goals.",
    technologies: ["Next.js", "TailwindCSS", "MongoDB"],
    difficulty: "Beginner",
    contributors: 6,
    github: "https://github.com/example/study-buddy"
  },
  {
    id: 4,
    title: "Open Source Algorithm Notes",
    description: "A collaborative collection of data structures and algorithms notes for technical interviews.",
    technologies: ["Markdown", "Docusaurus"],
    difficulty: "Beginner",
    contributors: 15,
    github: "https://github.com/example/algo-notes"
  },
  {
    id: 5,
    title: "Student Market",
    description: "A peer-to-peer marketplace for buying and selling textbooks and dorm supplies.",
    technologies: ["Vue.js", "Node.js", "Express", "Stripe"],
    difficulty: "Intermediate",
    contributors: 3,
    github: "https://github.com/example/student-market"
  },
  {
    id: 6,
    title: "Hackathon Matchmaker",
    description: "Find teammates for upcoming hackathons based on skill gaps and shared interests.",
    technologies: ["React", "Go", "GraphQL"],
    difficulty: "Advanced",
    contributors: 5,
    github: "https://github.com/example/hackathon-match"
  }
];

export const mockCategories = [
  { title: "Projects", path: "/projects", icon: "Code", color: "blue", count: 124 },
  { title: "Hackathons", path: "/hackathons", icon: "Terminal", color: "purple", count: 18 },
  { title: "Events", path: "/events", icon: "Calendar", color: "green", count: 42 },
  { title: "Clubs", path: "/clubs", icon: "Users", color: "orange", count: 86 },
  { title: "Internships", path: "/internships", icon: "Briefcase", color: "blue", count: 215 },
  { title: "Resources", path: "/resources", icon: "BookOpen", color: "purple", count: 530 },
  { title: "Notes", path: "/notes", icon: "FileText", color: "green", count: 890 },
  { title: "Open Source", path: "/open-source", icon: "GitPullRequest", color: "orange", count: 67 }
];
