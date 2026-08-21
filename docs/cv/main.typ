#import "@preview/basic-resume:0.2.9": *

#let name = "Charless Netumbare"
#let location = "Masvingo, Zimbabwe"
#let email = "codexxxnull@gmail.com"
#let github = "github.com/codexxx16"
#let linkedin = ""
#let phone = ""
#let personal-site = "charless-dev.vercel.app"

#show: resume.with(
  author: name,
  location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  phone: phone,
  personal-site: personal-site,
  accent-color: "#1f2937",
  font: "New Computer Modern",
  paper: "a4",
  author-position: left,
  personal-info-position: left,
)

== Professional Summary

Full Stack Developer and AI Engineer from Masvingo, Zimbabwe, focused on building practical digital products that solve real-world problems. Experienced across web application development, artificial intelligence and LLM integration, cybersecurity, API integration, OAuth, server management, database optimization, and product delivery. Known for rapid learning, consistent execution, and turning complex ideas into usable systems for clients and communities.

== Core Competencies

- Full-stack web application development with Next.js, React, TypeScript, Python, Kotlin, Java, HTML, and CSS
- AI and LLM integration, visual chart recognition, Telegram automation, and conversational systems
- Cybersecurity, detection engineering, MITRE ATT&CK, Sigma rules, Sysmon, and security lab design
- OAuth authentication, API integration, PayPal webhooks, cron scheduling, server management, and database optimization
- Product development across fintech, e-commerce, education, media, streaming, community, and client-service platforms

== Work Experience

#work(
  title: "Lead Developer | AI-Driven Fintech Ecosystem",
  location: "Remote",
  company: "Independent Product Development",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
)
- Engineered a secure automated signal-delivery system for financial markets using large language models and visual analysis for candlestick pattern recognition.
- Implemented multi-platform OAuth authentication with strict logging and integrated PayPal webhooks for license generation.
- Developed a Telegram bot with automated signal delivery, license validation, and scheduled jobs for continuous market monitoring.

#work(
  title: "Full Stack Developer | Freelance",
  location: "Masvingo, Zimbabwe",
  company: "nemm Technologies",
  dates: dates-helper(start-date: "2023", end-date: "Present"),
)
- Delivered 15+ client and independent projects across fintech, e-commerce, education, media, community platforms, and product development.
- Developed Auto-Trader, ZimFlix, and Masvingo TechHub, with a focus on usable product experiences and clear technical delivery.
- Built a School Records Management System with licensing capabilities and recurring-revenue potential for educational institutions.
- Developed ZimConnect, a community platform, and ZimBlog, a client news-aggregation system with modern user interfaces.

== Selected Projects

#project(
  name: "Auto-Trader",
  role: "Full Stack Developer | Client Project",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
  url: "https://tradingrobotstore.vercel.app/",
)
- E-commerce and product platform for automated trading tools, with a streamlined purchase and presentation flow.
- Technologies: Next.js, e-commerce, client work.

#project(
  name: "Purple Team Detection Lab",
  role: "Detection Engineering and Cybersecurity",
  dates: dates-helper(start-date: "2026", end-date: "Present"),
  url: "https://charless-dev.vercel.app/projects/purple-team-detection-lab",
)
- Isolated malware-research lab validating detections for PowerShell execution and LSASS credential dumping.
- Used Atomic Red Team emulation, Security Onion, Sigma rules, and Sysmon; lab testing achieved a 0% false-positive rate.

#project(
  name: "Masvingo TechHub",
  role: "Full Stack Developer",
  dates: dates-helper(start-date: "2026", end-date: "Present"),
  url: "https://masvingo-techhub-zw.vercel.app",
)
- Community and resource hub connecting technology enthusiasts and developers in Masvingo with opportunities, events, and learning resources.
- Technologies: Next.js, community platforms, Zimbabwe-focused EdTech.

#project(
  name: "ZimBlog",
  role: "Full Stack Developer | Client Project",
  dates: dates-helper(start-date: "2026", end-date: "Present"),
  url: "https://zim-trendz-blog-zw.vercel.app",
)
- News aggregation and blogging platform with editorial presentation, category filtering, and fast content delivery.
- Technologies: Next.js, media, blogging, client work.

#project(
  name: "ZimFlix",
  role: "Full Stack Developer",
  dates: dates-helper(start-date: "2026", end-date: "Present"),
  url: "https://charless-dev.vercel.app/projects/zimflix",
)
- Streaming and content-discovery platform designed for the Zimbabwean market with locally relevant organization and a performance-focused interface. The public release is currently reserved for internal testing.
- Technologies: Next.js, React, streaming platforms.

#project(
  name: "ZimConnect Community Platform",
  role: "Full Stack Developer",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
  url: "https://charless-dev.vercel.app/projects/zimconnect",
)
- Community platform evolved from a simple chat room into a broader social product for connection, sharing, and engagement. The current deployment is reserved for internal testing.
- Technologies: Next.js, community platforms, social features.

#project(
  name: "School Records Management System",
  role: "Full Stack Developer",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
  url: "https://shongamiti-high-school.vercel.app",
)
- Desktop and web system for schools featuring license management, student records, and local payment integration.
- Designed to support recurring revenue from educational institutions.

#project(
  name: "Surefire AI",
  role: "AI Product Developer",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
  url: "https://s4-analyzer.vercel.app",
)
- Chart-analysis application for professional traders using Claude Vision and GPT-4 to support visual market analysis.
- Currently in pre-launch development ahead of a planned Play Store release.

#project(
  name: "Lara — nemm AI Assistant",
  role: "AI and Telegram Developer",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
  url: "https://t.me/Lara_nemm_bot",
)
- Fine-tuned multitasking Telegram assistant that handles a wide range of tasks with context awareness and natural conversation flow.

#project(
  name: "69ELPGas LPG Platform",
  role: "Full Stack Developer",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
  url: "https://69-elp-gas.vercel.app",
)
- LPG platform focused on product presentation, ordering, and service information for a local business context.

#project(
  name: "nemm Technologies Website",
  role: "Full Stack Developer | Brand Website",
  dates: dates-helper(start-date: "2024", end-date: "Present"),
  url: "https://charless-dev.vercel.app/projects/nemm-website",
)
- Official website for an emerging Zimbabwean technology company, built with a clean professional brand presentation.
- Technologies: Next.js, GSAP, Framer Motion, and Supabase.

== Education and Continuing Learning

#edu(
  institution: "O-Level Education",
  location: "Zimbabwe",
  dates: "Completed",
  degree: "Six O-Level passes",
)
- Subjects listed on the portfolio include Shona (A), English (B), Agriculture (B), and Sciences.
- Mathematics is being resat to align with long-term technical and engineering goals.

#edu(
  institution: "IBM Online Learning",
  location: "Online",
  dates: "Completed",
  degree: "AI, Cloud Computing, Data Science, and Enterprise Development",
)
- Completed IBM online learning programs with practical exposure beyond formal classroom education.
- Certificate documents can be added to this CV when available.

== Technical Skills

- *Languages*: TypeScript, JavaScript, Python, Kotlin, Java, HTML, CSS
- *Frameworks and Libraries*: Next.js, React, Framer Motion
- *AI and Data*: LLM integration, visual chart recognition, Claude Vision, GPT-4, conversational AI
- *Cybersecurity*: Detection engineering, MITRE ATT&CK, Sigma, Sysmon, Atomic Red Team, Security Onion
- *Platforms and Infrastructure*: Telegram Bots, OAuth, PayPal webhooks, cron scheduling, server management, Supabase, database optimization
- *Emerging Technologies*: Robotics, Unity, Godot, and game development

== Languages

- English — Professional proficiency
- Shona — Native proficiency
- Ndebele — Conversational proficiency

== Professional Interests

- Building accessible technology products for Zimbabwean communities and businesses.
- Applying AI and visual analysis to practical fintech, trading, education, and automation problems.
- Exploring cybersecurity detection engineering, robotics, and open-source game development.
- Maintaining the discipline of long-term learning through basketball, distance running, and consistent technical practice.

