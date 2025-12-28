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
    title: "Segmentation of satellite images with U-Net", 
    categorie: "Personal project",
    description: "Personal project on satellite image segmentation using U-Net architecture.", 
    image: img_path + 'unetPVpanels/inference.png',
    tags: ["Image Segmentation", "U-Net", "PyTorch", "TensorFlow"],
    markdown: unetMd, 
  },
  {
    title: "Nvidia DLI - Getting Started with Deep Learning", 
    categorie: "Online Course",
    description: "Online course from Nvidia DLI on how deep learning works through hands-on exercises in computer vision and natural language processing.", 
    image: img_path + 'nvidia_dli.png',
    tags: ["Deep Learning", "Python", "PyTorch"],
    markdown: nvidiaMd,
  },
  {
    title: "MetroData Datathon - Bordeaux Métropole",
    categorie: "Competition",
    description: "Datathon organized by Bordeaux Métropole in partnership with the University of Bordeaux. The objective is to analyze and visualize open-data from the metropole of Bordeaux to create indicators of economic transitions.",
    image: img_path + 'metrodata/BM.webp',
    tags: ["Data Analysis", "Data Visualization", "Python"],
    markdown: datathonMd,
  },
  {
    title: "AI Challenge - Product re-purchase prediction - CARREFOUR", 
    categorie: "Competition",
    description: "Competition in partnership with the Carrefour group. Development of a predictive model for re-purchasing for a recommender system.", 
    image: img_path + 'carrefour.png',
    tags: ["Machine Learning", "Data Science", "Python"],
    markdown: carrefourMd,
  },
  { 
    title: "Image classification with deep neural networks", 
    categorie: "University Project",
    description: "Classification of satellite images of wind turbines using CNNs and pre-trained very deep networks.", 
    image: img_path + 'windTurbinesClassification/wind_turbine.jpg',
    tags: ["Deep Learning", "Computer Vision", "PyTorch", "Python"],
    markdown: windTurbineMd,
  },
  {
    title: "Report on the Monte Carlo Tree Search algorithm", 
    categorie: "University Project",
    description: "Report on the MCTS algorithm and its applications in board games. This report presents the fundamental concepts as well as implementation examples.",
    image: img_path + 'mcts.png',
    tags: ["Algorithms", "Game Theory", "Research"],
    markdown: mctsMd,
  },
  {
    title: "Dashboard for real-time electricity data analysis", 
    categorie: "University Project",
    description: "CMI ISI analytical visualization project. This project consists in creating a Dash application in python to visualize RTE electrical energy data for mainland France (excluding Corsica).",
    image: img_path + 'electricity_dashboard/page_accueil.png',
    tags: ["Data Visualization", "Dash", "Python", "MongoDB"],
    markdown: dashboardMd,
  },
];