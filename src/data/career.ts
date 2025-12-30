import { faAward, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const careerData = [
  {
    title: "Bachelor's degree CMI Statistical and Computer Engineering",
    institution: 'University of Bordeaux',
    date: '2020 - 2023',
    icon: faGraduationCap,
    description:
      "Bi-disciplinary training in Mathematics (Probability and Statistics) and Computer Science (Programming and Data Management) to provide the necessary tools for a Master's in Data Science.",
  },
  {
    title: "Master's degree Statistical and Stochastic Modeling",
    institution: 'University of Bordeaux',
    date: '2023 - 2025',
    icon: faGraduationCap,
    description:
      "Master's in Data Science: Probability and Statistics, Optimization, Regression Models, Machine Learning (supervised, unsupervised, deep learning), Data Visualization, Databases, Survival Analysis, Optimal Transport.",
  },
  {
    title: 'Certification: NVIDIA DLI - Deep Learning',
    institution: 'NVIDIA DLI',
    date: '2025',
    icon: faAward,
    description: '',
  },
  {
    title: 'Consultant R&D IA',
    institution: 'STMS',
    date: '2025',
    icon: faBriefcase,
    description: `
        Drafting of the Internal AI Usage Charter.
        Setting up a RAG for the company's internal chatbot.
        Organization of Training for Chatbot Usage.
    `,
  },
  {
    title: 'Certification: Deep Learning Specialization by Andrew Ng',
    institution: 'DeepLearning.AI',
    date: '2025',
    icon: faAward,
    description: '',
  },
];

export { careerData };
