### Introduction
###### Completed from July 20, 2025 to August 12, 2025

The objective of this project was to develop and train deep learning models for the **segmentation of satellite and aerial images**. More specifically, the goal was to **automatically detect photovoltaic panels from aerial images**.

To achieve this, I compared two approaches: **fine-tuning a pre-trained model with PyTorch** and **implementing a model from scratch with TensorFlow**.

Beyond the technical aspect, this project reflects my interest in renewable energy and the **application of data science to environmental challenges**.


### Data Overview
######

I used the dataset from the paper: [*Multi-resolution dataset for photovoltaic panel segmentation from satellite and aerial imagery*](https://essd.copernicus.org/preprints/essd-2021-270/)

The dataset contains over 7,432 files using roughly 12.1 GB of disk space in total. This data is split into categories corresponding to their spatial resolutions (0.8, 0.3, and 0.1 m). Each image has its own labeling mask.

![Example of image](images\projects\unetPVpanels\PV01_example.bmp 'Example of image')

![Example of mask](images\projects\unetPVpanels\PV01_example_label.bmp 'Example of mask')

This dataset provides image–mask pairs, which are required for training segmentation models. I made it available on Kaggle: [*PV Segmentation Dataset*](https://www.kaggle.com/datasets/louisdelignac/pv-segmentation-from-satellite-and-aerial-imagery).

Unfortunately, some annotation errors are present, which may limit the maximum performance achievable by the models.


### U-Net Network
######

The U-Net network is a convolutional neural network architecture primarily designed for image segmentation tasks. Introduced in 2015 by Olaf Ronneberger and colleagues, U-Net is characterized by its distinctive "U"-shaped structure, consisting of a contracting path (encoder) and an expanding path (decoder). The contracting path captures the global context of the image through a series of convolutions and downsampling operations, while the expanding path enables precise localization using upsampling combined with skip connections that link corresponding layers of the network. These connections help preserve spatial details and improve segmentation quality, even when training with a limited number of annotated images.

![U-Net Architecture](images\projects\unetPVpanels\unet_architecture.webp 'U-Net Architecture')


### Methodology
######

#### Notebook 1 - Fine-tuning with PyTorch

🔗 [**View Notebook**](https://www.kaggle.com/code/louisdelignac/pv-panels-u-net-fine-tuning-pytorch)

In the first stage, I experimented with fine-tuning a pre-trained U-Net model using PyTorch. To stabilize training, I applied the technique of freezing the encoder during the initial training steps, which helped better control the gradient. The model was trained with a **Binary Cross-Entropy** loss function, suitable for the binary problem (photovoltaic panels and background). Evaluation was based on the **Pixel Accuracy metric**, which directly measures the proportion of correctly predicted pixels. This initial work led to visually interesting results, providing a solid foundation for validating the approach. However, it was mainly a proof of concept designed to test the dataset's potential and the tools before building a U-Net model from scratch.

![Results of the 2 trainings](images\projects\unetPVpanels\fine_tuning.png 'Results of the 2 trainings')


#### Notebook 2 - U-Net from scratch with TensorFlow

🔗 [**View Notebook**](https://www.kaggle.com/code/louisdelignac/pv-panels-u-net-from-scratch-tensorflow)

The second stage of the project involved implementing the original U-Net architecture described by [Ronneberger et al. (2015)](https://arxiv.org/pdf/1505.04597), this time with TensorFlow. After reproducing the base structure, I carried out several experiments to improve the model's performance. Adding **Instance Normalization** layers before the convolutions and **Dropout** layers after them proved particularly effective, contributing to more stable learning curves and better generalization. Beyond training, I developed various visualizations and metrics to evaluate the inference results: pixel accuracy, a confusion matrix and a difference maps to better analyze prediction errors.

![Inference visualization](images\projects\unetPVpanels\inference_visualization.png 'Inference visualization')

To further enrich the visual analysis, I integrated contour detection using OpenCV. This second approach allowed for better exploitation of the model's results directly on the original image and confirmed the relevance of the U-Net architecture for satellite image segmentation.

![Contours detection with OpenCV](images\projects\unetPVpanels\contour.png 'Contours detection with OpenCV')


### Conclusion
######

The two approaches implemented produced visually meaningful segmentations, although the quality of the dataset annotations sometimes introduced noise into the results. These experiments also allowed me to observe certain limitations, particularly related to the errors in the dataset and the choice of metrics. Indeed, I mainly relied on pixel accuracy without exploring other indicators also well-suited to image segmentation, such as the Dice or Jaccard coefficients.

Despite these limitations, this project was an opportunity to strengthen my technical skills, both in PyTorch and TensorFlow, while gaining initial hands-on experience in image segmentation and handling image–mask data. I was able to cover the entire pipeline: data preparation, model training, evaluation and visualization of results (Pixel Accuracy, confusion matrix, difference maps, contour detection). I also made use of several complementary libraries, including OpenCV, Scikit-Learn, Pandas, Matplotlib, and Tqdm.

In addition, this work was a valuable experience on [Kaggle](https://www.kaggle.com/louisdelignac), from publishing the dataset to releasing reproducible and well-documented notebooks. More broadly, it reinforced my interest in applying machine learning to real-world challenges, particularly in the field of renewable energy.