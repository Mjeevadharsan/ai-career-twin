// App state variables
let isLoggedIn = false;
let currentUsername = "";
let hasProfile = false;
let twinChartInstance = null;
let currentWizardStep = 1;
let currentActiveProfile = null; // Stores currently loaded profile details

// All skills for reference
const ALL_SKILLS = [
    "Python", "Java", "SQL", "C++", "HTML_CSS", "JavaScript",
    "Machine_Learning", "Deep_Learning", "Networking", "Linux",
    "Cloud_Computing", "UI_UX_Design"
];

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
    // Check if user is already logged in (session recovery)
    checkSessionOnStart();
});

// Smooth scroll to demo block
function scrollToDemo() {
    document.getElementById("demo-anchor").scrollIntoView({ behavior: 'smooth' });
}

// Session recovery check
async function checkSessionOnStart() {
    try {
        const response = await fetch('/api/profile');
        if (response.ok) {
            const data = await response.json();
            // User is logged in
            isLoggedIn = true;
            currentUsername = "Student"; // fallback
            // Determine username from path/headers if possible, or retrieve it
            // For now, retrieve from profile
            updateAuthUI(true, "Student");
            
            if (data.has_profile) {
                hasProfile = true;
                currentActiveProfile = data;
                renderDashboard(data);
                showSection('dashboard');
            } else {
                hasProfile = false;
                showSection('wizard');
            }
        } else {
            updateAuthUI(false);
            window.location.href = '/home.html';
        }
    } catch (e) {
        console.error("Session check failed: ", e);
        updateAuthUI(false);
        window.location.href = '/home.html';
    }
}

// Section visibility toggler
function showSection(sectionId) {
    // Hide all main content sections
    document.querySelectorAll('.app-section').forEach(sec => {
        sec.classList.add('hidden');
    });

    // Show selected section
    const activeSec = document.getElementById(sectionId + '-section');
    if (activeSec) {
        activeSec.classList.remove('hidden');
    }

    // Update nav links active status
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    if (sectionId === 'landing') {
        document.querySelector('.nav-link[onclick*="landing"]').classList.add('active');
    } else if (sectionId === 'dashboard' || sectionId === 'wizard') {
        document.getElementById('nav-twin-lnk').classList.add('active');
    } else if (sectionId === 'viva') {
        document.querySelector('.nav-link[onclick*="viva-section"]').classList.add('active');
    }
}

// --- Assessment Wizard Steps ---
function changeStep(stepNum) {
    // Hide current step
    document.getElementById(`step-${currentWizardStep}-content`).classList.add('hidden');
    // Show new step
    document.getElementById(`step-${stepNum}-content`).classList.remove('hidden');
    
    // Update step dots
    document.querySelectorAll('.step-dot').forEach(dot => {
        const dotStep = parseInt(dot.getAttribute('data-step'));
        if (dotStep <= stepNum) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentWizardStep = stepNum;
}

// Update Range Slider Badge labels
function updateSliderLabel(slider, labelId) {
    document.getElementById(labelId).innerText = slider.value + "%";
}

// --- Auth Modal Controllers ---
function openAuthModal(mode) {
    document.getElementById("auth-modal").classList.remove("hidden");
    switchAuthTab(mode);
}

function closeAuthModal() {
    document.getElementById("auth-modal").classList.add("hidden");
    document.getElementById("auth-form").reset();
    document.getElementById("auth-error-msg").classList.add("hidden");
}

function switchAuthTab(mode) {
    const tabLogin = document.getElementById("tab-login");
    const tabSignup = document.getElementById("tab-signup");
    const submitBtn = document.getElementById("auth-submit-btn");

    if (mode === 'login') {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        submitBtn.innerText = "Log In";
        submitBtn.setAttribute("data-mode", "login");
    } else {
        tabLogin.classList.remove('active');
        tabSignup.classList.add('active');
        submitBtn.innerText = "Register & Sign Up";
        submitBtn.setAttribute("data-mode", "signup");
    }
    document.getElementById("auth-error-msg").classList.add("hidden");
}

// Handle login / signup submission
async function handleAuthSubmit(event) {
    event.preventDefault();
    const mode = document.getElementById("auth-submit-btn").getAttribute("data-mode");
    const usernameInput = document.getElementById("auth-username").value;
    const passwordInput = document.getElementById("auth-password").value;
    const errorDiv = document.getElementById("auth-error-msg");

    const url = mode === 'login' ? '/api/login' : '/api/register';
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameInput, password: passwordInput })
        });

        const data = await response.json();
        
        if (!response.ok) {
            errorDiv.innerText = data.error || "Authentication failed.";
            errorDiv.classList.remove('hidden');
            return;
        }

        if (mode === 'signup') {
            // After successful registration, auto-login
            switchAuthTab('login');
            document.getElementById("auth-password").value = "";
            errorDiv.innerText = "Account created! Please enter your password to log in.";
            errorDiv.className = "form-error text-success";
            errorDiv.classList.remove('hidden');
        } else {
            // Login successful
            isLoggedIn = true;
            currentUsername = data.username;
            updateAuthUI(true, data.username);
            closeAuthModal();
            
            // Check if profile exists
            checkSessionOnStart();
        }
    } catch (e) {
        errorDiv.innerText = "Server connection error.";
        errorDiv.classList.remove('hidden');
    }
}

// Update Header components for auth state
function updateAuthUI(loggedIn, username = "") {
    const authBtnGroup = document.getElementById("nav-auth-container");
    const userBadge = document.getElementById("nav-user-badge");
    const nameDisplay = document.getElementById("user-display-name");

    if (loggedIn) {
        authBtnGroup.classList.add('hidden');
        userBadge.classList.remove('hidden');
        nameDisplay.innerText = username;
    } else {
        authBtnGroup.classList.remove('hidden');
        userBadge.classList.add('hidden');
    }
}

// Handle Logout
async function handleLogout() {
    try {
        await fetch('/api/logout', { method: 'POST' });
        isLoggedIn = false;
        hasProfile = false;
        currentActiveProfile = null;
        updateAuthUI(false);
        window.location.href = '/home.html';
    } catch (e) {
        console.error("Logout failed: ", e);
    }
}

// Nav link check logic
function checkAuthAndLoadTwin() {
    if (!isLoggedIn) {
        window.location.href = '/login.html';
    } else {
        if (hasProfile) {
            showSection('dashboard');
        } else {
            showSection('wizard');
        }
    }
}

// --- Quick Demo Prediction ---
async function handleQuickPrediction(event) {
    event.preventDefault();
    const cgpa = parseFloat(document.getElementById("demo-cgpa").value);
    const interest = document.getElementById("demo-interest").value;
    const projects = parseInt(document.getElementById("demo-projects").value);
    const certs = parseInt(document.getElementById("demo-certs").value);
    
    // Read skills
    const skills = [];
    document.querySelectorAll('#quick-demo-form input[type="checkbox"]:checked').forEach(cb => {
        skills.push(cb.value);
    });

    const payload = {
        cgpa: cgpa,
        interests: [interest],
        projects: projects,
        certifications: certs,
        skills: skills,
        apt_analytical: 75, // constant defaults for demo
        apt_coding: 70,
        apt_communication: 75,
        apt_problem_solving: 75
    };

    try {
        const response = await fetch('/api/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            alert("Error running prediction.");
            return;
        }

        const data = await response.json();
        
        // Show container
        document.getElementById("demo-result-container").classList.remove("hidden");

        // Render careers
        const careersList = document.getElementById("demo-careers-list");
        careersList.innerHTML = "";
        data.predictions.slice(0, 3).forEach((pred, index) => {
            const percent = Math.round(pred.probability * 100);
            const item = document.createElement("div");
            item.className = "career-prog-item";
            item.innerHTML = `
                <div class="prog-info">
                    <span>${index + 1}. ${pred.career}</span>
                    <span>${percent}%</span>
                </div>
                <div class="prog-track">
                    <div class="prog-fill" style="width: ${percent}%"></div>
                </div>
            `;
            careersList.appendChild(item);
        });

        // Render skill gap
        const recsList = document.getElementById("demo-recs-list");
        recsList.innerHTML = "";
        
        if (data.missing_skills.length > 0) {
            const gapBadges = document.createElement("div");
            gapBadges.className = "gap-badge-group";
            data.missing_skills.forEach(skill => {
                gapBadges.innerHTML += `<span class="missing-badge"><i class="fa-solid fa-circle-minus"></i> ${skill.replace('_', ' ')}</span>`;
            });
            recsList.appendChild(gapBadges);

            // Add top course/project recommendation
            if (data.courses.length > 0) {
                const recCard = document.createElement("div");
                recCard.className = "rec-card-small";
                recCard.innerHTML = `
                    <h5><i class="fa-solid fa-book-open"></i> Key Suggested Course</h5>
                    <p>${data.courses[0]}</p>
                `;
                recsList.appendChild(recCard);
            }
            if (data.projects.length > 0) {
                const recCard = document.createElement("div");
                recCard.className = "rec-card-small margin-top-xs";
                recCard.innerHTML = `
                    <h5><i class="fa-solid fa-cubes"></i> Suggesting Project</h5>
                    <p>${data.projects[0]}</p>
                `;
                recsList.appendChild(recCard);
            }
        } else {
            recsList.innerHTML = `
                <p class="text-success"><i class="fa-solid fa-circle-check"></i> Perfect Match! No critical skill gap detected for this career profile.</p>
            `;
        }

        // Scroll to results
        document.getElementById("demo-result-container").scrollIntoView({ behavior: 'smooth' });

    } catch (e) {
        console.error("Demo prediction request failed: ", e);
    }
}

// --- Assessment Wizard Submission ---
async function handleWizardSubmit(event) {
    event.preventDefault();
    
    const cgpa = parseFloat(document.getElementById("wiz-cgpa").value);
    const projects = parseInt(document.getElementById("wiz-projects").value);
    const certs = parseInt(document.getElementById("wiz-certs").value);
    
    // Skills
    const skills = [];
    document.querySelectorAll('input[name="wiz-skills"]:checked').forEach(cb => {
        skills.push(cb.value);
    });

    // Interests
    const interests = [];
    document.querySelectorAll('input[name="wiz-interests"]:checked').forEach(cb => {
        interests.push(cb.value);
    });

    const aptAnalytical = parseFloat(document.getElementById("wiz-analytical").value);
    const aptCoding = parseFloat(document.getElementById("wiz-coding").value);
    const aptComm = parseFloat(document.getElementById("wiz-comm").value);
    const aptProblem = parseFloat(document.getElementById("wiz-problem").value);

    const payload = {
        cgpa: cgpa,
        projects: projects,
        certifications: certs,
        skills: skills,
        interests: interests,
        apt_analytical: aptAnalytical,
        apt_coding: aptCoding,
        apt_communication: aptComm,
        apt_problem_solving: aptProblem
    };

    try {
        const response = await fetch('/api/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        if (!response.ok) {
            alert("Failed to submit profile details.");
            return;
        }

        hasProfile = true;
        // Inject analytical properties back into data to construct local profile storage
        const fullProfile = {
            has_profile: true,
            cgpa: cgpa,
            projects: projects,
            certifications: certs,
            apt_analytical: aptAnalytical,
            apt_coding: aptCoding,
            apt_communication: aptComm,
            apt_problem_solving: aptProblem,
            skills: skills,
            interests: interests,
            analysis: data.analysis
        };
        currentActiveProfile = fullProfile;

        // Render Dashboard & transition
        renderDashboard(fullProfile);
        showSection('dashboard');
        
        // Reset wizard step
        changeStep(1);
        document.getElementById("wizard-form").reset();

    } catch (e) {
        console.error("Wizard submit failed: ", e);
    }
}

// --- Render Dashboard with Digital Twin data ---
function renderDashboard(profileData) {
    const analysis = profileData.analysis;

    // Academic score display
    document.getElementById("dash-cgpa-val").innerText = profileData.cgpa.toFixed(2);
    document.getElementById("dash-twin-name").innerText = currentUsername + "'s Twin";
    
    // Render Radar Chart
    renderRadarTwin(analysis.twinDimensions);

    // Strengths
    const strengthsUl = document.getElementById("dash-strengths-list");
    strengthsUl.innerHTML = "";
    analysis.strengths.forEach(str => {
        strengthsUl.innerHTML += `<li>${str}</li>`;
    });

    // Weaknesses
    const weaknessesUl = document.getElementById("dash-weaknesses-list");
    weaknessesUl.innerHTML = "";
    analysis.weaknesses.forEach(wk => {
        weaknessesUl.innerHTML += `<li>${wk}</li>`;
    });

    // Top Match
    const topMatch = analysis.predictions[0];
    document.getElementById("dash-top-career-name").innerText = topMatch.career;
    document.getElementById("dash-top-percentage").innerText = Math.round(topMatch.probability * 100) + "%";
    document.getElementById("gap-target-career").innerText = topMatch.career;

    // Alt matches
    const altList = document.getElementById("dash-alt-careers-list");
    altList.innerHTML = "";
    analysis.predictions.slice(1, 4).forEach((pred, index) => {
        const pct = Math.round(pred.probability * 100);
        altList.innerHTML += `
            <div class="career-prog-item">
                <div class="prog-info">
                    <span>${index + 2}. ${pred.career}</span>
                    <span>${pct}%</span>
                </div>
                <div class="prog-track">
                    <div class="prog-fill" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });

    // Skill Gap Matrix
    renderSkillGapMatrix(profileData.skills, analysis.missing_skills);

    // Setup skill adder selection
    populateQuickSkillDropdown(profileData.skills);

    // Roadmap accordions
    renderRoadmapList("rec-courses-list", analysis.courses);
    renderRoadmapList("rec-projects-list", analysis.projects);
    renderRoadmapList("rec-certs-list", analysis.certifications);
}

// Render radar chart on canvas
function renderRadarTwin(dimensions) {
    const ctx = document.getElementById('radarTwinChart').getContext('2d');
    
    if (twinChartInstance) {
        twinChartInstance.destroy();
    }

    const labels = Object.keys(dimensions);
    const dataValues = Object.values(dimensions);

    twinChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Capability Vector (%)',
                data: dataValues,
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                borderColor: '#38bdf8',
                borderWidth: 2,
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2563eb',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#94a3b8',
                        font: {
                            family: 'Plus Jakarta Sans',
                            size: 10,
                            weight: '600'
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#64748b',
                        font: { size: 9 },
                        stepSize: 20
                    },
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Build Skill Gap matrix checked-acquired boxes
function renderSkillGapMatrix(possessedSkills, missingSkills) {
    const matrix = document.getElementById("dash-gap-matrix");
    matrix.innerHTML = "";

    // Show skills required for top career
    const targetCareer = document.getElementById("gap-target-career").innerText;
    
    // Standard skills required for target career
    const requiredSkillsMap = {
        'AI Engineer': ['Python', 'SQL', 'Machine_Learning', 'Deep_Learning'],
        'Data Scientist': ['Python', 'SQL', 'Machine_Learning'],
        'Software Developer': ['Java', 'JavaScript', 'HTML_CSS', 'C++'],
        'Cybersecurity Analyst': ['Networking', 'Linux', 'SQL'],
        'Cloud Engineer': ['Cloud_Computing', 'Linux', 'Networking', 'SQL'],
        'UI/UX Designer': ['UI_UX_Design', 'HTML_CSS', 'JavaScript']
    };

    const targetRequired = requiredSkillsMap[targetCareer] || [];

    targetRequired.forEach(skill => {
        const item = document.createElement("div");
        const isAcquired = possessedSkills.includes(skill);
        
        if (isAcquired) {
            item.className = "matrix-item acquired";
            item.innerHTML = `
                <i class="fa-solid fa-circle-check matrix-icon-acquired"></i>
                <span>${skill.replace('_', ' ')}</span>
            `;
        } else {
            item.className = "matrix-item missing";
            item.innerHTML = `
                <i class="fa-solid fa-circle-xmark matrix-icon-missing"></i>
                <span>${skill.replace('_', ' ')}</span>
            `;
        }
        matrix.appendChild(item);
    });
}

// Quick Add Skill Dropdown populations
function populateQuickSkillDropdown(possessedSkills) {
    const select = document.getElementById("quick-add-select");
    select.innerHTML = "";

    const unacquired = ALL_SKILLS.filter(s => !possessedSkills.includes(s));
    
    if (unacquired.length === 0) {
        select.innerHTML = `<option value="">All skills acquired</option>`;
        select.disabled = true;
        return;
    }

    select.disabled = false;
    unacquired.forEach(s => {
        select.innerHTML += `<option value="${s}">${s.replace('_', ' ')}</option>`;
    });
}

// Handle quick skill insertion
async function handleQuickAddSkill(event) {
    event.preventDefault();
    
    const skillSelect = document.getElementById("quick-add-select");
    const skillToAdd = skillSelect.value;
    
    if (!skillToAdd || !currentActiveProfile) return;

    // Add skill locally
    const newSkills = [...currentActiveProfile.skills, skillToAdd];
    
    const payload = {
        cgpa: currentActiveProfile.cgpa,
        projects: currentActiveProfile.projects,
        certifications: currentActiveProfile.certifications,
        skills: newSkills,
        interests: currentActiveProfile.interests,
        apt_analytical: currentActiveProfile.apt_analytical,
        apt_coding: currentActiveProfile.apt_coding,
        apt_communication: currentActiveProfile.apt_communication,
        apt_problem_solving: currentActiveProfile.apt_problem_solving
    };

    try {
        const response = await fetch('/api/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        if (!response.ok) {
            alert("Failed to quick-add skill.");
            return;
        }

        // Update active profile state
        currentActiveProfile.skills = newSkills;
        currentActiveProfile.analysis = data.analysis;

        // Render Dashboard updates instantly
        renderDashboard(currentActiveProfile);

    } catch (e) {
        console.error("Failed to add skill: ", e);
    }
}

// Render dynamic checklists
function renderRoadmapList(containerId, listData) {
    const list = document.getElementById(containerId);
    list.innerHTML = "";

    listData.forEach(text => {
        const li = document.createElement("li");
        
        // Check if there is local progress checked stored
        const storedCheckKey = `${currentUsername}_roadmap_${text}`;
        const isChecked = localStorage.getItem(storedCheckKey) === 'true';

        li.className = `roadmap-check-item ${isChecked ? 'checked' : ''}`;
        li.innerHTML = `
            <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="handleRoadmapCheck(this, '${text}')">
            <span>${text}</span>
        `;
        list.appendChild(li);
    });
}

// Handle checkbox roadmap progression save
function handleRoadmapCheck(checkbox, text) {
    const parent = checkbox.parentElement;
    const storedCheckKey = `${currentUsername}_roadmap_${text}`;

    if (checkbox.checked) {
        parent.classList.add('checked');
        localStorage.setItem(storedCheckKey, 'true');
    } else {
        parent.classList.remove('checked');
        localStorage.setItem(storedCheckKey, 'false');
    }
}

// Accordion Toggles
function toggleAccordion(btn) {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
    });

    if (!isActive) {
        item.classList.add('active');
    }
}

// Viva Accordion Toggles
function toggleViva(btn) {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.viva-item').forEach(vi => {
        vi.classList.remove('active');
    });

    if (!isActive) {
        item.classList.add('active');
    }
}

// Route trigger for showing Wizard manually
function showWizard() {
    // Populate form with existing values if available
    if (currentActiveProfile) {
        document.getElementById("wiz-cgpa").value = currentActiveProfile.cgpa;
        document.getElementById("wiz-projects").value = currentActiveProfile.projects;
        document.getElementById("wiz-certs").value = currentActiveProfile.certifications;

        // Skills checkboxes
        document.querySelectorAll('input[name="wiz-skills"]').forEach(cb => {
            cb.checked = currentActiveProfile.skills.includes(cb.value);
        });

        // Interests chips
        document.querySelectorAll('input[name="wiz-interests"]').forEach(cb => {
            cb.checked = currentActiveProfile.interests.includes(cb.value);
        });

        // Sliders
        document.getElementById("wiz-analytical").value = currentActiveProfile.apt_analytical;
        updateSliderLabel(document.getElementById("wiz-analytical"), 'analytical-val');
        
        document.getElementById("wiz-coding").value = currentActiveProfile.apt_coding;
        updateSliderLabel(document.getElementById("wiz-coding"), 'coding-val');

        document.getElementById("wiz-comm").value = currentActiveProfile.apt_communication;
        updateSliderLabel(document.getElementById("wiz-comm"), 'comm-val');

        document.getElementById("wiz-problem").value = currentActiveProfile.apt_problem_solving;
        updateSliderLabel(document.getElementById("wiz-problem"), 'problem-val');
    }
    showSection('wizard');
}
