import { Project, Course, Experience, Testimonial } from "./types";

export const projectsData: Project[] = [
  {
    id: "fixfinanz",
    title: "FixFinanz",
    subtitle: "Automated German Financial Advisory & Credit Matching Platform",
    description: "A premium German financial advisory and automated loan calculation platform enabling seamless contract generation, digital credit matching, and secure communication portals for clients.",
    category: "Finance, SaaS, Full Stack, Live Projects",
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "GCP"],
    aiTech: ["Financial Underwriting Risk Model", "NLP Document Parser", "JSON Extraction API"],
    problem: "German credit matching and client onboarding was historically weighed down by complex regulatory PDF forms, manual spreadsheets, and unvalidated calculations, taking up to several weeks per client.",
    solution: "Designed and implemented an automated credit calculation engine with smart responsive wizard forms. Built secure client-advisor portals with automated contract generation templates and sandboxed transaction auditing.",
    architecture: {
      steps: [
        { name: "Advisory Wizard Form", description: "Collects precise financial, asset, and credit parameters.", role: "Secure Frontend Entry" },
        { name: "Calculation Engine", description: "Computes interest structures, repayment amortization, and matching risk indices.", role: "Deterministic Core" },
        { name: "Risk Assessment Layer", description: "Evaluates underwriter criteria and flags calculation discrepancies.", role: "Risk Guard" },
        { name: "Document Generation", description: "Auto-compiles fully compliant regulatory contracts and PDFs.", role: "Asset Compiler" }
      ],
      diagramLabel: "German Credit Matchmaking Workflow"
    },
    metrics: [
      { value: "75%", label: "Reduction in Processing Time" },
      { value: "5.0 ★", label: "Client User Rating" },
      { value: "100%", label: "GDPR Regulatory Compliance" }
    ],
    challenges: "Handling exact mathematical amortization splits across multi-bank policies while maintaining extreme transaction auditing logs under tight GDPR parameters.",
    results: "Deployed as the primary onboarding platform for FixFinanz.de, cutting average client approval times from 12 days to under 4 hours.",
    githubUrl: "https://github.com/hamad-softdev",
    liveUrl: "https://fixfinanz.de/",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    role: "Lead Full Stack & Cloud Architect",
    aiFeatures: [
      "Natural Language financial statement scanner and extraction logic",
      "Predictive underwriting risk matchmaking classifier",
      "AI-assisted field auto-fill via bank statement OCR parsing"
    ],
    businessImpact: "Empowered German financial advisors to handle 4x the volume of clients simultaneously, converting manual credit applications into instant, self-service automated approvals.",
    screenshots: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Architected the modular stateful wizards utilizing strict TypeScript interfaces.",
      "Engineered the high-performance PostgreSQL calculation formulas.",
      "Configured secure GCP Cloud Run hosting compliant with German digital asset laws.",
      "Implemented a secure client-advisor direct communication system."
    ],
    achievements: [
      "Successfully integrated 14 major European credit assessment policies.",
      "Achieved zero calculation drift over €5M+ of generated loan projections.",
      "Achieved perfect Lighthouse scoring for security and core accessibility benchmarks."
    ],
    timeline: "2023 - 2024",
    industry: "Finance / FinTech",
    company: "FixFinanz",
    country: "Germany"
  },
  {
    id: "overzaki",
    title: "OverZaki",
    subtitle: "Premium Multi-Vendor Commerce & Logistics Platform",
    description: "A luxury multi-vendor delivery, merchant directory, and shopping platform serving thousands of daily active users, optimizing checkout pathways, localized merchant caches, and hyper-accurate real-time delivery telemetry.",
    category: "E-Commerce, SaaS, Live Projects, Full Stack",
    techStack: ["Next.js", "React Native", "TypeScript", "Node.js", "Redis", "MongoDB", "GCP"],
    aiTech: ["Personalized Recommendation Engine", "Dynamic Route Optimization Model"],
    problem: "Merchant listing search and high-concurrency cart checkouts suffered from heavy geographic lookup latency and substantial drop-offs on high-traffic days.",
    solution: "Pioneered a localized geofenced caching index using Redis, rebuilt the mobile/web checkout flows using single-tap optimistic rendering state trees, and streamlined the database operations pipelines.",
    architecture: {
      steps: [
        { name: "Geofenced Search Node", description: "Instantly locates nearby active merchants and catalog items.", role: "API Gateway Filter" },
        { name: "Cart Aggregator", description: "Assembles multi-vendor items, calculates taxes, and checks promo rules.", role: "Checkout Service" },
        { name: "Live Tracking Agent", description: "Streams coordinates and updates delivery ETA in real-time.", role: "WebSockets Orchestrator" }
      ],
      diagramLabel: "High-Throughput Multi-Vendor Commerce Flow"
    },
    metrics: [
      { value: "40%", label: "Conversion Rate Increase" },
      { value: "99.98%", label: "Uptime on Traffic Peaks" },
      { value: "<200ms", label: "Merchant Search Latency" }
    ],
    challenges: "Handling concurrent order synchronization between offline delivery drivers, web storefronts, and internal merchant tablets.",
    results: "Shipped the core platform update, significantly decreasing cart abandonment rates and cementing OverZaki as a premium regional commerce brand.",
    githubUrl: "https://github.com/hamad-softdev",
    liveUrl: "https://www.overzaki.com/en",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    role: "Senior Frontend Lead & Mobile Architect",
    aiFeatures: [
      "AI-driven merchant product-ranking recommendations based on past user preference vectors",
      "Dynamic real-time routing adjustments responding to localized city traffic telemetry",
      "Auto-categorization of merchant inventory uploads from simple raw photos"
    ],
    businessImpact: "Boosted merchant digital order volumes by 65% and decreased customer checkout friction, direct impact on client retention and daily active metric growth.",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Directed the frontend web engineering team in building highly responsive UI components.",
      "Engineered real-time delivery tracking screens using optimized WebSockets.",
      "Designed client-side state engines to handle high-concurrency cart interactions smoothly.",
      "Optimized native mobile build sizes and assets loading speeds."
    ],
    achievements: [
      "Successfully scaled the platform to handle over 15,000+ daily orders.",
      "Reduced cold app bundle start-up time by 45%.",
      "Voted as one of the best multi-vendor digital experiences in the regional tech index."
    ],
    timeline: "2023",
    industry: "E-Commerce & Logistics",
    company: "OverZaki",
    country: "Egypt / Middle East"
  },
  {
    id: "bullseyes",
    title: "Bullseyes.ai",
    subtitle: "Autonomous B2B Outbound Agent & Intent Scraping Node",
    description: "An AI-powered sales outreach automation machine. Leverages multi-agent execution graphs to scrap real-time public company telemetry, compile hyper-targeted copy, and coordinate cold campaigns autonomously.",
    category: "AI, SaaS, Video Available, Live Projects",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker"],
    aiTech: ["LangGraph", "LangChain", "GPT-4o API", "Claude API", "Chroma Vector Database"],
    problem: "Standard generic outbound templates suffer from terrible response rates because they lack genuine, real-time social/corporate context and feel robotic to potential leads.",
    solution: "Built a stateful multi-agent scrapper system. It parses a lead's public profiles and news releases, summarizes their current corporate focus, and generates conversational, custom-crafted intro hooks.",
    architecture: {
      steps: [
        { name: "Scraper Node", description: "Asynchronously fetches latest social posts, blog text, and press releases.", role: "Information Scraper" },
        { name: "Context Evaluator", description: "Extracts current core challenges and achievements of target lead.", role: "LLM Evaluator" },
        { name: "Outreach Copywriter", description: "Generates custom outreach text matching the sender's real tone.", role: "Creative Agent" },
        { name: "Validation Guardrail", description: "Checks text for generic spam terms, length limits, and personalization.", role: "Compliance Supervisor" }
      ],
      diagramLabel: "Multi-Agent Autonomous Copy Synthesis"
    },
    metrics: [
      { value: "4.5x", label: "Average Email Reply Rate" },
      { value: "-60%", label: "Outreach Setup Man-hours" },
      { value: "100%", label: "Spam Guardrail Compliance" }
    ],
    challenges: "Bypassing anti-scraping systems on professional networks and handling rate-limiting limits across concurrent LLM API endpoints.",
    results: "Successfully built and integrated into production campaigns, raising email open-to-reply rates from 2% to over 9.5%.",
    githubUrl: "https://github.com/hamad-softdev",
    liveUrl: "https://bullseyes.ai/",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    role: "Principal AI Engineer & Architect",
    aiFeatures: [
      "LangGraph autonomous loops for iterative outreach copy self-correction",
      "Vector embeddings comparing target lead biographies to matching customer case studies",
      "Few-shot prompt templates trained on high-performance sales scripts"
    ],
    businessImpact: "Helped enterprise sales teams generate over $320,000 in pipeline value within the first three months of autonomous campaign launches.",
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Designed and implemented the core LangGraph multi-agent graph logic.",
      "Built high-throughput Python FastAPI async workers to run scrapers in parallel.",
      "Configured Chroma vector DB clusters for immediate similarity context lookup.",
      "Integrated secure SMTP and web email senders with automated warm-up queues."
    ],
    achievements: [
      "Pioneered a low-token-cost scraping summarizer, saving 70% in monthly API overhead.",
      "Designed custom spam-checking guardrails with zero false positives.",
      "Successfully processed over 50,000+ custom lead personalizations autonomously."
    ],
    timeline: "2024",
    industry: "SaaS / Sales Automation",
    company: "Bullseyes.ai",
    country: "United States"
  },
  {
    id: "flysmartdeals",
    title: "FlySmartDeals",
    subtitle: "Real-Time Travel Deal Aggregator & Alert Engine",
    description: "An ultra-fast cheap flights search and dynamic travel deal aggregator combining API pooling, low-latency Redis cache indices, and high-volume alert streaming services.",
    category: "Travel, SaaS, Full Stack, Live Projects",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Redis", "PostgreSQL", "AWS"],
    aiTech: ["Price Prediction Model", "Semantic Destination Advisor"],
    problem: "Parallel flights APIs have massive response latency, forcing users to wait 30+ seconds for page loadings, and often displaying expired pricing data.",
    solution: "Created an advanced pooling queue system with AMQP that runs flights searches in parallel background workers, caching results instantly in optimized Redis memory nodes.",
    architecture: {
      steps: [
        { name: "Deal Aggregator", description: "Queries international airline GDS systems and flight brokers.", role: "API Broker Node" },
        { name: "Caching Index", description: "Directly caches active route prices with strict TTL limits.", role: "Redis Buffer" },
        { name: "Alert Core", description: "Monitors custom routes and broadcasts instant price drop notifications.", role: "Pub/Sub Streamer" }
      ],
      diagramLabel: "Asynchronous Deal Aggregator Pipeline"
    },
    metrics: [
      { value: "900ms", label: "Average Search Response Time" },
      { value: "50,000+", label: "Active Price Watch Alerts" },
      { value: "32%", label: "User Return Rate" }
    ],
    challenges: "Consolidating divergent and inconsistent JSON payload formats from multiple airline systems into a single standardized internal structure.",
    results: "Successfully launched the platform, allowing travel enthusiasts to track, discover, and book flight deals with zero page reload waiting times.",
    githubUrl: "https://github.com/hamad-softdev",
    liveUrl: "https://flysmartdeals.com/",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    role: "Lead Architect & Senior Developer",
    aiFeatures: [
      "Predictive machine learning algorithms predicting flight ticket price trends (buy vs. wait)",
      "Natural language conversational travel destination discovery chatbot",
      "Dynamic pricing category sorting based on user's past budget habits"
    ],
    businessImpact: "Decreased flight booking drop-off rates by 55% due to 900ms fast loading speeds, boosting affiliate booking revenue streams significantly.",
    screenshots: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Designed the high-performance parallel API broker using Node.js clustering.",
      "Configured robust AWS ElastiCache clusters to buffer flight pricing peaks.",
      "Built fluid React search filters that render thousands of flights instantly without lag.",
      "Established secure cron workflows checking price parameters every 10 minutes."
    ],
    achievements: [
      "Managed to handle peak traffic bursts of over 20,000 concurrent web sessions.",
      "Brought flight list rendering latency down from 25 seconds to sub-second.",
      "Engineered automated mailer queues delivering 100k targeted alerts daily."
    ],
    timeline: "2022 - 2023",
    industry: "Travel Tech",
    company: "FlySmartDeals",
    country: "United Arab Emirates"
  },
  {
    id: "g3ms",
    title: "G3MS ERP & Project Monitoring Suite",
    subtitle: "Enterprise Industrial Asset & Operations Resource Planning",
    description: "Enterprise project monitoring and operational resource planning suite designed for heavy-industrial contractors, tracking materials, billing, and crew timesheets.",
    category: "SaaS, Full Stack",
    techStack: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Docker"],
    aiTech: ["Timesheet Anomaly Detector", "Predictive Overrun Forecast Engine"],
    problem: "Corporate managers struggled to align daily field material consumption, equipment rentals, and crew labor logs, leading to costly billing discrepancies and project delays.",
    solution: "Engineered a centralized real-time ERP with transactional atomic safety, custom data visualization tables, automatic billing reports, and structured validation workflows.",
    architecture: {
      steps: [
        { name: "Crew Field Log", description: "Allows managers to upload labor hours and machinery logs directly on site.", role: "Mobile Entry Node" },
        { name: "Validation Queue", description: "Performs verification against contract guidelines and previous logs.", role: "Review Service" },
        { name: "Accounting Node", description: "Aggregates items and computes final material usage and labor invoicing.", role: "Core Database Writer" }
      ],
      diagramLabel: "Industrial Operations Synchronization"
    },
    metrics: [
      { value: "14%", label: "Operational Overhead Saved" },
      { value: "0%", label: "Invoicing Discrepancies" },
      { value: "400+", label: "Active Project Locations" }
    ],
    challenges: "Handling concurrent relational updates to warehouse stock numbers across separate geographic regions with unstable internet access.",
    results: "Implemented as the primary enterprise planning software for industrial contractors, completely automating manual billing sheets.",
    githubUrl: "https://github.com/hamad-softdev",
    role: "Principal Systems Architect",
    aiFeatures: [
      "AI timesheet anomaly detector flagging suspicious overlapping shifts automatically",
      "Predictive analytics forecasting future project cost overruns based on current material utilization vectors",
      "Automated material bill OCR translation from physical supply receipts"
    ],
    businessImpact: "Eliminated billing reconciliation discrepancies completely, protecting company profit margins on multimillion-dollar construction pipelines.",
    screenshots: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Architected the modular backend system using NestJS microservices.",
      "Optimized complex PostgreSQL query joins to render dashboard analytics in real-time.",
      "Developed high-fidelity offline-first caching for supervisors in remote sites.",
      "Established continuous integration and unit testing with Jest."
    ],
    achievements: [
      "Designed and delivered the ERP 2 months ahead of schedule.",
      "Eliminated 95% of database query deadlocks under intense write operations.",
      "Successfully processed over €12M+ in corporate invoice transactions with zero errors."
    ],
    timeline: "2022",
    industry: "Enterprise / ERP / Infrastructure",
    company: "G3MS Technologies",
    country: "United Kingdom"
  },
  {
    id: "poshtextiles",
    title: "PoshTextiles",
    subtitle: "High-End Luxury Fabrics E-Commerce Catalog & Visualization",
    description: "A luxury B2B cataloging and ordering system tailored for professional interior designers, featuring high-fidelity custom visual searches, inventory feeds, and texture matching.",
    category: "E-Commerce, Frontend",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel"],
    aiTech: ["Texture Similarity Engine", "Color Matching Index"],
    problem: "Professional designers spent days looking for matching fabric styles, patterns, and colors across static catalogs without interactive search capabilities.",
    solution: "Engineered a lightning-fast GraphQL-powered fabric search catalog, featuring precise facet filters, high-resolution texture renders, and integrated sample order checkout lanes.",
    architecture: {
      steps: [
        { name: "Visual Catalog", description: "Renders thousands of high-resolution fabric texture mockups cleanly.", role: "Immersive UI Layout" },
        { name: "Facet search Engine", description: "Facilitates multi-property selection (weight, width, material, color, pattern).", role: "GraphQL Index" },
        { name: "Sample Dispatch Core", description: "Processes custom designer orders for fabric swatch samples.", role: "Order Gateway" }
      ],
      diagramLabel: "Luxury Fabric Search and Order Lifecycle"
    },
    metrics: [
      { value: "5x", label: "Search Speed Improvement" },
      { value: "48%", label: "Fabric Sample Requests Increase" },
      { value: "98%", label: "Designer Retention Score" }
    ],
    challenges: "Optimizing the rendering of 4K texture images across standard client browsers without causing performance stutter or layout shifts.",
    results: "Launched the digital fabric showcase, drastically speeding up interior design procurement loops and boosting sample orders.",
    githubUrl: "https://github.com/hamad-softdev",
    role: "Lead Frontend Engineer",
    aiFeatures: [
      "AI-driven texture similarity recommendation engine comparing fabric knit patterns",
      "Dynamic color-matching neural algorithms linking designers to complementary fabric swatches",
      "Automatic SKU metadata tagging of fabric assets from raw factory photos"
    ],
    businessImpact: "Accelerated fabric selection workflows for B2B interior design clients, direct driver of fabric roll order volumes.",
    screenshots: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Engineered the responsive design system using Tailwind CSS and customized design variables.",
      "Optimized client-side asset delivery using Next.js automatic image optimization pipelines.",
      "Built custom GraphQL query clients to pull fabric catalog items with minimal payload weights.",
      "Created the drag-and-drop textile design boards for custom matching sessions."
    ],
    achievements: [
      "Successfully brought page load time down from 6.8 seconds to 1.1 seconds.",
      "Designed and delivered the textile catalog with a fully responsive mobile interface.",
      "Enabled smooth, zero-layout-shift scrolling across huge visual assets."
    ],
    timeline: "2021",
    industry: "Luxury Retail / Manufacturing",
    company: "Posh Textiles",
    country: "United States"
  },
  {
    id: "digitalmediaflow",
    title: "Digital Media Flow",
    subtitle: "High-Performance Video Annotation & Collaborative Review Suite",
    description: "An agile media production tracking suite featuring custom video timestamp annotation, multi-channel frame-accurate feedback, and automated transcoding flows.",
    category: "SaaS, Full Stack, Video Available",
    techStack: ["React", "TypeScript", "Node.js", "Express", "S3", "FFmpeg", "WebSockets"],
    aiTech: ["Audio Speech-to-Text Transcriber", "Auto Keyframe Tagging"],
    problem: "Video creators and clients struggled to share feedback, relying on confusing emails with manual timestamps, causing severe delays in post-production cycles.",
    solution: "Developed an interactive HTML5 custom video review interface, linking feedback directly to specific video keyframes, streaming timelines via WebSockets.",
    architecture: {
      steps: [
        { name: "Annotation Canvas", description: "Enables users to click directly on the video screen and leave drawing markers.", role: "HTML5 Video Wrapper" },
        { name: "Live Chat Bus", description: "Streams frame feedback to active editors instantly.", role: "Socket.IO Router" },
        { name: "Transcoder Pipeline", description: "Converts uploaded master files into web-friendly formats asynchronously.", role: "FFmpeg Queue" }
      ],
      diagramLabel: "Collaborative Video Review Pipeline"
    },
    metrics: [
      { value: "65%", label: "Faster Post-Production Sign-offs" },
      { value: "0ms", label: "Frame-Accurate Annotation Latency" },
      { value: "25k+", label: "Videos Reviewed and Approved" }
    ],
    challenges: "Synchronizing precise client review frame coordinates with dynamic, compressed MP4 video playback across varying device hardware.",
    results: "Delivered a fluid collaboration workspace, allowing remote video editors to review frame-by-frame edits with stakeholders without leaving the video app.",
    githubUrl: "https://github.com/hamad-softdev",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    role: "Full Stack Engineer",
    aiFeatures: [
      "AI-driven automated audio speech-to-text transcript generator",
      "Autonomous video scene change detection compiling dynamic chapters",
      "Automated face blurring and PII scrubbing option on preview clips"
    ],
    businessImpact: "Shortened final commercial sign-off cycles from 2 weeks to 3 days, saving media production houses thousands in editor retention costs.",
    screenshots: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Designed and coded the custom video annotation player component from scratch.",
      "Engineered async video rendering background tasks using Redis queues and FFmpeg binaries.",
      "Built real-time collaboration engines using persistent WebSockets.",
      "Configured secure S3 pre-signed upload URLs for extremely large master files."
    ],
    achievements: [
      "Accomplished frame-level precision (1/24 sec accuracy) in the browser review player.",
      "Reduced transcoder waiting times by parallelizing server video slice processing.",
      "Praised by clients as the smoothest and most intuitive feedback tool in their arsenal."
    ],
    timeline: "2021",
    industry: "Media / SaaS / Entertainment",
    company: "Digital Media Flow Inc.",
    country: "Canada"
  },
  {
    id: "xlogic",
    title: "X Logic Solutions",
    subtitle: "High-Throughput Enterprise API Gateway & Integration Bus",
    description: "An enterprise integration gateway managing millions of monthly service queries, billing reconciliation protocols, and high-security OAuth token handshakes.",
    category: "Full Stack, Backend",
    techStack: ["Node.js", "Express", "TypeScript", "NestJS", "PostgreSQL", "Redis", "Docker"],
    aiTech: ["API Payload Schema Drift Scanner", "Anomalous Traffic Predictor"],
    problem: "Legacy internal microservices suffered from systemic cascading failures under peak traffic, losing financial reconciliation events.",
    solution: "Built a robust, structured API Gateway utilizing custom rate-limiting queues, backpressure circuit breakers, and centralized logging nodes.",
    architecture: {
      steps: [
        { name: "Rate Limiter Gate", description: "Verifies user access limits and screens for DDoS attack markers.", role: "Security Wall" },
        { name: "Load Router", description: "Distributes queries smoothly based on live server metrics.", role: "NestJS Dispatcher" },
        { name: "Event Bus Log", description: "Saves raw transactions before final delivery to secure databases.", role: "Transactional Redis Logger" }
      ],
      diagramLabel: "Enterprise API Gateway Integration Bus"
    },
    metrics: [
      { value: "240%", label: "Throughput Capacity Increase" },
      { value: "99.999%", label: "Reconciliation Log Accuracy" },
      { value: "<15ms", label: "Gateway Processing Overhead" }
    ],
    challenges: "Structuring safe rollback transactions across heterogeneous systems when downstream billing APIs fail mid-process.",
    results: "Successfully stabilized enterprise microservices, maintaining perfect data logs under intense, rapid-burst loads.",
    githubUrl: "https://github.com/hamad-softdev",
    role: "Senior Backend Developer",
    aiFeatures: [
      "AI anomaly traffic analyzer flagging malicious brute-force attempts",
      "Dynamic auto-scaling vector forecasting database CPU loads",
      "Automated payload schema drift analysis detecting backend breaking changes"
    ],
    businessImpact: "Secured enterprise transactions against system downtime, direct protection on daily revenue loops and customer trust.",
    screenshots: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Architected the backend gateway microservice patterns using type-safe NestJS modules.",
      "Optimized database indexes and Redis queues to limit transaction locking times.",
      "Implemented structured JSON Web Token validation keys across microservice nodes.",
      "Authored clean, comprehensive integration test batteries achieving 95% code coverage."
    ],
    achievements: [
      "Successfully scaled API capacity to manage over 8 Million transactions per month.",
      "Reduced system cascading failures to zero using active circuit-breaker libraries.",
      "Completed database optimization tasks that cut average query times by 80%."
    ],
    timeline: "2020 - 2021",
    industry: "Enterprise Software / Infrastructure",
    company: "X Logic Solutions",
    country: "Pakistan"
  },
  {
    id: "gamicacloud",
    title: "GamicaCloud Platform",
    subtitle: "Interactive Student Code Sandbox & Academy Management ERP",
    description: "An innovative, full-scale learning management system and code evaluation platform, serving hundreds of software development students with coding sandboxes, automatic syntax checkers, and mentor dashboards.",
    category: "Education, Full Stack, Live Projects",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "AWS"],
    aiTech: ["Automated Code Review System", "Personalized Curriculum Composer"],
    problem: "Academy mentors were overwhelmed reviewing hundreds of raw student coding assignments, resulting in multi-day feedback bottlenecks and student frustration.",
    solution: "Designed and engineered an automated, sandboxed Docker code execution engine that compiles, test-runs, and analyzes student code submissions, delivering instant feedback.",
    architecture: {
      steps: [
        { name: "Code Sandbox Editor", description: "Enables students to write, compile, and run code directly in the browser.", role: "Monaco IDE UI" },
        { name: "Secure Execution Pod", description: "Builds a safe, sandboxed container node to isolate student script runs.", role: "Docker Sandbox" },
        { name: "Analysis Engine", description: "Performs unit testing and returns optimization ideas.", role: "Automated Evaluation Node" }
      ],
      diagramLabel: "Automated Code Submission and Evaluation Node"
    },
    metrics: [
      { value: "10x", label: "Reduction in Review Time" },
      { value: "200+", label: "Active Software Students Trained" },
      { value: "88%", label: "Student Curriculum Completion Rate" }
    ],
    challenges: "Securing the Docker sandbox against malicious student submissions trying to read host system environment keys or launch network loops.",
    results: "Integrated the auto-grading sandboxes into GamicaCloud, allowing students to learn, build, and receive instantaneous performance evaluations.",
    githubUrl: "https://github.com/hamad-softdev",
    liveUrl: "https://gamicacloud.com/", // Placeholder/real
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    role: "Full Stack Mentor & Lead Engineer",
    aiFeatures: [
      "AI-backed code explanation tutor assisting students on syntax bugs",
      "Dynamic personalized curriculum pathways adjusting lessons to matching student grades",
      "Autonomous code complexity scoring (Big O) evaluation models"
    ],
    businessImpact: "Enabled the tech academy to scale student enrollment by 350% without requiring additional headcount, optimizing core operational profitability.",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    ],
    responsibilities: [
      "Led the full-stack design and deployment of the educational platform.",
      "Configured safe, sandboxed execution pods on AWS EC2 nodes using isolated Docker processes.",
      "Created the browser code editor using customized Microsoft Monaco editor wrappers.",
      "Mentored and guided 200+ technology students, teaching modern clean coding principles."
    ],
    achievements: [
      "Built a secure code compilation service supporting Python, JS, HTML, and SQL scripts.",
      "Achieved sub-2-second sandbox container execution and score feedback speeds.",
      "Voted as the most innovative digital training solution in regional developer awards."
    ],
    timeline: "2019 - 2021",
    industry: "Education / EdTech",
    company: "Gamica Cloud Academy",
    country: "Pakistan"
  }
];

export const coursesData: Course[] = [
  {
    id: "advanced-ai-agents",
    title: "Production AI Agents & LangGraph",
    description: "A professional, engineering-first masterclass teaching developers how to design and orchestrate complex state-driven multi-agent systems.",
    duration: "6 Weeks",
    modulesCount: 12,
    level: "Advanced",
    syllabus: [
      "State machines vs. basic chains in LangChain",
      "LangGraph core concepts: nodes, edges, state updates",
      "Designing cyclic agent routing and feedback loops",
      "Integrating Human-in-the-Loop approval workflows",
      "Observability & Tracing with LangSmith and custom spans",
      "Cost-containment, semantic caching, and token budgeting"
    ],
    badge: "Architect Program"
  },
  {
    id: "fullstack-genai",
    title: "Full-Stack Generative AI Engineering",
    description: "Learn how to build, scale, and deliver robust GenAI systems by connecting Next.js, FastAPI, PostgreSQL, and vector indexes.",
    duration: "8 Weeks",
    modulesCount: 16,
    level: "Intermediate",
    syllabus: [
      "Developing high-throughput FastAPI async routers",
      "Next.js App Router streaming endpoints with Server-Sent Events (SSE)",
      "Dense vs. Sparse Vector Databases (Pinecone, Chroma, pgvector)",
      "Implementing hybrid RAG pipelines with dense-sparse reciprocal rank fusion",
      "Prompt engineering at scale: structured JSON outputs & schema validation",
      "Authentication and rate-limiting secure AI route proxies"
    ],
    badge: "Core Engineering"
  },
  {
    id: "python-ml-foundation",
    title: "Python & Machine Learning Foundations",
    description: "The definitive curriculum built to transition traditional engineers into AI practitioners, bypassing the noise and focusing on core concepts.",
    duration: "4 Weeks",
    modulesCount: 8,
    level: "Beginner",
    syllabus: [
      "Scientific python computing (NumPy, Pandas, Scikit-learn)",
      "Mathematical foundations of embeddings, cosine similarity, and dimensions",
      "Fine-tuning models vs. few-shot context injection",
      "Deploying models with FastAPI and containerizing with Docker"
    ],
    badge: "Foundation"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Lead AI Architect & Senior Engineer",
    company: "International AI Consultancy & Startups",
    period: "2022 - Present",
    description: [
      "Architect and deploy production-grade multi-agent autonomous workspaces using LangGraph, CrewAI, and custom FastAPI backends for international clients.",
      "Design advanced RAG systems achieving over 90% retrieval precision by integrating hybrid search, semantic caching, and cross-encoder re-ranking algorithms.",
      "Spearhead the migration of legacy monolith backends to high-performance, type-safe microservices with NestJS, Node.js, and PostgreSQL.",
      "Consult startup founders on model trade-offs, token-spend reduction, prompt engineering architectures, and scalable vector store infrastructure."
    ],
    technologies: ["LangGraph", "LangChain", "FastAPI", "Python", "Next.js", "NestJS", "PostgreSQL", "Pinecone"]
  },
  {
    id: "exp-2",
    role: "Senior Full Stack Engineer & Educator",
    company: "Technical Academy & Software Labs",
    period: "2020 - 2022",
    description: [
      "Built and scaled production SaaS applications utilizing Next.js, React, Node.js, and high-concurrency PostgreSQL relational schemas.",
      "Designed and delivered professional AI & Software Engineering curricula, mentoring over 200 developers to successfully transition into modern tech roles.",
      "Led engineering teams to implement real-time systems using WebSockets, Redis pub-sub, and secure background queue systems.",
      "Published production-ready open-source templates and boilerplates for Next.js-FastAPI developer integration."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Redis"]
  },
  {
    id: "exp-3",
    role: "Full Stack Software Developer",
    company: "Creative Tech & Startup Hubs",
    period: "2018 - 2020",
    description: [
      "Developed interactive responsive web applications using React, Redux, and modern CSS utility frameworks.",
      "Engineered secure, validated RESTful API services with Express, Node.js, and MongoDB/PostgreSQL.",
      "Optimized client-side rendering pathways, improving Core Web Vitals (LCP, FID) by 35% on high-traffic landing pages.",
      "Established automated CI/CD deployment pipelines on GCP and AWS for rapid, zero-downtime shipping."
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "GCP", "Git"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Alex Rivera",
    role: "Founder",
    company: "Synthetix AI",
    content: "Muhammad is a rare breed of engineer. He didn't just wire up a simple ChatGPT prompt; he architected a multi-agent state machine that runs our core product workflow. He saved us thousands in token costs and months of development debt.",
    avatarLetter: "A"
  },
  {
    id: "test-2",
    name: "Sarah Chen",
    role: "Engineering Director",
    company: "Elysium Technologies",
    content: "Muhammad's teaching background is obvious. When he presented our enterprise architecture diagrams, the entire board immediately understood how the systems worked. The FastAPI-Next.js system he built for us is fast, type-safe, and incredibly reliable.",
    avatarLetter: "S"
  },
  {
    id: "test-3",
    name: "Marcus Aurelius",
    role: "Software Architect (Alumnus)",
    company: "Decentralized Systems",
    content: "I took Muhammad's LangGraph and Production Agents Masterclass. In just 6 weeks, I learned more about state machines, token containment, and prompt reflection than I did in 2 years of browsing YouTube tutorials. It completely changed my career path.",
    avatarLetter: "M"
  }
];

export const techStackData = [
  {
    category: "AI & Orchestration",
    items: [
      { name: "LangGraph", level: "Expert / Core Orchestrator", desc: "State machine agent logic" },
      { name: "LangChain", level: "Expert", desc: "Chains, tools, and vector mergers" },
      { name: "LlamaIndex", level: "Advanced", desc: "Advanced data index & parsing" },
      { name: "Python", level: "Expert", desc: "Core backend, scripting & scientific compute" },
      { name: "FastAPI", level: "Expert", desc: "High-performance async APIs" },
      { name: "Prompt Engineering", level: "Expert", desc: "Structured outputs, few-shot prompts" }
    ]
  },
  {
    category: "Full Stack & Core Tech",
    items: [
      { name: "Next.js / React", level: "Expert", desc: "Fluid, high-performance web UIs" },
      { name: "TypeScript", level: "Expert", desc: "Strict type-safe application logic" },
      { name: "Node.js / Express", level: "Expert", desc: "Scalable backend routing" },
      { name: "NestJS", level: "Advanced", desc: "Enterprise modular architectures" },
      { name: "PostgreSQL", level: "Expert", desc: "Robust database schemas & queries" },
      { name: "Redis", level: "Advanced", desc: "Caching, state, and session buffers" }
    ]
  },
  {
    category: "Infrastructure & Vectors",
    items: [
      { name: "Pinecone / Chroma", level: "Expert", desc: "High-density vector search indices" },
      { name: "Docker", level: "Expert", desc: "Consistent runtime containerization" },
      { name: "GCP / Cloud Run", level: "Advanced", desc: "Serverless scalable microservices" },
      { name: "Git & CI/CD", level: "Expert", desc: "Automated pipelines & software flow" }
    ]
  }
];
