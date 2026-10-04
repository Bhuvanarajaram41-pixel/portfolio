/**
 * ====================================================================
 * BHUVANESHWARI.R — PORTFOLIO AUTHOR CONFIGURATION
 * ====================================================================
 * 
 * As the author, you can edit this single file to add, modify, or remove:
 * 1. Personal Information & Social Links
 * 2. Flagship and Secondary Projects
 * 3. Certificates & Academic Achievements
 * 4. Technical Skills and Tools
 * 5. Experience & Community Roles
 * 6. Dynamic Future Custom Sections
 * 
 * You can also use the built-in "Author Editor" (accessible via the footer
 * or pressing Alt+E on your keyboard) to add items through an interactive form!
 */

export const portfolioConfig = {
  // ------------------------------------------------------------------
  // 1. PERSONAL IDENTITY & HEADLINES
  // ------------------------------------------------------------------
  author: {
    name: 'BHUVANESHWARI.R',
    displayName: 'BHUVANESHWARI.R',
    role: 'Computer Science & Engineering Student',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'Sathyabama Institute of Science and Technology',
    status: '2nd Year Undergraduate Student',
    location: 'Chennai, India',
    email: 'rbhuvaneshwarirajaraman41@gmail.com',
    github: 'https://github.com/Bhuvanarajaram41-pixel',
    linkedin: 'https://www.linkedin.com/in/bhuvaneshwari-rajaram-918991290',
    resumePath: '/assets/Bhuvaneshwari_Resume.pdf',
    profilePhoto: '/assets/profile.jpg',
    availabilityBadge: 'Open to internships & technical opportunities',
    
    // Secret author PIN for in-browser Author Control Center (default: 4141)
    authorPin: '4141',

    // Rotating roles displayed in the hero section
    rotatingRoles: [
      'CSE (AI & ML) Student',
      'Intelligent Systems Builder',
      'Creative & Design Head'
    ],

    // Hero headlines
    heroGreeting: "Hello 👋 I am",
    headlineLine1: "Building Intelligent Systems",
    headlineLine2: "for Real-World Problems.",
    heroDescription: "Turning intelligent algorithms into practical systems across smart infrastructure, emergency pre-hospital trauma coordination, computer vision, and data-driven applications.",

    // About section narrative
    aboutNarrative: [
      "I’m a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy taking complex real-world problems and turning them into practical software systems using machine learning, data-driven approaches, and modern web technologies.",
      "My projects span multiple domains including smart infrastructure, emergency healthcare systems, computer vision, environmental intelligence, recommendation systems, and predictive analytics.",
      "Rather than treating machine learning as purely abstract notebooks or theoretical math, my focus is on practical development: sourcing datasets, structuring preprocessing pipelines, tuning statistical models, engineering full-stack user interfaces, and ensuring reliable system execution."
    ]
  },

  // ------------------------------------------------------------------
  // 2. PROJECT FILTER CATEGORIES
  // ------------------------------------------------------------------
  projectCategories: [
    'All',
    'AI/ML',
    'Deep Learning',
    'Healthcare',
    'Smart Infrastructure',
    'Computer Vision',
    'Data Science',
    'Full Stack'
  ],

  // ------------------------------------------------------------------
  // 3. FEATURED PRIMARY PROJECTS
  // To add a new featured project in the future, simply duplicate one
  // of the objects below and customize the fields.
  // ------------------------------------------------------------------
  featuredProjects: [
    {
      id: 'kinetic-twin',
      title: 'KineticTwin — SmartFootAI',
      subtitle: 'An Industry 5.0 Predictive Edge Microgrid Engine for Smart City Energy Efficiency',
      category: 'Smart Infrastructure • Renewable Energy • Machine Learning • Industry 5.0',
      type: 'featured',
      badge: 'Flagship ML & Infrastructure Project',
      status: 'Functional Software Prototype',
      github: 'https://github.com/Bhuvanarajaram41-pixel/KINETICTWIN',
      liveDemo: null,
      categories: ['AI/ML', 'Smart Infrastructure'],
      tags: [
        'Machine Learning',
        'Random Forest',
        'Smart Cities',
        'Renewable Energy',
        'Digital Twin',
        'Streamlit',
        'Energy Optimization',
        'Industry 5.0'
      ],
      overview: 'KineticTwin (SmartFootAI) is a predictive digital-twin ecosystem designed to transform passive kinetic and piezoelectric energy harvesting into an intelligent, data-driven infrastructure system.',
      problem: 'Traditional kinetic and piezoelectric flooring systems often operate passively, capturing energy without understanding real-time human traffic patterns. This leads to inefficient energy harvesting, unmanaged peak traffic loads, unnecessary hardware activation, and mechanical wear in low-footfall zones.',
      solution: 'KineticTwin introduces a machine-learning-driven prediction layer that forecasts crowd-density variations and uses those predictions to dynamically manage energy harvesting and microgrid behavior, shifting kinetic energy infrastructure from passive collection to predictive, adaptive energy management.',
      coreML: {
        model: 'Random Forest Regressor',
        preprocessing: 'One-Hot Matrix Preprocessing (Spatial & Temporal features)',
        metricLabel: 'Prototype Validation Performance',
        metricValue: '90.87%',
        metricClarification: '90.87% validation performance for the prototype prediction system (crowd-density variation forecasting, not image classification).'
      },
      modules: [
        {
          name: 'Module A: Matrix Machine Learning Pipeline',
          desc: 'One-Hot encoding for categorical spatial zones and temporal indices feeding into a tuned Random Forest Regressor to forecast spatial-temporal crowd density.'
        },
        {
          name: 'Module B: Kinetic Energy Mathematical Engine',
          desc: 'Simulates footfall energy modeled at 0.5 Joules net yield per step, driving real-time energy conversion calculations and carbon mitigation estimation.'
        },
        {
          name: 'Module C: Tri-Tier Actuation Logic',
          desc: 'Dynamic load balancing rules: Critical Power Injection (>500 visitors), Optimal Load Balancing (250–500 visitors), and Low-Signal Standby (<250 visitors).'
        },
        {
          name: 'Module D: Cloud Digital Twin Dashboard',
          desc: 'Interactive Streamlit interface with live crowd-density visualizations, spatial heatmaps, energy conversion tracking, actuator configuration, and microgrid state visualization.'
        }
      ],
      architecture: [
        { step: '01', title: 'Spatial Ingestion', detail: 'Captures spatial zone inputs, visitor timestamps, and historical pedestrian density matrices.' },
        { step: '02', title: 'ML Matrix Engine', detail: 'Applies One-Hot encoding to feed Random Forest Regressor, generating predictive density vectors.' },
        { step: '03', title: 'Mathematical Yield Model', detail: 'Computes kinetic energy yield at 0.5J/step and calculates equivalent carbon mitigation.' },
        { step: '04', title: 'Tri-Tier Actuator Dispatch', detail: 'Triggers automated actuation mode (Critical Injection, Optimal Balancing, Standby).' },
        { step: '05', title: 'Digital Twin Streamlit HUD', detail: 'Real-time telemetry HUD displaying load curves, grid distribution, and diagnostic alerts.' }
      ],
      truthfulness: {
        implemented: [
          'Complete spatial-temporal crowd density prediction pipeline using Random Forest Regressor',
          'One-Hot matrix preprocessing for categorical zones and temporal features',
          'Mathematical kinetic energy calculation engine (0.5 Joules net yield model)',
          'Tri-tier actuation threshold logic (>500, 250-500, <250 visitors)',
          'Interactive Streamlit digital twin dashboard with heatmaps and state charts'
        ],
        futureScope: [
          'Physical MQTT telemetry sensor streaming from physical floor tiles',
          'Industrial PLC integration and Siemens / Schneider-style industrial controller interfaces',
          'Multi-facility municipal mesh networks for smart-city district microgrids',
          'Autonomous regional microgrid energy storage balancing'
        ],
        hardwareDisclaimer: 'Note: KineticTwin is currently implemented as a functional software digital-twin prototype with mathematical kinetic simulation. Physical piezoelectric tile hardware deployment is part of proposed future industrial expansion.'
      }
    },
    {
      id: 'rapidmed',
      title: 'RapidMed',
      subtitle: 'Government-Aligned Emergency Medical Response & Municipal Trauma Coordination Grid',
      category: 'Healthcare Technology • Emergency Response • Geospatial Systems • Full-Stack Engineering',
      type: 'featured',
      badge: 'Ongoing Full-Stack System',
      status: 'Ongoing Project (Prototype Architecture)',
      github: 'https://github.com/Bhuvanarajaram41-pixel',
      liveDemo: null,
      categories: ['Healthcare', 'Full Stack', 'Smart Infrastructure'],
      tags: [
        'Healthcare Technology',
        'Emergency Response',
        'Next.js',
        'React',
        'Supabase',
        'PostgreSQL',
        'Geospatial Computing',
        'OSRM',
        'Leaflet',
        'Smart Cities'
      ],
      overview: 'RapidMed is a high-security municipal emergency coordination platform designed to optimize pre-hospital trauma care, emergency routing, and coordination between patients, ambulances, hospitals, and command centers.',
      problem: 'Emergency pre-hospital care frequently suffers from fragmented communication, critical delays in reaching trauma units, lack of immediate patient medical history at the accident scene, and traffic congestion during emergency transit.',
      solution: 'RapidMed bridges patients, emergency medical services, and hospital trauma centers into a synchronized digital grid featuring ABDM-oriented Smart Health Lockers, dual-path emergency authentication, and geospatial dynamic routing.',
      coreSystem: [
        { name: 'Patient Portal', desc: 'SOS dispatch, medical profile management, dynamic emergency QR code generation.' },
        { name: 'Ambulance Portal', desc: 'Real-time incident dispatch, turn-by-turn emergency routing, en-route vitals logging.' },
        { name: 'Hospital Portal', desc: 'Incoming trauma queue, ICU bed availability broadcast, emergency doctor assignment.' },
        { name: 'Command Center', desc: 'Municipal telemetry, fleet tracking, regional incident response dispatch.' },
        { name: 'Emergency Routing', desc: 'Geospatial mapping and routing using OSRM, Mapbox, and Leaflet.' },
        { name: 'Medical Information Access', desc: 'ABDM-oriented Smart Health Locker with dual-path verification.' }
      ],
      smartHealthLocker: {
        title: 'ABDM-Oriented Smart Health Locker Concept',
        features: [
          'Dynamic QR Code Tokenization for instant roadside identification',
          'Secure patient health information access (blood group, allergies, emergency contacts)',
          'Compliant with ABDM architectural design principles for federated health records'
        ],
        authModes: {
          normal: 'Normal Pathway: Direct OTP verification for conscious and communicative patients.',
          emergency: 'Emergency "Break-Glass" Pathway: Secure audited override access with mandatory timestamped logs for unconscious trauma victims.'
        },
        abdmDisclaimer: 'Designed strictly with ABDM-compatible architectural principles; not yet submitted for formal government ABDM certification.'
      },
      routingAndCorridor: {
        engine: 'OSRM (Open Source Routing Machine) + Leaflet / Mapbox',
        greenCorridor: 'Green Corridor Software Concept: Designed for algorithmic traffic signal preemption to clear municipal transit bottlenecks ahead of transit ambulances.',
        trafficDisclaimer: 'Software simulation prototype; physical intersection hardware preemption controllers represent a planned municipal integration phase.'
      },
      futureScopeAI: {
        aco: 'Ant Colony Optimization (ACO) for multi-objective emergency pathfinding under dynamic urban traffic impedance (Future Enhancement)',
        telemetry: 'Municipal IoT telemetry and live ambulance biometric telemetry streaming',
        courier: 'Automated cold-chain blood bank and donor tissue courier dispatching',
        regional: 'Multi-hospital inter-district load balancing for mass casualty scenarios'
      },
      truthfulness: {
        implemented: [
          'Multi-portal role-based architecture (Patient, Ambulance, Hospital, Command Center)',
          'Dynamic QR code generation & emergency medical profile data schema in PostgreSQL/Supabase',
          'Dual-path authentication concept (Normal OTP + Break-Glass emergency audit logging)',
          'Geospatial route planning and hospital location mapping with Leaflet and OSRM data models',
          'Hospital trauma bed capacity and blood bank inventory tracking schemas'
        ],
        futureScope: [
          'Ant Colony Optimization (ACO) algorithm implementation for heuristic dynamic routing (Future planned)',
          'Physical municipal traffic-signal Green Corridor preemption hardware hardware interfacing',
          'Formal ABDM (Ayushman Bharat Digital Mission) sandbox sandbox compliance audit & government registry integration',
          'Cellular IoT telematics integration with emergency vehicle fleets'
        ],
        statusNote: 'Current status: Ongoing software engineering project and prototype architecture.'
      }
    }
  ],

  // ------------------------------------------------------------------
  // 4. OTHER APPLIED PROJECTS
  // Add new machine learning, web, or data science projects here.
  // ------------------------------------------------------------------
  otherProjects: [
    {
      id: 'airaware',
      title: 'AirAware',
      subtitle: 'Air Quality Prediction & Pollution Analysis Platform',
      category: 'Environmental Intelligence • Machine Learning',
      description: 'Air Quality Prediction and Pollution Analysis platform using machine learning with an interactive web dashboard.',
      categories: ['AI/ML', 'Full Stack'],
      tags: ['Python', 'Scikit-learn', 'Random Forest', 'React', 'Tailwind CSS', 'FastAPI'],
      bestModel: 'Random Forest',
      metrics: [
        { label: 'MAE', value: '0.4015' },
        { label: 'RMSE', value: '0.6276' },
        { label: 'R²', value: '0.7821' }
      ],
      github: null,
      liveDemo: null,
      highlights: [
        'Comprehensive environmental feature engineering and pollutant index modeling',
        'Trained Random Forest regressor achieving R² score of 0.7821',
        'Interactive dashboard for analyzing Air Quality Index (AQI) trends and forecasting anomalies'
      ]
    },
    {
      id: 'handwritten-char-recognition',
      title: 'Handwritten Character Recognition',
      subtitle: '62-Class Deep Learning CNN Recognition System',
      category: 'Computer Vision • Deep Learning',
      description: 'CNN-based handwritten character recognition system capable of recognizing digits, uppercase letters, and lowercase letters across 62 distinct character classes.',
      categories: ['Deep Learning', 'Computer Vision', 'AI/ML'],
      tags: ['Python', 'CNN', 'Deep Learning', 'Computer Vision', 'OpenCV', 'Streamlit'],
      bestModel: 'Convolutional Neural Network (CNN)',
      metrics: [
        { label: 'Classes', value: '62' },
        { label: 'Test Accuracy', value: '79.47%' },
        { label: 'Macro F1', value: '0.7875' }
      ],
      github: 'https://github.com/Bhuvanarajaram41-pixel/CodeAlpha-Handwritten-Character-Recognition',
      liveDemo: 'https://codealpha-handwritten-character-recognition-ewprevgcznwa7jgxni.streamlit.app/',
      highlights: [
        'Multi-class alphanumeric classification supporting 10 digits, 26 uppercase, and 26 lowercase letters',
        'Data augmentation, spatial normalization, and convolution-pooling-dense architecture',
        'Deployed interactive Streamlit web application with real-time canvas drawing and inference'
      ]
    },
    {
      id: 'amazon-books-clustering',
      title: 'Amazon Books Clustering',
      subtitle: 'Unsupervised Consumer Pattern & Literature Segmentation',
      category: 'Data Science • Machine Learning',
      description: 'Unsupervised learning project using K-Means clustering to analyze Amazon book characteristics, ratings, and customer interest patterns.',
      categories: ['Data Science', 'AI/ML'],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'K-Means', 'Data Science'],
      bestModel: 'K-Means Clustering',
      metrics: [
        { label: 'Silhouette Score', value: '0.3631' },
        { label: 'Algorithm', value: 'K-Means' }
      ],
      github: null,
      liveDemo: null,
      highlights: [
        'Feature normalization, outlier filtering, and dimensionality reduction for literature metrics',
        'Elbow method and Silhouette analysis validation achieving a score of 0.3631',
        'Discovered distinct reader segmentation clusters across genre and pricing attributes'
      ]
    },
    {
      id: 'movie-recommendation-system',
      title: 'Movie Recommendation System',
      subtitle: 'Similarity Pattern Recommender Engine',
      category: 'Recommendation Systems • Machine Learning',
      description: 'Machine learning-based movie recommendation system designed to recommend relevant movies using data-driven similarity patterns.',
      categories: ['AI/ML', 'Data Science'],
      tags: ['Python', 'Machine Learning', 'Recommendation Systems', 'Pandas'],
      bestModel: 'Content & Similarity-Based Filtering',
      metrics: [
        { label: 'Type', value: 'Similarity-based Engine' }
      ],
      github: null,
      liveDemo: null,
      highlights: [
        'Engineered feature vectors combining metadata, genre tags, and contextual attributes',
        'Calculated cosine similarity matrices for high-dimensional nearest-neighbor retrieval',
        'Clean interactive querying interface for instant title-based recommendations'
      ]
    },
    {
      id: 'house-price-prediction',
      title: 'House Price Prediction',
      subtitle: 'Multivariate Real Estate Regression Model',
      category: 'Predictive Analytics • Machine Learning',
      description: 'Regression model for predicting house prices using structured housing data and statistical feature engineering.',
      categories: ['AI/ML', 'Data Science'],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Linear Regression'],
      bestModel: 'Linear Regression',
      metrics: [
        { label: 'R²', value: '~0.64' },
        { label: 'Technique', value: 'Multivariate Regression' }
      ],
      github: null,
      liveDemo: null,
      highlights: [
        'Applied correlation analysis, multi-collinearity checks, and feature scaling',
        'Implemented multiple regression pipeline establishing reliable baseline valuation',
        'Evaluated predictive residual distributions and coefficient importances'
      ]
    },
    {
      id: 'titanic-survival-prediction',
      title: 'Titanic Survival Prediction',
      subtitle: 'Supervised Demographic Classification Benchmark',
      category: 'Data Science • Machine Learning',
      description: 'Binary classification project predicting passenger survival using structured passenger demographics and feature extraction.',
      categories: ['AI/ML', 'Data Science'],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
      bestModel: 'Supervised Classifier',
      metrics: [
        { label: 'Accuracy', value: '~84%' },
        { label: 'Task', value: 'Binary Classification' }
      ],
      github: null,
      liveDemo: null,
      highlights: [
        'Engineered imputed demographic features, family size metrics, and cabin deck categoricals',
        'Cross-validated classification models attaining ~84% accuracy',
        'Analyzed socio-economic feature impact on survival probability'
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 5. ACHIEVEMENTS & CERTIFICATES
  // To add a new certificate, drop the image/PDF in /public/assets/
  // and append a new object below!
  // ------------------------------------------------------------------
  achievements: [
    {
      id: 'chancellor-scholarship',
      title: "Chancellor's Scholarship Merit Certificate",
      issuer: 'Sathyabama Institute of Science and Technology',
      category: 'Merit Scholarship & Academic Honor',
      date: 'Academic Year 2026',
      description: 'Awarded the prestigious Chancellor Scholarship Scheme Merit Certificate for excelling in academics and securing the 8th position up to the 2nd semester in B.E. CSE - AIML.',
      highlights: [
        'Secured 8th academic rank across the Department of Computer Science & Engineering (AIML)',
        'Recognized by Chancellor and President of Sathyabama Institute of Science and Technology'
      ],
      image: '/assets/Certificate.jpeg',
      badge: '8th Rank • Merit Scholar'
    },
    {
      id: 'internshala-top-performer',
      title: 'Top Performer Award — Machine Learning with AI',
      issuer: 'Internshala Trainings & IITM Pravartak',
      category: 'Technical Training Excellence',
      date: 'July 2026',
      description: 'Officially recognized as a Top Performer in an intensive 8-week training covering Supervised Learning, Deep Learning foundations, Clustering, and ML Lifecycle deployment.',
      highlights: [
        'Co-certified by IITM Pravartak Technologies Foundation (IIT Madras)',
        'Special commendation as a top performer among national participants'
      ],
      image: '/assets/Topperformer.jpg',
      badge: 'Top Performer Commendation'
    },
    {
      id: 'skill-india-nsdc',
      title: 'NSDC & Skill India Certified — Machine Learning with AI',
      issuer: 'Skill India / NSDC / Scholiverse',
      category: 'Government & National Accreditation',
      date: '24th July 2026',
      description: 'Awarded Certificate of Completion with Grade "A" under the National Skill Development Corporation (NSDC) and Skill India initiative for Machine Learning with AI.',
      highlights: [
        'Achieved Grade A certification under national skill qualification standards',
        'Certificate ID: iwno1p1mtu8gw1jc (Online Verification Enabled)'
      ],
      image: '/assets/ha7nl3otmm9.jpg',
      badge: 'Grade A • NSDC Accredited'
    },
    {
      id: 'matlab-certification',
      title: 'Linear Algebra with MATLAB Course Completion',
      issuer: 'MathWorks Training Services',
      category: 'Mathematical Computing Certification',
      date: '19th September 2026',
      description: 'Completed 100% of the rigorous self-paced engineering curriculum on Introduction to Linear Algebra with MATLAB, covering matrix calculus, eigen-decompositions, and numeric computation.',
      highlights: [
        'Directly certified by MathWorks Training Services Director',
        '100% completion in matrix computation and vector space modeling for AI'
      ],
      image: '/assets/Matlab.jpeg',
      badge: 'MathWorks 100% Verified'
    }
  ],

  // ------------------------------------------------------------------
  // 6. SKILLS & TECHNICAL TOOLING
  // Add new skill categories or add new tools to existing categories!
  // ------------------------------------------------------------------
  skills: [
    {
      category: 'Machine Learning',
      description: 'Statistical modeling, regression, clustering, ensemble methods, and tabular data science pipelines.',
      skills: [
        { name: 'Scikit-learn', level: 'Core Library', type: 'Framework' },
        { name: 'XGBoost', level: 'Gradient Boosting', type: 'Framework' },
        { name: 'Pandas', level: 'Data Wrangling', type: 'Data Science' },
        { name: 'NumPy', level: 'Numerical Computing', type: 'Data Science' },
        { name: 'Matplotlib', level: 'Visualization', type: 'Analysis' },
        { name: 'Seaborn', level: 'Statistical Plots', type: 'Analysis' }
      ]
    },
    {
      category: 'Deep Learning & Vision',
      description: 'Neural networks, multi-class spatial classification, feature maps, and computer vision pipelines.',
      skills: [
        { name: 'TensorFlow', level: 'Model Building', type: 'Deep Learning' },
        { name: 'PyTorch', level: 'Tensors & Autograd', type: 'Deep Learning' },
        { name: 'CNN (ConvNets)', level: 'Feature Extraction', type: 'Architecture' },
        { name: 'Computer Vision', level: 'Image Processing', type: 'Domain' }
      ]
    },
    {
      category: 'Programming Languages',
      description: 'Foundational languages used for algorithm development, system design, and application logic.',
      skills: [
        { name: 'Python', level: 'Primary Language', type: 'AI/ML & Backend' },
        { name: 'Java', level: 'OOP & Data Structures', type: 'Core' },
        { name: 'C', level: 'Systems & Pointers', type: 'Low-Level' },
        { name: 'JavaScript', level: 'Full-Stack Web', type: 'Frontend/Node' }
      ]
    },
    {
      category: 'Web & Systems Engineering',
      description: 'Modern frontends, backend microservices, REST APIs, and interactive machine learning web applications.',
      skills: [
        { name: 'React', level: 'Interactive UI', type: 'Frontend' },
        { name: 'Next.js', level: 'Full-Stack React', type: 'Framework' },
        { name: 'Node.js', level: 'Runtime Environment', type: 'Backend' },
        { name: 'Express', level: 'REST APIs', type: 'Backend' },
        { name: 'Tailwind CSS', level: 'Utility-first Styling', type: 'Design' },
        { name: 'FastAPI', level: 'High-performance Python APIs', type: 'Backend' },
        { name: 'Streamlit', level: 'Rapid ML Dashboards', type: 'Prototyping' }
      ]
    },
    {
      category: 'Databases & Storage',
      description: 'Relational data modeling, cloud-hosted backends, real-time subscriptions, and geospatial schemas.',
      skills: [
        { name: 'PostgreSQL', level: 'Relational Database', type: 'Storage' },
        { name: 'Supabase', level: 'BaaS & Auth Engine', type: 'Cloud Data' }
      ]
    },
    {
      category: 'Geospatial & Developer Tools',
      description: 'Geospatial routing engines, mapping frameworks, version control, and research environments.',
      skills: [
        { name: 'Git & GitHub', level: 'Version Control', type: 'DevOps' },
        { name: 'VS Code', level: 'IDE & Extensions', type: 'Tool' },
        { name: 'Google Colab', level: 'Cloud GPU Notebooks', type: 'Research' },
        { name: 'Leaflet', level: 'Interactive Maps', type: 'Geospatial' },
        { name: 'Mapbox', level: 'Vector Tile Styling', type: 'Geospatial' },
        { name: 'OSRM', level: 'Open Routing Engine', type: 'Geospatial' }
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 7. EXPERIENCE & COMMUNITY LEADERSHIP
  // ------------------------------------------------------------------
  experience: [
    {
      role: 'Creative and Design Head',
      organization: 'IYRA INNOVATORS COMMUNITY',
      period: 'Core Leadership',
      type: 'Community Co-Founder & Creative Lead',
      summary: 'Founded and organized collaboratively alongside 5 engineering friends to drive student developer culture, coordinating hackathons, technical events, and workshops while heading UI/UX and creative design.',
      activities: [
        'Spearheading Creative & Design direction: designing high-impact brochures, frontend layouts, and interactive website UI.',
        'Organizing and orchestrating hands-on technical workshops, competitive hackathons, and developer bootcamps.',
        'Coordinating cross-functional event logistics and student outreach with the 6-member founding core team.',
        'Fostering peer-driven collaboration around applied machine learning, software engineering, and open innovation.'
      ]
    },
    {
      role: 'Machine Learning Intern',
      organization: 'CodeAlpha',
      period: 'Internship',
      type: 'Practical ML Engineering',
      summary: 'Focused on developing and deploying machine learning and computer vision solutions across diverse problem spaces.',
      projectsCompleted: [
        {
          title: 'Handwritten Character Recognition',
          description: 'Trained a 62-class Convolutional Neural Network (CNN) recognizing digits, uppercase letters, and lowercase letters, achieving a 79.47% test accuracy and deployed as a live interactive Streamlit application.'
        },
        {
          title: 'Disease Prediction from Medical Data',
          description: 'Built diagnostic classification models using patient clinical metrics, applying structured feature preprocessing, handling class imbalance, and evaluating precision-recall trade-offs.'
        }
      ],
      workflow: [
        { step: '01', name: 'Dataset Curation', desc: 'Sourcing, statistical inspection, cleaning, and handling missing values.' },
        { step: '02', name: 'Preprocessing', desc: 'Normalization, categorical encoding, feature scaling, and data augmentation.' },
        { step: '03', name: 'Model Training', desc: 'Architecture selection, hyperparameter tuning, and cross-validation.' },
        { step: '04', name: 'Rigorous Evaluation', desc: 'Classification metrics (Precision, Recall, F1, Confusion Matrix, R², RMSE).' },
        { step: '05', name: 'Interactive Deployment', desc: 'Containerization, inference endpoint creation, and Streamlit / web UI delivery.' }
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 8. EDUCATION
  // ------------------------------------------------------------------
  education: {
    institution: 'Sathyabama Institute of Science and Technology',
    location: 'Chennai, India',
    degree: 'Bachelor of Engineering (B.E.) in Computer Science and Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    currentStatus: '2nd Year Undergraduate Student',
    highlights: [
      'Focus on core computer science foundations: Data Structures, Algorithms, Discrete Mathematics, Database Systems, and Object-Oriented Design.',
      'Specialized coursework in Artificial Intelligence, Machine Learning foundations, Matrix Algebra, Probability & Statistics.',
      'Recipient of the Chancellor Scholarship for academic merit (8th Position up to 2nd Semester).'
    ]
  },

  // ------------------------------------------------------------------
  // 9. DYNAMIC FUTURE SECTIONS
  // The author can define any custom sections here (e.g. Research Papers,
  // Talks, Hackathon Wins, Publications) and they will automatically
  // render in the portfolio!
  // ------------------------------------------------------------------
  customSections: [
    // Example format:
    // {
    //   id: 'publications',
    //   title: 'Research & Publications',
    //   subtitle: 'Preprints, papers, and conference submissions',
    //   items: [
    //     {
    //       title: 'Paper Title',
    //       description: 'Brief overview...',
    //       link: 'https://arxiv.org/...'
    //     }
    //   ]
    // }
  ]
};

export default portfolioConfig;
