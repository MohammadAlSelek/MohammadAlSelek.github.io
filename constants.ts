import { Education, Experience, Grant, Publication, SkillCategory, Award, Service, Teaching, Project } from './types';

export const PERSONAL_INFO = {
  name: "Mohammad Alselek",
  title: "Assistant Professor | Data Scientist | Researcher | Project Leader",
  credentials: "Ph.D., PgCAP, FHEA",
  email: "mohammad.alselek@gmail.com",
  location: "Glasgow, UK",
  linkedin: "https://www.linkedin.com/in/mohammad-alselek", 
  researchPortal: "https://research-portal.uws.ac.uk/en/persons/mohammad-alselek",
  phone: "+44 7594 375435",
  about: "I am a tenure-track Assistant Professor in Computer Science at the University of the West of Scotland (UWS), with over 10 years of cross-continental experience in academia, industry, and R&D. My research focuses on Edge AI, TinyML, Embedded Systems, and DevOps for distributed AI systems. I bring a rich portfolio of interdisciplinary research, scholarly publications, and leadership in EU and UK-funded projects. I also hold a Postgraduate Certificate in Academic Practice (PgCAP) and am a Fellow of Advance HE. I collaborate with industry on applied AI/IoT pilots and advise on data-driven products and platforms."
};

export const RESEARCH_INTERESTS = [
  {
    title: "Generative Intelligence for Edge Systems",
    description: "Optimizing and deploying LLMs on resource-constrained Edge/IoT devices and using LLMs as reasoning layers in distributed systems (6G, industrial control)."
  },
  {
    title: "Decentralized AI Architectures",
    description: "Designing ultra-low-latency AI solutions and implementing Federated Learning (FL) frameworks for privacy-preserving, decentralized model training."
  },
  {
    title: "Sustainable AI, MLOps, and Digital Twins",
    description: "Green AI principles to optimize energy consumption, robust MLOps for Edge environments, and Digital Twins for predictive maintenance."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "DevOps-Driven TinyML Framework",
    description: "A comprehensive CI/CD pipeline for updating AI models on resource-constrained IoT devices. The system utilizes a Kubernetes-based cloud backend to train models, which are then compressed and deployed Over-The-Air (OTA) to ESP32/FiPy microcontrollers. Demonstrated here with a real-time gesture recognition application.",
    tags: ["TinyML", "DevOps", "Kubernetes", "IoT", "Gesture Recognition"],
    media: [
      { type: 'video', url: 'media/Demo_Gesture_Recognition_small.mp4', caption: "Real-time Gesture Recognition Demo" },
      { type: 'image', url: 'media/DevOps-based AI-IoT System.png', caption: "CI/CD Pipeline Architecture" },
      { type: 'image', url: 'media/Network_diagram.png', caption: "Cloud-Edge Network Topology" }
    ]
  },
  {
    title: "AI-IoT Vehicle CO2 Prediction",
    description: "An Edge-AI system integrated into a vehicle's CAN bus via OBDII to predict CO2 emissions in real-time. The system uses Transfer Learning to adapt to different driving styles and environments, displaying inference results on a dashboard while driving.",
    tags: ["Automotive IoT", "Edge AI", "Transfer Learning", "CAN Bus", "Smart Cities"],
    media: [
      { type: 'video', url: 'media/Co2_Video_small.mp4', caption: "In-Vehicle Real-time Inference Demo" },
      { type: 'image', url: 'media/IoT-based system for real-time CO2 prediction.png', caption: "Hardware Setup & OBDII Connection" }
    ]
  },
  {
    title: "Smart Aquaponics Monitoring (WaterMon)",
    description: "A cost-effective, low-power IoT solution for monitoring water quality in aquaponics. The system tracks key metrics like pH, dissolved oxygen, and temperature to ensure optimal conditions for both fish and plants, supporting sustainable agriculture.",
    tags: ["AgriTech", "IoT", "Sustainability", "Sensors", "LoRaWAN"],
    media: [
      { type: 'image', url: 'media/Device_Watermon.png', caption: "WaterMon V2.0 System Demo" }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "University of the West of Scotland",
    location: "UK",
    degree: "Ph.D. in Computer Science",
    period: "2021–2024",
    thesis: "AI-Enabled IoT Framework for DevOps-Driven Tiny Machine Learning",
    details: [
      "Designed and implemented an Edge-AI DevOps framework for CI/CD model updates on constrained IoT devices.",
      "Architected a three-tier system (Cloud-Edge-Endpoint) integrating IoT sensing and Edge Computing.",
      "Developed, compressed, and deployed predictive models for CO2 prediction and gesture recognition."
    ],
    url: "https://www.uws.ac.uk/"
  },
  {
    institution: "Polytechnic of Porto (ISEP)",
    location: "Portugal",
    degree: "M.Sc. in Computer Systems Engineering",
    period: "2014–2016",
    thesis: "Live Migration in Cloud Computing Environments",
    details: [
      "Engineered and deployed OpenStack environment utilizing KVM hypervisor.",
      "Designed novel pre-copy live migration algorithms focused on reducing downtime."
    ],
    url: "https://www.isep.ipp.pt/"
  },
  {
    institution: "Damascus University",
    location: "Syria",
    degree: "B.Eng. in Computer Engineering & Automation",
    period: "2009–2013",
    thesis: "Real-Time Robotic Motion Imitation System",
    details: [
      "Designed a robotic arm equipped with control circuits and motion tracking using Microsoft Kinect SDK."
    ],
    url: "http://damascusuniversity.edu.sy/"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "University of the West of Scotland",
    location: "UK",
    role: "Assistant Professor",
    period: "October 2022–Present",
    highlights: [
      "Spearheaded research in Edge AI, leading initiatives on Digital Twins and TinyML DevOps.",
      "Supervised 12+ research projects (2 PhD, 10+ MSc).",
      "Member of the National Edge AI Hub (UK) and AI for Sustainability initiatives.",
      "Directed new modules: AI for Project Managers (MSc) and Data Visualisation & Analysis (UG)."
    ],
    url: "https://www.uws.ac.uk/"
  },
  {
    company: "University of the West of Scotland",
    location: "UK",
    role: "Research & Teaching Fellow | Project Leader",
    period: "June 2021–October 2022",
    highlights: [
      "Managed technical contributions for Horizon Europe P2CODE, H2020 6G BRAINS, and ARCADIAN-IoT.",
      "Co-designed updatable AI model architectures for 5G/6G networks.",
      "Contributed to securing external grant funding (>€20M portfolio)."
    ],
    url: "https://www.uws.ac.uk/"
  },
  {
    company: "SISTRADE",
    location: "Portugal",
    role: "Senior Project Manager",
    period: "Feb 2019 – May 2021",
    highlights: [
      "Managed end-to-end ERP and IoT integration projects for international manufacturing clients.",
      "Implemented real-time operational dashboards integrating high-velocity sensor data."
    ],
    url: "https://www.sistrade.com/"
  },
  {
    company: "PROEF GROUP",
    location: "Portugal",
    role: "R&D Project Manager",
    period: "Aug 2016 – Jan 2019",
    highlights: [
      "Managed contributions to SELFNET H2020 project (Self-Organizing Network Management).",
      "Managed implementation of complex NFV/SDN proof-of-concepts."
    ],
    url: "https://proef.com/en/"
  },
  {
    company: "Novabase",
    location: "Portugal",
    role: "Software Engineer",
    period: "Nov 2015 – Jul 2016",
    highlights: [
      "Deployed and configured OpenStack and VMware environments."
    ],
    url: "https://www.novabase.pt/"
  },
  {
    company: "Caixa Geral de Depósitos",
    location: "Portugal",
    role: "Software Engineer Intern",
    period: "2015",
    highlights: [
      "Collaborated on Waste Management development to optimise network device usage."
    ],
    url: "https://www.cgd.pt/"
  }
];

export const GRANTS: Grant[] = [
  {
    title: "Horizon Europe P2CODE",
    role: "WP Leader",
    period: "2023–2027",
    amount: "€7.15M",
    description: [
      "Managed platform implementation and CI/CD for scalable ML model updates at the edge.",
      "Coordinated technical integration across multiple EU partners."
    ],
    url: "https://cordis.europa.eu/project/id/101092534" 
  },
  {
    title: "UKRI Digital Dairy Chain",
    role: "Research Lead",
    period: "2022–2026",
    amount: "£21M",
    description: [
      "UWS lead for implementing real-time Edge AI and IoT systems to support decarbonisation and sustainability."
    ],
    url: "https://www.digitaldairychain.co.uk/"
  },
  {
    title: "H2020 6G BRAINS",
    role: "Co-Investigator",
    period: "2021–2024",
    amount: "€5.67M",
    description: [
      "Contributed to the implementation of Deep Reinforcement Learning (DRL) models for 6G/B5G networks."
    ],
    url: "https://6g-brains.eu/"
  },
  {
    title: "H2020 ARCADIAN-IoT",
    role: "Technical Contributor",
    period: "2021–2024",
    amount: "€Multi-Million",
    description: [
       "Developed Autonomous Trust, Security, and Privacy Management Frameworks for IoT."
    ],
    url: "https://www.arcadian-iot.eu/"
  },
  {
    title: "H2020 SELFNET",
    role: "Technical Manager & WP Leader",
    period: "2015–2018",
    amount: "€6.86M",
    description: [
      "Designed autonomic network management stack for 5G/B5G networks."
    ],
    url: "https://5g-ppp.eu/selfnet/"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    year: "2023",
    citation: "Alselek, M., et al. “Dynamic AI-IoT: Enabling Updatable AI Models in Ultra-Low-Power 5G IoT Devices.” IEEE Internet of Things Journal.",
    type: "Journal",
    url: "https://ieeexplore.ieee.org/abstract/document/10349697" 
  },
  {
    year: "2025",
    citation: "Fayos, R., Alselek, M., et al. “5G Tiny-ML AI-based IoT eNose System for Hazardous Odour Detection.” IEEE Sensors Journal.",
    type: "Journal",
    url: "https://scholar.google.com/scholar?q=5G+Tiny-ML+AI-based+IoT+eNose+System+for+Hazardous+Odour+Detection"
  },
  {
    year: "2025",
    citation: "Garcia, J., Alselek, M., et al. “AI-driven 5G IoT e-nose for beverage classification.” Applied Intelligence, Springer.",
    type: "Journal",
    url: "https://scholar.google.com/scholar?q=AI-driven+5G+IoT+e-nose+for+beverage+classification"
  },
  {
    year: "2024",
    citation: "Alselek, M., et al. “Agile AI and Firmware Management in IoT: DevOps for Microcontrollers.” IEEE SpliTech Conference.",
    type: "Conference",
    url: "https://scholar.google.com/scholar?q=Agile+AI+and+Firmware+Management+in+IoT"
  },
  {
    year: "2023",
    citation: "Alselek, M., et al. “Transfer Learning-Enabled IoT System for Continuous Prediction of Vehicle CO2 Concentration.” IEEE ISC2.",
    type: "Conference",
    url: "https://scholar.google.com/scholar?q=Transfer+Learning-Enabled+IoT+System+for+Continuous+Prediction+of+Vehicle+CO2+Concentration"
  },
  {
    year: "2028 (Booked)",
    citation: "Alselek, M., et al. “Functional Testing of the SELFNET Framework.” In: SELFNET Consortium",
    type: "Book Chapter"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming & AI/ML",
    skills: ["Python", "C/C++", "MicroPython", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "TinyML", "LLMs", "Prompt Engineering"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["OpenStack", "Kubernetes", "Docker", "Git", "CI/CD Pipelines", "Terraform", "RabbitMQ", "AWS"]
  },
  {
    category: "IoT & Embedded",
    skills: ["ESP32", "Raspberry Pi", "NVIDIA Jetson", "BeagleBone", "LoRa", "NB-IoT", "Bluetooth", "5G/6G Networks"]
  },
  {
    category: "Languages",
    skills: ["English (Fluent)", "Arabic (Native)", "Portuguese (Fluent)"]
  }
];

export const AWARDS: Award[] = [
  {
    year: "2021",
    title: "Ph.D. Scholarship",
    institution: "University of the West of Scotland",
    description: "Full funding for doctoral research in Edge AI."
  },
  {
    year: "2017",
    title: "Excellence Award",
    institution: "H2020 SELFNET Consortium",
    description: "Recognized as Top 3 contributors in the consortium."
  },
  {
    year: "2014",
    title: "M.Sc. Scholarship",
    institution: "Polytechnic of Porto (ISEP)",
    description: "Awarded to the top 1% of applicants."
  }
];

export const MEMBERSHIPS: Service[] = [
  {
    organization: "National Edge AI Hub (UK)",
    role: "Member",
    details: "Active participation in national strategy and research initiatives."
  },
  {
    organization: "Beyond 5G Hub (UWS)",
    role: "Member",
    details: "Linking research with national strategy on 6G/B5G."
  },
  {
    organization: "Advance HE",
    role: "Fellow (FHEA)",
    details: "Recognized for excellence in teaching and academic leadership."
  },
  {
    organization: "IEEE",
    role: "Member",
    details: "Active member contributing to IEEE journals and conferences."
  },
  {
    organization: "Academic Journals",
    role: "Active Peer Reviewer",
    details: "IEEE Open Journal of the Communications Society, Information Fusion Journal, and others."
  }
];

export const TEACHING: Teaching[] = [
  {
    module: "AI for Project Managers (MSc)",
    level: "Postgraduate",
    description: "Directed the design, delivery, and assessment of curriculum focusing on AI adoption in business contexts."
  },
  {
    module: "Data Visualisation & Analysis (UG)",
    level: "Undergraduate",
    description: "Teaching core concepts of data analysis and visualization techniques to CS students."
  },
  {
    module: "Network Security & IoT Systems",
    level: "Undergraduate/Postgraduate",
    description: "Delivered specialized teaching on security frameworks and embedded systems architectures."
  },
  {
    module: "Enterprise Architecture & IT Strategy",
    level: "Management",
    description: "Lectures on systems analysis, design, and strategic IT management."
  }
];
