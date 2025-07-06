### Introduction
###### Completed from October 1, 2024 to November 10, 2024

This project was completed as part of the *Introduction to Deep Learning* course during my second year of Master's degree. It involved a **supervised image classification** task using satellite imagery to detect the presence of wind turbines. The goal was to compare the performance of various deep learning models using the **PyTorch** library in Python.

The datasets were provided by our instructors and include two types of images:
- Images containing one or more wind turbines (*target*)
- Images without wind turbines (*other*)

Three models were implemented:
1. Logistic Regression
2. Convolutional Neural Network (CNN)
3. ResNet (pre-trained model)

We also performed **data preprocessing** and **hyperparameter tuning** to optimize model performance.

[**View Notebook**](https://colab.research.google.com/drive/1nfAqg_RzaYLKZ7cQboQI9VErY02hgtmi)


### Data
######

The images are **color satellite photographs** of agricultural land, with or without wind turbines. Each image is **128x128 pixels in size**. Images showing one or more wind turbines are labeled *target*, otherwise they are labeled *other*.

Two datasets were provided:
- A "Small" dataset split into 3 sets:
  - Train: 172 target, 145 other
  - Validation: 50 target, 50 other
  - Test: 200 images
- A full dataset:
  - Train: 27,958 target, 30,252 other
  - Validation: 2,500 target, 2,500 other
  - Test: 4,993 images

The "Small" dataset was intended for prototyping our models before training on the full dataset. However, it proved to be insufficient. Therefore, we created a **"Medium"** dataset from the full one, consisting of:
- Train: 6,000 images
- Validation: 500 images

![Example of target image](images\projects\windTurbinesClassification\wind_turbine.jpg 'Example of target image')

![Example of other image](images\projects\windTurbinesClassification\other.jpg 'Example of other image')


### Logistic Regression
######

The logistic regression model was used as a **baseline model** to evaluate the performance of more complex approaches. Formally, this model can be interpreted as a **single-layer neural network** with **two output neurons** corresponding to the target classes. Although its simplicity makes it a good initial benchmark, it quickly shows limitations when dealing with the visual complexity of the images. After just two training epochs, the model achieved an **accuracy of 43%**, which serves as the performance threshold to surpass with more advanced models.


### Convolutional Neural Network (CNN)
######

To significantly improve performance compared to logistic regression, we chose to use a **Convolutional Neural Network (CNN)**, an architecture well-suited for image classification. CNNs leverage the spatial structure of images, making them particularly effective at detecting visual patterns such as edges, textures, and shapes. Historically, they were popularized by Yann LeCun and his team in 1989 for handwritten digit recognition, marking the beginning of their widespread use in computer vision.

In this project, we built a model with **three convolutional layers**, each followed by a **pooling layer** to reduce dimensionality, and finally **fully connected layers** for final classification. The network was intentionally kept relatively simple, and the dataset was large enough to train the model without needing **data augmentation**, which is often used to compensate for small datasets.

#### Hyperparameter Selection

We paid particular attention to **hyperparameter selection**, as these significantly influence model performance. Three main parameters were tuned:
- *batch_size*: mini-batch size, affecting training stability and gradient descent efficiency
- *learning_rate*: learning rate, determining how quickly the model converges
- *num_epochs*: number of complete passes over the training data

We tested **multiple combinations of these parameters** to identify the configuration yielding the best results while avoiding **overfitting**. The final model was selected based on its performance on the validation set.

#### Results

The resulting CNN model achieved an **accuracy of 97.5%** on the Small test set, representing a significant improvement over the baseline model. These results confirm the advantages of using convolutional architectures for complex image classification tasks.


### Residual neural network (ResNet)
######

To leverage the performance of models already trained on large datasets, we used a **Residual Neural Network (ResNet)** architecture via the **TorchVision** library, which provides several pre-trained models. ResNet models are **very deep neural networks** designed to avoid performance degradation as the number of layers increases. Their architecture includes **residual connections**, which facilitate gradient flow and allow for efficient training of deep networks. ResNet models won the prestigious [ImageNet Challenge](https://en.wikipedia.org/wiki/ImageNet#History_of_the_ImageNet_challenge) in 2015.

In this project, we adapted the model to our binary classification task using **transfer learning**, by reusing **pre-trained weights** from ImageNet and **fine-tuning** the model on our own dataset. Among the various options provided by TorchVision, we chose **ResNet-18**, a relatively lightweight version with 18 layers, offering a **good balance between performance and computation time**.

#### Data Preprocessing

Before training the model, the data needed to be prepared to match ResNet's expected input format. Specifically, the images were **resized to 224×224 pixels**, the standard input size for the model. Since we were using a pre-trained model, we limited the transformations applied to the images to preserve the features learned. **No data augmentation** was needed, as the training dataset was large and representative enough.

#### Hyperparameter Selection

As with the CNN model, *various hyperparameter combinations* were tested to optimize performance:
- *batch_size*: influences the speed and stability of training
- *learning_rate*: needs careful tuning for pre-trained models to avoid "destroying" initial weights
- *num_epochs*: number of full passes through the data

The goal was to achieve **optimal performance without overfitting**, by monitoring performance on the validation set at each epoch.

#### Results

The fine-tuned ResNet-18 model achieved an **accuracy of 98%** on the Small test set. This result demonstrates the power of transfer learning combined with deep architectures, even for relatively simple classification tasks.


### Global results
######

The CNN and ResNet models achieved up to **98% accuracy** on the test set, confirming the **relevance of deep neural network architectures** for automatic wind turbine detection in satellite images. These results represent a clear improvement over the baseline model, highlighting the effectiveness of **deep learning** for this type of visual classification task.


### Conclusion
######

This project provided me with a **comprehensive and hands-on experience in computer vision**, from designing simple models to using advanced architectures like ResNet. I learned to **master the fundamentals of PyTorch**, build and train different types of neural networks, and take into account essential aspects like **data preprocessing** and **rigorous hyperparameter tuning**. This process also allowed me to **objectively compare model performance** on a real-world use case, deepening my understanding of tools and techniques in applied deep learning for image analysis.