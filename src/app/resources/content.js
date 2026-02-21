import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Charless",
  lastName: "Netumbare",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Developer & Tech Explorer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Harare", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Shona", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about development, technology, and share thoughts on the intersection of
      fintech, robotics, and digital innovation.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/codexxx16/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/charless-dev/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/CharlessDev",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:codexxx@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} | Full-Stack Developer & Tech Explorer`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Charless Netumbare | Full-Stack Developer & Tech Explorer</>,
  subline: (
    <>
      Building secure fintech solutions, exploring robotics, and bridging the gap between physical
      <br /> discipline and digital innovation. Based in Harare, Africa.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a 21-year-old full-stack developer and basketball player (1.9m) from Harare, Africa. I believe in
        consistency, rapid learning, and pushing boundaries—whether it's optimizing a full-stack system or running a 10km.
        My philosophy centers on discipline and continuous growth in both technology and athletics.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience & Projects",
    experiences: [
      {
        company: "AI-Driven Fintech Ecosystem",
        timeframe: "2024 - Present",
        role: "Lead Developer",
        achievements: [
          <>
            Engineered a secure automated signal delivery system for financial markets using LLM + Visual Analysis
            for candlestick pattern recognition.
          </>,
          <>
            Implemented multi-platform OAuth authentication with strict logging and PayPal webhook integration for
            license generation and recovery bonuses.
          </>,
          <>
            Developed Telegram Bot with automated signal delivery, license validation, and cron job scheduling for
            24/7 market monitoring.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance Development",
        timeframe: "2023 - Present",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Delivered 15+ client projects including Auto-Trader, X-Trader Coral, ZimFlix, and Masvingo TechHub,
            specializing in fintech, e-commerce, and community platforms.
          </>,
          <>
            Developed School Records Management System (.exe) with licensing capabilities, generating recurring revenue
            from educational institutions.
          </>,
          <>
            Built ZimConnect (evolved from ChatRoom), a community platform, and ZimBlog, a client news aggregation
            system with modern UI/UX.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Academic Foundation",
    institutions: [
      {
        name: "O-Level Education",
        description: (
          <>
            6 O-Level passes including Shona (A), English (B), Agriculture (B), and Sciences. Currently resitting
            Mathematics to align with technical expertise. I hold a strong commitment to continuous learning and
            practical skill development.
          </>
        ),
      },
      {
        name: "IBM Online Courses",
        description: (
          <>
            Completed IBM online learning programs focusing on cloud computing, data science, and enterprise
            development. Gained practical experience beyond formal certification.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Full-Stack Development",
        description: (
          <>
            Expert in Next.js, React, TypeScript, Framer Motion, Kotlin, Python, HTML, CSS, and Java. Building
            responsive, performant applications with modern frameworks.
          </>
        ),
        images: [],
      },
      {
        title: "Specializations",
        description: (
          <>
            Cybersecurity, API Integration, Server Management, OAuth authentication, and database optimization. Strong
            focus on secure fintech solutions.
          </>
        ),
        images: [],
      },
      {
        title: "Emerging Technologies",
        description: (
          <>
            Robotics, AI/LLM integration, Visual Chart Recognition, Game Development (C#, Unity, Godot). Actively
            exploring cutting-edge technologies.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about development and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [],
};

const uses = {
  label: "Uses",
  title: "Tools & Tech I Use",
  description: `The devices, software, and tools I use daily`,
  devices: [
    {
      name: "iPhone 12 Pro Max",
      specs: "256GB, White",
      icon: "📱",
    },
    {
      name: "MacBook Air M1",
      specs: "13-inch",
      icon: "💻",
    },
    {
      name: "AirPods 3",
      specs: "Wireless",
      icon: "🎧",
    },
    {
      name: "Starlink Mini Kit",
      specs: "Portable internet",
      icon: "🛰️",
    },
    {
      name: "Liquid Zw Backup",
      specs: "Local storage",
      icon: "💾",
    },
  ],
  software: [
    {
      category: "Development",
      tools: ["VSCode", "XCode", "OrbStack", "CloudFlare", "Ghosty"],
    },
    {
      category: "Design & Productivity",
      tools: ["Figma", "1Password", "Arc Browser", "CleanShot", "Discord"],
    },
    {
      category: "Entertainment",
      tools: ["Spotify", "Netflix", "ChatGPT", "Inna", "Ice"],
    },
  ],
};

const questbook = {
  label: "Questbook",
  title: "Leave a Quote",
  description: "Share your thoughts and leave a quote for me",
  email: "codexxxnull@gmail.com",
  tagline: "Independent one-man freelance team. Affordable. T&Cs apply.",
};

export { person, social, newsletter, home, about, blog, work, gallery, uses, questbook };
