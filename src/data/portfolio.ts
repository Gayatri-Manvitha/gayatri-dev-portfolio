export type PortfolioItem = {
  title: string
  description: string
  period?: string
  organization?: string
  skills?: string[]
  link?: string
}

export const portfolio = {
  name: 'Gayatri Manvitha Jaladi',
  role: 'Senior Java Backend & Cloud Engineer',
  intro:
    'I build enterprise applications and cloud-ready services, with 8.9 years of experience across banking, healthcare, and content management.',
  about: [
    'I’m a senior software engineer with deep backend experience in Java, Spring Boot, microservices, and REST APIs. Most recently, I’ve been helping modernize commercial banking applications with Java 21, Quarkus, and Google Cloud.',
    'I enjoy delivering across the stack, from technical design and implementation to production support and mentoring. I’m a Google Cloud Certified Professional Cloud Architect and Oracle Certified Associate Developer.',
  ],
  email: 'gayatrimanvitha.jaladi@gmail.com',
  phone: '+91-7659892371',
  resumeUrl: '/Gayatri_Java_Cloud_Resume.docx',
  skills: [
    'Java 8 / 11 / 17 / 21',
    'Spring Core / MVC / Boot',
    'Quarkus',
    'Microservices',
    'REST APIs',
    'JPA / HQL',
    'React.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'GCP',
    'AWS',
    'OpenShift',
    'Kubernetes',
    'Docker',
    'Spanner',
    'Kafka',
    'JMS',
    'Oracle',
    'SQL Server',
    'MySQL',
    'MongoDB',
    'HDFS / Spark',
    'Python / Unix',
    'JUnit / Mockito',
    'Jenkins / CI/CD',
    'Maven / Gradle',
    'Agile / TDD',
  ],
  experience: [
    {
      title: 'Senior Software Engineer',
      organization: 'Lloyds Technology Center',
      period: 'Dec 2024 – Present',
      description:
        'Drive backend development for a Commercial Banking Domestic Payments modernization, moving legacy Liberty applications toward a cloud-ready Java 21 and Quarkus architecture. Design microservices and REST APIs, contribute to solution design, and mentor through reviews and technical guidance.',
      skills: ['Java 17/21', 'Quarkus', 'React', 'GCP', 'OpenShift', 'Spanner'],
    },
    {
      title: 'Technology Consultant / Support SME',
      organization: 'Virtusa Singapore Ltd. — Citibank Singapore',
      period: 'Jul 2022 – Dec 2024',
      description:
        'Supported Citi Funds Transfer Pricing data feeds and infrastructure migrations. Automated HDFS archival, reporting, Autosys jobs, and service monitoring with Python, Unix, Java, and operational tooling; supported production failovers.',
      skills: ['Java', 'Python', 'Unix', 'HDFS', 'Spark', 'AWS S3'],
    },
    {
      title: 'Senior Project Engineer',
      organization: 'Wipro — UnitedHealthcare',
      period: '2022 · 6-month engagement',
      description:
        'Developed and supported Secure UHC Provider healthcare services for eligibility, referrals, claims, and member ID cards. Delivered full-stack features and helped migrate services from OpenShift to Kubernetes and configuration to Vault.',
      skills: ['Java 11', 'Spring Boot', 'React', 'MongoDB', 'Kubernetes', 'AWS'],
    },
    {
      title: 'Senior System Engineer',
      organization: 'IBM India Pvt. Ltd.',
      period: 'Jan 2021 – Dec 2021',
      description:
        'Built Spring microservices and web services for LoanIQ syndicated-loan workflows, and automated identity lifecycle and access-provisioning processes. Received the IBM Spark Award (1H 2021).',
      skills: ['Java', 'Spring', 'LoanIQ APIs', 'Oracle Identity Manager'],
    },
    {
      title: 'Software Engineer',
      organization: 'Tech Mahindra',
      period: 'Apr 2018 – Jan 2021',
      description:
        'Built REST services and Angular features for GE Healthcare Common DMS, including document management, search, metadata, and role-based access. Developed integrations and deployed services on AWS EC2; received ACER, Grand Salute – Live Wire, and Pat-On-Back awards.',
      skills: ['Spring Boot', 'Angular', 'Box API', 'SQL Server', 'AWS EC2'],
    },
    {
      title: 'Software Engineer Trainee',
      organization: 'Hexaware Technologies',
      period: 'Dec 2017 – Apr 2018',
      description:
        'Trained in full-stack development while working on a PeopleSoft leave-management application.',
      skills: ['Core Java', 'Angular 4'],
    },
  ] as PortfolioItem[],
  projects: [
    {
      title: 'Commercial Banking Domestic Payments',
      organization: 'Lloyds Technology Center',
      description:
        'Modernizing legacy payment applications with cloud-ready Java and Quarkus services, REST APIs, and a React frontend.',
      skills: ['Java 17/21', 'Quarkus', 'React', 'GCP', 'Spanner'],
    },
    {
      title: 'Secure UHC Provider',
      organization: 'UnitedHealthcare · Wipro',
      description:
        'Healthcare capabilities for provider eligibility, referrals, claims, and member ID cards, with services deployed across OpenShift and Kubernetes.',
      skills: ['Spring Boot', 'React', 'MongoDB', 'Kubernetes'],
    },
    {
      title: 'Common DMS',
      organization: 'GE Healthcare · Tech Mahindra',
      description:
        'Document-management experience for uploads, downloads, search, metadata, and role-based access, integrated with Box.',
      skills: ['Spring Boot', 'Angular', 'Box API', 'SQL Server'],
    },
    {
      title: 'LoanIQ ARR Integration & IAMS',
      organization: 'IBM',
      description:
        'Syndicated-loan workflow services and automated identity onboarding, offboarding, transfers, attestations, and access provisioning.',
      skills: ['Java', 'Spring', 'LoanIQ APIs', 'Oracle Identity Manager'],
    },
  ] as PortfolioItem[],
  certifications: [
    {
      title: 'Professional Cloud Architect',
      organization: 'Google Cloud',
      description: 'Google Cloud Certified Professional Cloud Architect.',
    },
    {
      title: 'Oracle Certified Associate Developer',
      organization: 'Oracle',
      description: 'Oracle Certified Associate Developer.',
    },
  ] as PortfolioItem[],
  education: [
    {
      title: 'B.Tech — Electronics & Communication Engineering',
      organization: 'Vasireddy Venkatadri Institute of Technology · JNTU-Kakinada',
      period: '2017 · 71.33% · WES verified',
      description: 'Bachelor of Technology in Electronics & Communication Engineering.',
    },
  ] as PortfolioItem[],
}
