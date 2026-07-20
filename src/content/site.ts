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
    about: {
        intro: string;
        details: string[];
        quickFacts: { icon: string; text: string }[];
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
}

export const siteConfig: SiteConfig = {
    profile: {
        name: "Gunraaj Singh",
        title: "Engineering Systems Builder · EV, Controls & Applied AI",
        program: "B.Tech — Electrical Engineering",
        institution: "Pandit Deendayal Energy University, Gandhinagar",
        submissionDate: "April 2026",
        identityLine: "Building EV powertrain models, control systems, and AI-assisted engineering tools.",
        philosophy: "B.Tech EE @ PDEU '27 · MATLAB/Simulink · Python/OpenCV · Control Systems",
        tagline: "Engineering hardware-software co-optimized systems.",
        social: {
            email: "mailto:gunraajsinghpurba@gmail.com",
            linkedin: "https://www.linkedin.com/in/gunraaj-singh/",
            github: "https://github.com/Gunraaj",
            resume: "/resume.pdf"
        }
    },
    about: {
        intro: "I am an Electrical Engineering student at Pandit Deendayal Energy University, focused on EV powertrain modeling, control systems, power electronics, and applied software tools for engineering workflows.",
        details: [
            "My work sits between physical systems and computation: MATLAB/Simulink models, motor-control logic, signal-processing pipelines, computer vision diagnostics, and practical UI systems. I build tools that make complex engineering behavior easier to simulate, measure, and explain.",
            "My approach to design and engineering draws from diverse interests. Strategic resource management in competitive gaming mirrors control system optimization, while visual narrative pacing directly influences how I structure user interfaces and motion graphics."
        ],
        quickFacts: [
            { icon: "🎓", text: "Electrical Engineering @ PDEU (2023-2027)" },
            { icon: "⚡", text: "EV Powertrain & Control Systems" },
            { icon: "🎨", text: "Design Systems & Visual Narrative" },
            { icon: "🏠", text: "IoT & Home Automation" }
        ]
    },
    resume: {
        education: [
            {
                degree: "B.Tech in Electrical Engineering",
                institution: "Pandit Deendayal Energy University (PDEU), Gandhinagar",
                period: "2023 – 2027 (Expected)",
                details: [
                    "Relevant Coursework: Power Electronics, Control Systems, Electrical Machines, Power Systems, Signals & Systems, Microprocessors, Data Structures",
                    "Active participant in technical clubs and hackathons",
                    "Focus on interdisciplinary projects bridging EE and CS"
                ]
            }
        ],
        jobProfile: "Engineering student specializing in Artificial Intelligence, Machine Learning, and embedded systems. Experience spans from EV powertrain simulation to full-stack AI productivity tools. Seeking roles where computational intelligence (AI/ML) can be applied to solve complex hardware, software, and systems engineering problems.",
        specialization: [
            "AI & Machine Learning — Neural-network-augmented control, computer vision for diagnostics, integrating LLMs into software platforms",
            "Embedded Systems & Software — ESP32 test automation, Python/Qt tooling, robust state machines",
            "EV Systems Engineering — Powertrain simulation, energy accounting, regenerative braking modeling in MATLAB/Simulink",
            "Control Systems & Automation — PID/PI loops, dynamic system modeling, and data-driven optimization"
        ],
        workExperience: [
            {
                title: "R&D Intern — Electrical, Electronics & Software Systems",
                organization: "BGauss Auto Private Limited",
                period: "Jun 2026 – Jul 2026",
                type: "Industry R&D",
                details: [
                    "Built MATLAB/Simulink EV powertrain model covering longitudinal dynamics, acceleration verification (MAE 0.19s across 6 checkpoints), gradeability, traction limits, motor sizing, drive-cycle energy accounting, regenerative braking, and range estimation",
                    "Developed a Python/Qt desktop test-automation prototype for ESP32-class embedded hardware: visual no-code sequence editor, structured serial protocol, CAN database signal conditions, explicit Pass/Fail/Timeout outcomes, and session logging",
                    "Researched scan-to-CAD mechanical inspection feasibility using structured-light 3D scanning and ICP point-cloud registration; documented integration risks including reflective surfaces, occlusion, and alignment observability",
                    "Mentored by Mayuresh Pant (Head — R&D); work spanned powertrain simulation, embedded controls verification, and manufacturing quality research"
                ]
            },
            {
                title: "Advisor (Former Vice President)",
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
        certifications: [],
        awards: [],
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
            { name: "Photography", icon: "📷" }
        ]
    },
    navigation: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Resume", href: "#resume" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" }
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
                name: "Adobe Photoshop",
                evidence: "Over 2 years of experience. Image manipulation, compositing, and advanced masking for high-fidelity promotional assets.",
            },
            {
                name: "Adobe Illustrator",
                evidence: "Over 2 years of experience. Vector graphic creation, typography styling, and scalable logo design.",
            },
            {
                name: "Video Editing & Motion Graphics",
                evidence: "Produced event aftermovies, promotional reels, and motion typography animations for university-level events. Experienced with DaVinci Resolve and Adobe Premiere Pro.",
                artefact: "High-production aftermovie for BREACH Hackathon with cinematic transitions, dynamic text overlays, and synchronized audio design."
            },
            {
                name: "Adobe Premiere Pro",
                evidence: "Over 2 years of experience. Timeline editing, color grading, audio syncing, and basic motion graphics integration.",
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
            id: "bgauss-ev-systems-internship",
            title: "Electrical, Electronics & Software Systems — BGauss R&D Internship",
            domainTags: ["Industry R&D", "EV Powertrain", "Embedded Automation", "MATLAB/Simulink"],
            tools: ["MATLAB", "Simulink", "Python", "Qt", "ESP32", "CAN Bus", "Structured-Light 3D Scanning"],
            shortDescription: "Six-week R&D internship at BGauss Auto Pvt. Ltd. (Pune) covering EV powertrain simulation, ESP32-based CAN test automation, and mechanical inspection research — mentored by the Head of R&D.",
            highlights: [
                "Acceleration model MAE of 0.19s across 6 real checkpoints",
                "Built Python/Qt no-code CAN test sequencer with Pass/Fail/Timeout logging",
                "Modelled full drive cycle: regen braking, range estimation, SOC accounting",
                "Researched scan-to-CAD inspection pipeline using structured-light & ICP registration"
            ],
            links: [],
            featured: true,
            enabled: true,
            details: {
                problem: "Electric two-wheeler development requires tight coordination between powertrain simulation, embedded controller verification, and manufacturing quality inspection. Decisions made in isolation — without visible assumptions and repeatable evidence — lead to costly rework late in the development cycle.",
                objectives: [
                    "Build a modular MATLAB/Simulink EV powertrain model covering the full chain: road load → motor torque → battery power → range.",
                    "Develop a desktop Python/Qt test-automation tool that makes ESP32-class embedded hardware tests repeatable, logged, and outcome-explicit.",
                    "Research structured-light scan-to-CAD inspection feasibility and document the real integration risks for EV manufactured components."
                ],
                methodology: [
                    "Powertrain Track: Modelled longitudinal vehicle dynamics (rolling resistance, grade, aero, inertia), applied traction limits, validated acceleration against 6 reference checkpoints, built a drive-cycle energy layer with regenerative braking (constrained by motor torque map, battery charge power, SOC, and speed), and a range estimator with division-by-zero protection.",
                    "Embedded Track: Built a layered Python/Qt desktop application — a visual no-code sequence editor, a structured serial protocol linking to ESP32 hardware, a DBC-decoded CAN signal condition editor, and an engine producing explicit Pass, Fail, and Timeout outcomes with full session logs.",
                    "Inspection Track: Reviewed structured-light fringe-projection principles, ICP point-cloud registration mathematics, and deviation-to-tolerance mapping. Documented four critical integration risks: reflective surface handling, occlusion on complex geometry, datum-constrained alignment, and measurement uncertainty chain."
                ],
                results: [
                    "Acceleration model: mean absolute checkpoint error of 0.19s, max error 0.31s across six speed targets (30–66 km/h).",
                    "Drive-cycle scenario: 55.46 Wh/km consumption, estimated 48.7 km range under the displayed cycle.",
                    "Test automation prototype exercised across normal, failure, and timeout paths — including unresolved CAN signal timeouts recorded honestly rather than hidden.",
                    "Inspection research produced a five-stage scan-to-CAD framework and a risk register sufficient to scope a proof-of-concept plan."
                ],
                visuals: [
                    "Integrated EV Powertrain Architecture (Simulink)",
                    "Acceleration Validation Dashboard (speed, acceleration, checkpoint comparison table)",
                    "Drive-Cycle Energy Analysis (battery power, regen, SOC, consumption, range)",
                    "Python/Qt Test Automation Workspace",
                    "Visual CAN Sequence Editor & Hardware Profile Safety View"
                ],
                challenges: [
                    "Range estimator required careful protection against division by near-zero distance at run start — solved by a consumption floor and a dual SOC/counter minimum for remaining energy.",
                    "Keeping the test automation tool's Pass vs Timeout distinction explicit was architecturally critical: a timeout indicates missing hardware or wiring, not a software failure — conflating the two hides integration faults.",
                    "Structured-light inspection on reflective EV components (polished brackets, plated surfaces) will saturate fringe projectors — mitigations (scanning spray, polarisation, controlled exposure) were documented as mandatory pre-requisites."
                ],
                interdisciplinaryAnalysis: "This internship united three engineering disciplines that are rarely taught together: vehicle systems modelling, embedded software verification, and manufacturing metrology. The common thread was evidence-driven engineering — every track required defining a reference, measuring or simulating a response, and recording an auditable outcome. The embedded tool demonstrates how software engineering principles (state machines, structured protocols, deterministic teardown) directly improve the credibility of hardware testing — a skill gap that exists in most EV R&D teams today.",
                codeSnippet: {
                    language: "python",
                    filename: "test_runner.py",
                    code: `# Simplified core of the ESP32 CAN test-automation engine
def execute_step(step, serial_port, can_monitor):
    if step.type == "ACTUATE":
        serial_port.send(f"SET {step.pin} {step.value}")
        ack = serial_port.wait_for(f"ACK:{step.pin}", timeout=step.timeout)
        return StepResult.PASS if ack else StepResult.TIMEOUT

    elif step.type == "CAN_CONDITION":
        deadline = time.monotonic() + step.timeout
        while time.monotonic() < deadline:
            signal_val = can_monitor.get(step.signal_name)
            if step.operator(signal_val, step.expected):
                return StepResult.PASS
        return StepResult.TIMEOUT  # Distinct from FAIL — wiring or CAN issue

    elif step.type == "DELAY":
        time.sleep(step.duration_ms / 1000)
        return StepResult.PASS`
                }
            }
        },
        {
            id: "vibration-analysis-system",
            title: "Vibration Analysis System (Computer Vision Based)",
            domainTags: ["Signal Processing", "Mechanical Diagnostics", "Computer Vision"],
            tools: ["Python", "OpenCV", "NumPy", "SciPy", "FFT", "Butterworth Filters"],
            shortDescription: "Non-contact vibration analysis using video input to extract meaningful frequency-domain and statistical features.",
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
            id: "kairo-ai-productivity",
            title: "KAIRO: AI Productivity Dashboard with Web Audio Focus Modes",
            domainTags: ["Web App", "AI Integration", "UX Engineering"],
            tools: ["React", "TypeScript", "Tailwind CSS", "Gemini AI", "Web Audio API"],
            shortDescription: "A productivity dashboard featuring AI-driven task breakdown and an embedded real-time audio brainwave entrainment engine.",
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
            id: "synchronous-buck-converter",
            title: "100W Synchronous Buck Converter (Hardware Design)",
            domainTags: ["Power Electronics", "PCB Design", "Embedded Systems"],
            tools: ["STM32", "Altium Designer", "MATLAB", "Simulink", "C++"],
            shortDescription: "End-to-end design, simulation, and hardware implementation of a 100W synchronous buck converter with custom magnetics.",
            highlights: [
                "Custom 100W PCB design and fabrication",
                "Hand-wound inductor for optimized magnetics",
                "Cascaded PI control loops running on STM32",
                "92% measured peak efficiency"
            ],
            links: [],
            featured: true,
            enabled: true,
            details: {
                problem: "Most academic power electronics projects stop at simulation. True power converter design requires navigating non-ideal parasitics, thermal management, gate-drive layout, and embedded digital control in actual hardware.",
                objectives: [
                    "Design and fabricate a 100W synchronous buck converter PCB.",
                    "Wind a custom inductor to meet specific ripple current targets.",
                    "Implement cascaded voltage/current PI control loops on an STM32 microcontroller.",
                    "Benchmark actual hardware efficiency against MATLAB/Simulink theoretical models."
                ],
                methodology: [
                    "Simulation: Modeled the power stage and derived the small-signal transfer functions in MATLAB to tune the theoretical PI gains.",
                    "Hardware Design: Selected low-Rds(on) MOSFETs and designed the PCB layout prioritizing minimizing the high-frequency switching loop area.",
                    "Magnetics: Calculated core size and wire gauge, then hand-wound the main inductor.",
                    "Firmware: Wrote bare-metal C++ for the STM32 to handle high-frequency PWM generation and ADC sampling for the closed-loop control."
                ],
                results: [
                    "Successfully fabricated and tested the 100W hardware prototype.",
                    "Achieved a measured peak efficiency of 92%, validating the synchronous rectification benefits.",
                    "Cascaded digital control loop maintained <2% voltage ripple during severe load steps."
                ],
                visuals: [
                    "Altium PCB Layout",
                    "Fully Assembled Hardware Prototype",
                    "Oscilloscope Traces of Gate Drive & Ripple",
                    "Efficiency vs Load Curve (Simulated vs Actual)"
                ]
            }
        },
        {
            id: "design-direction-anirveda",
            title: "Brand Identity & Design Direction",
            domainTags: ["Creative Direction", "UI/UX", "Brand Design"],
            tools: ["Figma", "Illustrator", "After Effects"],
            shortDescription: "Complete visual identity and event branding for Anirveda PDEU from the start of the 24-25 committee reveal to just before the 25-26 reveal.",
            highlights: [
                "Led a team of 15+ designers",
                "Defined brand identity for 200+ attendee hackathon",
                "Produced cinematic aftermovies and motion typography"
            ],
            links: [
                { label: "View on Instagram", url: "https://instagram.com/anirvedapdeu" }
            ],
            featured: false,
            enabled: true,
            details: {
                problem: "The organization needed a cohesive visual identity that could scale across diverse events while maintaining a premium, tech-focused aesthetic.",
                objectives: [
                    "Establish a unified design system and brand guidelines.",
                    "Streamline the creative pipeline for rapid event deployment.",
                    "Elevate the perceived quality of the club to attract corporate sponsors."
                ],
                methodology: [
                    "Developed a modular component library in Figma for social media assets.",
                    "Implemented strict color grading and typography rules (Space Grotesk + Inter).",
                    "Created motion graphics templates to reduce video production turnaround."
                ],
                results: [
                    "Successfully rebranded the club, leading to a 40% increase in event registrations.",
                    "Secured multiple high-tier sponsors due to professional presentation.",
                    "Established a design culture that prioritizes pixel-perfect execution."
                ],
                visuals: [],
                interdisciplinaryAnalysis: "This role required blending creative intuition with engineering precision. Design systems are fundamentally similar to software architectures — they require modularity, reusability, and clear documentation. Managing the design team involved agile methodologies, sprint planning, and version control (via Figma), demonstrating that engineering principles apply directly to creative domains."
            }
        }
    ],
    experience: [
        {
            org: "Anirveda PDEU",
            location: "Gandhinagar, Gujarat",
            roles: [
                {
                    title: "Advisor (Former Vice President)",
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
                    title: "Graphic Design Head & Contributor",
                    category: "Creative Direction",
                    date: "Sep 2023 – Jun 2025",
                    details: [
                        "Defined the visual language and brand identity for the entire organization.",
                        "Mentored a team of 15+ designers and video editors.",
                        "Produced high-production value aftermovies, promotional reels, and 50+ unique digital assets."
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
    ]
};
