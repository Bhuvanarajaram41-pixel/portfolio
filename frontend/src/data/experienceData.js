export const experienceData = [
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
  },
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
  }
];

export const educationData = {
  institution: 'Sathyabama Institute of Science and Technology',
  location: 'Chennai, India',
  degree: 'Bachelor of Engineering (B.E.) in Computer Science and Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  currentStatus: '2nd Year Undergraduate Student',
  highlights: [
    'Focus on core computer science foundations: Data Structures, Algorithms, Discrete Mathematics, Database Systems, and Object-Oriented Design.',
    'Specialized coursework in Artificial Intelligence, Machine Learning foundations, Matrix Algebra, Probability & Statistics.',
    'Recipient of the Chancellor Scholarship for academic merit.'
  ]
};
