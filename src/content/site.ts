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
    details: {
        problem: string;
        objectives: string[];
        methodology: string[];
        results: string[];
        visuals: string[];
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
    experience: { role: string; org: string; date: string; details: string[] }[];
    design: { category: string; items: string[] }[];
}

export const siteConfig: SiteConfig = {
    profile: {
        name: "Gunraaj Singh",
        title: "Hardware & AI Software Engineer",
        identityLine: "Bridging Power Electronics, Control Systems, and AI-Driven Architecture.",
        philosophy: "Building intelligent physical systems that scale.",
        social: {
            email: "mailto:[ADD_EMAIL_HERE]",
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
            tools: ["Python", "C / C++", "MATLAB"]
        },
        {
            category: "Engineering & Simulation Tools",
            tools: ["MATLAB / Simulink", "PSIM", "Simscape", "PowerWorld"]
        },
        {
            category: "Software & Dev Tools",
            tools: ["OpenCV", "NumPy, SciPy", "Git & GitHub", "VS Code", "Arduino", "LaTeX (IEEE formatting)"]
        }
    ],
    projects: [
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
            links: [
                { label: "Report", url: "/projects/vibration-report.pdf" } // GH link removed per request
            ],
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
                    "A “before vs after filtering” comparison plot"
                ]
            }
        },
        {
            id: "synchronous-buck-converter",
            title: "Synchronous Buck Converter Design",
            domainTags: ["Power Electronics"],
            tools: ["MATLAB", "Simulink"],
            shortDescription: "Design and simulation of a synchronous buck converter with efficiency optimization.",
            highlights: [
                "Derivation of output voltage relationship",
                "Inductor and capacitor sizing",
                "Comparison with conventional buck converter",
                "Efficiency optimization using synchronous rectification"
            ],
            links: [],
            featured: true,
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
            id: "ev-charging-station",
            title: "EV Charging Station with Q-Learning & Dynamic Pricing",
            domainTags: ["Power Systems", "AI", "Optimization"],
            tools: ["MATLAB", "Reinforcement Learning"],
            shortDescription: "Dynamic pricing model for EV charging using reinforcement learning.",
            highlights: [
                "Dynamic pricing model",
                "Reinforcement learning-based decision making",
                "Demand-aware charging logic"
            ],
            links: [],
            featured: false,
            enabled: true,
            details: {
                problem: "EV charging stations face violently fluctuating grid demand; static pricing fails to influence load balancing, leading to capacity bottlenecks and lost revenue.",
                objectives: [
                    "Define a Markov Decision Process (MDP) outlining state (queue length, time-of-day), actions (price levels), and rewards (utilization density).",
                    "Train a Q-learning RL policy to handle dynamic pricing.",
                    "Compare RL outcomes against a baseline heuristic pricing model."
                ],
                methodology: [
                    "Environment Setup: Built a custom simulation environment mimicking stochastic EV arrival rates.",
                    "Algorithm: Implemented tabular Q-Learning with an epsilon-greedy exploration strategy.",
                    "Training: Simulated 10,000+ episodes of daily charging cycles to converge the Q-table."
                ],
                results: [
                    "Reduced average customer wait time by 22% during peak hours.",
                    "Increased mean station utilization by 18% throughout the day.",
                    "Demonstrated consistent, stable policy convergence across multiple random seeds.",
                    "Optimized the overall revenue proxy by smoothing out demand spikes."
                ],
                visuals: [
                    "MDP State Transition Diagram",
                    "Q-Learning Reward curve over episodes",
                    "Price vs Demand elasticity plot",
                    "Performance Comparison: Baseline vs RL Agent"
                ]
            }
        },
        {
            id: "pmsm-temp-control",
            title: "PMSM Temperature-Based Speed Control",
            domainTags: ["Electrical Machines", "Control Systems"],
            tools: ["MATLAB", "Simulink"],
            shortDescription: "Adaptive speed regulation for PMSM based on temperature.",
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
            role: "Vice President & Head of Design / Video",
            org: "Anirveda (TechnoEconomics Club, PDEU)",
            date: "Present", // PDF doesn't specify dates, assuming current role or recent
            details: [
                "Led and coordinated 7 sub-committees",
                "Oversaw branding, publicity, and creative direction",
                "Managed cross-team collaboration",
                "Executed large-scale technical and entrepreneurial events",
                "Major Events: INTROVIA, ECONOMANIA, TEX (Techno-Economic Exchange), BREACH Hackathon"
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
