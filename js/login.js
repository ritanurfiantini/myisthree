// Tab Switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding content
            const tabName = button.getAttribute('data-tab');
            const tabContent = document.querySelector(`[data-tab="${tabName}"]`);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
}

// Toggle Password Visibility
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const toggleIcon = event.target;

    if (field.type === 'password') {
        field.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        field.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Form Submission Handlers
const intranetForm = document.getElementById('intranetForm');
if (intranetForm) {
    intranetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Intranet Login submitted');
        // Add your login logic here
        alert('Fitur login akan dihubungkan ke sistem backend');
    });
}

const b2bLoginForm = document.getElementById('b2bLoginForm');
if (b2bLoginForm) {
    b2bLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('B2B Login submitted');
        // Add your login logic here
        alert('Fitur login akan dihubungkan ke sistem backend');
    });
}

const b2bRegisterForm = document.getElementById('b2bRegisterForm');
if (b2bRegisterForm) {
    b2bRegisterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('B2B Register submitted');
        // Add your registration logic here
        alert('Pendaftaran akan diproses oleh sistem backend');
    });
}

// Add smooth animations on page load
window.addEventListener('load', () => {
    const loginBox = document.querySelector('.login-box');
    if (loginBox) {
        loginBox.style.animation = 'slideUp 0.6s ease';
    }

    const infoPanel = document.querySelector('.info-panel');
    if (infoPanel) {
        infoPanel.style.animation = 'slideIn 0.6s ease';
    }
});

// CSS Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);