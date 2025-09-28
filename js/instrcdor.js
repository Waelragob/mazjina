// Initialize charts and button functionality
document.addEventListener('DOMContentLoaded', function() {
// Initialize charts
const activityCtx = document.getElementById('studentActivityChart').getContext('2d');
new Chart(activityCtx, {
type: 'line',
data: {
labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
datasets: [{
label: 'Student Activity',
data: [12, 15, 10, 20, 18, 25, 22],
borderColor: '#4e73df',
backgroundColor: 'rgba(78, 115, 223, 0.1)',
tension: 0.3,
fill: true
}]
},
options: {
responsive: true,
maintainAspectRatio: false,
plugins: {
legend: {
display: false
}
},
scales: {
y: {
beginAtZero: true,
grid: {
color: 'rgba(0,0,0,0.05)'
}
},
x: {
grid: {
display: false
}
}
}
}
});

// Make all buttons functional
// View buttons in the table
document.querySelectorAll('.btn-outline-primary').forEach(button => {
button.addEventListener('click', function() {
const row = this.closest('tr');
const student = row.children[0].textContent.trim();
const lesson = row.children[1].textContent.trim();
const progress = row.children[2].querySelector('.text-muted').textContent.trim();
const timeSpent = row.children[3].textContent.trim();
const lastActive = row.children[4].textContent.trim();

// Populate modal
document.getElementById('modalStudentName').textContent = student;
document.getElementById('modalLesson').textContent = lesson;
document.getElementById('modalProgress').textContent = progress;
document.getElementById('modalTimeSpent').textContent = timeSpent;
document.getElementById('modalLastActive').textContent = lastActive;

// Show modal
const modal = new bootstrap.Modal(document.getElementById('studentModal'));
modal.show();
});
});

// Schedule button functionality
document.querySelector('.btn-outline-primary.me-2').addEventListener('click', function() {
alert('Opening the schedule interface...');
});

// New Announcement button functionality
document.querySelector('.btn-primary').addEventListener('click', function() {
alert('Opening the new announcement form...');
});
});