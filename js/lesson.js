
        document.addEventListener('DOMContentLoaded', function() {
            // Add red asterisks to required fields in modals
            const requiredFields = document.querySelectorAll('.modal [required]');
            requiredFields.forEach(field => {
                const label = field.previousElementSibling;
                if (label && label.classList.contains('form-label')) {
                    if (!label.querySelector('.text-danger')) {
                        const asterisk = document.createElement('span');
                        asterisk.className = 'text-danger';
                        asterisk.textContent = ' *';
                        label.appendChild(asterisk);
                    }
                }
            });
            
            // Delete confirmation logic
            const deleteCheck = document.getElementById('confirmDeleteCheck');
            const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
            
            if (deleteCheck && confirmDeleteBtn) {
                deleteCheck.addEventListener('change', function() {
                    confirmDeleteBtn.disabled = !this.checked;
                });
                
                confirmDeleteBtn.addEventListener('click', function() {
                    alert('Lesson has been deleted successfully!');
                    bootstrap.Modal.getInstance(document.getElementById('deleteLessonModal')).hide();
                });
            }
            
            // Lesson save button functionality
            const saveLessonBtn = document.getElementById('saveLessonBtn');
            if (saveLessonBtn) {
                saveLessonBtn.addEventListener('click', function() {
                    const form = document.getElementById('addLessonForm');
                    if (!form.checkValidity()) {
                        form.classList.add('was-validated');
                        return;
                    }
                    alert('Lesson published successfully!');
                    form.reset();
                    form.classList.remove('was-validated');
                    bootstrap.Modal.getInstance(document.getElementById('addLessonModal')).hide();
                });
            }
        });
    