import { faAward, faBusinessTime, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const careerData = [
  {
    title: "Bachelor's degree in Mathematics and Computer Science",
    institution: 'University of Bordeaux',
    date: '2020 - 2023',
    icon: faGraduationCap,
    description:
      "Intensive bi-disciplinary program in Mathematics and Computer Science (216 ECTS), with a focus on statistics and data management, providing a strong foundation for a Master's in Data Science.",
  },
  {
    title: "Master's degree in Statistical Modeling and Computer Science Engineering",
    institution: 'University of Bordeaux',
    date: '2023 - 2025',
    icon: faGraduationCap,
    description:
      "Master's in Data Science (132 ECTS) covering key areas such as Statistics, Optimization, Machine Learning, and Deep Learning.",
  },
  {
    title: 'Certification: NVIDIA DLI - Deep Learning',
    institution: 'NVIDIA DLI',
    date: '2025',
    icon: faAward,
    description: '',
  },
  {
    title: 'AI R&D Consultant',
    institution: 'STMS (SAP-focused IT services company)',
    date: '2025',
    icon: faBriefcase,
    description: `
        Drafting of the Internal AI Usage Charter.
        Setting up a RAG for the company's internal chatbot.
        Organization of Training for Chatbot Usage.
    `,
  },
  {
    title: 'Certification: Deep Learning Specialization by Andrew Ng (~125h)',
    institution: 'DeepLearning.AI',
    date: '2025',
    icon: faAward,
    description: '',
  },
  {
    title: 'Aspiring Data Scientist',
    institution: '',
    date: '',
    icon: faBusinessTime,
    description: 'Currently actively seeking a position in Data Science or Machine Learning.',
  },
];

export { careerData };
