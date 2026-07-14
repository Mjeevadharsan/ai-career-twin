export const PROJECTS_DATA = {
  // Python Projects
  'Text Analyzer Tool': {
    difficulty: 'Beginner',
    techStack: ['Python', 're (Regex)', 'sys'],
    description: 'A command-line tool that parses text files to compute word count, character count, sentence count, average word length, and word frequency distributions.',
    steps: [
      'Read file inputs from the command line using sys.argv.',
      'Sanitize the text content by converting it to lowercase and removing punctuation.',
      'Split text into sentences using simple regex boundaries (. ! ?).',
      'Compute text statistics (total words, unique words, paragraph count).',
      'Print a formatted console report showing the top 10 most common words.'
    ],
    githubSearch: 'https://github.com/search?q=text+analyzer+python'
  },
  'Automated Web Scraper': {
    difficulty: 'Intermediate',
    techStack: ['Python', 'BeautifulSoup4', 'requests', 'pandas'],
    description: 'Scrape product prices, news articles, or job listings from a public webpage and export them into structured CSV tables.',
    steps: [
      'Use the requests library to send HTTP requests to target URLs and fetch raw HTML.',
      'Parse the raw HTML using BeautifulSoup select or find methods to isolate target class tags.',
      'Clean and sanitize the extracted text (strip whitespaces, format numbers).',
      'Handle pagination loops to crawl multiple pages safely.',
      'Store data in a Pandas DataFrame and export to a .csv file.'
    ],
    githubSearch: 'https://github.com/search?q=web+scraper+python+beautifulsoup'
  },

  // Java Projects
  'Student Record Management System': {
    difficulty: 'Beginner',
    techStack: ['Java', 'ArrayList', 'File I/O'],
    description: 'A Java application to create, search, update, and delete student data stored in local binary/text files.',
    steps: [
      'Define a Student class with properties (ID, Name, CGPA, Enrolled Courses).',
      'Implement CRUD operations using ArrayList storage in a Management Controller.',
      'Write serializable load/save functions to store list states in database/text files.',
      'Create a simple CLI or Swing GUI to search records by name or filter by CGPA.',
      'Add validation rules for emails and course codes.'
    ],
    githubSearch: 'https://github.com/search?q=student+record+management+java'
  },
  'Inventory Control Desktop App': {
    difficulty: 'Intermediate',
    techStack: ['Java', 'Swing/JavaFX', 'JDBC', 'SQLite'],
    description: 'A GUI-based system to keep track of store product stock levels, incoming shipments, and sales histories.',
    steps: [
      'Design DB schemas for Products, Categories, and Transactions.',
      'Establish SQL database connections using JDBC adapters.',
      'Build JavaFX/Swing UI views with table grids showing inventory levels.',
      'Create popup dialogs for adding new items or triggering stock adjustments.',
      'Incorporate color warnings for items falling below low-stock thresholds.'
    ],
    githubSearch: 'https://github.com/search?q=inventory+system+java+javafx'
  },

  // SQL Projects
  'E-commerce Database Design': {
    difficulty: 'Intermediate',
    techStack: ['SQL', 'MySQL / PostgreSQL'],
    description: 'Design and normalize a relational database layout supporting users, product catalogs, shopping carts, orders, and payment histories.',
    steps: [
      'Map entities and draw Entity-Relationship (ER) structural diagrams.',
      'Apply database normalization rules (1NF, 2NF, 3NF) to minimize redundancy.',
      'Write DDL scripts containing table definitions, data types, and primary/foreign keys.',
      'Create constraints, index triggers, and indexes to boost search speeds.',
      'Draft sample query scripts to test order summaries and sales aggregations.'
    ],
    githubSearch: 'https://github.com/search?q=ecommerce+database+schema+sql'
  },
  'Sales Performance Analytics Query Suite': {
    difficulty: 'Advanced',
    techStack: ['SQL', 'PostgreSQL / SQL Server'],
    description: 'Build complex SQL queries utilizing window functions, CTEs, and table joins to generate monthly revenue growth, user retention, and top-selling categories.',
    steps: [
      'Define Common Table Expressions (CTEs) to isolate regional revenue totals.',
      'Apply window functions (RANK(), LEAD(), LAG()) to calculate month-over-month sales trends.',
      'Use aggregation functions (SUM(), COUNT()) with CASE WHEN blocks for conditional statistics.',
      'Optimize query execution paths using EXPLAIN ANALYZE feedback.',
      'Create SQL View definitions to serve clean aggregate charts to frontends.'
    ],
    githubSearch: 'https://github.com/search?q=sales+analytics+queries+sql'
  },

  // C++ Projects
  'Simple Command-Line RPG Game': {
    difficulty: 'Beginner',
    techStack: ['C++', 'Standard Template Library (STL)'],
    description: 'A text-based RPG adventure with player characters, monsters, items, and round-based combat mechanics.',
    steps: [
      'Establish Player and Enemy classes inheriting from a base Character class.',
      'Implement game loops to manage user navigation choices.',
      'Define battle mechanisms allowing options (Attack, Cast Spell, Heal, Run).',
      'Use random number generators to determine attack accuracies and loot drops.',
      'Load/Save game state structures using standard file streams.'
    ],
    githubSearch: 'https://github.com/search?q=text+rpg+game+cpp'
  },
  'Memory Management Simulator': {
    difficulty: 'Advanced',
    techStack: ['C++', 'Vectors', 'Pointers'],
    description: 'Simulate CPU page allocations using First-Fit, Best-Fit, and Worst-Fit algorithms, illustrating fragmentation outcomes.',
    steps: [
      'Model block partitions using Struct arrays containing sizes and allocated flags.',
      'Code separate allocator functions for First-Fit, Best-Fit, and Worst-Fit logic.',
      'Implement process execution cycles requesting dynamic memory sizes.',
      'Calculate internal/external fragmentation indicators after allocations.',
      'Print memory grid visual maps to track partition assignments.'
    ],
    githubSearch: 'https://github.com/search?q=memory+simulator+cpp'
  },

  // HTML & CSS Projects
  'Personal Portfolio Webpage': {
    difficulty: 'Beginner',
    techStack: ['HTML5', 'CSS3', 'Responsive Design'],
    description: 'A responsive profile webpage showing career summaries, skills matrices, timeline projects, and interactive contact forms.',
    steps: [
      'Draft semantic HTML structure layouts defining header, profile, experience, and footer.',
      'Write custom CSS rules implementing Flexbox navigation menus.',
      'Create grids showing project gallery items cleanly.',
      'Configure media query bounds to adapt design sizes for tablets and smartphones.',
      'Embed smooth scroll properties and hover styling transitions.'
    ],
    githubSearch: 'https://github.com/search?q=responsive+portfolio+html+css'
  },
  'Sleek Landing Page with CSS Grid/Flexbox': {
    difficulty: 'Beginner',
    techStack: ['HTML5', 'CSS3', 'Web Design'],
    description: 'A premium product showcase page with card layouts, hero images, and glassmorphic navigation structures.',
    steps: [
      'Write structured semantic HTML layers with clear unique IDs.',
      'Define global theme color tokens using CSS Custom Properties.',
      'Code a hero grid layout with overlay gradients.',
      'Style pricing card panels using CSS glassmorphic backgrounds and drop-shadows.',
      'Add keyframe animations to make buttons slide or fade in on load.'
    ],
    githubSearch: 'https://github.com/search?q=sleek+landing+page+css'
  },

  // JavaScript Projects
  'Interactive Task Dashboard (To-Do List)': {
    difficulty: 'Beginner',
    techStack: ['HTML', 'CSS', 'JavaScript (ES6)'],
    description: 'A classic DOM project with categorizable task lists, task priorities, search filtering, and LocalStorage persistence.',
    steps: [
      'Design clean forms to capture task text and dropdown priorities.',
      'Write JavaScript event listeners to handle task submissions.',
      'Inject new DOM elements with delete and toggle completion buttons.',
      'Serialize tasks into JSON arrays to store states inside window.localStorage.',
      'Add filter tags to show "Active", "Completed", or "Priority" items.'
    ],
    githubSearch: 'https://github.com/search?q=todo+list+javascript'
  },
  'Weather Forecasting App (fetching API)': {
    difficulty: 'Intermediate',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
    description: 'A clean dashboard fetching open weather APIs (OpenWeatherMap) to display current forecasts and search queries.',
    steps: [
      'Register for a free developer key on OpenWeatherMap portal.',
      'Design input forms allowing queries by city name or geographic coordinates.',
      'Write asynchronous fetch requests processing API JSON payloads.',
      'Dynamically update page icons and background gradients based on forecast codes.',
      'Implement loading states and graceful error alert dialogues for invalid inputs.'
    ],
    githubSearch: 'https://github.com/search?q=weather+app+javascript+api'
  },

  // Machine Learning Projects
  'House Price Prediction Model': {
    difficulty: 'Intermediate',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    description: 'Build and optimize regression models to predict housing market values based on bedrooms, locations, and age metrics.',
    steps: [
      'Import clean dataset files using Pandas data frames.',
      'Apply One-Hot Encoding to convert categorical fields to numerical metrics.',
      'Scale features using StandardScaler normalization methods.',
      'Train Linear Regression, Random Forest, and Gradient Boosting estimators.',
      'Evaluate errors using Mean Absolute Error (MAE) and R-Squared statistics.'
    ],
    githubSearch: 'https://github.com/search?q=house+price+prediction+scikit+learn'
  },
  'Customer Segmentation using K-Means Clustering': {
    difficulty: 'Intermediate',
    techStack: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    description: 'Perform customer profile cluster analysis to identify discrete groups of high/low spending habits.',
    steps: [
      'Clean transaction data, computing total spend and frequencies.',
      'Determine optimal cluster sizes using Elbow curve diagrams.',
      'Fit K-Means clustering estimators to normalized features.',
      'Assign cluster classification IDs to client rows.',
      'Visualize clusters in 2D/3D scatter plots with distinct colors.'
    ],
    githubSearch: 'https://github.com/search?q=customer+segmentation+kmeans'
  },

  // Deep Learning Projects
  'Image Classification App (using CNNs)': {
    difficulty: 'Advanced',
    techStack: ['Python', 'TensorFlow / PyTorch', 'OpenCV'],
    description: 'Train Convolutional Neural Networks to classify image items (such as cats/dogs or vehicles) with high validation rates.',
    steps: [
      'Organize and split image datasets into train and validation paths.',
      'Construct image data pipelines using tensor generators and resizing grids.',
      'Define CNN network structures (Convolution, MaxPool, Dropout, Dense layers).',
      'Train models with Early Stopping criteria to prevent overfitting.',
      'Build OpenCV script layers to load images and display predictions.'
    ],
    githubSearch: 'https://github.com/search?q=cnn+image+classification+tensorflow'
  },
  'AI Chatbot (using simple LSTM/Transformer model)': {
    difficulty: 'Advanced',
    techStack: ['Python', 'PyTorch', 'Transformers'],
    description: 'Build a local retrieval/generative chatbot using sequence-to-sequence networks or Hugging Face pipeline engines.',
    steps: [
      'Clean dialog pairs, generating vocab mappings and integer representations.',
      'Set up LSTM Sequence-to-Sequence models with encoder-decoder layers.',
      'Train chatbot weights to minimize categorical cross-entropy loss values.',
      'Implement conversation loops returning dynamic text predictions.',
      'Deploy the engine using a web page interface (e.g. Flask or Streamlit).'
    ],
    githubSearch: 'https://github.com/search?q=pytorch+chatbot+lstm'
  },

  // Cloud & DevOps Projects
  'Static Website Hosting on AWS S3': {
    difficulty: 'Beginner',
    techStack: ['AWS S3', 'Route 53', 'CloudFront'],
    description: 'Set up global hosting structures for web portfolios with low latencies using cloud bucket assets.',
    steps: [
      'Create an Amazon S3 bucket, enabling public static hosting options.',
      'Upload HTML, CSS, and asset files directly to the root path.',
      'Configure bucket access policy schemas to grant reading allowances.',
      'Link CloudFront distributions to direct global cache structures.',
      'Register DNS domains on Route 53 pointing to distributions.'
    ],
    githubSearch: 'https://github.com/search?q=aws+s3+static+website+hosting'
  },
  'Multi-Tier Web App on Cloud Instances': {
    difficulty: 'Advanced',
    techStack: ['AWS EC2', 'RDS', 'Nginx', 'VPC'],
    description: 'Deploy web apps inside secure VPC subnets with EC2 frontend nodes and RDS MySQL databases.',
    steps: [
      'Provision VPC configurations with public and private subnet partitions.',
      'Launch EC2 instances running Nginx reverse proxies.',
      'Deploy RDS MySQL instances in private subnets, allowing access only to EC2.',
      'Configure Security Group protocols mapping web ports (80/443).',
      'Clone and build codebases, running processes under systemd services.'
    ],
    githubSearch: 'https://github.com/search?q=multitier+web+app+ec2+rds'
  },

  // UI/UX Projects
  'Interactive App Wireframe in Figma': {
    difficulty: 'Beginner',
    techStack: ['Figma', 'Prototyping'],
    description: 'A complete app UI prototype detailing screens, animations, responsive states, and interaction states.',
    steps: [
      'Define typography, colors, and global grids inside Figma.',
      'Draft low-fidelity wireframes mapping app page layouts.',
      'Convert wireframes to high-fidelity UI dashboards.',
      'Connect interactive components (hover buttons, slide modals, page shifts).',
      'Conduct user evaluation tests to optimize navigation paths.'
    ],
    githubSearch: 'https://figma.com'
  },
  'Redesigning a Local Service Website Case Study': {
    difficulty: 'Intermediate',
    techStack: ['User Research', 'Figma', 'Wireframing'],
    description: 'Conduct user research and usability tests to redesign an existing website, documenting the UX case study.',
    steps: [
      'Conduct user interviews to find friction areas on the existing website.',
      'Create user personas and map user journey blueprints.',
      'Design low-fidelity wireframes to address identified problems.',
      'Build interactive high-fidelity prototypes testing solutions.',
      'Compile final case studies detailing research findings and metrics.'
    ],
    githubSearch: 'https://behance.net'
  }
};

// Fallback utility for unmapped projects
export const getProjectData = (title) => {
  const match = PROJECTS_DATA[title];
  if (match) return match;

  // Generic template for projects without an explicit mapping
  return {
    difficulty: 'Intermediate',
    techStack: ['Varies by Goal', 'Git'],
    description: `A custom portfolio project: ${title}. Build, test, and host this project to showcase your capabilities.`,
    steps: [
      'Define project constraints, system architectures, and features.',
      'Initialize a local git repository to manage your codebase.',
      'Set up database schemas, configurations, and core layouts.',
      'Code critical operations, APIs, and responsive interface views.',
      'Deploy the project on public hosting services and add a README.md summary.'
    ],
    githubSearch: `https://github.com/search?q=${encodeURIComponent(title.toLowerCase())}`
  };
};
