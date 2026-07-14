export const COURSES_DATA = {
  // === AI ENGINEER ===
  'Machine Learning Fundamentals': {
    description: 'Learn the foundational math, theory, and implementation of supervised and unsupervised machine learning algorithms.',
    docUrl: 'https://scikit-learn.org/stable/user_guide.html',
    playlists: {
      'English': [
        { title: '1. Machine Learning Intro (MIT)', embedUrl: 'https://www.youtube.com/embed/GwIo3gGIP3w' },
        { title: '2. Linear Regression (StatQuest)', embedUrl: 'https://www.youtube.com/embed/i_LwzRVP7bg' },
        { title: '3. Decision Trees (StatQuest)', embedUrl: 'https://www.youtube.com/embed/7VeUPuFGJHk' }
      ],
      'Hindi': [
        { title: '1. ML Full Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' },
        { title: '2. Linear Regression (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '3. Logistic Regression (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' }
      ],
      'Tamil': [
        { title: '1. ML Intro in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' },
        { title: '2. Supervised & Unsupervised (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '3. Linear Regression in Tamil', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' }
      ]
    },
    readingMaterial: `### 📘 Study Guide: Machine Learning Fundamentals

#### 1. What is Machine Learning?
Machine Learning (ML) is a subset of Artificial Intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.

#### 2. Key Categories of ML:
* **Supervised Learning**: The algorithm learns on a labeled dataset (e.g., Linear Regression, Decision Trees, Support Vector Machines).
* **Unsupervised Learning**: The algorithm learns from unlabeled data by finding patterns (e.g., K-Means Clustering, Principal Component Analysis).
* **Reinforcement Learning**: The agent learns to react to an environment by receiving rewards or penalties (e.g., Q-Learning, Deep Q Networks).

#### 3. Core Workflow:
1. Data collection & preprocessing.
2. Feature selection and engineering.
3. Splitting into Training and Test datasets.
4. Model training and parameter tuning.
5. Evaluation using metrics like accuracy, precision, recall, and F1-score.`
  },
  'Deep Learning Specialization': {
    description: 'Dive deep into neural networks, feedforward/backpropagation, convolutional networks, and sequential models.',
    docUrl: 'https://www.tensorflow.org/tutorials',
    playlists: {
      'English': [
        { title: '1. Neural Networks Intro (3B1B)', embedUrl: 'https://www.youtube.com/embed/VyWavY2Xn4o' },
        { title: '2. Gradient Descent (3B1B)', embedUrl: 'https://www.youtube.com/embed/IHZwWFHWa-w' },
        { title: '3. Backpropagation (3B1B)', embedUrl: 'https://www.youtube.com/embed/Ilg3gGewQ5U' }
      ],
      'Hindi': [
        { title: '1. Deep Learning Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Artificial Neural Networks (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Backprop Math (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Deep Learning Intro (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Neural Networks in Tamil', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Activation Functions in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 🧠 Study Guide: Deep Learning Specialization

#### 1. What is Deep Learning?
Deep Learning is a specialized subfield of Machine Learning modeled after the human brain's structure. It uses multi-layered Artificial Neural Networks (ANNs) to learn representations of data.

#### 2. Essential Components of a Neural Network:
* **Neurons (Nodes)**: Receive input, apply weights and a bias, and compute an output.
* **Activation Functions**: Introduce non-linearity into the network (e.g., ReLU, Sigmoid, Tanh, Softmax).
* **Loss Functions**: Measure the difference between predicted output and actual target (e.g., Mean Squared Error, Cross-Entropy).

#### 3. Core Architectures:
* **CNNs (Convolutional Neural Networks)**: Optimized for spatial data like images.
* **RNNs (Recurrent Neural Networks) & LSTMs**: Optimized for sequential or time-series data like text or speech.
* **Transformers**: The state-of-the-art architecture leveraging self-attention mechanisms, powering modern LLMs (GPT, BERT).`
  },
  'Natural Language Processing (NLP)': {
    description: 'Process and analyze human language data using tokenization, parsing, embedding, and transformer models.',
    docUrl: 'https://www.nltk.org/',
    playlists: {
      'English': [
        { title: '1. NLP Introduction & Text Prep', embedUrl: 'https://www.youtube.com/embed/M7SWr5xObkA' },
        { title: '2. NLTK & Tokenization Tutorial', embedUrl: 'https://www.youtube.com/embed/eM_FR7I2szc' },
        { title: '3. Transformers & Attention', embedUrl: 'https://www.youtube.com/embed/szczpgOEdXs' }
      ],
      'Hindi': [
        { title: '1. NLP in Python Intro (Hindi)', embedUrl: 'https://www.youtube.com/embed/84e8R2H5x3c' },
        { title: '2. Text Processing (Hindi)', embedUrl: 'https://www.youtube.com/embed/8NoLpZ26ZzM' },
        { title: '3. Word Embeddings (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ28ZzM' }
      ],
      'Tamil': [
        { title: '1. NLP Concepts (Tamil)', embedUrl: 'https://www.youtube.com/embed/y8c2g3Q9G25w' },
        { title: '2. Tokenization & POS Tagging (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Transformer models (Tamil)', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 💬 Study Guide: Natural Language Processing (NLP)

#### 1. Introduction to NLP
Natural Language Processing is the intersection of computer science, artificial intelligence, and linguistics aimed at enabling computers to understand and process human languages.

#### 2. Classic Preprocessing Steps:
* **Tokenization**: Splitting sentences into individual words/tokens.
* **Stop-Words Removal**: Removing highly frequent words that carry little semantic meaning (e.g., "is", "the").
* **Stemming & Lemmatization**: Reducing words to their base or dictionary form (e.g., "running" to "run").

#### 3. Modern Embeddings and Models:
* **Word2Vec / GloVe**: Map words into dense vector spaces where semantically similar words are close to each other.
* **Attention Mechanism**: Allows the model to focus on specific parts of a sentence regardless of distance, leading to modern LLMs.`
  },
  'Computer Vision Basics': {
    description: 'Understand pixel manipulations, edge detections, spatial filtering, and basic image classification systems.',
    docUrl: 'https://docs.opencv.org/master/',
    playlists: {
      'English': [
        { title: '1. Computer Vision & OpenCV Intro', embedUrl: 'https://www.youtube.com/embed/N81PCpADw_o' },
        { title: '2. Edge Detection (Sobel & Canny)', embedUrl: 'https://www.youtube.com/embed/2DgT5aLz0F8' },
        { title: '3. Image Classification Basics', embedUrl: 'https://www.youtube.com/embed/14ir62TdQYc' }
      ],
      'Hindi': [
        { title: '1. OpenCV Python Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/01s8Ed5m6gA' },
        { title: '2. Image Processing Basics (Hindi)', embedUrl: 'https://www.youtube.com/embed/mJ0Y5k10k_M' },
        { title: '3. Object Detection (Hindi)', embedUrl: 'https://www.youtube.com/embed/y8c2g3Q9G25' }
      ],
      'Tamil': [
        { title: '1. Computer Vision in Tamil', embedUrl: 'https://www.youtube.com/embed/mK9X8yT8mK8' },
        { title: '2. OpenCV Basics (Tamil)', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' },
        { title: '3. Object Tracking (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' }
      ]
    },
    readingMaterial: `### 📷 Study Guide: Computer Vision Basics

#### 1. What is Computer Vision?
Computer Vision enables computers to obtain high-level understanding from digital images or videos.

#### 2. Image Representation:
* A digital image is represented as a matrix of pixel values.
* Grayscale images are 2D matrices (0 = black, 255 = white).
* Color images are 3D tensors (usually Red, Green, Blue channels).

#### 3. Common Techniques:
* **Filtering**: Blurring (Gaussian), sharpening, and denoising.
* **Edge Detection**: Finding structural changes in brightness (Canny, Sobel filters).
* **Image Segmentation**: Partitioning an image into multiple segments (objects or backgrounds).`
  },
  'Generative AI and Large Language Models': {
    description: 'Explore the architectures powering ChatGPT, including transformers, self-attention, and prompt engineering.',
    docUrl: 'https://huggingface.co/docs/transformers/index',
    playlists: {
      'English': [
        { title: '1. Large Language Models Intro', embedUrl: 'https://www.youtube.com/embed/5sLYAJKMV-I' },
        { title: '2. How Transformers Work', embedUrl: 'https://www.youtube.com/embed/szczpgOEdXs' },
        { title: '3. Generative AI Roadmap', embedUrl: 'https://www.youtube.com/embed/zjkBMFhNj_g' }
      ],
      'Hindi': [
        { title: '1. Generative AI Intro (Hindi)', embedUrl: 'https://www.youtube.com/embed/LDRbO9a6XPU' },
        { title: '2. ChatGPT & LLMs explained (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' },
        { title: '3. Prompt Engineering (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' }
      ],
      'Tamil': [
        { title: '1. Generative AI Overview (Tamil)', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' },
        { title: '2. How ChatGPT Works (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '3. Prompt Engineering in Tamil', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' }
      ]
    },
    readingMaterial: `### 🚀 Study Guide: Generative AI & Large Language Models

#### 1. What is Generative AI?
Generative AI refers to algorithms (such as LLMs, GANs, and Diffusion models) that can be used to create new content, including text, images, audio, and code.

#### 2. The Transformer Revolution:
* Introduced in 2017 ("Attention is All You Need").
* Replaced recurrent layers with **Self-Attention** modules, allowing massive parallelization during training.
* Powered models like GPT, Claude, LLaMA, and Gemini.

#### 3. Core Concepts:
* **Fine-Tuning**: Adapting a pre-trained base model to a specific domain or task.
* **RAG (Retrieval-Augmented Generation)**: Connecting LLMs to external databases to retrieve accurate factual data before generating responses.`
  },

  // === DATA SCIENTIST ===
  'Data Analysis with Python': {
    description: 'Learn data manipulation, cleaning, and visual analysis using NumPy, Pandas, Matplotlib, and Seaborn.',
    docUrl: 'https://pandas.pydata.org/docs/',
    playlists: {
      'English': [
        { title: '1. Python for Data Analysis', embedUrl: 'https://www.youtube.com/embed/r-uOLxNrNk8' },
        { title: '2. Pandas Tutorial (DataFrames)', embedUrl: 'https://www.youtube.com/embed/ZyhVh-qRZPA' },
        { title: '3. Data Visualization (Matplotlib)', embedUrl: 'https://www.youtube.com/embed/DAQN1DaTX9Y' }
      ],
      'Hindi': [
        { title: '1. Pandas & Numpy in Hindi', embedUrl: 'https://www.youtube.com/embed/Edsxf_S21zc' },
        { title: '2. Data Analysis Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/hKB-YGF14dE' },
        { title: '3. Matplotlib Plots (Hindi)', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Tamil': [
        { title: '1. Data Science with Python (Tamil)', embedUrl: 'https://www.youtube.com/embed/m5_qWq0Z9bA' },
        { title: '2. Pandas & Dataframes (Tamil)', embedUrl: 'https://www.youtube.com/embed/8vC2hE9Zg0k' },
        { title: '3. Matplotlib plotting (Tamil)', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 📊 Study Guide: Data Analysis with Python

#### 1. Essential Tools
Python has become the industry-standard language for data analysis due to its rich library ecosystem:
* **NumPy**: High-performance N-dimensional array processing.
* **Pandas**: Structured data analysis tools (DataFrames).
* **Matplotlib & Seaborn**: Data visualization libraries.

#### 2. Data Cleaning:
* Handling missing values (imputing averages, dropping null rows).
* Removing duplicates.
* Resolving data type inconsistencies.

#### 3. Exploratory Data Analysis (EDA):
* Using statistics (mean, median, standard deviation) to summarize datasets.
* Visualizing trends using line charts, bar plots, histograms, and scatter plots.`
  },
  'Statistics for Data Science': {
    description: 'Understand descriptive/inferential statistics, probability distributions, hypothesis tests, and regressions.',
    docUrl: 'https://docs.scipy.org/doc/scipy/reference/stats.html',
    playlists: {
      'English': [
        { title: '1. Statistics & Probability Course', embedUrl: 'https://www.youtube.com/embed/XXadT4FjBMM' },
        { title: '2. Hypothesis Testing Explained', embedUrl: 'https://www.youtube.com/embed/tTeMYuS87oU' },
        { title: '3. Z-Score, P-Value & T-Test', embedUrl: 'https://www.youtube.com/embed/5D1gV37ysBY' }
      ],
      'Hindi': [
        { title: '1. Statistics for Data Science (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Probability Basics (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Hypothesis Testing (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. Statistics in Tamil', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. Probability & distributions (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Hypothesis testing in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 📈 Study Guide: Statistics for Data Science

#### 1. Descriptive vs. Inferential Statistics
* **Descriptive**: Summarizes characteristics of a dataset (mean, median, mode, variance, standard deviation).
* **Inferential**: Uses a sample of data to make generalizations or predictions about a larger population.

#### 2. Probability Distributions:
* **Normal (Gaussian) Distribution**: Symmetric bell curve where mean = median = mode.
* **Binomial & Poisson Distributions**: Discrete probability distributions.

#### 3. Hypothesis Testing:
* Formulating Null ($H_0$) and Alternative ($H_1$) Hypotheses.
* Choosing significance levels (commonly $\\alpha = 0.05$).
* Calculating p-values to determine statistical significance (e.g., T-Tests, ANOVA, Chi-Square Tests).`
  },
  'SQL for Data Analytics': {
    description: 'Retrieve, filter, aggregate, and join complex dataset tables using Structured Query Language.',
    docUrl: 'https://www.w3schools.com/sql/',
    playlists: {
      'English': [
        { title: '1. SQL Course for Beginners', embedUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY' },
        { title: '2. Joins & Aggregations (SQL)', embedUrl: 'https://www.youtube.com/embed/9Pzj7Aj25lw' },
        { title: '3. Subqueries & CTEs in SQL', embedUrl: 'https://www.youtube.com/embed/8hly31xKjhc' }
      ],
      'Hindi': [
        { title: '1. SQL Database Tutorial (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. SQL Joins Explained (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Advanced Queries (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. SQL Queries in Tamil', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. MySQL Installation & Joins (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Subqueries in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 💾 Study Guide: SQL for Data Analytics

#### 1. What is SQL?
Structured Query Language (SQL) is the standard language for relational database management systems.

#### 2. Core Commands:
* **SELECT / FROM**: Specify columns and tables.
* **WHERE**: Filter records based on criteria.
* **GROUP BY / HAVING**: Aggregate records (using COUNT, SUM, AVG) and filter aggregated results.
* **ORDER BY**: Sort result rows.

#### 3. Joins:
* **INNER JOIN**: Returns rows with matching keys in both tables.
* **LEFT JOIN**: Returns all rows from the left table and matching rows from the right table.
* **RIGHT JOIN**: Returns all rows from the right table and matching rows from the left table.`
  },
  'Data Visualization using Power BI/Tableau': {
    description: 'Learn to build rich interactive dashboards, business intelligence charts, and reports using Power BI and Tableau.',
    docUrl: 'https://learn.microsoft.com/en-us/power-bi/',
    playlists: {
      'English': [
        { title: '1. Power BI Full Course (freeCodeCamp)', embedUrl: 'https://www.youtube.com/embed/TmhQC37_87Y' },
        { title: '2. Tableau Tutorial for Beginners', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Designing Dashboard Mockups', embedUrl: 'https://www.youtube.com/embed/DAQN1DaTX9Y' }
      ],
      'Hindi': [
        { title: '1. Power BI Tutorial in Hindi', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Tableau Charts in Hindi', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Building dashboards (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Power BI Training (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Tableau Fundamentals (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Creating charts in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 📊 Study Guide: Data Visualization using Power BI/Tableau

#### 1. The Power of Data Visualization
Data visualization converts raw analytical insights into structured charts (bar graphs, scatter plots, geographic maps) to enable quick strategic decision-making.

#### 2. Key Components:
* **Power BI**: Strong integration with Microsoft systems, DAX (Data Analysis Expressions) queries, and Excel sheets.
* **Tableau**: High-performance engine processing large big-data sets with drag-and-drop visuals.

#### 3. Core Workflow:
1. Connecting data sources (SQL tables, CSV sheets).
2. Data modeling & creating relationships.
3. DAX/Calculated field setups.
4. Chart configurations & visual hierarchy layout design.
5. Publishing reports.`
  },
  'Advanced Machine Learning': {
    description: 'Learn state-of-the-art ML models like XGBoost, LightGBM, SVM, Random Forests, Hyperparameter Optimization, and Model Deployments.',
    docUrl: 'https://xgboost.readthedocs.io/en/stable/',
    playlists: {
      'English': [
        { title: '1. XGBoost & Gradient Boosting', embedUrl: 'https://www.youtube.com/embed/OtD8wVaFm6E' },
        { title: '2. Hyperparameter Tuning (GridSearch)', embedUrl: 'https://www.youtube.com/embed/9BvGoKu9xms' },
        { title: '3. Deploying ML Models as APIs', embedUrl: 'https://www.youtube.com/embed/qp0HIF3SfI4' }
      ],
      'Hindi': [
        { title: '1. Advanced ML models (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Random Forests & XGBoost (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Flask deployment in Hindi', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. Ensemble Learning in Tamil', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. XGBoost implementation (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Deploying models in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🚀 Study Guide: Advanced Machine Learning

#### 1. Ensemble Learning
Ensemble learning combines the predictions of multiple individual models to improve accuracy and robustness (e.g. Bagging vs. Boosting).
* **Random Forests**: Bagging method using multiple decision trees.
* **XGBoost / LightGBM**: Boosting method sequentially correcting errors of previous base learners.

#### 2. Hyperparameter Optimization:
* **Grid Search**: Exhaustively testing combinations of values.
* **Random Search**: Randomly sampling combinations to save time.
* **Bayesian Optimization**: Using probability models to find optimal parameters efficiently.

#### 3. Model Monitoring:
Tracking feature drift and accuracy deterioration over time once models are deployed.`
  },

  // === SOFTWARE DEVELOPER ===
  'Java Full Stack Development': {
    description: 'Build robust enterprise services using Core Java, Spring Boot APIs, and frontend integrations.',
    docUrl: 'https://docs.oracle.com/en/java/',
    playlists: {
      'English': [
        { title: '1. Java Full Course for Beginners', embedUrl: 'https://www.youtube.com/embed/grEKMHGYyns' },
        { title: '2. Java OOPs Concepts Masterclass', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Spring Boot Web Integration', embedUrl: 'https://www.youtube.com/embed/35EQXmHKZYs' }
      ],
      'Hindi': [
        { title: '1. Java Full Course in Hindi', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' },
        { title: '2. Java OOPs Explained (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '3. Spring Boot REST (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' }
      ],
      'Tamil': [
        { title: '1. Java Programming Intro (Tamil)', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' },
        { title: '2. OOPs Concepts in Tamil', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '3. SQL DB with Java in Tamil', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' }
      ]
    },
    readingMaterial: `### ☕ Study Guide: Java Full Stack Development

#### 1. The Stack Overview
Java Full Stack development involves writing backend application engines in Java (often Spring Boot) and coupling them with responsive frontends (like React or Angular).

#### 2. Core Java Concepts:
* **Object-Oriented Programming (OOP)**: Inheritance, Polymorphism, Encapsulation, Abstraction.
* **Collections Framework**: ArrayList, HashMap, HashSet, LinkedList.
* **Multithreading & Concurrency**: Handling simultaneous requests safely.

#### 3. REST Architecture:
* Backend exposing REST endpoints returning JSON payloads.
* Authentication utilizing Stateless JWT (JSON Web Tokens) or State Session cookies.`
  },
  'Data Structures and Algorithms': {
    description: 'Master algorithmic problem solving, array/list logic, graphs, dynamic programming, and search methods.',
    docUrl: 'https://www.geeksforgeeks.org/data-structures/',
    playlists: {
      'English': [
        { title: '1. DSA Course for Beginners', embedUrl: 'https://www.youtube.com/embed/8hly31xKjhc' },
        { title: '2. Linked Lists Tutorial', embedUrl: 'https://www.youtube.com/embed/RBSGKlAboiM' },
        { title: '3. Sorting & Search Algorithms', embedUrl: 'https://www.youtube.com/embed/kQDxmjrAZ9g' }
      ],
      'Hindi': [
        { title: '1. DSA Full Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Arrays & Lists (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Sorting Algorithms (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. DSA Introduction (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Stacks & Queues in Tamil', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Sorting and Search in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 🌲 Study Guide: Data Structures & Algorithms

#### 1. Big O Notation
Big O notation measures the complexity or efficiency of an algorithm in terms of input size ($N$):
* $O(1)$: Constant Time
* $O(\\log N)$: Logarithmic Time (Binary Search)
* $O(N)$: Linear Time (Linear Search)
* $O(N \\log N)$: MergeSort / QuickSort
* $O(N^2)$: Quadratic Time (Bubble Sort)

#### 2. Linear vs. Non-linear Data Structures:
* **Linear**: Arrays, Linked Lists, Stacks (LIFO), Queues (FIFO).
* **Non-linear**: Trees (Binary Trees, BSTs), Graphs (Nodes and Vertices).

#### 3. Dynamic Programming (DP):
Solving complex problems by breaking them down into simpler subproblems and storing their results (memoization) to avoid redundant computations.`
  },
  'Spring Boot Framework': {
    description: 'Understand dependency injection, MVC structure, JDBC, JPA repositories, and security layers.',
    docUrl: 'https://spring.io/projects/spring-boot',
    playlists: {
      'English': [
        { title: '1. Spring Boot Tutorial for Beginners', embedUrl: 'https://www.youtube.com/embed/35EQXmHKZYs' },
        { title: '2. Build Spring Boot REST API', embedUrl: 'https://www.youtube.com/embed/qp0HIF3SfI4' },
        { title: '3. Spring Boot JPA & DB Connect', embedUrl: 'https://www.youtube.com/embed/u1pGvKzWJzQ' }
      ],
      'Hindi': [
        { title: '1. Spring Boot Introduction (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Create REST API (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. JPA connectivity (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Spring Boot Intro in Tamil', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. JPA connectivity in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' },
        { title: '3. Spring Security in Tamil', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' }
      ]
    },
    readingMaterial: `### 🍃 Study Guide: Spring Boot Framework

#### 1. What is Spring Boot?
Spring Boot makes it easy to create stand-alone, production-grade Spring-based applications that you can "just run."

#### 2. Key Annotations:
* \`@SpringBootApplication\`: Marks the main class.
* \`@RestController\`: Exposes JSON REST controller endpoints.
* \`@Autowired\`: Resolves and injects dependency beans automatically.
* \`@Service\` / \`@Repository\`: Stereotype annotations for business and database layer components.

#### 3. Data Persistence (JPA):
Spring Data JPA allows developers to interact with SQL databases cleanly through abstract repository interfaces (e.g., \`JpaRepository<User, Integer>\`) without writing complex SQL queries manually.`
  },
  'Web Development (HTML, CSS, JavaScript)': {
    description: 'Build frontend static/dynamic pages using semantic layouts, Flexbox/Grid, and modern JavaScript modules.',
    docUrl: 'https://developer.mozilla.org/en-US/',
    playlists: {
      'English': [
        { title: '1. HTML Full Course (freeCodeCamp)', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' },
        { title: '2. CSS Grid & Flexbox layouts', embedUrl: 'https://www.youtube.com/embed/1Rs2ND1ryYc' },
        { title: '3. Javascript Beginner Tutorial', embedUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk' }
      ],
      'Hindi': [
        { title: '1. HTML Full Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/Edsxf_S21zc' },
        { title: '2. CSS Grid/Flexbox (Hindi)', embedUrl: 'https://www.youtube.com/embed/hKB-YGF14dE' },
        { title: '3. Javascript Basics (Hindi)', embedUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk' }
      ],
      'Tamil': [
        { title: '1. HTML Tutorial (Tamil)', embedUrl: 'https://www.youtube.com/embed/m5_qWq0Z9bA' },
        { title: '2. CSS Layouts (Tamil)', embedUrl: 'https://www.youtube.com/embed/8vC2hE9Zg0k' },
        { title: '3. Javascript Introduction (Tamil)', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🌐 Study Guide: Web Development (HTML, CSS, JS)

#### 1. HTML5 (Structure)
Use semantic elements like \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, and \`<footer>\` to define the structure of web pages and improve SEO.

#### 2. CSS3 (Presentation)
* **Flexbox**: 1D layout model for alignment and space distribution.
* **Grid**: 2D layout model for structural designs.
* **Variables**: Declared as \`--variable-name: value;\` for cleaner style management.

#### 3. JavaScript (Behavior)
* **DOM Manipulation**: Modifying pages dynamically in response to user inputs.
* **Asynchronous JS**: Fetching server data via \`fetch()\` or \`axios\` using Promises and \`async/await\` syntax.`
  },
  'Software Testing': {
    description: 'Learn core manual testing principles, automated UI tests using Selenium, and backend unit tests with JUnit/TestNG.',
    docUrl: 'https://www.selenium.dev/documentation/',
    playlists: {
      'English': [
        { title: '1. Software Testing Course (freeCodeCamp)', embedUrl: 'https://www.youtube.com/embed/s1fLHj03uxc' },
        { title: '2. Selenium Webdriver Tutorial', embedUrl: 'https://www.youtube.com/embed/d2g4lM0G66o' },
        { title: '3. Unit Testing with JUnit', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' }
      ],
      'Hindi': [
        { title: '1. Manual Testing in Hindi', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Selenium Webdriver (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Automation Framework (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Software Testing in Tamil', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Selenium Automation (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Manual vs Automation (Tamil)', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 🧪 Study Guide: Software Testing

#### 1. Testing Methodologies
Software testing validates that applications fulfill functional requirements and perform without runtime errors.
* **Manual Testing**: Verifying flows manually, executing exploratory checks.
* **Automated Testing**: Writing test scripts (Selenium, Cypress) to execute repetitively.

#### 2. Key Testing Types:
* **Unit Testing**: Validates code logic block units (Junit, Pytest).
* **Integration Testing**: Checks combined groups of operations together.
* **Regression Testing**: Ensures that new changes have not broken existing functionality.

#### 3. Automation Frameworks:
Organizing code using the Page Object Model (POM) pattern to maximize reuse.`
  },

  // === CYBERSECURITY ANALYST ===
  'Ethical Hacking': {
    description: 'Learn hacking fundamentals, gathering intelligence, scanning networks, vulnerability analysis, and penetration testing.',
    docUrl: 'https://portswigger.net/web-security',
    playlists: {
      'English': [
        { title: '1. Ethical Hacking Course (freeCodeCamp)', embedUrl: 'https://www.youtube.com/embed/3Kq1MIfMcCE' },
        { title: '2. Kali Linux Tutorial for Beginners', embedUrl: 'https://www.youtube.com/embed/kRDK8H0v5_8' },
        { title: '3. Metasploit Framework Guide', embedUrl: 'https://www.youtube.com/embed/GwIo3gGIP3w' }
      ],
      'Hindi': [
        { title: '1. Ethical Hacking Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Kali Linux setup (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Wifi Hacking security (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. Cybersecurity & Hacking (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. Kali Linux tools (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Hacking concepts in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🛡️ Study Guide: Ethical Hacking

#### 1. What is Ethical Hacking?
Ethical Hacking involves authorized attempts to gain unauthorized access to computer systems, applications, or data to identify weaknesses.

#### 2. Key Reconnaissance Techniques:
* **Active Scanning**: Direct port queries (Nmap scan routines).
* **Passive Reconnaissance**: OSINT searching on public search registers.

#### 3. Common Vulnerabilities:
* **SQL Injection**: Injecting malicious SQL characters to bypass validation checks.
* **XSS (Cross-Site Scripting)**: Running unauthorized client scripts inside user browsers.`
  },
  'Network Security': {
    description: 'Learn secure protocol setups, firewalls, routing configurations, and network monitoring dashboards.',
    docUrl: 'https://csrc.nist.gov/publications/',
    playlists: {
      'English': [
        { title: '1. Computer Networking Course', embedUrl: 'https://www.youtube.com/embed/IPvYjXofLQY' },
        { title: '2. Firewalls & VPN Setups', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Wireshark Tutorial (Packet Analysis)', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Networking basics (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Routing & Firewalls (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Secure VPN setups (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Networking in Tamil', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. IP Subnetting (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Nmap scans in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 🔒 Study Guide: Network Security

#### 1. Core Cryptographic Protocols
Protect data in transit using TLS, SSH, and IPSec to prevent interception.

#### 2. Network Defensive Layers:
* **Firewalls**: Restrict traffic matching security criteria.
* **IDS/IPS**: Monitor network packets for malicious traffic patterns.
* **DMZ (Demilitarized Zones)**: Isolate external web servers from the internal network.

#### 3. Threat Classification:
* **Man-in-the-Middle (MITM)**: Intercepting client communication paths.
* **DDoS (Distributed Denial of Service)**: Overwhelming target servers with flood traffic.`
  },
  'Cybersecurity Fundamentals': {
    description: 'Understand defensive strategies, security baselines, identity policies, cryptosystems, and threat compliance standards.',
    docUrl: 'https://www.nist.gov/cyberframework',
    playlists: {
      'English': [
        { title: '1. Cybersecurity Full Course', embedUrl: 'https://www.youtube.com/embed/z5oCMSVua_I' },
        { title: '2. Cryptography Basics (AES & RSA)', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Threat Analysis Frameworks', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Security Fundamentals (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Symmetric Cryptography (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Access Controls (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. Cybersecurity Intro (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. Hashing vs Encryption (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Firewall Setup (Tamil)', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🛡️ Study Guide: Cybersecurity Fundamentals

#### 1. The CIA Triad
* **Confidentiality**: Ensuring data is accessible only to authorized users.
* **Integrity**: Protecting data accuracy throughout its life cycle.
* **Availability**: Guaranteeing systems are accessible when needed.

#### 2. Key Concepts:
* **Symmetric vs Asymmetric Encryption**: Using shared keys (AES) vs public/private key pairs (RSA).
* **Hashing**: Creating fixed-size signatures (SHA-256) to verify data integrity.
* **Multi-Factor Authentication (MFA)**: Verifying user identities via passwords and OTP tokens.`
  },
  'Penetration Testing': {
    description: 'Perform active security probing, code reviews, privilege escalations, and report drafting.',
    docUrl: 'https://www.owasp.org/index.php/Main_Page',
    playlists: {
      'English': [
        { title: '1. Penetration Testing Course', embedUrl: 'https://www.youtube.com/embed/e5j_Z_r3Y8c' },
        { title: '2. OWASP Top 10 Web Risks', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Privilege Escalation (Linux)', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Penetration Testing (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. OWASP vulnerabilities (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Metasploit tutorials (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Pen Testing Intro (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Web Vapour scans (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. SQL injections (Tamil)', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 🎯 Study Guide: Penetration Testing

#### 1. Phases of a Pentest
1. **Reconnaissance**: Gathering target info.
2. **Scanning**: Running port and service mapping.
3. **Exploitation**: Exploiting vulnerabilities.
4. **Post-Exploitation**: Securing access and escalating privileges.
5. **Reporting**: Documenting recommendations for fix teams.

#### 2. OWASP Top 10 Risks:
* **Broken Access Control**: Users executing actions beyond their privileges.
* **Cryptographic Failures**: Using obsolete cipher configs.
* **Injection Attacks**: Passing unsanitized data strings to databases.`
  },
  'Security Operations Center (SOC)': {
    description: 'Learn SIEM monitoring configurations, log analysis (Splunk/ELK), and incident response policies.',
    docUrl: 'https://www.splunk.com/en_us/training.html',
    playlists: {
      'English': [
        { title: '1. SOC Analyst Course', embedUrl: 'https://www.youtube.com/embed/d2g4lM0G66o' },
        { title: '2. Splunk Tutorial for Beginners', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Incident Response playbooks', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. SOC Analyst Role (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Splunk monitoring (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Analysis of Logs (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. SOC Analyst Guide (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. Incident analysis (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Splunk logs in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🚨 Study Guide: Security Operations Center (SOC)

#### 1. SOC Core Responsibilities
SOC teams monitor, detect, analyze, and respond to cybersecurity incidents on an organizational network.

#### 2. Key Tools:
* **SIEM (Security Information and Event Management)**: Centralizes log archives (Splunk, ELK Stack).
* **SOAR**: Automates incident response paths.

#### 3. Incident Classifications:
* **False Positive**: Alert triggering on normal network actions.
* **True Positive**: Actual verified attack event.
* **Playbook**: A checklist detailing the actions required to isolate compromised servers.`
  },

  // === CLOUD ENGINEER ===
  'Cloud Computing Fundamentals': {
    description: 'Learn virtual virtualization, cloud configurations, pricing architectures, and storage classes.',
    docUrl: 'https://aws.amazon.com/what-is-cloud-computing/',
    playlists: {
      'English': [
        { title: '1. Cloud Computing Intro', embedUrl: 'https://www.youtube.com/embed/EN4fPBgpWsc' },
        { title: '2. Cloud Deployment Models', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Virtualization & Servers', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Cloud Computing Basics (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. IAAS, PAAS, SAAS (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Virtualization in Hindi', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Cloud Computing Intro (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Deployment Types (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Hypervisors in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### ☁️ Study Guide: Cloud Computing Fundamentals

#### 1. Service Models
* **IaaS (Infrastructure as a Service)**: Provision virtual machines and storage (EC2, S3).
* **PaaS (Platform as a Service)**: Deploy applications without managing underlying OS structures (Elastic Beanstalk, Heroku).
* **SaaS (Software as a Service)**: Fully managed software applications (Google Workspace, Office 365).

#### 2. Deployment Models:
* **Public Cloud**: Shared hardware infrastructure managed by providers.
* **Private Cloud**: Dedicated cloud infrastructure used exclusively by one organization.
* **Hybrid Cloud**: Combines public and private clouds to share data and applications.

#### 3. Core Benefits:
* On-demand self-service provisioning.
* Broad network access and resource pooling.
* Elastic scalability.`
  },
  'AWS Certified Solutions Architect': {
    description: 'Learn core AWS services including VPC, EC2, S3, RDS, IAM, Route53, and architectural best practices.',
    docUrl: 'https://docs.aws.amazon.com/index.html',
    playlists: {
      'English': [
        { title: '1. AWS Solutions Architect Course', embedUrl: 'https://www.youtube.com/embed/Ia-UEYYR44s' },
        { title: '2. VPC Networking Deep Dive', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. IAM Policies & security', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. AWS Full Course (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. EC2 instances in Hindi', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. S3 Bucket configs (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. AWS Cloud Training (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. VPC Setups in Tamil', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Route 53 setup (Tamil)', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🏗️ Study Guide: AWS Solutions Architect

#### 1. AWS Core Services
* **IAM**: Manages identities, keys, roles, and resource access policies.
* **EC2**: Scalable virtual machine compute instances.
* **VPC**: Private virtual network subnets mapping resources securely.
* **S3**: Highly durable object storage buckets.
* **RDS**: Managed SQL database instances.

#### 2. Resilient Design Practices:
* Multi-AZ deployments to ensure high availability.
* Auto-Scaling configurations to handle load fluctuations.
* Decoupling architectures using queues (SQS).`
  },
  'DevOps CI/CD Pipelines (Docker & Jenkins)': {
    description: 'Learn deployment automation, containerization with Docker, and CI/CD pipelines with Jenkins.',
    docUrl: 'https://docs.docker.com/',
    playlists: {
      'English': [
        { title: '1. DevOps Roadmap Guide', embedUrl: 'https://www.youtube.com/embed/hQcFE0RD0cQ' },
        { title: '2. Docker Course for Beginners', embedUrl: 'https://www.youtube.com/embed/fqMOX6JJhGo' },
        { title: '3. Jenkins CI/CD Tutorial', embedUrl: 'https://www.youtube.com/embed/LFDrDnKP_gA' }
      ],
      'Hindi': [
        { title: '1. DevOps Intro in Hindi', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Docker Tutorial in Hindi', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Jenkins Pipeline (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. DevOps Basics (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Docker containers (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Jenkins setup (Tamil)', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### ♾️ Study Guide: DevOps & CI/CD

#### 1. Key Principles
DevOps combines development and system operations to accelerate deployment cycles using automated software pipelines.

#### 2. Key Tools:
* **Docker**: Packages code, dependencies, and OS environments into portable containers.
* **Jenkins**: Automates build, test, and deployment pipelines.

#### 3. Pipeline Phases:
1. **Source**: Pull code changes from version control systems (Git).
2. **Build**: Compile assets and bundle binaries.
3. **Test**: Run automated tests to verify updates.
4. **Deploy**: Push changes to production servers.`
  },
  'Kubernetes and Container Orchestration': {
    description: 'Learn container orchestration, pod management, deployments, service endpoints, and ingress routing.',
    docUrl: 'https://kubernetes.io/docs/home/',
    playlists: {
      'English': [
        { title: '1. Kubernetes Course (freeCodeCamp)', embedUrl: 'https://www.youtube.com/embed/X48VuDVv0do' },
        { title: '2. Pods, Services & Deployments', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Ingress Routing configs', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Kubernetes in Hindi', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Pod configuration (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Services & Ingress (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. Kubernetes Intro (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. Pod definitions (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Deployments in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🚢 Study Guide: Kubernetes & Container Orchestration

#### 1. What is Kubernetes?
Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.

#### 2. Key Components:
* **Pods**: The smallest deployable computing units.
* **Nodes**: Worker machines running container instances.
* **Services**: Expose applications running in pods as network endpoints.

#### 3. Core Features:
* Automated service discovery and load balancing.
* Storage orchestration across local or cloud providers.
* Self-healing capabilities (restarts failed containers).`
  },
  'Linux System Administration': {
    description: 'Learn command-line navigations, shell scripts, permissions, cron schedules, and process tools.',
    docUrl: 'https://www.tldp.org/LDP/intro-linux/html/',
    playlists: {
      'English': [
        { title: '1. Linux Administration Course', embedUrl: 'https://www.youtube.com/embed/wbpDK22f0wA' },
        { title: '2. Cron Jobs & Scheduling', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Linux File Permissions', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Linux Commands (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Shell Scripting (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Linux Security basics (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Linux Commands in Tamil', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Shell Scripting (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Cron Job Scheduling (Tamil)', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 🐧 Study Guide: Linux System Administration

#### 1. Linux Directory Layout
Linux structures files hierarchically inside a single root directory (\`/\`):
* \`/bin\`: Essential user binaries.
* \`/etc\`: System configuration files.
* \`/var\`: Variable files like system log databases.

#### 2. Key Commands:
* \`ls\` / \`cd\` / \`pwd\`: Directory navigation tools.
* \`chmod\`: Modify file read, write, and execute permissions.
* \`ps\` / \`kill\`: View and manage active system processes.

#### 3. Shell Scripting:
Automating repetitive terminal commands inside executable bash files.`
  },

  // === UI/UX DESIGNER ===
  'UI/UX Design Principles & Design Thinking': {
    description: 'Learn core design methodologies, grid alignments, typographic hierarchy, and user-centered design thinking frameworks.',
    docUrl: 'https://www.nngroup.com/articles/design-thinking/',
    playlists: {
      'English': [
        { title: '1. UI/UX Design Fundamentals', embedUrl: 'https://www.youtube.com/embed/c9Wg6RyOx0U' },
        { title: '2. Design Thinking Process', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Grid Layouts & Typography', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. UI/UX Design course (Hindi)', embedUrl: 'https://www.youtube.com/embed/Edsxf_S21zc' },
        { title: '2. Typography Rules (Hindi)', embedUrl: 'https://www.youtube.com/embed/hKB-YGF14dE' },
        { title: '3. Design thinking (Hindi)', embedUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk' }
      ],
      'Tamil': [
        { title: '1. UI/UX principles (Tamil)', embedUrl: 'https://www.youtube.com/embed/m5_qWq0Z9bA' },
        { title: '2. Typography & Colors (Tamil)', embedUrl: 'https://www.youtube.com/embed/8vC2hE9Zg0k' },
        { title: '3. Design thinking in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🎨 Study Guide: UI/UX Principles & Design Thinking

#### 1. Design Thinking Phases
1. **Empathize**: Research user needs.
2. **Define**: Formulate problem statement definitions.
3. **Ideate**: Generate design solution variants.
4. **Prototype**: Build interactive mockups.
5. **Test**: Evaluate solution designs with users.

#### 2. Key UI Design Rules:
* **Visual Hierarchy**: Emphasizing key text using size, weights, and layouts.
* **Whitespace**: Providing negative space to improve readability.
* **Consistency**: Standardizing colors, icons, and button styling.`
  },
  'Interaction Design Essentials': {
    description: 'Learn UI interaction designs, animations, responsive states, feedback mechanisms, and UI patterns.',
    docUrl: 'https://www.interaction-design.org/literature',
    playlists: {
      'English': [
        { title: '1. Interaction Design Course', embedUrl: 'https://www.youtube.com/embed/3_9tA-S19_c' },
        { title: '2. Motion Design & Prototyping', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Micro-animations in UI', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Interaction Design (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. UI Micro-interactions (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. Transitions in Hindi', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. Interaction Design (Tamil)', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. Micro-interactions in Tamil', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Animations in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 💫 Study Guide: Interaction Design Essentials

#### 1. Five Dimensions of Interaction Design
1. **1D (Words)**: Simple labels describing actions.
2. **2D (Visual Representations)**: Graphical icons, typography, and menus.
3. **3D (Physical Objects)**: Devices or controllers.
4. **4D (Time)**: Durations of transitions and animations.
5. **5D (Behavior)**: System operations returning feedback states.

#### 2. Key Patterns:
* **Micro-interactions**: Subtle hover states, loading animations, and notifications.
* **Cognitive Load**: Designing interfaces to minimize user thinking effort.`
  },
  'Figma Essentials and Prototyping': {
    description: 'Learn to design vector interfaces, auto-layouts, variables, component libraries, and interactive high-fidelity prototypes in Figma.',
    docUrl: 'https://help.figma.com/hc/en-us',
    playlists: {
      'English': [
        { title: '1. Figma Full Tutorial for Beginners', embedUrl: 'https://www.youtube.com/embed/dXQysGT5b94' },
        { title: '2. Figma Auto Layout Masterclass', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Advanced Prototyping in Figma', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Figma course in Hindi', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Auto-layouts (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Dynamic Prototypes (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. Figma Essentials (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. Component Variants (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Smart Animate in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🎨 Study Guide: Figma Essentials

#### 1. Core Layout Features
* **Frames**: Flexible containers supporting grids and clip-content options.
* **Auto-Layout**: Dynamically flows content spacing (mimics HTML CSS Flexbox behaviors).

#### 2. Reusable Assets:
* **Components**: Templates that propagate structural edits to child instances.
* **Variants**: Package configurations of a single component (e.g. Primary, Secondary, Disabled states).

#### 3. Smart Animate:
Automatically interpolates layer name shifts between screens to produce smooth animations.`
  },
  'User Research & Usability Testing Case Studies': {
    description: 'Conduct user interviews, design user personas, build journey maps, run usability tests, and draft UX case studies.',
    docUrl: 'https://www.nngroup.com/articles/usability-testing-101/',
    playlists: {
      'English': [
        { title: '1. User Research Methods', embedUrl: 'https://www.youtube.com/embed/5_5oO5DY2GE' },
        { title: '2. Conducting Usability Testing', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Designing UX Case Studies', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. UX Research course (Hindi)', embedUrl: 'https://www.youtube.com/embed/61G4w2pTfI8' },
        { title: '2. Usability Testing (Hindi)', embedUrl: 'https://www.youtube.com/embed/mK9kXk2yFic' },
        { title: '3. UX case studies (Hindi)', embedUrl: 'https://www.youtube.com/embed/nZt259K13Wc' }
      ],
      'Tamil': [
        { title: '1. UX Research in Tamil', embedUrl: 'https://www.youtube.com/embed/sC2g3Q9G25w' },
        { title: '2. User Personas (Tamil)', embedUrl: 'https://www.youtube.com/embed/mK8X8yT8mK8' },
        { title: '3. Usability testing in Tamil', embedUrl: 'https://www.youtube.com/embed/fCek8yT8xQ8' }
      ]
    },
    readingMaterial: `### 📋 Study Guide: User Research & Usability Testing

#### 1. Research Methods
* **Qualitative**: User interviews, focus groups, and observation tests.
* **Quantitative**: Analytics metrics, click patterns, and survey results.

#### 2. Usability Testing Guidelines:
* Formulating non-leading test scenarios.
* **Thinking Aloud Protocol**: Users describe their thoughts during interactions.
* **System Usability Scale (SUS)**: Standard survey measuring interface ease-of-use.

#### 3. UX Persona:
A generalized archetype representing goals, needs, and behaviors of a target audience segment.`
  },
  'Information Architecture & Wireframing': {
    description: 'Learn to design content structures, build sitemaps, formulate user flows, and sketch low-fidelity wireframes.',
    docUrl: 'https://www.usability.gov/what-and-why/information-architecture.html',
    playlists: {
      'English': [
        { title: '1. Information Architecture Basics', embedUrl: 'https://www.youtube.com/embed/r-uOLxNrNk8' },
        { title: '2. Sitemap & User Flow creation', embedUrl: 'https://www.youtube.com/embed/aHaOIvR00So' },
        { title: '3. Sketching Low-Fi Wireframes', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' }
      ],
      'Hindi': [
        { title: '1. Information Architecture (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '2. Sitemaps in Hindi', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' },
        { title: '3. Wireframes sketching (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' }
      ],
      'Tamil': [
        { title: '1. Information Architecture (Tamil)', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '2. Sitemaps & Userflows (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' },
        { title: '3. Wireframing in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' }
      ]
    },
    readingMaterial: `### 🗺️ Study Guide: Information Architecture & Wireframing

#### 1. Information Architecture (IA)
IA involves organizing and structuring web app content so users can navigate and accomplish goals easily.

#### 2. Key Components of IA:
* **Organization Systems**: Categorizing content logically.
* **Labeling Systems**: Defining clear page titles.
* **Search Systems**: Design of search engines and filters.

#### 3. Wireframing:
A low-fidelity structural blueprint of a webpage that focuses strictly on placement, content hierarchy, and navigation flow without styling details.`
  }
};

// Fallback utility for unmapped courses
export const getCourseData = (title) => {
  const match = COURSES_DATA[title];
  if (match) return match;
  
  // Generic template for courses without an explicit mapping
  return {
    docUrl: 'https://www.wikipedia.org/',
    description: `Introductory guide to ${title}. Learn key vocabulary, core components, and application methods.`,
    playlists: {
      'English': [
        { title: '1. Introduction to Computer Science (CS50)', embedUrl: 'https://www.youtube.com/embed/8hly31xKjhc' },
        { title: '2. Core Foundations & Basics', embedUrl: 'https://www.youtube.com/embed/ok-plXXHl6k' },
        { title: '3. Javascript Core Concepts', embedUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk' }
      ],
      'Hindi': [
        { title: '1. ' + title + ' Full Explanation (Hindi)', embedUrl: 'https://www.youtube.com/embed/yNoLpZ26ZzM' },
        { title: '2. ' + title + ' Concepts in Detail (Hindi)', embedUrl: 'https://www.youtube.com/embed/v8hC22hEGBs' },
        { title: '3. Real Projects in ' + title + ' (Hindi)', embedUrl: 'https://www.youtube.com/embed/bLd_BebXv9U' }
      ],
      'Tamil': [
        { title: '1. Learn ' + title + ' in Tamil', embedUrl: 'https://www.youtube.com/embed/nZt-ZcKocYk' },
        { title: '2. Core Concepts in Tamil', embedUrl: 'https://www.youtube.com/embed/tCekq-p8KxQ' },
        { title: '3. Exercises & Projects (Tamil)', embedUrl: 'https://www.youtube.com/embed/l592QYfP3V0' }
      ]
    },
    readingMaterial: `### 📖 Study Guide: ${title}

#### 1. Overview
This course provides a comprehensive roadmap to mastering ${title}. 

#### 2. Key Topics Covered:
* Foundational parameters and setup configurations.
* Best practices, development standards, and design workflows.
* Hands-on exercises and real-world project portfolios.

#### 3. Study Strategy:
1. Watch the video lecture to grasp the high-level concepts.
2. Read the official documentation to understand syntax, settings, and functions.
3. Build sandbox exercises to solidify your practical capabilities.`
  };
};
