const img_path = 'images/projects/'; 
const md_path  = 'content/projects/';

export const projects = [
  {
    title: "Nvidia DLI - Getting Started with Deep Learning", 
    categorie: "Online Course",
    description: "Online course from Nvidia DLI on how deep learning works through hands-on exercises in computer vision and natural language processing.", 
    image: img_path + 'nvidia_dli.png',
    tags: ["Deep Learning", "Python", "PyTorch"],
    markdown: md_path + 'NvidiaDeepLearning.md',
  },
  {
    title: "Barcelona Open Data Dashboard",
    categorie: "University Project",
    description: "Dashboard on quality of life in Barcelona, using several indicators such as mobility and transport, environment, urban planning and housing, demographics and safety.",
    image: img_path + 'opendatabcn.png',
    tags: ["Data Visualization", "Dash", "Python"],
    markdown: md_path + 'BCNdashboard.md',
  },
  {
    title: "MetroData Datathon - Bordeaux Métropole",
    categorie: "Competition",
    description: "Datathon organized by Bordeaux Métropole in partnership with the University of Bordeaux. The objective is to analyze and visualize open-data from the metropole of Bordeaux to create indicators of economic transitions.",
    image: img_path + 'metrodata/BM.webp',
    tags: ["Data Analysis", "Data Visualization", "Python"],
    markdown: md_path + 'datathonBM.md',
  },
  {
    title: "AI Challenge - Product re-purchase prediction - CARREFOUR", 
    categorie: "Competition",
    description: "Competition between several universities in partnership with the Carrefour group. Development of a predictive model for re-purchasing based on a purchase history and evaluation of the model's performance with the Hit Rate @10 metric.", 
    image: img_path + 'carrefour.png',
    tags: ["Machine Learning", "Data Science", "Python"],
    markdown: md_path + 'CarrefourChallenge.md',
  },
  { 
    title: "Image classification with deep neural networks", 
    categorie: "University Project",
    description: "Classification of satellite images of wind turbines using CNNs and pre-trained very deep networks.", 
    image: img_path + 'wind_turbine.jpg',
    tags: ["Deep Learning", "Computer Vision", "PyTorch", "Python"],
    markdown: md_path + 'windTurbinesClassification.md',
  },
  {
    title: "Report on the Monte Carlo Tree Search algorithm", 
    categorie: "University Project",
    description: "Introductory report on the Monte Carlo Tree Search (MCTS) algorithm and its applications in board games. This report presents the fundamental concepts of MCTS, as well as implementation examples.",
    image: img_path + 'mcts.png',
    tags: ["Algorithms", "Game Theory", "Research"],
    markdown: md_path + 'MCTS.md',
  },
  {
    title: "Dashboard for real-time electricity data analysis", 
    categorie: "University Project",
    description: "CMI ISI analytical visualization project. This project consists in creating a Dash application in python to visualize RTE electrical energy data for mainland France (excluding Corsica).",
    image: img_path + 'electricity_dashboard/page_accueil.png',
    tags: ["Data Visualization", "Dash", "Python", "MongoDB"],
    markdown: md_path + 'electricityDashboard.md',
  },
];