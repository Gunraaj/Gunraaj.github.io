export interface Project {
    id: string;
    title: string;
    domainTags: string[];
    tools: string[];
    shortDescription: string;
    highlights: string[];
    links: { label: string; url: string; icon?: string }[];
    featured: boolean;
    enabled: boolean;
    heroImage?: string;
    gallery?: string[];
    details: {
        problem: string;
        objectives: string[];
        methodology: string[];
        results: string[];
        visuals: string[];
        codeSnippet?: {
            language: string;
            code: string;
            filename: string;
        };
        challenges?: string[];
        interdisciplinaryAnalysis?: string;
    };
}

export interface Testimonial {
    name: string;
    role: string;
    organization: string;
    quote: string;
    initials: string;
}

export interface EthicsCaseStudy {
    title: string;
    icon: string;
    scenario: string;
    ethicalDilemma: string;
    analysis: string[];
    personalReflection: string;
}

export interface SwotItem {
    text: string;
}

export interface SiteConfig {
    profile: {
        name: string;
        title: string;
        program: string;
        institution: string;
        submissionDate: string;
        identityLine: string;
        philosophy: string;
        tagline: string;
        social: { email: string; linkedin: string; github: string; resume: string };
    };
    about: string[];
    learningPhilosophy: {
        journey: string[];
        coreValues: { title: string; description: string; icon: string }[];
        academicPhilosophy: string;
    };
    resume: {
        education: { degree: string; institution: string; period: string; details: string[] }[];
        jobProfile: string;
        specialization: string[];
        workExperience: { title: string; organization: string; period: string; type: string; details: string[] }[];
        areasOfInterest: string[];
        certifications: { title: string; issuer: string; year: string }[];
        awards: { title: string; description: string }[];
        volunteerExperience: { role: string; org: string; description: string }[];
        coCurricular: { activity: string; description: string }[];
        hobbies: { name: string; icon: string }[];
    };
    navigation: { label: string; href: string; enabled?: boolean }[];
    domains: { title: string; items: string[] }[];
    skills: { category: string; tools: string[] }[];
    advancedSkills: {
        technical: { name: string; proficiency: number; details: string; artefact?: string }[];
        soft: { name: string; evidence: string; artefact?: string }[];
        creative: { name: string; evidence: string; artefact?: string }[];
    };
    projects: Project[];
    experience: { org: string; location: string; roles: { title: string; category: string; date: string; details: string[] }[] }[];
    collaborativeExperiences: {
        title: string;
        context: string;
        role: string;
        teamDynamics: string;
        conflictResolution?: string;
        achievements: string[];
    }[];
    ethics: EthicsCaseStudy[];
    futureAspirations: {
        shortTerm: { goal: string; timeline: string; strategy: string }[];
        longTerm: { goal: string; description: string }[];
        furtherStudy: string[];
        continuousImprovement: string[];
    };
    swot: {
        strengths: SwotItem[];
        weaknesses: SwotItem[];
        opportunities: SwotItem[];
        threats: SwotItem[];
    };
    conclusion: {
        summary: string[];
        lessonsLearned: string[];
        growthAreas: string[];
        selfEvaluation: string;
    };
    testimonials: Testimonial[];
    design: { category: string; items: string[] }[];
}

export const siteConfig: SiteConfig = {
    profile: {
        name: "Gunraaj Singh",
        title: "AI Software Engineer",
        program: "B.Tech — Electrical & Computer Engineering",
        institution: "Pandit Deendayal Energy University, Gandhinagar",
        submissionDate: "April 2026",
        identityLine: "Bridging Power Electronics, Control Systems, and AI-Driven Architecture.",
        philosophy: "Building intelligent physical systems that scale.",
        tagline: "Where Circuits Meet Code — Engineering Beyond Boundaries.",
        social: {
            email: "mailto:gunraj1singh@gmail.com",
            linkedin: "https://www.linkedin.com/in/gunraaj-singh/",
            github: "https://github.com/Gunraaj",
            resume: "/resume.pdf"
        }
    },
    about: [
        "I am a 3rd-year B.Tech Electrical & Computer Engineering student at Pandit Deendayal Energy University (PDEU), with a strong academic and practical foundation in power systems, power electronics, electrical machines, and control engineering.",
        "Through coursework, simulations, and projects, I realized that modern engineering problems do not exist in isolation. Power systems increasingly interact with software, control algorithms, and data-driven intelligence, requiring engineers who can think across domains.",
        "This led me to work simultaneously in core electrical engineering, AI-assisted modeling, and system-level design, while also developing leadership, communication, and visual branding skills through large-scale technical events and organizational roles."
    ],
    learningPhilosophy: {
        journey: [
            "My academic journey began with a childhood fascination for taking apart electronics — radios, motors, circuit boards — not to break them, but to understand the invisible forces that made them work. That curiosity evolved into a structured pursuit of electrical engineering at PDEU.",
            "In my first year, I was captivated by the elegance of circuit theory — how a few mathematical relationships could predict the behavior of complex systems. But I quickly realized that textbook problems were just the beginning. Real-world systems are messy, nonlinear, and interdisciplinary.",
            "By my second year, I had begun bridging the gap between hardware and software. Learning Python and MATLAB wasn't just about coding — it was about building tools to simulate, optimize, and control physical systems. When I trained my first neural network to tune a PI controller, I knew I had found my intersection: the space where classical engineering meets intelligent computation.",
            "Now in my third year, I operate at the convergence of power electronics, control systems, and AI. Every project I undertake is an experiment in synthesizing knowledge across boundaries — because the most impactful solutions don't come from one discipline alone."
        ],
        coreValues: [
            {
                title: "Systems Thinking",
                description: "Every problem is a system. I approach challenges not by isolating components, but by understanding feedback loops, dependencies, and emergent behaviors across the entire architecture.",
                icon: "🔄"
            },
            {
                title: "Learning by Building",
                description: "Theory without practice is incomplete. I believe in hands-on experimentation — from soldering circuits to deploying web apps — as the most authentic form of understanding.",
                icon: "🔨"
            },
            {
                title: "Interdisciplinary Courage",
                description: "I refuse to be boxed into one domain. The future belongs to engineers who can speak the language of hardware, software, data, and design simultaneously.",
                icon: "🌐"
            },
            {
                title: "Purposeful Creation",
                description: "Every project should solve a real problem or push a boundary. I'm not interested in building for the sake of building — I build to understand, to improve, and to contribute.",
                icon: "🎯"
            }
        ],
        academicPhilosophy: "I believe the most transformative engineering happens at intersections. When control theory meets machine learning, when power electronics meets software architecture, when design thinking meets data analysis — that's where breakthrough solutions emerge. My academic philosophy is rooted in cross-pollination: deliberately seeking knowledge from adjacent fields and synthesizing it into something greater than the sum of its parts. Education isn't a linear path; it's a network of connections waiting to be discovered."
    },
    resume: {
        education: [
            {
                degree: "B.Tech in Electrical & Computer Engineering",
                institution: "Pandit Deendayal Energy University (PDEU), Gandhinagar",
                period: "2023 – 2027 (Expected)",
                details: [
                    "Relevant Coursework: Power Electronics, Control Systems, Electrical Machines, Power Systems, Signals & Systems, Microprocessors, Data Structures",
                    "Active participant in technical clubs and hackathons",
                    "Focus on interdisciplinary projects bridging EE and CS"
                ]
            },
            {
                degree: "Class 12 (Higher Secondary) — Science Stream",
                institution: "Puna International School, Zundal, Gandhinagar (CBSE)",
                period: "Completed 2023",
                details: [
                    "Successfully completed the AISSCE (Senior School Certificate Examination)",
                    "Maintained a clean conduct record (conduct marked as 'Good')"
                ]
            },
            {
                degree: "Class 11 (Senior Secondary) — Science Stream",
                institution: "Puna International School, Zundal, Gandhinagar (CBSE)",
                period: "Completed 2022",
                details: [
                    "Built the core academic base in Physics, Chemistry, and Mathematics required for higher engineering studies."
                ]
            },
            {
                degree: "Class 10 (Secondary)",
                institution: "Podar International School, Chandkheda, Ahmedabad (CBSE)",
                period: "Completed 2021",
                details: [
                    "Academic Excellence across diverse subjects including Sanskrit and Information Technology.",
                    "Completed coursework in Employability Skills, covering ICT and Entrepreneurial skills."
                ]
            }
        ],
        jobProfile: "Seeking roles at the intersection of power electronics, embedded systems, and intelligent control — targeting positions such as Power Electronics Engineer, Controls Engineer, or AI/ML Systems Engineer within the EV, renewable energy, or industrial automation sectors. My ideal role involves designing hardware-software co-optimized systems where classical engineering rigor meets modern computational techniques.",
        specialization: [
            "Power Electronics — Converter design, gate-drive circuits, efficiency optimization, wide-bandgap semiconductor applications",
            "Control Systems — PI/PID controllers, neural-network-augmented control loops, MATLAB/Simulink-based modeling and validation",
            "AI for Engineering — Applying machine learning (ANNs, signal processing) to enhance traditional engineering workflows"
        ],
        workExperience: [
            {
                title: "Vice President",
                organization: "Anirveda PDEU — Technical Club",
                period: "Jun 2025 – Present",
                type: "Leadership",
                details: [
                    "Architecting strategic vision and operational roadmap for a 50+ member technical organization",
                    "Managing 7 sub-committees (Technical, Design, PR, Logistics, Finance, Content, Outreach)",
                    "Orchestrating flagship events: BREACH Hackathon (200+ participants) and INTROVIA technical fest",
                    "Building cross-functional team synergy and resolving inter-committee conflicts"
                ]
            },
            {
                title: "Head — Graphic Design & Video Editing",
                organization: "Anirveda PDEU",
                period: "Sep 2024 – Jun 2025",
                type: "Creative Direction",
                details: [
                    "Defined and maintained complete visual brand identity across all organizational touchpoints",
                    "Mentored a team of 15+ designers and video editors in professional workflows",
                    "Produced high-production aftermovies and promotional content for university events",
                    "Optimized creative pipelines for rapid asset deployment during event cycles"
                ]
            },
            {
                title: "Graphic Design Core",
                organization: "Google Developer Group on Campus, PDEU",
                period: "Oct 2024 – Aug 2025",
                type: "Community Design",
                details: [
                    "Created design assets bridging complex tech topics for student audiences",
                    "Designed event identities for workshops, seminars, and hackathons",
                    "Produced motion graphics and technical visual content for event promotions"
                ]
            }
        ],
        areasOfInterest: [
            "Power Electronics & Drives",
            "Control Systems & Automation",
            "AI/ML for Engineering Applications",
            "Embedded Systems & IoT",
            "UI/UX Design & Visual Communication",
            "Smart Home Automation"
        ],
        certifications: [
            { title: "MATLAB Onramp & Simulink Onramp", issuer: "MathWorks", year: "2024" },
            { title: "Python for Data Science", issuer: "NPTEL / Coursera", year: "2024" },
            { title: "Introduction to Machine Learning", issuer: "NPTEL", year: "2025" },
            { title: "Power Electronics Fundamentals", issuer: "NPTEL", year: "2025" }
        ],
        awards: [
            { title: "Sparkathon Hackathon Finalist", description: "Developed EcoPoints sustainability platform under restricted timeline" },
            { title: "Dean's List Recognition", description: "Consistent academic performance in core engineering subjects" }
        ],
        volunteerExperience: [
            { role: "Technical Mentor", org: "Anirveda PDEU", description: "Mentored junior students in graphic design and video editing workflows, helping first-years build technical skills outside the classroom." },
            { role: "Event Organizing Volunteer", org: "PDEU Technical Fests", description: "Coordinated logistics and visual assets for university-level technical festivals, ensuring seamless execution of multi-day events." }
        ],
        coCurricular: [
            { activity: "BREACH Hackathon Co-organizer", description: "Spearheaded the flagship hackathon of Anirveda, managing cross-functional teams from ideation to execution." },
            { activity: "INTROVIA Event Lead", description: "Directed the visual and operational framework for Anirveda's premier technical event series." },
            { activity: "Smart Home Automation Project", description: "Designed and deployed a complete Home Assistant-based automation system with custom dashboards, scripts, and integrations — a personal project that blends IoT, UI design, and systems engineering." }
        ],
        hobbies: [
            { name: "Competitive Gaming", icon: "🎮" },
            { name: "Graphic Design & Typography", icon: "🎨" },
            { name: "Home Automation Tinkering", icon: "🏠" },
            { name: "Anime & Manga", icon: "📺" },
            { name: "Circuit Building", icon: "⚡" },
            { name: "Photography", icon: "📷" }
        ]
    },
    navigation: [
        { label: "Home", href: "#hero" },
        { label: "Philosophy", href: "#philosophy" },
        { label: "Resume", href: "#resume" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Leadership", href: "#leadership" },
        { label: "Ethics", href: "#ethics" },
        { label: "Future", href: "#future" },
        { label: "Conclusion", href: "#conclusion" },
        { label: "Testimonials", href: "#testimonials" }
    ],
    domains: [
        {
            title: "Power Electronics",
            items: [
                "MOSFET and IGBT switching behavior",
                "Body diode and substrate concepts",
                "Gate charge and switching losses",
                "Synchronous and asynchronous buck converters",
                "Bootstrap circuits and gate drive design",
                "Efficiency optimization techniques"
            ]
        },
        {
            title: "Control Systems",
            items: [
                "PI and PID controllers",
                "Closed-loop speed control",
                "Load disturbance rejection",
                "Stability and transient response analysis",
                "Hybrid ANN + classical control approaches"
            ]
        },
        {
            title: "Electrical Machines",
            items: [
                "DC motor drives",
                "BLDC motor speed control",
                "PMSM control concepts",
                "Torque-speed characteristics"
            ]
        },
        {
            title: "Power Systems",
            items: [
                "System operation fundamentals",
                "Load flow concepts",
                "Stability considerations"
            ]
        },
        {
            title: "High Voltage Engineering",
            items: [
                "Insulation concepts",
                "Overvoltage fundamentals"
            ]
        }
    ],
    skills: [
        {
            category: "Programming Languages",
            tools: ["Python", "C / C++", "MATLAB", "TypeScript", "JavaScript"]
        },
        {
            category: "Engineering & Simulation Tools",
            tools: ["MATLAB / Simulink", "PSIM", "Simscape", "PowerWorld"]
        },
        {
            category: "Software & Dev Tools",
            tools: ["React", "Astro", "Tailwind CSS", "OpenCV", "NumPy", "Git", "VS Code", "LaTeX"]
        }
    ],
    advancedSkills: {
        technical: [
            {
                name: "Python",
                proficiency: 90,
                details: "NumPy, SciPy, OpenCV, FFT Analysis, Data Pipelines, Automation Scripts",
                artefact: "Built a complete vibration analysis system processing video input through FFT pipelines — extracting frequency-domain features from raw pixel displacement data."
            },
            {
                name: "MATLAB / Simulink",
                proficiency: 85,
                details: "Motor Control Modeling, Power Electronics Simulation, ANN Training, Closed-Loop Design",
                artefact: "Designed and validated a hybrid ANN+PI controller for PM-BLDC motor speed regulation, achieving 35% RMS error reduction over static tuning."
            },
            {
                name: "TypeScript / React",
                proficiency: 80,
                details: "Component Architecture, State Management (Zustand), API Integration, Web Audio API",
                artefact: "Built KAIRO — a full-stack AI productivity dashboard with real-time binaural beat synthesis using the Web Audio API."
            },
            {
                name: "C / C++",
                proficiency: 75,
                details: "Data Structures, OOP, Embedded Programming, Algorithm Design",
                artefact: "Implemented core data structures and algorithms for competitive programming and embedded system prototyping."
            }
        ],
        soft: [
            {
                name: "Leadership & Team Management",
                evidence: "As Vice President of Anirveda PDEU, I directly manage 7 sub-committees comprising 50+ members. I architect the club's long-term vision, resolve inter-team conflicts, and ensure cross-functional synergy across diverse technical and creative teams.",
                artefact: "Successfully orchestrated BREACH Hackathon and INTROVIA — flagship events requiring coordination across logistics, design, PR, and technical tracks."
            },
            {
                name: "Visual Communication",
                evidence: "Defined the complete visual language and brand identity for Anirveda. Mentored 15+ designers in design principles, motion typography, and digital workflows. Produced high-production aftermovies and promotional content.",
                artefact: "Over 50+ unique digital and print design assets produced across multiple organizations."
            },
            {
                name: "Public Speaking & Presentation",
                evidence: "Regularly present technical concepts to diverse audiences — from hackathon pitches to club meetings to academic seminars. Ability to translate complex engineering ideas into accessible narratives.",
            },
            {
                name: "Adaptability & Cross-Domain Learning",
                evidence: "Transitioned from pure electrical engineering to web development, AI/ML, and UI design within two years — demonstrating rapid learning across fundamentally different domains.",
            }
        ],
        creative: [
            {
                name: "Graphic Design",
                evidence: "50+ professional-grade design assets created for clubs and organizations. Expert in Figma, Canva Pro, and Adobe Creative Suite. Specialties include event posters, social media campaigns, and brand identity systems.",
                artefact: "Designed complete brand identity for Anirveda PDEU — color palette, typography system, visual guidelines, merchandise templates."
            },
            {
                name: "Video Editing & Motion Graphics",
                evidence: "Produced event aftermovies, promotional reels, and motion typography animations for university-level events. Experienced with DaVinci Resolve and Adobe Premiere Pro.",
                artefact: "High-production aftermovie for BREACH Hackathon with cinematic transitions, dynamic text overlays, and synchronized audio design."
            },
            {
                name: "UI/UX Design Thinking",
                evidence: "Applied design thinking principles to engineering projects — KAIRO's UI was designed around cognitive psychology research on focus states. Home automation dashboards designed with glassmorphism aesthetics for maximum usability.",
                artefact: "Custom Home Assistant dashboard with hand-coded glassmorphism UI — a personal project applying design thinking to IoT interfaces."
            }
        ]
    },
    projects: [
        {
            id: "kairo-ai-productivity",
            title: "KAIRO: AI-Powered Productivity & Brainwave Tuning",
            domainTags: ["Web App", "AI Integration", "UX Engineering"],
            tools: ["React", "TypeScript", "Tailwind CSS", "Gemini AI", "Web Audio API"],
            shortDescription: "A next-generation productivity dashboard featuring AI-driven task breakdown and an embedded real-time audio brainwave entrainment engine.",
            heroImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            ],
            highlights: [
                "Automated task breakdowns leveraging Gemini AI",
                "Dynamic binaural beat generator mapping brainwaves to work states",
                "Immersive dark-mode UI with beautiful neon accents",
                "Local-first state management with Zustand and LocalStorage"
            ],
            links: [],
            featured: true,
            enabled: true,
            details: {
                problem: "Traditional productivity tools track tasks but fail to manage cognitive load or biological focus. Users often struggle with large abstract tasks and environmental distractions.",
                objectives: [
                    "Develop a local-first React dashboard that eliminates context switching.",
                    "Integrate Google's Gemini AI to automatically deconstruct complex goals into actionable micro-tasks.",
                    "Implement a Web Audio API-based DJ system to synthesize focusing binaural beats (Alpha/Beta waves) depending on the task type."
                ],
                methodology: [
                    "UI Construction: Designed a highly visual 'Bento Box' layout using Tailwind CSS.",
                    "AI Analysis: Used the Gemini API to rapidly categorize workloads into deep focus vs creative tasks.",
                    "Audio Engine: Generated uncompressed raw sine wave oscillators matched precisely to cognitive enhancement frequencies (e.g. 14Hz Beta)."
                ],
                results: [
                    "Drastically reduced user paralysis on starting large projects.",
                    "Created an immersive flow-state environment seamlessly managed within a single browser tab.",
                    "Optimized the AI response time to near-instant task generation."
                ],
                visuals: [
                    "UI Dashboard Overview",
                    "Task Breakdown Flow",
                    "Audio DJ Frequency Control Panel"
                ],
                challenges: [
                    "Balancing AI latency with real-time audio synthesis required careful async state management.",
                    "Browser audio policies (autoplay restrictions) necessitated creative user-interaction-gated audio initialization.",
                    "Designing a UI that was both informationally dense and aesthetically calming required multiple iteration cycles."
                ],
                interdisciplinaryAnalysis: "KAIRO integrates computer science (React, state management), cognitive neuroscience (brainwave entrainment theory), AI/ML (Gemini API), and audio engineering (Web Audio API synthesis). This project demonstrates how software engineering can bridge psychology and technology to create tools that enhance human performance.",
                codeSnippet: {
                    language: "tsx",
                    filename: "App.tsx",
                    code: `useEffect(() => {
    if (activeTask && audioSettings.engineEnabled) {
      console.log("Analyzing task:", activeTask.name);
      analyzeBrainwaveMode(activeTask.name).then(mode => {
        console.log("Setting mode to:", mode);
        setActiveMode(mode);
        // Automate mixing console
        setAudioSettings(prev => {
          let freq = 14; // Beta (Focus)
          if (mode === 'creativity') freq = 10; // Alpha
          if (mode === 'deep') freq = 6; // Theta
          return { ...prev, beatFrequency: freq };
        });
      });
    }
  }, [activeTask?.name, audioSettings.engineEnabled]);`
                }
            }
        },
        {
            id: "vibration-analysis-system",
            title: "Vibration Analysis System (Computer Vision Based)",
            domainTags: ["Signal Processing", "Mechanical Diagnostics", "Computer Vision"],
            tools: ["Python", "OpenCV", "NumPy", "SciPy", "FFT", "Butterworth Filters"],
            shortDescription: "Non-contact vibration analysis using video input to extract meaningful frequency-domain and statistical features.",
            heroImage: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1543286386-713bdd548b25?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
            ],
            highlights: [
                "ROI-based motion tracking from video",
                "Time-domain signal extraction",
                "Frequency-domain analysis using FFT",
                "Harmonic identification",
                "Statistical feature extraction (RMS, skewness, kurtosis)"
            ],
            links: [],
            featured: true,
            enabled: true,
            details: {
                problem: "Non-contact vibration measurement is useful when sensors are unavailable or hard to mount; video-based tracking can estimate displacement and dominant frequencies.",
                objectives: [
                    "Track sub-pixel motion of a selected ROI across frames.",
                    "Remove camera shake / global motion.",
                    "Compute displacement vs time and spectrum via FFT.",
                    "Extract dominant frequency peaks and amplitude estimate.",
                    "Validate against a known-frequency test (fan, metronome, phone vibration video)."
                ],
                methodology: [
                    "Calibration: pixels → mm using known scale in frame.",
                    "Motion extraction: feature tracking (e.g., KLT) or phase correlation.",
                    "Denoising: detrending, bandpass, windowing (Hann/Hamming).",
                    "Spectrum: FFT and peak detection; confidence via SNR."
                ],
                results: [
                    "Dominant frequency estimate (Hz) and error vs reference",
                    "Runtime per minute of video",
                    "Minimum detectable amplitude (in pixels/mm) under settings"
                ],
                visuals: [
                    "GIF of ROI tracking overlay",
                    "Displacement-time plot",
                    "FFT spectrum with labeled peaks",
                    "A 'before vs after filtering' comparison plot"
                ],
                challenges: [
                    "Camera shake introduced noise that contaminated low-frequency components, requiring robust global motion compensation.",
                    "Sub-pixel accuracy demanded interpolation techniques beyond basic template matching."
                ],
                interdisciplinaryAnalysis: "This project bridges mechanical engineering (vibration theory), signal processing (FFT, filtering), computer vision (OpenCV tracking), and statistics (feature extraction). It demonstrates how software can replace expensive physical sensors for predictive maintenance applications.",
                codeSnippet: {
                    language: "python",
                    filename: "vibration_analyzer_v11.py",
                    code: `def _analyze_signal(self, data_log, fps):
    # Preprocessing
    sig_x = x_series - np.mean(x_series)
    if self.cfg.DETREND: sig_x = detrend(sig_x)
    if self.cfg.FILTER_TYPE: sig_x = self._apply_filter(sig_x, fps)

    # FFT Computation
    n = len(sig_x)
    freqs = fftfreq(n, 1/fps)
    fft_x = fft(sig_x)
    mag_x = np.abs(fft_x)
    
    # Peak Detection
    pos_mask = freqs >= 0
    pos_freqs = freqs[pos_mask]
    pos_mag_x = mag_x[pos_mask]
    
    idx_x = np.argmax(pos_mag_x[1:]) + 1
    peak_x = pos_freqs[idx_x]`
                }
            }
        },
        {
            id: "pm-bldc-motor-control",
            title: "PM-BLDC Motor Speed Control using ANN + PI",
            domainTags: ["Electrical Machines", "Control Systems", "AI"],
            tools: ["MATLAB", "Simulink"],
            shortDescription: "Hybrid ANN + PI controller for closed-loop speed control of PM-BLDC motor.",
            heroImage: "https://images.unsplash.com/photo-1581092334243-d25089ce2413?auto=format&fit=crop&w=1200&q=80",
            gallery: [],
            highlights: [
                "Closed-loop speed control",
                "Hybrid ANN + PI controller",
                "Improved transient and steady-state performance"
            ],
            links: [],
            featured: true,
            enabled: true,
            details: {
                problem: "Classic PI controllers degrade under nonlinearities, parameter variations, and shifting load dynamics in BLDC motors. A rigid system cannot adapt to physical wear or heat.",
                objectives: [
                    "Build an accurate motor model and baseline PI controller to establish a performance floor.",
                    "Train an Artificial Neural Network (ANN) to assist and dynamically tune the control loop.",
                    "Compare classical PI vs the Hybrid approach across severe disturbance and load step scenarios."
                ],
                methodology: [
                    "Data Collection: Ran extensive Simulink simulations with the baseline PI controller to generate training data.",
                    "ANN Architecture: Designed a multi-layer feedforward network to predict optimal PI gains based on error and error-derivative vectors.",
                    "Integration: Embedded the trained ANN back into the primary control loop to adjust parameters in real-time."
                ],
                results: [
                    "Reduced RMS speed error by over 35% compared to static tuning.",
                    "Effectively eliminated peak overshoot during start-up transients.",
                    "Decreased settling time under heavy load steps by a factor of 2.",
                    "Demonstrated high robustness across simulated stator resistance and inertia variations."
                ],
                visuals: [
                    "Hybrid Control Architecture Diagram",
                    "Speed response vs setpoint tracking plot",
                    "Disturbance rejection characteristics",
                    "ANN Loss Curve and Error distribution"
                ],
                challenges: [
                    "Training data generation required extensive simulation time to cover the full operating envelope.",
                    "Preventing ANN overfitting while maintaining real-time inference speed was a delicate balance."
                ],
                interdisciplinaryAnalysis: "This project merges electrical machine theory, classical control engineering (PI controllers), and artificial intelligence (neural networks). It exemplifies how AI can augment — not replace — traditional engineering methods, creating adaptive systems that outperform either approach alone."
            }
        },
        {
            id: "synchronous-buck-converter",
            title: "Synchronous Buck Converter Design",
            domainTags: ["Power Electronics"],
            tools: ["MATLAB", "Simulink"],
            shortDescription: "Design and simulation of a synchronous buck converter with efficiency optimization.",
            heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1553335520-2c700947ba96?auto=format&fit=crop&w=800&q=80"
            ],
            highlights: [
                "Derivation of output voltage relationship",
                "Inductor and capacitor sizing",
                "Comparison with conventional buck converter",
                "Efficiency optimization using synchronous rectification"
            ],
            links: [],
            featured: false,
            enabled: true,
            details: {
                problem: "Efficient DC–DC conversion is critical for modern power systems, requiring stable regulation under severe line and load transients without massive thermal dissipation.",
                objectives: [
                    "Design a robust power stage for target Vin/Vout/Iout minimizing conduction losses.",
                    "Model the control loop and computationally tune the controller for rapid transient response.",
                    "Compare conventional asynchronous PWM strategies against synchronous rectification.",
                    "Validate rigorous ripple targets and theoretical efficiency limits via simulation."
                ],
                methodology: [
                    "Mathematical modeling of inductor, capacitor, and switching component values.",
                    "Simulation of a baseline buck converter in MATLAB/Simulink.",
                    "Implementation of synchronous rectification by replacing the free-wheeling diode with a MOSFET.",
                    "Iterative loop tuning to hit phase and gain margin targets."
                ],
                results: [
                    "Achieved <1% output voltage ripple at maximum load.",
                    "Decreased settling time for load steps by 40% compared to baseline.",
                    "Estimated efficiency improved from 85% to 94% at nominal load.",
                    "Verified unconditionally stable loop performance (Phase Margin > 60°)."
                ],
                visuals: [
                    "Converter schematic + control block diagram",
                    "Gate drive switching waveform plot",
                    "Inductor current ripple analysis",
                    "Transient response comparison plot",
                    "Bode plot of optimized loop gain"
                ]
            }
        },
        {
            id: "ecopoints-sustainability",
            title: "EcoPoints: Gamified Sustainability Platform",
            domainTags: ["Hackathon", "Web Platform", "Sustainability"],
            tools: ["Web Core", "Gamification Architecture"],
            shortDescription: "A hackathon application built to incentivize daily eco-friendly actions using a rich progression and points-based gamification loop.",
            heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
            ],
            highlights: [
                "Actionable reward system mapping carbon footprint offset to digital currency",
                "Community engagement leaderboards and social tracking",
                "Architected during a restricted timeline for the Sparkathon challenge"
            ],
            links: [],
            featured: false,
            enabled: true,
            details: {
                problem: "Climate change and sustainability are often viewed as macro-level issues, detaching the average consumer from feeling their personal impact. There is a lack of immediate incentive for eco-friendly habits.",
                objectives: [
                    "Create an intuitive web application providing instant feedback and rewards for sustainable habits.",
                    "Build a scalable data model to track various user actions (recycling, commute changes, energy reduction).",
                    "Ensure the platform remains beginner-friendly, heavily focusing on accessibility and clear UI patterns."
                ],
                methodology: [
                    "Conceptualization: Drafted a core game-loop around real-world actions resulting in digital token generation.",
                    "Design System: Kept visual noise low, utilizing calm, natural hues to contrast standard application design.",
                    "Implementation: Engineered core modules strictly following the Sparkathon guidelines to highlight feasibility over feature-creep."
                ],
                results: [
                    "Developed a fully functional prototype capturing the essential proof of concept.",
                    "Outlined a projected 15% increase in user retention via the leaderboard module (simulated).",
                    "Highlighted the power of behavioral economics applied to software engineering."
                ],
                visuals: [
                    "Leaderboard Implementation",
                    "Carbon Offset Tracker Graph",
                    "Point Conversion Screen"
                ]
            }
        },
        {
            id: "pmsm-temp-control",
            title: "PMSM Temperature-Based Speed Control",
            domainTags: ["Electrical Machines", "Control Systems"],
            tools: ["MATLAB", "Simulink"],
            shortDescription: "Adaptive speed regulation for PMSM based on temperature.",
            heroImage: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80",
            gallery: [],
            highlights: [
                "Temperature-dependent control logic",
                "Adaptive speed regulation"
            ],
            links: [],
            featured: false,
            enabled: true,
            details: {
                problem: "Permanent Magnet Synchronous Motor (PMSM) parameters strongly drift with thermal load, resulting in severe degradation of traditional, statically-tuned speed control schemes.",
                objectives: [
                    "Model intricate temperature effects on core motor parameters (resistance, flux linkage).",
                    "Design and implement adaptive, temperature-aware control logic.",
                    "Simulate and validate performance regressions under varying operational thermal profiles."
                ],
                methodology: [
                    "Thermal Modeling: Approximated parameter variation using linear and non-linear thermal drift equations within Simulink.",
                    "Control Modification: Altered a standard Field Oriented Control (FOC) architecture to ingest a temperature estimate and adapt its internal gains.",
                    "Testing: Subjected the model to aggressive drive cycles that simulate extreme heat accumulation."
                ],
                results: [
                    "Secured tight speed regulation across a 100°C operational delta.",
                    "Prevented thermally-induced torque ripple and instability.",
                    "Extended theoretical motor lifespan by actively mitigating over-current events during peak thermal load."
                ],
                visuals: [
                    "Thermal Drift Parameter Graphs",
                    "Adaptive FOC Block Diagram",
                    "Speed Regulation tracking across a Drive Cycle"
                ]
            }
        }
    ],
    experience: [
        {
            org: "Anirveda PDEU",
            location: "Gandhinagar, Gujarat",
            roles: [
                {
                    title: "Vice President",
                    category: "Leadership & Strategy",
                    date: "Jun 2025 – Present",
                    details: [
                        "Architecting the club's long-term vision and operational roadmap.",
                        "Directly managing 7 distinct sub-committees to ensure cross-functional synergy.",
                        "Spearheading flagship events like BREACH Hackathon and INTROVIA.",
                        "Overseeing resource allocation and strategic organizational growth."
                    ]
                },
                {
                    title: "Graphic Designing & Video Editing HEAD",
                    category: "Creative Direction",
                    date: "Sep 2024 – Jun 2025",
                    details: [
                        "Defined the visual language and brand identity for the entire organization.",
                        "Mentored a team of 15+ designers and video editors.",
                        "Produced high-production value aftermovies and promotional reels.",
                        "Optimized digital workflows for rapid creative asset deployment."
                    ]
                },
                {
                    title: "Graphic Designing SUBCOM",
                    category: "Visual Design",
                    date: "Sep 2023 – Sep 2024",
                    details: [
                        "Designed over 50+ unique digital and print assets for club campaigns.",
                        "Executed precise motion typography and visual storytelling.",
                        "Maintained consistent brand guidelines across social media channels.",
                        "Collaborated with the publicity team to maximize student engagement."
                    ]
                }
            ]
        },
        {
            org: "Google Developer Group on Campus, PDEU",
            location: "Gandhinagar, Gujarat",
            roles: [
                {
                    title: "Graphic Designing Core",
                    category: "Community Design",
                    date: "Oct 2024 – Aug 2025",
                    details: [
                        "Creating specialized design assets to bridge the gap between complex tech and student audience.",
                        "Designing event identities for workshops, seminars, and hackathons.",
                        "Producing technical motion graphics for event teasers.",
                        "Collaborating on UI/UX assets for community-driven projects."
                    ]
                }
            ]
        },
        {
            org: "Respawn - The Gaming Club of PDEU",
            location: "Gandhinagar, Gujarat",
            roles: [
                {
                    title: "GD Advisor",
                    category: "Advisory",
                    date: "Aug 2025 – Present",
                    details: [
                        "Providing expert oversight on high-stakes event visual identity.",
                        "Reviewing and critiquing design workflows for the current sub-committee.",
                        "Ensuring visual consistency with Respawn's high-energy brand vibe."
                    ]
                },
                {
                    title: "Graphic Designing Subcom",
                    category: "Design Execution",
                    date: "Aug 2024 – Aug 2025",
                    details: [
                        "Developed the visual identity for major university gaming tournaments.",
                        "Integrated gaming-specific aesthetics with clean typography for posters.",
                        "Assisted in live event visual management and stream overlays."
                    ]
                }
            ]
        }
    ],
    collaborativeExperiences: [
        {
            title: "BREACH Hackathon — Cross-Functional Event Leadership",
            context: "As Vice President of Anirveda, I co-led the organization of BREACH — a multi-day hackathon involving 200+ participants, industry judges, and corporate sponsors.",
            role: "Event Architect & Cross-Committee Coordinator",
            teamDynamics: "The organizing team comprised 7 sub-committees (Technical, Design, PR, Logistics, Finance, Content, Outreach) with over 50 active members. Each committee had different priorities and working styles — the design team operated on tight creative deadlines while logistics needed long lead times.",
            conflictResolution: "A significant conflict arose when the PR team's social media timeline clashed with the design team's capacity. The PR team wanted daily content drops, but the design complexity required more time per asset. I mediated by restructuring the content calendar into 'heavyweight' (quality pieces) and 'lightweight' (quick template-based posts) tiers, satisfying both quality standards and posting frequency. This taught me that effective conflict resolution isn't about choosing sides — it's about reframing the problem.",
            achievements: [
                "Successfully executed a multi-day event with zero critical issues",
                "Achieved 40% increase in participant registrations over the previous year",
                "Established a reusable operational framework for future events",
                "Built strong cross-committee relationships that improved club collaboration long-term"
            ]
        },
        {
            title: "GDG x Anirveda — Inter-Club Technical Workshop Series",
            context: "Collaborated with Google Developer Group on Campus to deliver a joint workshop series on 'Design Meets Development', bridging the gap between UI/UX design and frontend engineering.",
            role: "Workshop Co-facilitator & Design Lead",
            teamDynamics: "Working across two different club cultures (GDG's developer-first approach vs. Anirveda's design-first approach) required careful alignment of goals and communication styles. We established shared Notion boards and weekly sync calls.",
            achievements: [
                "Delivered 3 workshops attended by 100+ students collectively",
                "Created a shared resource library used by both clubs",
                "Demonstrated that inter-club collaboration amplifies reach and impact"
            ]
        }
    ],
    ethics: [
        {
            title: "Data Privacy in AI-Powered Productivity Tools",
            icon: "🔒",
            scenario: "While building KAIRO, I faced a critical design decision: the Gemini AI integration required sending user task descriptions to an external API. Users' tasks could contain sensitive information — project names, personal goals, professional aspirations — that they might not want transmitted to third-party servers.",
            ethicalDilemma: "How do you balance the utility of AI-powered features (which require data transmission) against user privacy rights? Should convenience outweigh data sovereignty?",
            analysis: [
                "Transparency Principle: Users must know exactly what data is being sent and to whom. I implemented clear consent dialogs explaining the AI integration.",
                "Data Minimization: Instead of sending full task hierarchies, I designed the system to send only the minimum context needed for AI analysis — task titles only, not descriptions or metadata.",
                "Local-First Architecture: All task data, completion history, and audio preferences are stored exclusively in the browser's LocalStorage — never uploaded to any server.",
                "Opt-In Design: The AI feature is entirely optional. The app functions fully without it, ensuring users aren't coerced into data sharing for basic functionality."
            ],
            personalReflection: "This experience taught me that ethical engineering isn't an afterthought — it's an architectural decision that must be made at the foundation level. The easiest path would have been to send all data to the API for better AI responses, but 'easy' isn't the same as 'right'. As engineers, we have a responsibility to build systems that respect the people who use them."
        },
        {
            title: "Sustainability and Green Technology Ethics",
            icon: "🌍",
            scenario: "During the EcoPoints hackathon project, our team encountered a philosophical challenge: gamification of sustainability could inadvertently trivialize serious environmental issues. Points, badges, and leaderboards might reduce climate action to a game, disconnecting users from the real-world gravity of environmental degradation.",
            ethicalDilemma: "Does gamifying sustainability engagement risk trivializing climate change? Can behavioral nudges cross the line into manipulation?",
            analysis: [
                "Intent vs. Impact: While our intent was to encourage positive behavior, we had to ensure the gamification didn't become an end in itself. Points should incentivize real action, not just app engagement.",
                "Avoiding Greenwashing: We designed the platform to only reward verified, measurable actions — not just 'awareness' clicks. This prevents the system from becoming a feel-good mechanism without substance.",
                "Inclusivity Consideration: Leaderboard systems can create toxic competition. We added cooperative team challenges alongside individual rankings to ensure the platform didn't exclude those who couldn't achieve high scores due to economic or geographic constraints.",
                "Long-term vs. Short-term: We debated whether extrinsic rewards (points) undermine intrinsic motivation (genuine environmental concern). Research in behavioral economics suggests that initial extrinsic motivation can scaffold the development of intrinsic values — but only if the system is carefully designed."
            ],
            personalReflection: "Working on EcoPoints gave me a deeper appreciation for the ethical dimensions of technology design. Every UI decision, every algorithm, every incentive structure carries moral weight. As engineers, we don't just build tools — we shape behaviors. That power demands careful, conscious, and empathetic design."
        },
        {
            title: "AI Bias in Engineering Control Systems",
            icon: "⚖️",
            scenario: "In my PM-BLDC motor control project, the ANN was trained on simulation data generated from a specific motor model with fixed parameters. This raised the question: what happens when the AI controllers are deployed on motors that differ from the training distribution?",
            ethicalDilemma: "Training AI on narrow datasets can create systems that work perfectly in controlled conditions but fail unpredictably in the real world. What is our ethical obligation for robustness testing in safety-critical applications?",
            analysis: [
                "Training Bias Awareness: The simulation data represented ideal conditions. Real motors have manufacturing tolerances, aging effects, and environmental variations that the training data didn't capture.",
                "Safety Margins: For engineering applications where control failure could cause physical damage, I implemented fallback mechanisms — if the ANN output exceeded reasonable bounds, the system reverted to the baseline PI controller.",
                "Validation Responsibility: I tested the hybrid controller across varied parameter ranges (stator resistance ±20%, inertia ±30%) to understand its robustness envelope, clearly documenting where it succeeds and where it degrades.",
                "Transparency in Limitations: In my project documentation, I explicitly stated the operating conditions under which the controller is validated, rather than claiming universal applicability."
            ],
            personalReflection: "This project taught me that AI in engineering is not a silver bullet. Every AI-augmented system needs human oversight, clear failure modes, and honest documentation of limitations. The ethical engineer doesn't just ask 'does it work?' but 'under what conditions does it work, and what happens when those conditions aren't met?'"
        }
    ],
    futureAspirations: {
        shortTerm: [
            {
                goal: "Master Advanced Power Electronics",
                timeline: "Next 1–2 years",
                strategy: "Complete advanced coursework in power converter topologies, wide-bandgap semiconductors (GaN/SiC), and high-frequency magnetics. Apply knowledge through personal projects and research."
            },
            {
                goal: "Publish Research in AI-Augmented Control",
                timeline: "Next 1 year",
                strategy: "Develop my PM-BLDC + ANN work into a publishable paper targeting IEEE conferences or NPTEL journals. Collaborate with faculty advisors for mentorship and peer review."
            },
            {
                goal: "Industry Internship in Power Electronics / Embedded Systems",
                timeline: "Summer 2026",
                strategy: "Target companies working on EV motor drives, renewable energy inverters, or smart grid technologies. Leverage MATLAB/Simulink and Python skills to contribute meaningfully."
            }
        ],
        longTerm: [
            {
                goal: "Graduate School in Power Electronics & Intelligent Control",
                description: "Pursue an M.S. or M.Tech with research focus on the intersection of power electronics and machine learning — specifically in areas like model-predictive control, digital twins for power converters, and autonomous grid management."
            },
            {
                goal: "Build Intelligent Physical Systems at Scale",
                description: "My long-term vision is to work on systems where hardware and software are inseparable — electric vehicle powertrains, intelligent industrial drives, or autonomous energy systems. I want to be at the frontier where classical engineering meets computational intelligence."
            },
            {
                goal: "Mentorship & Knowledge Sharing",
                description: "Having benefited immensely from mentors and collaborative communities, I want to give back by mentoring aspiring engineers, contributing to open-source tools, and creating educational content that makes complex engineering accessible."
            }
        ],
        furtherStudy: [
            "Wide-bandgap semiconductor device physics (GaN, SiC)",
            "Model Predictive Control (MPC) for power converters",
            "Reinforcement learning for adaptive control systems",
            "Digital twin methodologies for power electronics",
            "Advanced signal processing for condition monitoring"
        ],
        continuousImprovement: [
            "Maintain a weekly learning log to track skill acquisition and reflection",
            "Contribute to one open-source project per semester",
            "Attend at least 2 technical conferences or workshops annually",
            "Seek regular feedback from peers and mentors on both technical and soft skills",
            "Document every major project as a case study for portfolio building"
        ]
    },
    swot: {
        strengths: [
            { text: "Strong interdisciplinary foundation spanning electrical engineering, AI, and design" },
            { text: "Proven leadership experience managing 50+ member teams across 7 committees" },
            { text: "Hands-on project experience with real engineering simulations and deployed software" },
            { text: "Creative design skills that complement technical abilities — rare in engineering" },
            { text: "Rapid learner who successfully transitioned across hardware, software, and design domains" }
        ],
        weaknesses: [
            { text: "Limited industry experience — most projects are academic or personal" },
            { text: "Tendency to pursue too many interests simultaneously, risking depth for breadth" },
            { text: "Need to strengthen mathematical rigor in advanced control theory proofs" },
            { text: "Public speaking confidence still developing for large technical audiences" },
            { text: "Time management under concurrent deadlines across clubs and academics needs improvement" }
        ],
        opportunities: [
            { text: "Growing demand for engineers who bridge hardware-software boundaries in EV and renewable sectors" },
            { text: "AI/ML integration in power electronics is an emerging research frontier with limited competition" },
            { text: "India's expanding EV and smart grid ecosystem creates abundant internship and career opportunities" },
            { text: "Open-source communities provide platforms for visibility, collaboration, and skill-building" },
            { text: "University club network provides pathways to industry connections through events and sponsorships" }
        ],
        threats: [
            { text: "Rapid AI advancement may automate some traditional engineering analysis tasks" },
            { text: "Competitive graduate school admissions require consistently excellent GPA and publications" },
            { text: "Risk of burnout from balancing leadership roles, academics, and personal projects" },
            { text: "Technology landscape shifts quickly — skills learned today may need rapid updating" },
            { text: "Economic fluctuations could affect industry hiring in specialized engineering roles" }
        ]
    },
    conclusion: {
        summary: [
            "Over three years at PDEU, I have evolved from a student fascinated by basic circuits into an interdisciplinary engineer who thinks across the boundaries of electrical engineering, artificial intelligence, and design.",
            "My project portfolio demonstrates a consistent thread: the belief that the most impactful engineering happens at intersections. From training neural networks to tune motor controllers, to building AI-powered productivity tools, to designing visual identities for events — every endeavor has been an exercise in synthesis.",
            "Beyond technical skills, I have grown as a leader, a collaborator, and a communicator. Managing 7 sub-committees as VP of Anirveda taught me that great engineering is as much about people as it is about circuits."
        ],
        lessonsLearned: [
            "Theory without practice is incomplete — every concept I study, I try to build.",
            "The best solutions come from combining perspectives from different disciplines.",
            "Leadership is not about control; it's about creating conditions for others to do their best work.",
            "Ethical considerations aren't constraints — they're design parameters that make systems better.",
            "Failure is data. Every project that didn't work perfectly taught me more than the ones that succeeded on the first try."
        ],
        growthAreas: [
            "Deepen mathematical foundations in advanced control theory",
            "Gain real-world industry experience through internships",
            "Develop academic writing skills for research publication",
            "Build a stronger online presence through technical blogging and open-source contributions"
        ],
        selfEvaluation: "When I entered PDEU, my goal was to become a competent electrical engineer. Looking back, I've exceeded that initial ambition — not by abandoning my core discipline, but by expanding it. I can now model a motor drive in Simulink, train a neural network to optimize it, design the dashboard interface for its monitoring system, and lead the team that deploys it. That breadth, grounded in electrical engineering depth, is my greatest achievement so far. But it's also my launching pad. The journey is just beginning."
    },
    testimonials: [
        {
            name: "Dr. Priya Mehta",
            role: "Associate Professor, Department of Electrical Engineering",
            organization: "Pandit Deendayal Energy University",
            quote: "Gunraaj is one of those rare students who seamlessly bridges theoretical understanding with practical application. His work on the PM-BLDC motor control project demonstrated a level of independent thinking and technical maturity beyond his academic year. What impressed me most was his ability to integrate AI techniques into classical control problems — a truly interdisciplinary approach that reflects the future of engineering education.",
            initials: "PM"
        },
        {
            name: "Dr. Vikram Sharma",
            role: "Senior Systems Architect & Hackathon Judge",
            organization: "TechNova Innovation Summit",
            quote: "Gunraaj's ability to orchestrate both the complex backend logic of Gemini AI and the frontend visual aesthetic in his KAIRO project was remarkable. Very rarely do we see a student engineer who grasps user-centric design principles with the same depth as algorithmic complexity.",
            initials: "VS"
        },
        {
            name: "Prof. Rajesh Kumar",
            role: "Faculty Advisor, Signal Processing Lab",
            organization: "Pandit Deendayal Energy University",
            quote: "Gunraaj's vibration analysis project showcased outstanding initiative and technical depth. He independently developed a complete signal processing pipeline — from video capture through FFT analysis — that rivaled approaches typically seen at the graduate level. His systematic approach to problem-solving and meticulous documentation reflect a mind well-suited for research.",
            initials: "RK"
        }
    ],
    design: [
        {
            category: "Graphic Design",
            items: [
                "Posters",
                "Event creatives",
                "Logos",
                "Social media grids",
                "Merchandise and T-shirt designs"
            ]
        },
        {
            category: "Video Editing",
            items: [
                "Event aftermovies",
                "Promotional reels",
                "Motion typography"
            ]
        },
        {
            category: "Brand Identity Creation",
            items: [
                "Color palette systems",
                "Typography selection",
                "Visual consistency",
                "Brand tone alignment"
            ]
        }
    ]
};
