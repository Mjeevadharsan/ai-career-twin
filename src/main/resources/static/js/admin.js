// Check if user is admin
async function checkAuth() {
    try {
        const response = await fetch('/api/admin/stats');
        if (!response.ok) {
            window.location.href = 'admin-login.html';
        }
    } catch (error) {
        window.location.href = 'admin-login.html';
    }
}

// Load dashboard stats
async function loadStats() {
    try {
        const response = await fetch('/api/admin/stats');
        if (response.ok) {
            const stats = await response.json();
            document.getElementById('stat-total-students').textContent = stats.total_students || 0;
            document.getElementById('stat-with-profiles').textContent = stats.students_with_profiles || 0;
            document.getElementById('stat-logins-today').textContent = stats.logins_today || 0;
            document.getElementById('stat-signups-today').textContent = stats.signups_today || 0;
        }
    } catch (error) {
        console.error('Failed to load stats:', error);
    }
}

// Load students list
async function loadStudents() {
    const tbody = document.getElementById('students-table-body');
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;">Loading...</td></tr>';
    
    try {
        const response = await fetch('/api/admin/students');
        if (response.ok) {
            const students = await response.json();
            
            if (students.length === 0) {
                tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;">No students registered yet.</td></tr>';
                return;
            }
            
            tbody.innerHTML = students.map(student => `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.full_name || '-'}</td>
                    <td>${student.username}</td>
                    <td>${student.mobile || '-'}</td>
                    <td>${formatDate(student.created_at)}</td>
                    <td>${student.last_login ? formatDate(student.last_login) : 'Never'}</td>
                    <td>${student.login_count || 0}</td>
                    <td>
                        ${student.has_profile 
                            ? '<span class="badge badge-success">✓ Complete</span>' 
                            : '<span class="badge badge-warning">⚠ Pending</span>'}
                    </td>
                    <td>
                        <button class="btn-delete" onclick="deleteStudent(${student.id}, '${student.username}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </td>
                </tr>
            `).join('');
        }
    } catch (error) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;">Error loading students</td></tr>';
        console.error('Failed to load students:', error);
    }
}

// Load login history
async function loadLoginHistory() {
    const tbody = document.getElementById('login-history-body');
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Loading...</td></tr>';
    
    try {
        const response = await fetch('/api/admin/login-history?limit=100');
        if (response.ok) {
            const history = await response.json();
            
            if (history.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No login history available.</td></tr>';
                return;
            }
            
            tbody.innerHTML = history.map(record => `
                <tr>
                    <td>${formatDateTime(record.login_time)}</td>
                    <td>${record.username}</td>
                    <td>${record.full_name || '-'}</td>
                    <td>
                        <span class="badge ${record.role === 'ADMIN' ? 'badge-warning' : 'badge-success'}">
                            ${record.role}
                        </span>
                    </td>
                </tr>
            `).join('');
            
            // Also show in recent activity
            updateRecentActivity(history.slice(0, 10));
        }
    } catch (error) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Error loading login history</td></tr>';
        console.error('Failed to load login history:', error);
    }
}

// Update recent activity widget
function updateRecentActivity(history) {
    const container = document.getElementById('recent-activity');
    
    if (history.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;">No recent activity</p>';
        return;
    }
    
    container.innerHTML = history.map(record => `
        <div class="activity-item">
            <div class="activity-info">
                <div class="activity-icon">
                    <i class="fas fa-sign-in-alt"></i>
                </div>
                <div>
                    <strong>${record.full_name || record.username}</strong> logged in
                    <br><small style="color:#999;">${record.role}</small>
                </div>
            </div>
            <div class="activity-time">${formatTimeAgo(record.login_time)}</div>
        </div>
    `).join('');
}

// Delete student
async function deleteStudent(id, username) {
    if (!confirm(`Are you sure you want to delete student: ${username}?\n\nThis will permanently delete their account and profile data.`)) {
        return;
    }
    
    try {
        const response = await fetch(`/api/admin/student/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            alert('Student deleted successfully');
            loadStudents();
            loadStats();
        } else {
            const data = await response.json();
            alert('Failed to delete student: ' + (data.error || 'Unknown error'));
        }
    } catch (error) {
        alert('Error deleting student');
        console.error('Failed to delete student:', error);
    }
}

// Show section
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    
    // Remove active class from nav items
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    // Show selected section
    if (section === 'dashboard') {
        document.getElementById('dashboard-section').style.display = 'block';
        document.getElementById('page-title').textContent = 'Dashboard Overview';
        document.querySelectorAll('.nav-item')[0].classList.add('active');
        loadStats();
        loadLoginHistory(); // For recent activity
    } else if (section === 'students') {
        document.getElementById('students-section').style.display = 'block';
        document.getElementById('page-title').textContent = 'Students Management';
        document.querySelectorAll('.nav-item')[1].classList.add('active');
        loadStudents();
    } else if (section === 'login-history') {
        document.getElementById('login-history-section').style.display = 'block';
        document.getElementById('page-title').textContent = 'Login History';
        document.querySelectorAll('.nav-item')[2].classList.add('active');
        loadLoginHistory();
    }
}

// Logout
async function logout() {
    if (confirm('Are you sure you want to logout?')) {
        try {
            await fetch('/api/logout', { method: 'POST' });
            window.location.href = 'admin-login.html';
        } catch (error) {
            window.location.href = 'admin-login.html';
        }
    }
}

// Utility functions
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function formatDateTime(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatTimeAgo(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + ' min ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + ' hrs ago';
    return Math.floor(seconds / 86400) + ' days ago';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadStats();
    loadLoginHistory();
});
