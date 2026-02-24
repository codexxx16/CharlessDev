import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Charless",
  lastName: "Netumbare",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Developer & Tech Explorer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Harare",
  languages: ["Shona", "English", "Ndebele"],
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
    display: true,
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
    display: true,
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
    display: true,
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
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
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
      image: "/images/uses/iphone-12-pro.png",
    },
    {
      name: "MacBook Air M1",
      specs: "13-inch",
      image: "/images/uses/macbook-air.png",
    },
    {
      name: "AirPods 3",
      specs: "Wireless",
      image: "/images/uses/airpods-3.png",
    },
    {
      name: "Starlink Mini Kit",
      specs: "Portable internet",
      image: "/images/uses/starlink.png",
    },
    {
      name: "Liquid Home Backup",
      specs: "Backup internet plan",
      image: "/images/uses/liquid-home.png",
    },
  ],
  software: [
    {
      name: "VSCode",
      description: "My primary code editor with a custom setup for maximum productivity.",
      icon: "vscode-inline-svg"
    },
    {
      name: "XCode",
      description: "Essential for building and developing native iOS and macOS applications.",
      icon: "/images/uses/xcode.png"
    },
    {
      name: "OrbStack",
      description: "A fast, light, and simple way to run Docker containers and Linux on macOS.",
      icon: "/images/uses/orbstack.png"
    },
    {
      name: "Ghostty",
      description: "A lightning-fast, hardware-accelerated terminal emulator.",
      icon: "/images/uses/ghostty.png"
    },
    {
      name: "Cloudflare",
      description: "Ensuring security and performance for all my web projects and domains.",
      icon: "https://cdn.simpleicons.org/cloudflare/F38020"
    },
    {
      name: "1Password",
      description: "The most secure way to manage passwords and sensitive digital information.",
      icon: "/images/uses/1password.png"
    },
    {
      name: "Figma",
      description: "My go-to tool for UI/UX design and rapid prototyping.",
      icon: "https://cdn.simpleicons.org/figma/F24E1E"
    },
    {
      name: "Discord",
      description: "Staying connected with developer communities and project teams.",
      icon: "https://cdn.simpleicons.org/discord/5865F2"
    },
    {
      name: "Spotify",
      description: "Providing the perfect soundtrack for deep work and coding sessions.",
      icon: "https://cdn.simpleicons.org/spotify/1DB954"
    },
    {
      name: "Netflix",
      description: "For unwinding and catching up on the latest shows and movies.",
      icon: "https://cdn.simpleicons.org/netflix/E50914"
    },
    {
      name: "Arc Browser",
      description: "A modern, sidebar-first browsing experience that helps me stay organized.",
      icon: "/images/uses/arc.png"
    },
    {
      name: "CleanShot X",
      description: "The ultimate tool for capturing and annotating screenshots and screen recordings.",
      icon: "/images/uses/cleanshot.png"
    }
  ],
  activities: [
    { label: "Hours Coding", value: 6264, icon: "https://cdn.simpleicons.org/codefactor/ffffff" },
    { label: "Hours Gaming/Month", value: 34, icon: "https://cdn.simpleicons.org/gamecontroller/ffffff" },
    { label: "Hours Spotify", value: 1257, icon: "https://cdn.simpleicons.org/spotify/1DB954" },
    { label: "Hours Netflix", value: 300, icon: "https://cdn.simpleicons.org/netflix/E50914" },
    { label: "YouTube Subs", value: 0, icon: "https://cdn.simpleicons.org/youtube/FF0000" },
    { label: "YouTube Views", value: 0, icon: "https://cdn.simpleicons.org/youtube/FF0000" },
    { label: "GitHub Followers", value: 2, icon: "https://cdn.simpleicons.org/github/ffffff" },
    { label: "GitHub Projects", value: 99, icon: "https://cdn.simpleicons.org/github/ffffff", suffix: "+" },
    { label: "Blog Views", value: 3456, icon: "https://cdn.simpleicons.org/docsdotrs/ffffff" },
    { label: "Blog Likes", value: 1627, icon: "https://cdn.simpleicons.org/heart/ffffff" },
  ],
};

const questbook = {
  label: "Questbook",
  title: "Leave a Quote",
  description: "Share your thoughts and leave a quote for me",
  email: "codexxxnull@gmail.com",
  tagline: "Independent one-man freelance team. Affordable. T&Cs apply.",
};

// Special marker for VSCode inline SVG - handled in UsesClient.tsx
export { person, social, newsletter, home, about, blog, work, gallery, uses, questbook };
