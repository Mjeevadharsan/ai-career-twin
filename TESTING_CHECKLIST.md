# AI Career Twin - Testing Checklist

Use this checklist to verify all features are working correctly before demonstration.

## ✅ Pre-Testing Setup

- [ ] Java JDK 17+ installed (`java --version`)
- [ ] Maven 3.6+ installed (`mvn --version`)
- [ ] Node.js 16+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Project downloaded/cloned
- [ ] All dependencies installed

## 🔧 Installation Testing

### Backend Installation
- [ ] Run `mvn clean install` without errors
- [ ] No build failures or missing dependencies
- [ ] `target/` folder created with JAR file

### Frontend Installation
- [ ] Navigate to `frontend/` folder
- [ ] Run `npm install` successfully
- [ ] `node_modules/` folder created
- [ ] No dependency conflicts

## 🚀 Server Startup Testing

### Backend Startup
- [ ] Run `mvn spring-boot:run`
- [ ] Server starts on port 5000
- [ ] No errors in console
- [ ] See "Started CareerTwinApplication" message
- [ ] Database file `database.db` created
- [ ] Visit `http://localhost:5000` (should see Whitelabel error - this is OK)

### Frontend Startup
- [ ] Open new terminal
- [ ] Navigate to `frontend/`
- [ ] Run `npm run dev`
- [ ] Vite starts on port 3000
- [ ] No compilation errors
- [ ] See "Local: http://localhost:3000" message
- [ ] Visit `http://localhost:3000` (should see Home page)

## 🏠 Home Page Testing

- [ ] Page loads correctly
- [ ] "AI Career Twin" title visible
- [ ] Hero section displays properly
- [ ] Features section visible
- [ ] "Login" button present and styled
- [ ] "Sign Up" button present and styled
- [ ] Responsive on mobile (resize browser)
- [ ] Responsive on tablet (resize browser)
- [ ] All animations smooth

## 📝 Sign Up Page Testing

- [ ] Click "Sign Up" from home page
- [ ] Redirects to `/signup`
- [ ] Form displays with all fields:
  - [ ] Full Name input
  - [ ] Email input
  - [ ] Mobile Number input
  - [ ] Password input
  - [ ] Confirm Password input
- [ ] All input icons display
- [ ] Form validation works:
  - [ ] Empty fields show error
  - [ ] Invalid email format rejected
  - [ ] Password mismatch detected
  - [ ] Short password rejected
- [ ] Password strength meter visible
- [ ] Password strength changes (weak → medium → strong)
- [ ] "Create Account" button clickable
- [ ] "Already have an account? Login" link works

### Sign Up Functionality
- [ ] Create test user:
  - Name: Test User
  - Email: test@example.com
  - Mobile: 9876543210
  - Password: Test@123
- [ ] Success message appears
- [ ] Redirects to login page
- [ ] Check backend console for registration log
- [ ] Verify user created in `database.db`

## 🔐 Login Page Testing

- [ ] Navigate to `/login`
- [ ] Form displays with fields:
  - [ ] Email input
  - [ ] Password input
- [ ] "Login" button visible
- [ ] "Don't have an account? Sign Up" link works
- [ ] "Forgot Password?" link visible (even if inactive)

### Login Functionality
- [ ] Try wrong credentials - should show error
- [ ] Try correct credentials:
  - Email: test@example.com
  - Password: Test@123
- [ ] Success message appears
- [ ] Redirects to `/dashboard`
- [ ] Session created (check browser cookies)
- [ ] Backend console shows login log

## 🎯 Dashboard Page Testing (Before Profile)

- [ ] Dashboard loads after login
- [ ] Navbar displays with user email
- [ ] "No profile found" message appears
- [ ] "Go to Profile" button visible
- [ ] All navigation links work:
  - [ ] Dashboard
  - [ ] Profile
  - [ ] Career Prediction
  - [ ] Skill Gap
  - [ ] Recommendations
  - [ ] Settings

## 👤 Profile Page Testing

- [ ] Navigate to `/profile`
- [ ] Form loads with all sections:
  - [ ] Academic Details
  - [ ] Aptitude Scores
  - [ ] Technical Skills
  - [ ] Interests

### Fill Profile Form
- [ ] CGPA input (try 8.5)
- [ ] Projects input (try 5)
- [ ] Certifications input (try 3)
- [ ] Analytical slider (try 85)
- [ ] Coding slider (try 90)
- [ ] Communication slider (try 75)
- [ ] Problem Solving slider (try 88)
- [ ] Select skills: Python, Machine Learning, TensorFlow
- [ ] Select interests: Artificial Intelligence, Neural Networks
- [ ] "Save Profile" button clickable

### Save Profile
- [ ] Click "Save Profile"
- [ ] Loading state appears
- [ ] Success message appears
- [ ] Redirects to dashboard
- [ ] Profile saved in database

## 🎯 Dashboard Page Testing (After Profile)

- [ ] Dashboard loads with data
- [ ] Career prediction cards visible
- [ ] Top 5 careers displayed with percentages
- [ ] Percentages add up to ~100%
- [ ] Career icons display
- [ ] Skill gap section visible
- [ ] Missing skills listed
- [ ] Course recommendations visible
- [ ] Project recommendations visible
- [ ] Charts/graphs render correctly
- [ ] All data matches saved profile

## 🔮 Career Prediction Page Testing

- [ ] Navigate to `/career-prediction`
- [ ] Page loads successfully
- [ ] All predicted careers listed
- [ ] Each career shows:
  - [ ] Career name
  - [ ] Confidence percentage
  - [ ] Description
  - [ ] Key skills required
  - [ ] Salary range (if displayed)
- [ ] Careers sorted by confidence (highest first)
- [ ] Visual progress bars for percentages

## 📊 Skill Gap Analysis Page Testing

- [ ] Navigate to `/skillgap`
- [ ] Page loads successfully
- [ ] Skill gap cards display
- [ ] Each career shows:
  - [ ] Required skills
  - [ ] Your current skills
  - [ ] Missing skills
  - [ ] Skill match percentage
- [ ] Color coding for skill levels
- [ ] Improvement suggestions visible

## 📚 Recommendations Page Testing

- [ ] Navigate to `/recommendations`
- [ ] Page loads successfully
- [ ] Course recommendations visible
- [ ] Each course shows:
  - [ ] Course name
  - [ ] Provider/Platform
  - [ ] Description
  - [ ] Duration
  - [ ] Difficulty level
- [ ] Project recommendations visible
- [ ] Each project shows:
  - [ ] Project title
  - [ ] Description
  - [ ] Technologies used
  - [ ] Difficulty level
- [ ] Recommendations relevant to career goals

## ⚙️ Settings Page Testing

- [ ] Navigate to `/settings`
- [ ] Page loads successfully
- [ ] Account info displays:
  - [ ] Username/Email
  - [ ] Account type (Student)
- [ ] Project info displays:
  - [ ] Project name
  - [ ] Course details
  - [ ] Domain
  - [ ] Backend info
  - [ ] ML model info
- [ ] Logout button visible
- [ ] Click "Logout" button
- [ ] Confirmation prompt appears
- [ ] Click "Yes, Logout"
- [ ] Session destroyed
- [ ] Redirects to home page
- [ ] Dashboard no longer accessible without login

## 🔄 Navigation Testing

### Navbar Links (When Logged In)
- [ ] Logo/Home link works
- [ ] Dashboard link works
- [ ] Profile link works
- [ ] Career Prediction link works
- [ ] Skill Gap link works
- [ ] Recommendations link works
- [ ] Settings link works
- [ ] User email displays

### Footer Links
- [ ] Footer displays on all pages
- [ ] Project name visible
- [ ] Year visible
- [ ] Domain tags visible

## 🔒 Authentication & Security Testing

### Protected Routes
- [ ] Try accessing `/dashboard` when logged out → redirects to login
- [ ] Try accessing `/profile` when logged out → redirects to login
- [ ] Try accessing `/career-prediction` when logged out → redirects to login
- [ ] Try accessing `/skillgap` when logged out → redirects to login
- [ ] Try accessing `/recommendations` when logged out → redirects to login

### Session Management
- [ ] Login creates session
- [ ] Session persists on page refresh
- [ ] Logout destroys session
- [ ] Session expires after timeout (if configured)

## 📱 Responsive Design Testing

### Desktop (1200px+)
- [ ] All pages display correctly
- [ ] Multi-column layouts work
- [ ] No horizontal scrolling
- [ ] Images and cards properly sized

### Tablet (768px - 1199px)
- [ ] Layout adjusts appropriately
- [ ] Cards stack or resize
- [ ] Navigation remains usable
- [ ] Forms remain accessible

### Mobile (< 768px)
- [ ] Single column layout
- [ ] Touch-friendly buttons
- [ ] Readable text sizes
- [ ] No content overflow
- [ ] Forms stack vertically

### Test on Different Browsers
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)

## 🎨 UI/UX Testing

### Visual Design
- [ ] Blue and purple color scheme consistent
- [ ] Glassmorphism effects render correctly
- [ ] Gradients display smoothly
- [ ] Font sizes readable
- [ ] Spacing and padding appropriate
- [ ] Icons load and display

### Animations
- [ ] Page transitions smooth
- [ ] Button hover effects work
- [ ] Card hover effects work
- [ ] Loading states visible
- [ ] Form validation animations smooth

### Accessibility
- [ ] Tab navigation works
- [ ] Form inputs have labels
- [ ] Error messages clear
- [ ] Contrast ratios adequate
- [ ] Alt text on images (if any)

## 🔌 API Integration Testing

### Backend API Endpoints
- [ ] POST `/api/register` - creates user
- [ ] POST `/api/login` - authenticates user
- [ ] GET `/api/profile` - returns profile + predictions
- [ ] POST `/api/profile` - saves profile
- [ ] POST `/api/predict` - returns predictions
- [ ] POST `/api/logout` - destroys session

### API Response Testing
- [ ] Successful responses return correct data
- [ ] Error responses show appropriate messages
- [ ] Status codes correct (200, 201, 400, 401, 409)
- [ ] JSON format valid
- [ ] CORS headers present

### Network Testing
- [ ] Open browser DevTools → Network tab
- [ ] Verify API calls made to `http://localhost:5000/api/*`
- [ ] Check request headers (Cookie sent)
- [ ] Check response headers (Set-Cookie received)
- [ ] Verify no CORS errors

## 🤖 Machine Learning Testing

### KNN Predictions
- [ ] Multiple profiles give different predictions
- [ ] Confidence percentages vary by profile
- [ ] Top careers make logical sense
- [ ] Predictions update when profile changes

### Test Different Profiles

**Profile 1: AI Engineer**
- CGPA: 9.0, Projects: 6, Certs: 4
- Skills: Python, ML, TensorFlow, Deep Learning
- Expected: High AI Engineer confidence

**Profile 2: Data Scientist**
- CGPA: 8.5, Projects: 5, Certs: 3
- Skills: Python, R, SQL, Statistics
- Expected: High Data Scientist confidence

**Profile 3: Software Developer**
- CGPA: 8.0, Projects: 7, Certs: 2
- Skills: Java, JavaScript, React, Node.js
- Expected: High Software Developer confidence

**Profile 4: Low Experience**
- CGPA: 7.0, Projects: 1, Certs: 0
- Skills: Basic Programming
- Expected: Lower confidence overall, more skill gaps

## 🗄️ Database Testing

- [ ] `database.db` file created in project root
- [ ] Open database with SQLite browser/viewer
- [ ] Verify `users` table exists
- [ ] Verify `profiles` table exists
- [ ] Check test user record in `users` table
- [ ] Check test profile record in `profiles` table
- [ ] Verify skills and interests stored correctly (JSON format)

## 🐛 Error Handling Testing

### Frontend Errors
- [ ] Network failure handled gracefully
- [ ] Invalid API responses handled
- [ ] Loading states during API calls
- [ ] Error messages user-friendly

### Backend Errors
- [ ] Invalid input rejected
- [ ] Duplicate username prevented
- [ ] Missing required fields detected
- [ ] Unauthorized access blocked

## 🔍 Performance Testing

- [ ] Home page loads in < 2 seconds
- [ ] Dashboard loads in < 3 seconds
- [ ] API responses return in < 500ms
- [ ] Predictions calculated in < 100ms
- [ ] No memory leaks on page navigation
- [ ] Smooth animations (60 fps)

## 📸 Screenshot Checklist

Take screenshots for documentation:
- [ ] Home page (desktop)
- [ ] Login page
- [ ] Signup page
- [ ] Dashboard (with profile)
- [ ] Profile form (filled)
- [ ] Career prediction page
- [ ] Skill gap analysis
- [ ] Recommendations page
- [ ] Settings page
- [ ] Mobile view (any page)

## 🎓 Demonstration Checklist

Before presenting:
- [ ] Both servers running
- [ ] Test user account ready
- [ ] Browser cleared/incognito mode
- [ ] Full screen mode enabled
- [ ] All tabs/applications closed
- [ ] Zoom/font size appropriate
- [ ] Network stable

Demonstration Flow:
1. [ ] Show home page, explain project
2. [ ] Sign up new user
3. [ ] Login with credentials
4. [ ] Show empty dashboard
5. [ ] Fill profile with realistic data
6. [ ] Show updated dashboard with predictions
7. [ ] Navigate through all pages
8. [ ] Explain ML model and predictions
9. [ ] Show skill gap analysis
10. [ ] Show recommendations
11. [ ] Logout and return to home

## ✅ Final Verification

- [ ] All features working as expected
- [ ] No console errors in browser
- [ ] No errors in backend logs
- [ ] All pages load correctly
- [ ] All navigation works
- [ ] Authentication functional
- [ ] ML predictions accurate
- [ ] UI polished and professional
- [ ] Responsive design verified
- [ ] Ready for demonstration

## 📝 Known Issues / Notes

Document any issues or special notes here:
- Issue 1: ___________________________________
- Issue 2: ___________________________________
- Note 1: ___________________________________
- Note 2: ___________________________________

---

**Testing Completed By**: ________________  
**Date**: ________________  
**Status**: ☐ PASS  ☐ FAIL  
**Ready for Demo**: ☐ YES  ☐ NO  

