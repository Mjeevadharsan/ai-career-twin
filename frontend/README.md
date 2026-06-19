# AI Career Twin - React Frontend

Modern React.js frontend for the AI Career Twin platform with career prediction, skill gap analysis, and personalized recommendations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Spring Boot backend running on port 5000

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CareerCard.jsx
│   │   ├── SkillGapCard.jsx
│   │   ├── CourseCard.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── CareerPrediction.jsx
│   │   ├── SkillGapAnalysis.jsx
│   │   ├── Recommendations.jsx
│   │   └── Settings.jsx
│   ├── services/          # API service layer
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── profileService.js
│   │   ├── predictionService.js
│   │   └── recommendationService.js
│   ├── routes/            # Routing configuration
│   │   └── AppRoutes.jsx
│   ├── context/           # React Context (Auth)
│   │   └── AuthContext.jsx
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
└── index.html
```

## 🎨 Features

- **Authentication Flow**: Login and Signup with session-based auth
- **Dashboard**: Comprehensive student dashboard with analytics
- **Career Prediction**: AI-powered career recommendations
- **Skill Gap Analysis**: Identify missing skills and get improvement suggestions
- **Course Recommendations**: Personalized learning paths
- **Project Recommendations**: Suggested projects based on career goals
- **Profile Management**: View and update student information
- **Settings**: Account preferences and logout

## 🔌 Backend Integration

The React app connects to Spring Boot backend via proxy:
- **React Dev Server**: `http://localhost:3000`
- **Spring Boot API**: `http://localhost:5000`
- **API Proxy**: All `/api/*` requests are forwarded to port 5000

### API Endpoints Used:
- `POST /api/login` - User authentication
- `POST /api/register` - New user registration
- `POST /api/logout` - Session logout
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile
- `POST /api/predict` - Get career predictions
- `GET /api/skillgap` - Get skill gap analysis
- `GET /api/recommendations/courses` - Get course recommendations
- `GET /api/recommendations/projects` - Get project recommendations

## 🛠️ Technologies

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Recharts** - Data visualization and charts
- **Vite** - Build tool and dev server
- **Context API** - State management (Authentication)

## 🎯 Page Flow

```
Home Page
   │
   ├── Login → Dashboard
   │
   └── Sign Up → Login → Dashboard
```

## 🔐 Authentication

The app uses session-based authentication with cookies:
1. User logs in via `/api/login`
2. Backend creates session and returns session cookie
3. All subsequent API calls include the session cookie
4. Protected routes redirect to login if not authenticated

## 📱 Responsive Design

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Design System

- **Primary Color**: Blue (#667eea)
- **Secondary Color**: Purple (#764ba2)
- **Background**: Dark gradient with glassmorphism effects
- **Typography**: Inter, system fonts

## 🔧 Build & Deploy

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Notes

- Ensure Spring Boot backend is running on port 5000 before starting React app
- CORS should be configured in Spring Boot to allow requests from `http://localhost:3000`
- Font Awesome icons are loaded from CDN in `index.html`

## 🐛 Troubleshooting

### Issue: API calls failing with 404
**Solution**: Verify Spring Boot backend is running on port 5000

### Issue: CORS errors
**Solution**: Add CORS configuration to Spring Boot:
```java
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
```

### Issue: Authentication not persisting
**Solution**: Check that backend sends `Set-Cookie` header with `SameSite=None; Secure` in production

## 📄 License

Final Year Project - B.E. Computer Science & Engineering
