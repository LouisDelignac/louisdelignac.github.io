### Introduction
###### Competed from September 12, 2024 to January 9, 2025

This AI Challenge was carried out as part of a **Kaggle competition** organized through a partnership between the University of Bordeaux, Carrefour France's Analytics Factory and several other universities.

The main objective is to develop a predictive model capable of identifying the first purchases of anonymized customers in 2024, using historical data from two years (2022–2023) provided by Carrefour. This data is divided into three sets:
- **Products:** Contains metadata associated with the products (categories, features).
- **Train:** Transaction history of 100,000 anonymized customers.
- **Test:** Transactions of 80,000 anonymized customers.

This data is confidential and cannot be shared.

Model evaluation is based on the **Hitrate@10 metric**, which measures the proportion of relevant recommendations among the top 10 suggested products for each customer. The baseline score, based on a simple method, is set at **33%**, which serves as the initial target to exceed.

To achieve this goal, we adopted a supervised learning approach, with a particular focus on **LightGBM**, a powerful algorithm for handling large-scale tabular data. To maximize performance, we also experimented with advanced techniques, including the use of a custom objective function optimized for **pairwise ranking**. This approach directly aims to maximize hitrate by focusing on the ranking order of the recommendations.

This report outlines the key steps of our work: data preparation, model selection, hyperparameter tuning, and result evaluation.

🔗 [**View Notebook**](https://colab.research.google.com/drive/17aUcZ25MyDEdB1FjVougNH7AkGmG9pYv#scrollTo=jn5IX_L8JPyw)


### Methodology

#### Data

For this project, we used three main datasets:
- The **Products** file contains metadata associated with the products, including their categories and features. This information is used to enrich the transactional data.
-The **Train** file includes the transaction history of 100,000 anonymized customers over a two-year period (2022–2023).
- The **Test** file, used for final evaluation, contains transactions from 80,000 anonymized customers, of which 20,000 hidden customers make up the test set to be predicted.

Given the large volume of data, we chose to convert the files to **.parquet** format. This compact file format, optimized for handling large datasets, significantly improved performance in terms of read/write speed while reducing disk storage size. This conversion proved essential for efficiently processing the data throughout the project, especially during repeated preprocessing and feature engineering steps.

This data forms the foundation upon which our model is built. Careful preparation was therefore crucial to ensure its quality and relevance.

#### Data Preprocessing

Data preprocessing was divided into two main stages: **data cleaning** and **data enrichment**.

#### Data Cleaning

Several operations were performed to improve data quality and facilitate its use:
- **Duplicate removal:** Redundant entries were eliminated to avoid bias in calculations.
- **ID cleaning:** Prefixes in customer and product identifiers (e.g., "Household_", "Product_", or "Transaction_") were removed to reduce data size and speed up processing.
- **Date conversion:** Date information was converted to datetime format, enabling precise time-based calculations such as measuring transaction recency.
- **Column filtering:** Only relevant columns (e.g., identifiers, dates, and transactions) were retained to reduce model complexity.

#### Data Enrichment

To capture complex relationships between customers and products, additional features were created:
- **Counts:** Total number of interactions between a customer and a product.
- **Recency:** Number of days since the last interaction between a customer and a product.
- **Transaction counts:** Total number of transactions made by each customer.
- **Presence ratio:** Ratio of interactions between a product and a customer relative to the customer’s total transactions.
- **Mean days between purchases:** Average time between two consecutive purchases of a product.
- **Recency vs. mean time between purchases (difference and ratio):** Indicators calculated by comparing a product’s recency with its average purchase interval.
- **Binary categories:** Additional variables derived from product metadata (e.g., product category or subcategory).

These new variables enriched the initial dataset and provided the model with deeper insights into customer behavior.

#### Target Variable

Defining the target variable is a key step in any machine learning project. In this case, a product is considered relevant if **it is among the first 10 products purchased by a customer in 2024**. This definition is directly aligned with the project goal: maximizing recommendation relevance

#### Data Splitting

To train and evaluate the model, the data was divided into two sets:
- **Training set:** This set was used to fit the model. To simulate a realistic environment, 20% of households were excluded from this set and reserved for validation.
- **Validation set:** This set was used to assess the model’s performance while preventing overfitting.

This split ensured a clear separation between training and evaluation data, contributing to the model’s robustness.

#### Model Optimization with a Custom Objective Function


To optimize our LightGBM model in a pairwise ranking context, we developed a **custom objective function** specifically designed to maximize the hit rate (Hitrate@10). This function is based on optimizing the differences between the predicted scores of purchased and non-purchased products within groups defined per customer.

The methodology involves computing tailored gradients and Hessians by calculating the differences between the scores of positive (purchased) and negative (non-purchased) products for each customer. These differences are then adjusted using a sigmoid function, which modulates the gradients and Hessians to maximize the probability of correctly predicting the first purchases. This approach ensures that intra-group relationships (i.e., between products for the same customer) are central to the optimization process—crucial for ranking tasks like this one.

Using this custom objective function allowed us to enhance the model’s performance by capturing subtle customer preferences while effectively targeting the products most likely to be purchased first.


### Results

The developed model achieved remarkable performance both locally and on the Kaggle platform, surpassing the baseline score of 33%.

In local evaluation, the model achieved a score of **36.90%**, confirming its effectiveness in identifying the products most likely to be purchased first by customers.

On Kaggle, the model achieved a slightly higher score of **37.30%**, demonstrating its robustness and ability to generalize well to unseen data.

This result positions our approach as both relevant and competitive within the scope of the challenge. However, it is worth noting that other teams achieved higher scores, placing us in **10th position** in the final leaderboard. This highlights potential areas for further improvement to refine the model and enhance our methodologies.


### Conclusion

This project proved to be both a challenging and rewarding experience. Our main objective was to develop a model capable of predicting the first purchases of anonymized customers in 2024, by leveraging two years of historical transaction data. To achieve this, we applied a methodical approach combining data preprocessing, the generation of relevant features, and the implementation of a high-performing model based on **LightGBM**.

At the end of our efforts, our model achieved a score of **37.30%** on the Kaggle platform, thus surpassing the baseline score of 33%. While this result is encouraging, it placed us in 10th position on the leaderboard, indicating that there is still room for improvement. Nonetheless, the model’s ability to generalize well highlights the relevance of the methods we employed.

One of the initial challenges we faced was the large volume of data and the complexity of the analysis required. The data scale demanded constant adjustments to optimize processing times, which at times made the training and validation processes long and complex. However, these challenges provided an excellent opportunity to strengthen our skills in handling large-scale data and in model optimization.

Beyond the technical aspects, we greatly enjoyed the entire process. This challenge allowed us to apply a wide range of skills, from data engineering to advanced modeling. It also offered valuable insights into recommendation systems, ranking methodologies, and the practical challenges of predictive systems in a real-world commercial context.

In conclusion, this project represents a significant milestone in our journey, and the lessons learned will undoubtedly serve as a strong foundation for future challenges of a similar nature