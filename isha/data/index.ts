export const DATA = {
  home: {
    hero: {
      name: "ISHA SOLANKI",
      title: "Data Analyst & Researcher ",
      subtitle:
        "Leveraging Python, SQL, and Machine Learning to bridge the gap between technical data and smarter business decisions.",
    },
    skills: {
      sectionTitle: "What I Work With",
      sectionDescription:
        "I enjoy working with data, logic, and analytical tools to turn information into clear, useful insights.",
      overview: [
        {
          name: "Data Analysis",
          level: 90,
          icon: "lucide:bar-chart-3",
          color: "primary",
        },
        {
          name: "Backend & Logic",
          level: 85,
          icon: "lucide:database",
          color: "secondary",
        },
        {
          name: "Dashboards & Visualization",
          level: 88,
          icon: "lucide:pie-chart",
          color: "success",
        },
        {
          name: "Problem-Solving",
          level: 92,
          icon: "lucide:lightbulb",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Testimonials",
      sectionDescription:
        "This space will highlight feedback and experiences from people I work with as I grow in my career.",
      items: [] as Array<{
        id: number;
        name: string;
        role: string;
        content: string;
        avatar: string;
      }>,
    },
  },
  about: {
    profile: {
      name: "ISHA V SOLANKI",
      title: "Computer Science & Engineering Student",
      image: "/isha pfp.jpeg",
      description: [
        "I'm a B.Tech Computer Science and Engineering student at Parul University (2022–2026), based in Vadodara, Gujarat. I enjoy taking messy data and turning it into something structured, visual, and genuinely useful.",
        "My interests sit at the intersection of data, business, finance, and technology. I’ve worked on dashboards, backend logic, and data operations that support both academic and professional contexts.",
        "Outside academics, I stay involved in events, conferences, and communities related to technology and leadership, which helps me grow as a communicator, collaborator, and problem-solver.",
      ],
    },
    education: [
      {
        title: "B.Tech in Computer Science and Engineering",
        date: "2022 - 2026",
        icon: "mdi:school-outline",
        description:
          "Parul University, Waghodia, Vadodara. Building a strong foundation in computer science while applying concepts through projects in data analysis, backend logic, and dashboards.",
      },
      {
        title: "Higher Secondary (HSC)",
        date: "2022",
        icon: "mdi:school",
        description:
          "Urmi School, Vadodara. Completed higher secondary education with a focus that prepared me for engineering and technical studies.",
      },
      {
        title: "Secondary School (SSC)",
        date: "2020",
        icon: "mdi:school-outline",
        description:
          "Delhi Public School, Vadodara. Built strong academic fundamentals and participated in activities that strengthened my analytical and communication skills.",
      },
    ],
    experience: [
      {
        title: "Data Operation and Management Intern",
        date: "May 2025 - June 2025",
        icon: "mdi:briefcase",
        description:
          "Photon School, where I managed and structured student records, maintained and updated databases, corrected inconsistencies, supported report preparation, and coordinated with staff to ensure smooth data operations.",
      },
      {
        title: "Data Analyst",
        date: "Sept 2024 - Dec 2024",
        icon: "mdi:monitor-dashboard",
        description:
          "Algorion, where I analyzed financial, technical, and sentiment data for Indian stocks, created comparative market analysis reports, and derived insights to support investment-related decisions using stock screening and charting tools.",
      },
    ],
    technologies: {
      tools: {
        description:
          "Core tools I use for data analysis and business-focused development",
        tools: [
          { name: "Python", icon: "logos:python" },
          { name: "SQL", icon: "logos:postgresql" },
          { name: "Excel / Google Sheets", icon: "vscode-icons:file-type-excel" },
          { name: "Tableau", icon: "logos:tableau-icon" },
          { name: "Power BI", icon: "logos:microsoft-power-bi" },
          { name: "Git", icon: "logos:git-icon" },
          { name: "Jupyter Notebook", icon: "logos:jupyter" },
          { name: "VS Code", icon: "logos:visual-studio-code" },
        ],
      },
      softSkills: {
        description:
          "Skills developed through coordination, collaboration, and professional engagement",
        tools: [
          { name: "Communication", icon: "fluent:people-chat-20-filled" },
          { name: "Team Coordination", icon: "fluent:people-team-20-filled" },
          { name: "Stakeholder Collaboration", icon: "fluent:handshake-20-filled" },
          { name: "Documentation & Reporting", icon: "fluent:document-text-20-filled" },
          { name: "Event Coordination", icon: "fluent:calendar-checkmark-20-filled" },
        ],
      },
      dataAnalytics: {
        description:
          "Data analytics, visualization, and business insight capabilities",
        tools: [
          { name: "Data Cleaning & Preprocessing", icon: "fluent:data-funnel-20-filled", usage: "Ensuring data quality and consistency" },
          { name: "Dashboard Design", icon: "fluent:grid-kanban-20-filled", usage: "Creating intuitive visual interfaces" },
          { name: "Data Visualization", icon: "fluent:data-pie-20-filled", usage: "Transforming data into clear insights" },
          { name: "Business Insights & Reporting", icon: "fluent:chart-multiple-20-filled", usage: "Delivering actionable recommendations" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Projects",
    sectionDescription:
      "A selection of projects where I work with data, dashboards, and backend logic to solve practical problems.",
    work: [
      {
        id: 1,
        title: "Petstagram – A Social Initiative for Vets",
        description:
          "A social platform connecting vets and pet owners through structured posts and pet profiles.",
        image: "/petstagram 1.jpg",
        gallery: [
          "/petstagram 1.jpg",
          "/petstagram 2.jpg",
          "/petstagram 3.jpg",
          "/petstagram 4.jpg",
        ],
        category: "Web & Backend",
        details:
          "Final year project focused on designing the database structure for users, posts, likes, and pet details, and implementing backend logic for authentication, posting, and feeds. I created system documentation and workflow reports and worked closely on frontend–backend integration to ensure a smooth user experience.",
        github: "",
        live: "",
        tech: [
          { name: "Backend Logic", icon: "lucide:server" },
          { name: "Database Design", icon: "lucide:database" },
          { name: "APIs", icon: "lucide:api" },
        ],
      },
      {
        id: 2,
        title: "Budget Dashboard (Google Sheets)",
        description:
          "An interactive budget dashboard that automates calculations and visualizes personal finance.",
        image: "/Budget Dashboard cover.jpeg",
        gallery: [
          "/Budget Dashboard.png",
        ],
        category: "Dashboards",
        details:
          "Built in Google Sheets with automated calculations for budget tracking, using data validation and conditional formatting to highlight key spending patterns. I added charts for cash flow and spending analysis to make monthly tracking more intuitive and less manual.",
        github: "",
        live: "",
        tech: [
          { name: "Google Sheets", icon: "logos:google-sheets" },
          { name: "Excel Dashboards", icon: "logos:microsoft-excel" },
          { name: "Data Visualization", icon: "lucide:pie-chart" },
        ],
      },
      {
        id: 3,
        title: "Interactive Data Dashboard (Tableau)",
        description:
          "Interactive Tableau dashboards built from CSV datasets with filters, KPIs, and charts.",
        image: "/Interactive Data Dashboard cover.jpeg",
        gallery: [],
        videoFile: "/Interactive data dashboard.mp4",
        category: "Dashboards",
        details:
          "Developed interactive dashboards in Tableau using CSV data, focusing on clear visual stories through charts, KPIs, filters, and dropdowns. This project helped me think about what matters to end users and how to present information so insights are easy to understand.",
        github: "",
        live: "",
        tech: [
          { name: "Tableau", icon: "simple-icons:tableau" },
          { name: "Data Analysis", icon: "lucide:bar-chart-3" },
          { name: "CSV Data", icon: "lucide:file-text" },
        ],
      },
      {
        id: 4,
        title: "Blood Donation Behavior Prediction (AutoML)",
        description:
          "Predictive modeling project using RFMTC segmentation and TPOT AutoML with Logistic Regression.",
        image: "/Blood Donation Behavior Prediction (AutoML).jpeg",
        gallery: [],
        pdfFile: "/Blood Donation Behavior Prediction (AutoML).pdf",
        category: "Machine Learning",
        details:
          "Explored donor behavior prediction using the RFMTC model for segmentation and TPOT AutoML with Logistic Regression, achieving an AUC of 0.785. I handled preprocessing and model optimization, which strengthened my understanding of end-to-end machine learning workflows.",
        github: "",
        live: "",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "Machine Learning", icon: "lucide:brain-cog" },
          { name: "AutoML (TPOT)", icon: "lucide:sparkles" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d-122.41941508468191!3d37.774929779759245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbb69f3ef%3A0x4c80b42c33b6a77d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567!5m2!1sen!2sus",
      address: "Vadodara, Gujarat, India",
    },
  },
  morphingTexts: {
    about: ["Curious", "Analytical", "Data-Driven"] as const,
    projects: ["Dashboards", "Data", "Insights", "Logic"] as const,
    contact: ["Let’s", "Connect", "Collaborate"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
  ],
  footer: {
    name: "ISHA V SOLANKI",
    description:
      "Open to internships, collaborations, and data-driven projects.",
    contact: {
      email: "ishasolanki29@gmail.com",
      phone: "",
      location: "Vadodara, Gujarat, India",
    },
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/isha-solanki-9a413024a",
        icon: "mdi:linkedin",
      },
    ],
    services: [
      "Data Analysis",
      "Dashboards & Visualization",
      "Backend Logic & Data Workflows",
      "Research & Academic Projects",
    ],
  },
} as const;
