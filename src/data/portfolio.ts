export type SkillGroup = {
  category: string
  skills: string[]
}

export type ExperienceItem = {
  title: string
  organization: string
  period: string
  domain: string
  description: string
  contributions: string[]
  skills: string[]
}

export type ProjectItem = {
  title: string
  status: string
  overview: string
  problem: string
  architecture: string
  decisions: string
  features: string[]
  skills: string[]
}

export type PortfolioItem = {
  title: string
  description: string
  period?: string
  organization?: string
}

export const portfolio = {
  name: 'Gayatri Manvitha Jaladi',
  role: 'Java Engineer | Cloud & AI Solutions Architect',
  headline:
    'Engineering scalable systems. Modernizing enterprise technology. Exploring intelligent solutions.',
  intro:
    "I'm a software engineer with 8.9+ years of experience building and modernizing enterprise applications across banking, healthcare and content management. I specialize in Java, Spring Boot, Quarkus, microservices and cloud-native engineering. I enjoy solving complex engineering challenges, designing reliable systems and exploring how AI can transform enterprise software.",
  about: [
    "My journey in software engineering spans enterprise banking, healthcare and document management systems. Throughout my career, I've worked on applications where scalability, reliability, security and performance matter.",
    "Currently, I'm contributing to commercial banking modernization, working with Java 21, Quarkus, React, GCP, OpenShift and cloud-native technologies.",
    'Beyond development, I enjoy technical design discussions, understanding complex business workflows, mentoring engineers and finding better ways to build and deliver software.',
    "I'm continuously expanding my expertise in cloud architecture, Python and AI-driven engineering, with a long-term focus on building intelligent enterprise solutions.",
  ],
  email: 'gayatrimanvitha.jaladi@gmail.com',
  linkedinUrl: '',
  githubUrl: '',
  resumeUrl: '/Gayatri_Java_Cloud_Resume.docx',
  skills: [
    {
      category: 'Backend engineering',
      skills: [
        'Java 8 / 11 / 17 / 21',
        'Spring Boot',
        'Spring Framework',
        'Quarkus',
        'Microservices',
        'REST APIs',
        'Hibernate / JPA',
        'Kafka',
        'JMS',
      ],
    },
    {
      category: 'Cloud & infrastructure',
      skills: [
        'Google Cloud Platform (GCP)',
        'AWS',
        'OpenShift',
        'Kubernetes',
        'Docker',
        'GCP Spanner',
        'AWS S3',
        'AWS EC2',
      ],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Databases & data',
      skills: ['Oracle', 'SQL Server', 'MySQL', 'MongoDB', 'HDFS', 'Apache Spark'],
    },
    {
      category: 'DevOps & engineering',
      skills: [
        'Jenkins',
        'Maven',
        'Gradle',
        'Git',
        'CI/CD',
        'JUnit',
        'Mockito',
        'TDD',
      ],
    },
    {
      category: 'AI & automation',
      skills: [
        'Python',
        'Unix automation',
        'Agentic AI — learning and exploration',
        'AI-powered application development — learning',
      ],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      title: 'Senior Software Engineer',
      organization: 'Lloyds Technology Centre',
      period: 'December 2024 – Present',
      domain: 'Commercial Banking — Domestic Payments',
      description:
        'Contributing to a major commercial banking modernization programme, moving legacy applications towards a cloud-ready Java 21 and Quarkus architecture.',
      contributions: [
        'Developing scalable microservices and REST APIs.',
        'Participating in architecture and solution design discussions.',
        'Analyzing legacy dependencies and payment workflows.',
        'Focusing on performance, resilience, security and maintainability.',
        'Supporting code reviews, troubleshooting and technical mentoring.',
      ],
      skills: [
        'Java 17/21',
        'Quarkus',
        'React',
        'GCP',
        'OpenShift',
        'Docker',
        'Spanner',
      ],
    },
    {
      title: 'Technology Consultant / Support SME',
      organization: 'Virtusa Singapore Ltd. — Citibank',
      period: 'July 2022 – December 2024',
      domain: 'Funds Transfer Pricing',
      description:
        'Supported Funds Transfer Pricing data feeds, archival workflows and infrastructure migrations across Big Data, SFTP and Tableau environments.',
      contributions: [
        'Automated Hadoop filesystem archival using Python and Unix scripts.',
        'Supported migration of archival workflows from LTFS to HDFS.',
        'Supported microservice-based downstream data feeds.',
        'Automated reporting, scheduled jobs and service monitoring.',
        'Supported production failover activities.',
      ],
      skills: [
        'Java 8',
        'Python',
        'Unix',
        'HDFS',
        'Spark',
        'AWS S3',
        'Autosys',
        'AppDynamics',
      ],
    },
    {
      title: 'Senior Project Engineer',
      organization: 'Wipro',
      period: '2022 — 6-month engagement',
      domain: 'UnitedHealthcare — Secure UHC Provider',
      description:
        'Developed and supported healthcare application capabilities covering eligibility, referrals, claims and member ID-card microservices.',
      contributions: [
        'Contributed to full-stack development using Spring Boot and React.',
        'Supported migration of microservice deployments from OpenShift to Kubernetes.',
        'Moved Spring configuration to Vault.',
      ],
      skills: [
        'Java 11',
        'Spring Boot',
        'React',
        'MongoDB',
        'OpenShift',
        'AWS',
        'Kubernetes',
        'Vault',
      ],
    },
    {
      title: 'Senior System Engineer',
      organization: 'IBM India',
      period: 'January 2021 – December 2021',
      domain: 'LoanIQ ARR Integration & IAMS',
      description:
        'Developed Spring-based microservices and web services for syndicated-loan workflows and automated identity lifecycle processes.',
      contributions: [
        'Implemented funding-rate and holiday-list updates through LoanIQ APIs.',
        'Automated IAM onboarding, offboarding, transfer, attestation, reconciliation and access provisioning.',
        'Received the IBM Spark Award (1H 2021).',
      ],
      skills: ['Java', 'Spring', 'LoanIQ APIs', 'Oracle Identity Manager'],
    },
    {
      title: 'Software Engineer',
      organization: 'Tech Mahindra',
      period: 'April 2018 – January 2021',
      domain: 'GE Healthcare — Common DMS',
      description:
        'Built Spring Boot REST services and Angular screens for an enterprise document management system.',
      contributions: [
        'Implemented document upload, download, search and metadata management.',
        'Integrated Box API, DocuSign, Leasewave and Salesforce.',
        'Developed JMS queue processing and scheduled jobs.',
        'Received ACER, Grand Salute — Live Wire and Pat-On-Back awards.',
      ],
      skills: [
        'Spring Boot',
        'Angular 6',
        'Box API',
        'SQL Server',
        'AWS EC2',
        'JMS',
      ],
    },
    {
      title: 'Software Engineer Trainee',
      organization: 'Hexaware Technologies',
      period: 'December 2017 – April 2018',
      domain: 'PeopleSoft Leave Management',
      description:
        'Trained in full-stack application development and contributed to a PeopleSoft leave-management application.',
      contributions: [],
      skills: ['Core Java', 'Angular 4'],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      title: 'Digital Banking Payments Platform',
      status: 'Planned demonstration project',
      overview:
        'A proposed event-driven payments service to demonstrate transaction initiation, processing and status tracking.',
      problem:
        'Payment workflows need clear validation, traceable status changes and resilient handling of transient failures.',
      architecture:
        'A REST API accepts requests, validates them and publishes payment events to Kafka. Processing services update transaction state in PostgreSQL and emit status events for clients.',
      decisions:
        'Use asynchronous events to separate request acceptance from processing; add idempotency, bounded retries and explicit transaction states to support safe recovery.',
      features: [
        'Payment initiation and transaction validation',
        'Event-driven processing and status tracking',
        'Error handling, resilience and retries',
        'API security',
      ],
      skills: [
        'Java 21',
        'Quarkus',
        'Kafka',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      title: 'Cloud-Native Observability Platform',
      status: 'Planned demonstration project',
      overview:
        'A proposed service-monitoring setup for instrumenting and observing containerized Spring Boot applications on GCP.',
      problem:
        'Distributed services require consistent health signals, centralized logs, actionable metrics and alerting.',
      architecture:
        'Containerized Spring Boot services run on Kubernetes; Prometheus collects metrics, Grafana presents dashboards and alert rules, and centralized logging provides searchable application events.',
      decisions:
        'Keep instrumentation and deployment repeatable with container images and configuration; separate metrics, logs and alerting concerns for easier operations.',
      features: [
        'Application health monitoring',
        'Centralized logging and metrics collection',
        'Service dashboards and alerting',
        'Containerized deployment',
      ],
      skills: [
        'Spring Boot',
        'GCP',
        'Docker',
        'Kubernetes',
        'Prometheus',
        'Grafana',
      ],
    },
    {
      title: 'AI-Powered Developer Assistant',
      status: 'Planned learning project',
      overview:
        'A proposed developer-support tool exploring retrieval-augmented generation and Java service integration.',
      problem:
        'Developers spend time finding context across code, API references and diagnostic logs.',
      architecture:
        'A React interface sends requests to a Python service. For documentation-grounded questions, the service retrieves relevant indexed content and supplies context to an LLM API; optional Java integration can expose existing engineering services.',
      decisions:
        'Treat AI as an assistive layer, ground responses in retrieved sources and keep model integration behind a service boundary. This project is exploratory and not a claim of production AI experience.',
      features: [
        'Code explanation and API documentation generation',
        'Intelligent log analysis',
        'Retrieval-augmented answers over indexed documentation',
        'Developer productivity assistance',
      ],
      skills: ['Python', 'LLM APIs', 'RAG', 'React', 'Java integration'],
    },
  ] satisfies ProjectItem[],
  certifications: [
    {
      title: 'Google Cloud Certified Professional Cloud Architect',
      organization: 'Google Cloud',
      description: 'Professional Cloud Architect certification.',
    },
    {
      title: 'Oracle Certified Associate Developer',
      organization: 'Oracle',
      description: 'Oracle Certified Associate Developer certification.',
    },
  ] satisfies PortfolioItem[],
  education: [
    {
      title: 'B.Tech — Electronics & Communication Engineering',
      organization:
        'Vasireddy Venkatadri Institute of Technology · JNTU Kakinada',
      period: '2017',
      description: 'Bachelor of Technology in Electronics & Communication Engineering.',
    },
  ] satisfies PortfolioItem[],
}
