
        // Sidebar toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const sidebarToggle = document.getElementById('sidebarToggle');
            const wrapper = document.getElementById('wrapper');
            
            // Toggle sidebar on button click
            sidebarToggle.addEventListener('click', function() {
                wrapper.classList.toggle('sidebar-toggled');
            });
            
            // Chart initialization
            const salesCtx = document.getElementById('salesChart').getContext('2d');
            new Chart(salesCtx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Revenue',
                        data: [1200, 1500, 1300, 1800, 1600, 2100, 1900],
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

            const categoryCtx = document.getElementById('categoryChart').getContext('2d');
            new Chart(categoryCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Guitars', 'Keyboards', 'Drums', 'Accessories'],
                    datasets: [{
                        data: [45, 25, 20, 10],
                        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
                        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9cc9', '#f5b921'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                boxWidth: 15
                            }
                        }
                    },
                    cutout: '70%'
                }
            });
        });
   document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    
    sidebarToggle.addEventListener('click', function() {
        // تغيير الأيقونة
        if (toggleIcon.classList.contains('bi-list')) {
            toggleIcon.classList.remove('bi-list');
            toggleIcon.classList.add('bi-x');
           this.style.position = "absolute";

// ثم تحديد الموضع الأفقي
this.style.left = '240px';
        } else {
            toggleIcon.classList.remove('bi-x');
            toggleIcon.classList.add('bi-list');
               this.style.position = "absolute";

// ثم تحديد الموضع الأفقي
this.style.left = '15px';
        }
    });
});