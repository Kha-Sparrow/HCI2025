let currentSubject = '';
let materialType = '';

function showMaterials(subject) {
    currentSubject = subject;
    document.getElementById('subject-title').textContent = currentSubject;
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('materials-section').style.display = 'block';
    document.getElementById('sidebar-content-wrapper').style.display = 'none';
    document.getElementById('back-button').style.display = 'none';
}

function showMaterialType(type) {
    materialType = type;
    document.getElementById('materials-section').style.display = 'none';
    document.getElementById('sidebar-content-wrapper').style.display = 'flex'; 
    const materialList = document.getElementById('material-list');
    
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

    document.getElementById('back-button').style.display = 'inline';
}

function showContent(material) {
    const contentWindow = document.getElementById('content-window');
    contentWindow.innerHTML = `<h3>${materialType}: ${material}</h3><p>This is the content for ${material}.</p>`;
}

function toggleSection(sectionId) {
    const section = document.getElementById(`section-${sectionId}`);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

function goBackToSubjects() {
    document.getElementById('subjects-section').style.display = 'block'; 
    document.getElementById('sidebar-content-wrapper').style.display = 'none';
    document.getElementById('materials-section').style.display = 'none';
    document.getElementById('subject-title').textContent = 'Study Materials';
    document.getElementById('back-button').style.display = 'none';
}
