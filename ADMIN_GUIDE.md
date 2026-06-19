# AI Career Twin - Admin System Guide

## 🔐 Admin Access

The system now has a complete admin panel with role-based access control.

### Default Admin Credentials

**Email:** `admin@careertwin.com`  
**Password:** `admin123`

⚠️ **IMPORTANT:** Change the default admin password after first login for security!

## 🌐 Admin Access URLs

- **Admin Login:** `http://localhost:5000/admin-login.html`
- **Admin Dashboard:** `http://localhost:5000/admin-dashboard.html`

## 📊 Admin Dashboard Features

### 1. Dashboard Overview
- **Total Students** - Count of all registered students
- **Students with Profiles** - Students who have completed their profile
- **Logins Today** - Number of logins in the last 24 hours
- **Signups Today** - New registrations in the last 24 hours
- **Recent Activity** - Real-time login activity feed

### 2. Students Management
View all registered students with:
- Student ID
- Full Name
- Email Address
- Mobile Number
- Registration Date
- Last Login Time
- Login Count (total number of logins)
- Profile Status (Complete/Pending)
- Delete Action (remove student and their data)

### 3. Login History
Complete audit trail showing:
- Login timestamp
- Username
- Full name
- Role (STUDENT/ADMIN)
- Up to 100 most recent logins

## 🔄 User Flow

### Admin Flow
```
Home Page → Admin Portal Link → Admin Login
    ↓
Admin Dashboard (3 sections)
    ├── Dashboard Overview (Stats + Activity)
    ├── Students Management (View/Delete)
    └── Login History (Audit Trail)
```

### Student Flow
```
Home Page → Sign Up → Login → Student Dashboard
```

## 🗄️ Database Changes

### New Tables

**users** (updated with role support)
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'STUDENT',      -- NEW
    full_name TEXT,                    -- NEW
    mobile TEXT,                       -- NEW
    last_login TIMESTAMP,              -- NEW
    login_count INTEGER DEFAULT 0,     -- NEW
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**login_history** (new table)
```sql
CREATE TABLE login_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address TEXT,
    user_agent TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
```

## 🔌 New API Endpoints

### Admin Endpoints (Requires ADMIN role)

1. **GET /api/admin/stats**
   - Returns dashboard statistics
   - Response: `{ total_students, students_with_profiles, logins_today, signups_today }`

2. **GET /api/admin/students**
   - Returns list of all students with their details
   - Includes profile status and login activity

3. **GET /api/admin/login-history?limit=50**
   - Returns recent login history
   - Default limit: 50 records

4. **DELETE /api/admin/student/{id}**
   - Deletes a student and their profile
   - Cannot delete admin accounts

### Updated Endpoints

**POST /api/register**
- Now accepts: `username`, `password`, `full_name`, `mobile`
- Automatically assigns role: `STUDENT`

**POST /api/login**
- Now returns: `{ message, username, role, full_name }`
- Updates `last_login` and `login_count`
- Records entry in `login_history` table

## 🛡️ Security Features

### Role-Based Access Control
- Admin endpoints return `403 Forbidden` if accessed by non-admin users
- Student endpoints accessible only after authentication
- Session-based authentication with HTTP-only cookies

### Login Tracking
- Every login is recorded with timestamp
- Login count incremented automatically
- Last login time updated
- Full audit trail maintained

### Admin Permissions
Admins can:
- ✅ View all students
- ✅ View login history
- ✅ Delete student accounts
- ✅ View system statistics

Admins cannot:
- ❌ Create student accounts (students self-register)
- ❌ Modify student profiles (students manage their own)
- ❌ Delete admin accounts

## 📱 User Interface

### Admin Login Page
- Clean, secure login interface
- Shield icon for admin branding
- Link back to student login
- "Admin access only" notice

### Admin Dashboard
- **Sidebar Navigation**
  - Dashboard (stats + activity)
  - Students (full list with actions)
  - Login History (audit trail)
  - Logout
  
- **Responsive Design**
  - Works on desktop, tablet, mobile
  - Clean data tables
  - Real-time refresh buttons

### Student Pages (Updated)
- Login page now has "Admin Portal" link
- Home page has "Administrator Portal" link
- Clearly separated access paths

## 🔍 Monitoring & Analytics

### What Admin Can Monitor

1. **User Registration Trends**
   - Total students registered
   - New signups today
   - Students with complete profiles

2. **Login Activity**
   - Total logins today
   - Recent login timestamps
   - Individual user login counts
   - Last active time per student

3. **Profile Completion**
   - How many students have filled profiles
   - Which students haven't completed setup

4. **System Usage**
   - Most active students
   - Login frequency patterns
   - Recent activity feed

## 🎯 Admin Actions

### View Student Details
1. Login to admin dashboard
2. Click "Students" in sidebar
3. View complete student list with all data

### Delete Student Account
1. Navigate to Students section
2. Find the student in the table
3. Click "Delete" button
4. Confirm deletion
5. Student and their profile are permanently removed

### Monitor Login Activity
1. Click "Login History" in sidebar
2. View complete chronological log
3. Filter by role (Student/Admin)
4. See real-time updates

### Check System Stats
1. Dashboard shows live statistics
2. Auto-refreshes on page load
3. Use "Refresh" buttons to update manually

## 🔧 Configuration

### Change Admin Password

Option 1: Through Database (Before first login)
```sql
UPDATE users 
SET password = '<new_hashed_password>' 
WHERE username = 'admin@careertwin.com';
```

Option 2: Create New Admin (Via Code)
Add to `DatabaseService.java` initialization:
```java
registerUser("newadmin@example.com", "newpassword", "New Admin", null, "ADMIN");
```

### Create Additional Admins
Currently admins can only be created through database or code.
To add an admin:

1. Register as normal student
2. Update role in database:
```sql
UPDATE users SET role = 'ADMIN' WHERE username = 'email@example.com';
```

## 📊 Usage Statistics

Track these metrics for your project:
- Total users registered
- Active users (logged in recently)
- Profile completion rate
- Average logins per user
- Peak usage times

## 🐛 Troubleshooting

### Cannot access admin dashboard
- **Solution**: Ensure you're logged in with admin credentials
- Check session hasn't expired
- Try logging in again

### Students list not loading
- **Solution**: Check backend is running on port 5000
- Verify database has students table
- Check browser console for errors

### Login history empty
- **Solution**: Login history starts recording after system update
- Previous logins before this update won't show
- New logins will be tracked automatically

## 🔐 Best Practices

1. **Change default admin password immediately**
2. **Don't share admin credentials**
3. **Regularly review login history for suspicious activity**
4. **Backup database before deleting students**
5. **Monitor signup trends for unusual patterns**

## 📝 Files Added/Modified

### New Files
- `src/main/resources/static/admin-login.html` - Admin login page
- `src/main/resources/static/admin-dashboard.html` - Admin dashboard
- `src/main/resources/static/css/admin.css` - Admin styles
- `src/main/resources/static/js/admin.js` - Admin functionality

### Modified Files
- `src/main/java/com/career/twin/service/DatabaseService.java` - Added role support, tracking
- `src/main/java/com/career/twin/controller/ApiController.java` - Added admin endpoints
- `src/main/resources/static/login.html` - Added admin portal link
- `src/main/resources/static/home.html` - Added admin portal link

## 🎓 For Project Demonstration

When demonstrating to evaluators:

1. **Show Student Flow**
   - Register new student
   - Login and create profile
   - View predictions

2. **Show Admin Flow**
   - Login to admin panel
   - Show dashboard statistics
   - Display students list
   - View login history
   - Demonstrate delete function

3. **Explain Security**
   - Role-based access control
   - Password hashing
   - Session management
   - Audit trail

---

**Admin System Version:** 1.0  
**Last Updated:** June 2026  
**Compatible with:** AI Career Twin v1.0
