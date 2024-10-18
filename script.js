let currentSubject = '';
let materialType = '';

function showMaterials(subject) {
    currentSubject = subject;
    document.getElementById('subject-title').textContent = currentSubject;
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('materials-section').style.display = 'block';
}

function showMaterialType(type) {
    materialType = type;
    document.getElementById('materials-section').style.display = 'none';
    document.getElementById('sidebar-content-wrapper').style.display = 'flex';
    const materialList = document.getElementById('material-list');
    
    // Giả lập danh sách tài liệu liên quan
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
}

function showContent(material) {
    const contentWindow = document.getElementById('content-window');
    contentWindow.innerHTML = '<h3>' + materialType + ': ' + material + '</h3><p>This is the content for ' + material + '.</p>';
}

function goBack() {
    document.getElementById('sidebar-content-wrapper').style.display = 'none';
    document.getElementById('materials-section').style.display = 'block';
}
