let currentSubject = ''; 
let materialType = '';

// Function to show materials for the selected subject
function showMaterials(subject) {
    currentSubject = subject;
    document.getElementById('subject-title').textContent = currentSubject;
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('materials-section').style.display = 'block';
    document.getElementById('sidebar-content-wrapper').style.display = 'none'; // Hide sidebar
    document.getElementById('back-button').style.display = 'none'; // Hide back button initially
}

// Function to show specific type of materials
function showMaterialType(type) {
    materialType = type;
    document.getElementById('materials-section').style.display = 'none';
    document.getElementById('sidebar-content-wrapper').style.display = 'flex'; // Show sidebar
    const materialList = document.getElementById('material-list');

    // Simulate a list of related materials
    const materials = {
        Lecture: ['Lecture 1', 'Lecture 2', 'Lecture 3'],
        Exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3'],
        'Reference Materials': ['Reference 1', 'Reference 2', 'Reference 3']
    };

    materialList.innerHTML = '';
    materials[type].forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        li.onclick = function() { showContent(material); };
        materialList.appendChild(li);
    });

    document.getElementById('back-button').style.display = 'inline'; // Show back button when material type is selected
}

// Function to display content of the selected material
function showContent(material) {
    const contentWindow = document.getElementById('content-window');
    contentWindow.innerHTML = '<h3>' + materialType + ': ' + material + '</h3><p>This is the content for ' + material + '.</p>';
}

// Function to go back to the subject selection
function goBackToSubjects() {
    document.getElementById('subjects-section').style.display = 'block'; // Show subjects list
    document.getElementById('sidebar-content-wrapper').style.display = 'none'; // Hide sidebar
    document.getElementById('materials-section').style.display = 'none'; // Hide material type selection
    document.getElementById('subject-title').textContent = 'Study Materials'; // Reset title
    document.getElementById('back-button').style.display = 'none'; // Hide back button when returning
}

// Function to select a lesson
function selectLesson(lessonTitle) {
    // Hide lesson selection
    document.getElementById('lesson-selection').style.display = 'none';
    // Hide menubar
    document.getElementById('main-menubar').style.display = 'none'; // Hide the main menubar
    // Show lesson detail
    document.getElementById('lesson-detail').style.display = 'block';
    // Set lesson title
    document.getElementById('lesson-title').textContent = lessonTitle;
}

// Function to go back to the lesson selection
function goBack() {
    // Hide lesson detail
    document.getElementById('lesson-detail').style.display = 'none';
    // Show lesson selection
    document.getElementById('lesson-selection').style.display = 'block';
    // Show menubar
    document.getElementById('main-menubar').style.display = 'block'; // Show the main menubar
}

// Function to navigate to the home page
function goToHome() {
    window.location.href = 'home.html'; // Replace with your actual home page URL
}

// Function to navigate to the about page
function goToAbout() {
    window.location.href = 'about.html'; // Replace with your actual about page URL
}

// Function to navigate to a specific lab page
function goToLab(labNumber) {
    window.location.href = `lab${labNumber}.html`; // Navigate to the corresponding lab page
}

// Example: Function to handle ratings (if needed in the future)
function leaveRating() {
    alert('Thank you for your rating!'); // Placeholder for rating functionality
}

// Example: Function to track user progress (if needed in the future)
function trackProgress() {
    alert('Tracking your progress...'); // Placeholder for progress tracking functionality
}

// Example: Function to share lesson (if needed in the future)
function shareLesson() {
    alert('Sharing this lesson...'); // Placeholder for sharing functionality
}
