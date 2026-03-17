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
    };
}

export interface SiteConfig {
    profile: {
        name: string;
        title: string;
        identityLine: string;
        philosophy: string;
        social: { email: string; linkedin: string; github: string; resume: string };
    };
    about: string[];
    navigation: { label: string; href: string; enabled?: boolean }[];
    domains: { title: string; items: string[] }[];
    skills: { category: string; tools: string[] }[];
    projects: Project[];
    experience: { org: string; location: string; roles: { title: string; category: string; date: string; details: string[] }[] }[];
    design: { category: string; items: string[] }[];
}

export const siteConfig: SiteConfig = {
    profile: {
        name: "Gunraaj Singh",
        title: "AI Software Engineer",
        identityLine: "Bridging Power Electronics, Control Systems, and AI-Driven Architecture.",
        philosophy: "Building intelligent physical systems that scale.",
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
    navigation: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Experience", href: "/experience" },
        { label: "Design", href: "/design", enabled: false }, // User requested option to disable
        { label: "Contact", href: "/contact" }
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
                    "Audio Engine: Generated uncompressed raw sine wave oscialltors matched precisely to cognitive enhancement frequencies (e.g. 14Hz Beta)."
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
                codeSnippet: {
                    language: "tsx",
                    filename: "App.tsx",
                    code: `useEffect(() => {\n    if (activeTask && audioSettings.engineEnabled) {\n      console.log("Analyzing task:", activeTask.name);\n      analyzeBrainwaveMode(activeTask.name).then(mode => {\n        console.log("Setting mode to:", mode);\n        setActiveMode(mode);\n        // Automate mixing console\n        setAudioSettings(prev => {\n          let freq = 14; // Beta (Focus)\n          if (mode === 'creativity') freq = 10; // Alpha\n          if (mode === 'deep') freq = 6; // Theta\n          return { ...prev, beatFrequency: freq };\n        });\n      });\n    }\n  }, [activeTask?.name, audioSettings.engineEnabled]);`
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
                    "Minimum detectable amplitude (in pixels/mm) under your settings"
                ],
                visuals: [
                    "GIF of ROI tracking overlay",
                    "Displacement-time plot",
                    "FFT spectrum with labeled peaks",
                    "A 'before vs after filtering' comparison plot"
                ],
                codeSnippet: {
                    language: "python",
                    filename: "vibration_analyzer_v11.py",
                    code: `def _analyze_signal(self, data_log, fps):\n    # Preprocessing\n    sig_x = x_series - np.mean(x_series)\n    if self.cfg.DETREND: sig_x = detrend(sig_x)\n    if self.cfg.FILTER_TYPE: sig_x = self._apply_filter(sig_x, fps)\n\n    # FFT Computation\n    n = len(sig_x)\n    freqs = fftfreq(n, 1/fps)\n    fft_x = fft(sig_x)\n    mag_x = np.abs(fft_x)\n    \n    # Peak Detection\n    pos_mask = freqs >= 0\n    pos_freqs = freqs[pos_mask]\n    pos_mag_x = mag_x[pos_mask]\n    \n    idx_x = np.argmax(pos_mag_x[1:]) + 1\n    peak_x = pos_freqs[idx_x]`
                }
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
                        "Collaborated with the publicity team for maximize student engagement."
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
