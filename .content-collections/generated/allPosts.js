
export default [
  {
    "title": "From Masvingo to the Internet — My Developer Journey",
    "date": "2024-09-10",
    "modifiedTime": "2024-09-10",
    "summary": "Personal story covering the childhood dream, basketball discipline, and the IBM certification journey.",
    "test": false,
    "content": "My journey into the world of technology didn't start in a high-tech hub; it started in Masvingo, Zimbabwe. It's a journey fueled by curiosity and a relentless drive to build something meaningful.\n\n### The Court and the Terminal\nStanding at 1.9m, basketball has always been a huge part of my life. What I didn't realize early on was how much the discipline on the court would translate to the terminal. The consistency required to hit a thousand jump shots is the same consistency needed to debug a complex full-stack system.\n\n### Building with Limited Resources\nDeveloping from Zimbabwe means learning to be resourceful. Whether it's dealing with power outages or limited data, every line of code I write is a testament to endurance. I've spent countless sleepless nights powered by the dream of solving real-world problems through code.\n\n### The IBM Journey\nOne of the turning points in my career was completing the IBM online learning programs. It wasn't just about the certification; it was about gaining a global perspective on AI, cloud computing, and enterprise development. It gave me the confidence to take on complex projects like the AI-Driven Fintech Ecosystem.\n\n### Looking Ahead\nThe journey is just beginning. From robotics to deep LLM integrations, I'm excited to see where the next chapter takes me. My philosophy remains the same: physical discipline mirrors digital discipline.",
    "_meta": {
      "filePath": "en/from-masvingo-to-the-internet.mdx",
      "fileName": "from-masvingo-to-the-internet.mdx",
      "directory": "en",
      "extension": "mdx",
      "path": "en/from-masvingo-to-the-internet"
    },
    "code": "var Component=(()=>{var m=Object.create;var r=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var b=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),w=(t,e)=>{for(var i in e)r(t,i,{get:e[i],enumerable:!0})},a=(t,e,i,s)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let o of p(e))!y.call(t,o)&&o!==i&&r(t,o,{get:()=>e[o],enumerable:!(s=u(e,o))||s.enumerable});return t};var f=(t,e,i)=>(i=t!=null?m(g(t)):{},a(e||!t||!t.__esModule?r(i,\"default\",{value:t,enumerable:!0}):i,t)),j=t=>a(r({},\"__esModule\",{value:!0}),t);var l=b((v,h)=>{h.exports=_jsx_runtime});var x={};w(x,{default:()=>c});var n=f(l());function d(t){let e={h3:\"h3\",p:\"p\",...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:\"My journey into the world of technology didn't start in a high-tech hub; it started in Masvingo, Zimbabwe. It's a journey fueled by curiosity and a relentless drive to build something meaningful.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"the-court-and-the-terminal\",children:\"The Court and the Terminal\"}),`\n`,(0,n.jsx)(e.p,{children:\"Standing at 1.9m, basketball has always been a huge part of my life. What I didn't realize early on was how much the discipline on the court would translate to the terminal. The consistency required to hit a thousand jump shots is the same consistency needed to debug a complex full-stack system.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"building-with-limited-resources\",children:\"Building with Limited Resources\"}),`\n`,(0,n.jsx)(e.p,{children:\"Developing from Zimbabwe means learning to be resourceful. Whether it's dealing with power outages or limited data, every line of code I write is a testament to endurance. I've spent countless sleepless nights powered by the dream of solving real-world problems through code.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"the-ibm-journey\",children:\"The IBM Journey\"}),`\n`,(0,n.jsx)(e.p,{children:\"One of the turning points in my career was completing the IBM online learning programs. It wasn't just about the certification; it was about gaining a global perspective on AI, cloud computing, and enterprise development. It gave me the confidence to take on complex projects like the AI-Driven Fintech Ecosystem.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"looking-ahead\",children:\"Looking Ahead\"}),`\n`,(0,n.jsx)(e.p,{children:\"The journey is just beginning. From robotics to deep LLM integrations, I'm excited to see where the next chapter takes me. My philosophy remains the same: physical discipline mirrors digital discipline.\"})]})}function c(t={}){let{wrapper:e}=t.components||{};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}return j(x);})();\n;return Component;",
    "locale": "en",
    "slug": "from-masvingo-to-the-internet",
    "toc": [
      {
        "title": "The Court and the Terminal",
        "url": "the-court-and-the-terminal",
        "depth": 3
      },
      {
        "title": "Building with Limited Resources",
        "url": "building-with-limited-resources",
        "depth": 3
      },
      {
        "title": "The IBM Journey",
        "url": "the-ibm-journey",
        "depth": 3
      },
      {
        "title": "Looking Ahead",
        "url": "looking-ahead",
        "depth": 3
      }
    ]
  },
  {
    "title": "How I Built an AI-Powered Signal Delivery System for Financial Markets",
    "date": "2024-03-15",
    "modifiedTime": "2024-03-15",
    "summary": "Full story of building the fintech ecosystem — the problem statement, the decision to use LLM visual analysis, and key lessons learned.",
    "test": false,
    "content": "Building a production-grade fintech solution in Zimbabwe comes with its own set of unique challenges, from payment gateway integrations to maintaining 24/7 uptime with fluctuating connectivity. When I set out to build the AI-Driven Fintech Ecosystem, the goal was clear: automate the delivery of high-accuracy trading signals.\n\n### The Problem Statement\nTraders often struggle with the emotional and time-consuming aspects of chart analysis. I wanted to create a system that could 'see' the charts just like a human expert would, but without the fatigue.\n\n### The Solution: LLM Visual Analysis\nInstead of relying solely on traditional technical indicators, I integrated Large Language Models (LLMs) with visual analysis capabilities. By feeding candlestick patterns directly into the model, the system can recognize complex formations with an 80% success rate.\n\n### Architecture\nThe system is built on a robust Python backend that monitors market data in real-time. When a pattern is detected, it triggers a Telegram bot to deliver the signal to subscribers.\n\n### Key Lessons\n1. **Consistency is Key**: Market monitoring never stops, so neither can the system.\n2. **Security First**: Handling financial data requires strict OAuth implementations and logging.\n3. **Adaptability**: Integrating PayPal webhooks for license generation taught me the importance of handling asynchronous events reliably.",
    "_meta": {
      "filePath": "en/how-i-built-ai-powered-signal-delivery-system.mdx",
      "fileName": "how-i-built-ai-powered-signal-delivery-system.mdx",
      "directory": "en",
      "extension": "mdx",
      "path": "en/how-i-built-ai-powered-signal-delivery-system"
    },
    "code": "var Component=(()=>{var u=Object.create;var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty;var f=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),b=(t,e)=>{for(var i in e)s(t,i,{get:e[i],enumerable:!0})},r=(t,e,i,o)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let a of m(e))!p.call(t,a)&&a!==i&&s(t,a,{get:()=>e[a],enumerable:!(o=g(e,a))||o.enumerable});return t};var w=(t,e,i)=>(i=t!=null?u(y(t)):{},r(e||!t||!t.__esModule?s(i,\"default\",{value:t,enumerable:!0}):i,t)),x=t=>r(s({},\"__esModule\",{value:!0}),t);var c=f((k,l)=>{l.exports=_jsx_runtime});var v={};b(v,{default:()=>d});var n=w(c());function h(t){let e={h3:\"h3\",li:\"li\",ol:\"ol\",p:\"p\",strong:\"strong\",...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:\"Building a production-grade fintech solution in Zimbabwe comes with its own set of unique challenges, from payment gateway integrations to maintaining 24/7 uptime with fluctuating connectivity. When I set out to build the AI-Driven Fintech Ecosystem, the goal was clear: automate the delivery of high-accuracy trading signals.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"the-problem-statement\",children:\"The Problem Statement\"}),`\n`,(0,n.jsx)(e.p,{children:\"Traders often struggle with the emotional and time-consuming aspects of chart analysis. I wanted to create a system that could 'see' the charts just like a human expert would, but without the fatigue.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"the-solution-llm-visual-analysis\",children:\"The Solution: LLM Visual Analysis\"}),`\n`,(0,n.jsx)(e.p,{children:\"Instead of relying solely on traditional technical indicators, I integrated Large Language Models (LLMs) with visual analysis capabilities. By feeding candlestick patterns directly into the model, the system can recognize complex formations with an 80% success rate.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"architecture\",children:\"Architecture\"}),`\n`,(0,n.jsx)(e.p,{children:\"The system is built on a robust Python backend that monitors market data in real-time. When a pattern is detected, it triggers a Telegram bot to deliver the signal to subscribers.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"key-lessons\",children:\"Key Lessons\"}),`\n`,(0,n.jsxs)(e.ol,{children:[`\n`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:\"Consistency is Key\"}),\": Market monitoring never stops, so neither can the system.\"]}),`\n`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:\"Security First\"}),\": Handling financial data requires strict OAuth implementations and logging.\"]}),`\n`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:\"Adaptability\"}),\": Integrating PayPal webhooks for license generation taught me the importance of handling asynchronous events reliably.\"]}),`\n`]})]})}function d(t={}){let{wrapper:e}=t.components||{};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}return x(v);})();\n;return Component;",
    "locale": "en",
    "slug": "how-i-built-ai-powered-signal-delivery-system",
    "toc": [
      {
        "title": "The Problem Statement",
        "url": "the-problem-statement",
        "depth": 3
      },
      {
        "title": "The Solution: LLM Visual Analysis",
        "url": "the-solution-llm-visual-analysis",
        "depth": 3
      },
      {
        "title": "Architecture",
        "url": "architecture",
        "depth": 3
      },
      {
        "title": "Key Lessons",
        "url": "key-lessons",
        "depth": 3
      }
    ]
  },
  {
    "title": "Why I Choose Supabase for Every Project I Build",
    "date": "2024-06-20",
    "modifiedTime": "2024-06-20",
    "summary": "Honest comparison of Supabase vs Firebase, real developer experience, and how it performs in Zimbabwe.",
    "test": false,
    "content": "As a developer based in Masvingo, Zimbabwe, I need tools that are not only powerful but also resilient to the local development environment. After trying various backends, Supabase has become my go-to choice for every project.\n\n### Supabase vs Firebase\nWhile Firebase is a pioneer, Supabase offers the power of a full PostgreSQL database. This means I have access to complex queries, relational data, and a vast ecosystem of SQL tools that Firebase's NoSQL structure simply can't match.\n\n### Developer Experience\nThe 'Auto-generated API' feature is a lifesaver. It allows me to move from database schema to a working frontend in record time. For a freelancer delivering 15+ projects, this speed is essential.\n\n### Performance in Zimbabwe\nOne of the biggest advantages is how well it handles limited internet conditions. The client libraries are efficient, and the ability to use SQL directly in the dashboard makes management easy even when bandwidth is low.\n\n### Real-World Example\nIn my School Records Management System, Supabase handles everything from student data to license validation seamlessly. It's reliable, scalable, and most importantly, developer-friendly.",
    "_meta": {
      "filePath": "en/why-i-choose-supabase-for-every-project.mdx",
      "fileName": "why-i-choose-supabase-for-every-project.mdx",
      "directory": "en",
      "extension": "mdx",
      "path": "en/why-i-choose-supabase-for-every-project"
    },
    "code": "var Component=(()=>{var m=Object.create;var r=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var v=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports),y=(a,e)=>{for(var t in e)r(a,t,{get:e[t],enumerable:!0})},o=(a,e,t,i)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let s of b(e))!u.call(a,s)&&s!==t&&r(a,s,{get:()=>e[s],enumerable:!(i=p(e,s))||i.enumerable});return a};var g=(a,e,t)=>(t=a!=null?m(f(a)):{},o(e||!a||!a.__esModule?r(t,\"default\",{value:a,enumerable:!0}):t,a)),w=a=>o(r({},\"__esModule\",{value:!0}),a);var d=v((j,l)=>{l.exports=_jsx_runtime});var x={};y(x,{default:()=>h});var n=g(d());function c(a){let e={h3:\"h3\",p:\"p\",...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:\"As a developer based in Masvingo, Zimbabwe, I need tools that are not only powerful but also resilient to the local development environment. After trying various backends, Supabase has become my go-to choice for every project.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"supabase-vs-firebase\",children:\"Supabase vs Firebase\"}),`\n`,(0,n.jsx)(e.p,{children:\"While Firebase is a pioneer, Supabase offers the power of a full PostgreSQL database. This means I have access to complex queries, relational data, and a vast ecosystem of SQL tools that Firebase's NoSQL structure simply can't match.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"developer-experience\",children:\"Developer Experience\"}),`\n`,(0,n.jsx)(e.p,{children:\"The 'Auto-generated API' feature is a lifesaver. It allows me to move from database schema to a working frontend in record time. For a freelancer delivering 15+ projects, this speed is essential.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"performance-in-zimbabwe\",children:\"Performance in Zimbabwe\"}),`\n`,(0,n.jsx)(e.p,{children:\"One of the biggest advantages is how well it handles limited internet conditions. The client libraries are efficient, and the ability to use SQL directly in the dashboard makes management easy even when bandwidth is low.\"}),`\n`,(0,n.jsx)(e.h3,{id:\"real-world-example\",children:\"Real-World Example\"}),`\n`,(0,n.jsx)(e.p,{children:\"In my School Records Management System, Supabase handles everything from student data to license validation seamlessly. It's reliable, scalable, and most importantly, developer-friendly.\"})]})}function h(a={}){let{wrapper:e}=a.components||{};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(c,{...a})}):c(a)}return w(x);})();\n;return Component;",
    "locale": "en",
    "slug": "why-i-choose-supabase-for-every-project",
    "toc": [
      {
        "title": "Supabase vs Firebase",
        "url": "supabase-vs-firebase",
        "depth": 3
      },
      {
        "title": "Developer Experience",
        "url": "developer-experience",
        "depth": 3
      },
      {
        "title": "Performance in Zimbabwe",
        "url": "performance-in-zimbabwe",
        "depth": 3
      },
      {
        "title": "Real-World Example",
        "url": "real-world-example",
        "depth": 3
      }
    ]
  }
]