
        // Add red asterisks to required fields in modals
        document.addEventListener('DOMContentLoaded', function() {
            // Add red asterisks for required fields
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
            
            // Form validation for add product
            const saveProductBtn = document.getElementById('saveProductBtn');
            if (saveProductBtn) {
                saveProductBtn.addEventListener('click', function() {
                    const form = document.getElementById('addProductForm');
                    if (!form.checkValidity()) {
                        form.classList.add('was-validated');
                        return;
                    }
                    // In real app: submit form data to server
                    alert('Product added successfully!');
                    form.reset();
                    form.classList.remove('was-validated');
                    bootstrap.Modal.getInstance(document.getElementById('addProductModal')).hide();
                });
            }
        });
    