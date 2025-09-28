
        document.addEventListener('DOMContentLoaded', function() {
            // Status update functionality
            const updateStatusBtn = document.getElementById('updateStatusBtn');
            const finalUpdateStatusBtn = document.getElementById('finalUpdateStatusBtn');
            const statusSelect = document.getElementById('statusSelect');
            const modalOrderStatus = document.getElementById('modalOrderStatus');
            const statusUpdateSuccess = document.getElementById('statusUpdateSuccess');
            const tableStatusElements = document.querySelectorAll('td [data-status]');
            
            // Handle status update button click
            if (updateStatusBtn) {
                updateStatusBtn.addEventListener('click', function() {
                    updateOrderStatus();
                });
            }
            
            // Handle final update button click
            if (finalUpdateStatusBtn) {
                finalUpdateStatusBtn.addEventListener('click', function() {
                    updateOrderStatus();
                });
            }
            
            // Common function to update order status
            function updateOrderStatus() {
                const newStatus = statusSelect.value;
                let badgeClass = '';
                
                // Determine badge class based on status
                switch(newStatus) {
                    case 'processing':
                        badgeClass = 'bg-warning';
                        break;
                    case 'shipped':
                        badgeClass = 'bg-primary';
                        break;
                    case 'completed':
                        badgeClass = 'bg-success';
                        break;
                    case 'cancelled':
                        badgeClass = 'bg-danger';
                        break;
                }
                
                // Update modal status display
                modalOrderStatus.className = `badge ${badgeClass}`;
                modalOrderStatus.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
                
                // Update the status in the table
                tableStatusElements.forEach(element => {
                    if (element.closest('tr').querySelector('.modal-title').textContent === 'Order #ORD-2346') {
                        element.className = `badge ${badgeClass}`;
                        element.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
                        element.setAttribute('data-status', newStatus);
                    }
                });
                
                // Show success message
                statusUpdateSuccess.classList.remove('d-none');
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    statusUpdateSuccess.classList.add('d-none');
                }, 3000);
                
                // Close the modal after successful update
                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('orderDetailsModal'));
                    modal.hide();
                }, 1500);
            }
            
            // Reset status update message when modal opens
            const orderModal = document.getElementById('orderDetailsModal');
            if (orderModal) {
                orderModal.addEventListener('show.bs.modal', function() {
                    statusUpdateSuccess.classList.add('d-none');
                });
            }
        });
    