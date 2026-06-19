# AI Career Twin - Complete Setup Guide

This guide will help you set up and run the complete AI Career Twin application with React frontend and Spring Boot backend.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java JDK 17 or higher** - [Download](https://www.oracle.com/java/technologies/downloads/)
- **Maven 3.6+** - [Download](https://maven.apache.org/download.cgi)
- **Node.js 16+ and npm** - [Download](https://nodejs.org/)
- **Git** (optional) - [Download](https://git-scm.com/)

## 🚀 Quick Start

### Step 1: Start the Spring Boot Backend

1. Open a terminal in the project root directory

2. Build the Spring Boot application:
```bash
mvn clean install
```

3. Run the Spring Boot server:
```bash
mvn spring-boot:run
```

4. The backend will start on **http://localhost:5000**

5. Verify backend is running by visiting:
```
http://localhost:5000/api/profile
```
You should see an "Unauthorized" response (this is expected without login).

### Step 2: Start the React Frontend

1. Open a **new terminal** window

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies (first time only):
```bash
npm install
```

4. Start the React development server:
```bash
npm run dev
```

5. The frontend will start on **http://localhost:3000**

6. Open your browser and visit:
```
http://localhost:3000
```

## 🎯 Application Flow

### First Time User Journey

1. **Home Page** (`http://localhost:3000/`)
   - Click "Sign Up" button

2. **Sign Up Page** (`/signup`)
   - Enter: Full Name, Email, Mobile, Password
   - Click "Create Account"
   - Account is created in SQLite database

3. **Login Page** (`/login`)
   - Enter your email and password
   - Click "Login"
   - Session is created

4. **Dashboard** (`/dashboard`)
   - You'll see a message to complete your profile first
   - Click "Go to Profile" or use the navbar

5. **Profile Page** (`/profile`)
   - Enter academic details:
     - CGPA (0-10)
     - Number of projects completed
     - Number of certifications
   - Enter aptitude scores (0-100):
     - Analytical Skills
     - Coding Skills
     - Communication Skills
     - Problem Solving Skills
   - Select your technical skills (Python, Java, React, etc.)
   - Select your interests (AI, Web Dev, Data Science, etc.)
   - Click "Save Profile"

6. **Dashboard Updates** (`/dashboard`)
   - Now you'll see:
     - Career Predictions with percentages
     - Skill Gap Analysis
     - Course Recommendations
     - Project Recommendations
     - Progress Analytics

7. **Explore Other Pages**
   - **Career Prediction** - Detailed career match percentages
   - **Skill Gap Analysis** - Missing skills for each career
   - **Recommendations** - Curated courses and projects
   - **Settings** - Account info and logout

## 📁 Project Structure

```
ai-career-twin/
│
├── src/                          # Spring Boot Backend
│   └── main/
│       ├── java/
│       │   └── com/career/twin/
│       │       ├── CareerTwinApplication.java
│       │       ├── controller/
│       │       │   └── ApiController.java
│       │       ├── service/
│       │       │   ├── DatabaseService.java
│       │       │   └── RecommendationService.java
│       │       └── ml/
│       │           └── KNNClassifier.java
│       └── resources/
│           ├── application.properties
│           └── static/           # Old HTML/CSS files (legacy)
│
├── frontend/                     # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── routes/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── database.db                   # SQLite Database (auto-created)
├── pom.xml                       # Maven configuration
└── SETUP_GUIDE.md               # This file
```

## 🔧 Configuration Details

### Backend Configuration (`src/main/resources/application.properties`)

```properties
server.port=5000
spring.datasource.url=jdbc:sqlite:database.db
server.servlet.session.cookie.max-age=3600
```

### Frontend Configuration (`frontend/vite.config.js`)

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
```

### CORS Configuration

CORS is enabled in `ApiController.java`:
```java
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
```

## 🔌 API Endpoints

### Authentication
- `POST /api/register` - Create new user account
- `POST /api/login` - User login (creates session)
- `POST /api/logout` - User logout (destroys session)

### Profile Management
- `GET /api/profile` - Get user profile and analysis
- `POST /api/profile` - Save/update user profile

### Predictions
- `POST /api/predict` - Get career predictions (anonymous)

## 🗄️ Database Schema

SQLite database is automatically created at `database.db`

### Tables

**users**
- id (PRIMARY KEY)
- username (UNIQUE)
- password_hash

**profiles**
- user_id (FOREIGN KEY → users.id)
- cgpa, projects, certifications
- apt_analytical, apt_coding, apt_communication, apt_problem_solving
- skills, interests

## 🎨 Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios
- Recharts
- Vite
- CSS3 (Glassmorphism)

### Backend
- Java Spring Boot 3.x
- SQLite JDBC
- Jakarta Servlet
- Maven

### Machine Learning
- K-Nearest Neighbors (K=15)
- Custom Java implementation
- Training data: 500+ career profiles

## 🐛 Troubleshooting

### Issue 1: Backend won't start
**Error**: "Port 5000 already in use"
**Solution**: 
- Kill the process using port 5000:
  ```bash
  # On Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # On Linux/Mac
  lsof -ti:5000 | xargs kill -9
  ```

### Issue 2: Frontend won't start
**Error**: "Port 3000 already in use"
**Solution**:
- Change port in `frontend/vite.config.js`:
  ```javascript
  server: { port: 3001 }
  ```

### Issue 3: API calls return 404
**Problem**: Backend not running
**Solution**: Start Spring Boot server first (Step 1)

### Issue 4: CORS errors
**Problem**: Browser blocks requests
**Solution**: 
- Verify `@CrossOrigin` annotation in `ApiController.java`
- Clear browser cache and restart both servers

### Issue 5: Login doesn't persist
**Problem**: Session cookie not being sent
**Solution**: 
- Check that `allowCredentials = "true"` in CORS config
- Verify Axios is configured with `withCredentials: true` in `frontend/src/services/api.js`

### Issue 6: npm install fails
**Problem**: Network issues or npm registry down
**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install

# Or use yarn
yarn install
```

## 📊 Sample Test Data

### Test User 1 - AI Engineer Profile
- **Username**: `john@example.com`
- **Password**: `password123`
- **CGPA**: 8.5
- **Projects**: 5
- **Certifications**: 3
- **Skills**: Python, Machine Learning, TensorFlow, Deep Learning
- **Interests**: Artificial Intelligence, Neural Networks

### Test User 2 - Data Scientist Profile
- **Username**: `sarah@example.com`
- **Password**: `password123`
- **CGPA**: 8.0
- **Projects**: 4
- **Certifications**: 2
- **Skills**: Python, R, SQL, Data Analysis, Statistics
- **Interests**: Data Science, Business Analytics

## 🚢 Production Deployment

### Backend Deployment
```bash
# Build JAR file
mvn clean package

# Run JAR
java -jar target/career-twin-1.0.0.jar
```

### Frontend Deployment
```bash
# Build production files
cd frontend
npm run build

# Files will be in frontend/dist/
# Deploy to Netlify, Vercel, or any static host
```

## 📝 Notes

- Database file `database.db` is created automatically on first run
- Sessions expire after 1 hour (configurable in application.properties)
- ML model uses K=15 neighbors for predictions
- Skill gap analysis compares user skills with career requirements
- Course recommendations are personalized based on missing skills

## 📞 Support

For issues or questions:
1. Check this guide first
2. Review error logs in terminal
3. Check browser console for frontend errors
4. Verify both servers are running

## 📄 License

Final Year Project - B.E. Computer Science & Engineering
AI Career Twin - 2026
