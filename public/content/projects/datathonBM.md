### Introduction
###### 

**Métrodata**, organized by Bordeaux Métropole, took place on January 22 and 23, on the theme **"48 hours to turn data into key indicators of economic transitions"**. Around a hundred students from various programs at the University of Bordeaux, Sciences Po Bordeaux, Bordeaux Inov, and Kedge Business School took part, each bringing their skills and expertise.

This datathon was part of the Open-Data course unit, which promotes the gold mine that open data represents in data science.

Our team was made up of 8 people:
- 4 Master’s students in MSS at the University of Bordeaux
- 1 student in Economic Intelligence at Sciences Po
- 1 student from ENSC
- 2 students in Data Engineering and Data Science at Bordeaux Inov

In addition to these participants, a team of developers from Bordeaux Inov worked remotely on the creation of the website.

The main objective of our project was to contribute to a sustainable transition by identifying obstacles and initiating relevant actions.

[**View Project**](https://gitlab.com/metrodata-bordeaux/equipe6)

![Teamwork](images\projects\metrodata\work.jpg "Teamwork © Morgane Preud'homme")


### Data and Indicators
######

We used data from several sources, including the [Datahub de Bordeaux Métropole](https://datahub.bordeaux-metropole.fr), the [Agence de la transition écologique (ADEME)](https://data.ademe.fr), the [Agence ORE](https://www.agenceore.fr/), [Enedis](https://data.enedis.fr), and internal data from Bordeaux Métropole.

We were able to create several indicators:
1. Solar potential of buildings
2. Average roof surface area
3. Distribution of solar potential
4. Energy performance of the building stock
5. Greenhouse gas emissions of the building stock
6. Evolution of RGE-certified companies (Recognized Environmental Guarantor)
7. CSR (Corporate Social Responsibility) commitment of companies in Bordeaux
8. Energy consumption by companies in Bordeaux Métropole
9. Breakdown of energy consumption by sector in 2023

Here is an explanation of some of them:
- **Solar potential of buildings:** Assesses the capacity of rooftops to produce solar energy using [solar cadastre](https://datahub.bordeaux-metropole.fr/explore/dataset/eg_cada_solaire_s/information/?disjunctive.insee&sort=-gid&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJzdXJmYWNlX2V4cGxvaXRhYmxlIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzAyNjhBNSJ9XSwieEF4aXMiOiJpbnNlZSIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6IiIsInNvcnQiOiJzZXJpZTEtMSIsImNvbmZpZyI6eyJkYXRhc2V0IjoiZWdfY2FkYV9zb2xhaXJlX3MiLCJvcHRpb25zIjp7ImRpc2p1bmN0aXZlLmluc2VlIjp0cnVlLCJzb3J0IjoiLWdpZCJ9fX1dLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlLCJ0aW1lc2NhbGUiOiIifQ%3D%3D&location=22,44.82366,-0.61434&basemap=jawg.streets) data and [public](https://datahub.bordeaux-metropole.fr/explore/dataset/to_eqbat_s/information/?dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6InRvX2VxYmF0X3MiLCJvcHRpb25zIjp7fX0sImNoYXJ0cyI6W3siYWxpZ25Nb250aCI6dHJ1ZSwidHlwZSI6ImxpbmUiLCJmdW5jIjoiQVZHIiwieUF4aXMiOiJnaWQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjMDI2OEE1In1dLCJ4QXhpcyI6Im1kYXRlIiwibWF4cG9pbnRzIjoiIiwidGltZXNjYWxlIjoieWVhciIsInNvcnQiOiIifV0sImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWV9&location=16,44.83012,-0.57776&basemap=jawg.streets) and [private building](https://datahub.bordeaux-metropole.fr/explore/dataset/fi_etabl_p/export/?location=13,44.855,-0.56788&basemap=jawg.streets) data.  It is based on the number of buildings and their estimated solar potential in kWh/m²/year. The analysis identifies public and private buildings (data filtered by building type) with a potential exceeding 1080 kWh/m²/year, although it does not include information on the current presence of solar panels or ownership constraints. This indicator highlights 29,227 buildings with high potential, helping to target photovoltaic initiatives.
- **Energy performance of the building stock:** Assesses energy efficiency based on data from Energy Performance Diagnostics (DPE) ([data source 1](https://data.ademe.fr/datasets/dpe-france), [data source 2](https://data.ademe.fr/datasets/dpe01tertiaire)). It analyzes the distribution of buildings by energy consumption class and identifies those with high consumption (classes D to G), allowing renovation efforts to be targeted. While this data does not reflect actual energy consumption or embodied energy, it provides insight into which segments of the building stock require improvement to optimize energy efficiency.

Here is an indicator we would have liked to create if the necessary data had been available:
- **Impact of service vehicles on road pollution and urban heat islands in low-emission zones (LEZs):** Evaluates the influence of service vehicles on air pollution and their contribution to urban heat islands within the LEZ. This indicator would require the installation of traffic and pollution sensors to collect data on vehicle types and their emissions. These data would be cross-referenced with the spatial distribution of heat islands to identify any correlations. Requests for assistance in replacing polluting vehicles could also be included as an indicator of progress toward cleaner mobility. 


### Results
######

We ultimately delivered an oral presentation in the form of a pitch. We also produced a [Jupyter notebook](https://gitlab.com/metrodata-bordeaux/equipe6/-/blob/main/Rapport-final.ipynb) detailing our approach, as well as a **website** designed as a scrollable interface with interactive charts. It allows users to directly access key information:
- Summaries of the indicators
- Interactive charts to visualize trends

![Extract from the website](images\projects\metrodata\solar_potential.png "Extract from the website")


### Conclusion
######

This datathon allowed us to draw on and combine a range of skills to tackle several challenges within a limited timeframe. We used data engineering to process the data, statistics to create indicators, and data visualization to present them. Strong speaking skills during the pitch were also essential.

One of the first challenges was coordinating expertise within a team whose members had never worked together before. We had to organize our work quickly, but this mix of profiles enriched our approach and improved the final outcome.

Finally, the two main difficulties we faced were data quality often incomplete, which limited certain calculations and the short amount of time available. A large share of our effort went into finding suitable data, highlighting the need to improve its collection and accessibility. Looking ahead, expanding datasets especially those related to waste and solar installations would refine the analysis of the indicators we were able to create.

![Pitch](images\projects\metrodata\pitch.jpg "Pitch © Iliana Otschapowski")