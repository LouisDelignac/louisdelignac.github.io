import dlspecializationMd from '../content/projects/DLspecialization.md?raw';
import unetMd from '../content/projects/unetPVpanels.md?raw';
import nvidiaMd from '../content/projects/NvidiaDeepLearning.md?raw';
import datathonMd from '../content/projects/datathonBM.md?raw';
import carrefourMd from '../content/projects/CarrefourChallenge.md?raw';
import windTurbineMd from '../content/projects/windTurbinesClassification.md?raw';
import mctsMd from '../content/projects/MCTS.md?raw';
import dashboardMd from '../content/projects/electricityDashboard.md?raw';

const img_path = '/images/projects/';

export const projects = [
  {
    title: 'Deep Learning Specialization',
    categorie: 'Certification',
    description: 'A 125-hour Deep Learning course led by Andrew Ng on Coursera. It covers how to implement various complex architectures, apply best practices for managing Deep Learning projects, and solve real-world use cases.',
    image: { path: img_path + 'dlai.png', logo: true },
    tags: ['TensorFlow', 'Keras', 'NumPy'],
    markdown: dlspecializationMd,
  },
  {
    title: 'Segmentation of aerial images with U-Net',
    categorie: 'Personal project',
    description: 'Two personal projects on aerial image segmentation using U-Net architecture.',
    image: { path: img_path + 'unetPVpanels/inference.png', logo: false },
    tags: ['Image Segmentation', 'U-Net', 'PyTorch', 'TensorFlow'],
    markdown: unetMd,
  },
  {
    title: 'NVIDIA course - Deep Learning',
    categorie: 'Certification',
    description:
      'Online course from Nvidia DLI on how deep learning works through hands-on exercises in computer vision and natural language processing.',
    image: { path: img_path + 'nvidia_dli.png', logo: true },
    tags: ['Deep Learning', 'Python', 'PyTorch'],
    markdown: nvidiaMd,
  },
  {
    title: 'MetroData - Open-data Datathon',
    categorie: 'Competition',
    description:
      'Datathon organized by Bordeaux Métropole. Analysis and visualization of open-data from the metropole of Bordeaux to create indicators of economic transitions.',
    image: { path: img_path + 'metrodata/BM.webp', logo: true },
    tags: ['Data Analysis', 'Data Visualization', 'Python'],
    markdown: datathonMd,
  },
  {
    title: 'Product re-purchase prediction for CARREFOUR',
    categorie: 'Competition',
    description:
      'AI competition in partnership with the Carrefour group. Development of a predictive model for re-purchasing for a recommender system.',
    image: { path: img_path + 'carrefour.png', logo: true },
    tags: ['Machine Learning', 'Data Science', 'Python'],
    markdown: carrefourMd,
  },
  {
    title: 'Image classification with CNNs and ResNet',
    categorie: 'University Project',
    description:
      'Classification of satellite images of wind turbines using CNNs and pre-trained very deep networks.',
    image: { path: img_path + 'windTurbinesClassification/turbine_images.png', logo: false },
    tags: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Python'],
    markdown: windTurbineMd,
  },
  {
    title: 'Report on the Monte Carlo Tree Search algorithm',
    categorie: 'University Project',
    description:
      'Report on the MCTS algorithm and its applications in board games. This report presents the fundamental concepts as well as implementation examples.',
    image: { path: img_path + 'mcts.png', logo: true },
    tags: ['Algorithms', 'Game Theory', 'Research'],
    markdown: mctsMd,
  },
  {
    title: 'Dashboard for real-time electricity data analysis',
    categorie: 'University Project',
    description:
      'Analytical visualization project consisting in creating a Dash application in python to visualize RTE electrical energy data for France.',
    image: { path: img_path + 'electricity_dashboard/page_accueil.png', logo: false },
    tags: ['Data Visualization', 'Dash', 'Python', 'MongoDB'],
    markdown: dashboardMd,
  },
];
