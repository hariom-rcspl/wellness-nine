// Mobile sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const mobileToggle = document.getElementById('mobileToggle');

    // Mobile sidebar toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            sidebar.classList.toggle('show');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            if (sidebar && !sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && sidebar) {
            sidebar.classList.remove('show');
        }
    });

    // Sample interactive functionality for buttons
    document.addEventListener('click', function (e) {
        // Handle action buttons with loading states
        if (e.target.closest('.btn')) {
            const button = e.target.closest('.btn');
            const buttonText = button.textContent.trim();

            // Add loading state for specific buttons
            if (buttonText.includes('Create Appointment') ||
                buttonText.includes('Create Quotation') ||
                buttonText.includes('Save Changes') ||
                buttonText.includes('Update Password') ||
                buttonText.includes('Update Business Settings') ||
                buttonText.includes('Update Notifications')) {

                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
                button.disabled = true;

                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.disabled = false;

                    // Show success message
                    showNotification('Action completed successfully!', 'success');
                }, 1500);
            }
        }
    });

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Search functionality
function initializeSearch() {
    const searchInputs = document.querySelectorAll('input[placeholder*="Search"]');

    searchInputs.forEach(input => {
        input.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            const table = this.closest('.content-area').querySelector('table tbody');

            if (table) {
                const rows = table.querySelectorAll('tr');
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(searchTerm) ? '' : 'none';
                });
            }
        });
    });
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSearch);

// Filter functionality
function initializeFilters() {
    const filterSelects = document.querySelectorAll('select');

    filterSelects.forEach(select => {
        select.addEventListener('change', function () {
            // Add filter logic here based on your needs
            console.log('Filter changed:', this.value);
        });
    });
}

// Initialize filters when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFilters);