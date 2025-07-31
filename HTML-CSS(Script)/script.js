// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // ThriveStack tracking - Mobile menu interaction
            if (window.ThriveStack) {
                window.ThriveStack.track('mobile_menu_toggled', {
                    action: navMenu.classList.contains('active') ? 'opened' : 'closed',
                    page: getCurrentPage()
                });
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // ThriveStack tracking - Navigation scroll
                if (window.ThriveStack) {
                    window.ThriveStack.track('navigation_scroll', {
                        target_section: targetId.replace('#', ''),
                        link_text: this.textContent.trim(),
                        page: getCurrentPage()
                    });
                }
            }
        });
    });

    // Navbar background on scroll and scroll tracking
    let scrollTracked = false;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        
        // ThriveStack tracking - Scroll depth
        const scrollPercentage = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercentage > 25 && !scrollTracked) {
            scrollTracked = true;
            if (window.ThriveStack) {
                window.ThriveStack.track('scroll_depth', {
                    percentage: 25,
                    page: getCurrentPage()
                });
            }
        } else if (scrollPercentage > 50 && scrollTracked) {
            scrollTracked = false;
            if (window.ThriveStack) {
                window.ThriveStack.track('scroll_depth', {
                    percentage: 50,
                    page: getCurrentPage()
                });
            }
        } else if (scrollPercentage > 75 && !scrollTracked) {
            scrollTracked = true;
            if (window.ThriveStack) {
                window.ThriveStack.track('scroll_depth', {
                    percentage: 75,
                    page: getCurrentPage()
                });
            }
        }
    });

    // Signup form validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (!name || !email || !password) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }

            if (password.length < 8) {
                showNotification('Password must be at least 8 characters long', 'error');
                return;
            }

            // ThriveStack tracking - Lead capture
            if (window.ThriveStack) {
                window.ThriveStack.track('lead_captured', {
                    email: email,
                    name: name,
                    source: 'signup_form',
                    page: 'signup'
                });
            }

            // Simulate form submission
            showNotification('Account created successfully! Redirecting to dashboard...', 'success');
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);
        });
    }

    // Password toggle functionality
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
            
            // ThriveStack tracking - Password toggle
            if (window.ThriveStack) {
                window.ThriveStack.track('password_toggle', {
                    action: input.type === 'text' ? 'show' : 'hide',
                    page: getCurrentPage()
                });
            }
        });
    });

    // Dashboard charts
    if (document.querySelector('#performanceChart')) {
        const performanceCtx = document.getElementById('performanceChart').getContext('2d');
        const performanceChart = new Chart(performanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Email Opens',
                    data: [65, 59, 80, 81, 56, 55],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Click Rate',
                    data: [28, 48, 40, 19, 86, 27],
                    borderColor: '#fbbf24',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    if (document.querySelector('#trafficChart')) {
        const trafficCtx = document.getElementById('trafficChart').getContext('2d');
        const trafficChart = new Chart(trafficCtx, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Social', 'Email', 'Organic'],
                datasets: [{
                    data: [30, 25, 25, 20],
                    backgroundColor: [
                        '#6366f1',
                        '#fbbf24',
                        '#10b981',
                        '#ef4444'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }

    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                statsObserver.unobserve(entry.target);
                
                // ThriveStack tracking - Stats viewed
                if (window.ThriveStack) {
                    window.ThriveStack.track('stats_viewed', {
                        stat_value: entry.target.textContent,
                        page: getCurrentPage()
                    });
                }
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    const cardsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // ThriveStack tracking - Feature card viewed
                if (window.ThriveStack) {
                    const featureTitle = entry.target.querySelector('h3')?.textContent;
                    window.ThriveStack.track('feature_viewed', {
                        feature_name: featureTitle,
                        page: getCurrentPage()
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardsObserver.observe(card);
    });

    // Pricing cards hover effect
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            
            // ThriveStack tracking - Pricing card hover
            if (window.ThriveStack) {
                const planName = this.querySelector('h3')?.textContent;
                window.ThriveStack.track('pricing_card_hover', {
                    plan_name: planName,
                    is_featured: this.classList.contains('featured'),
                    page: getCurrentPage()
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // ThriveStack tracking - Contact form submission
            if (window.ThriveStack) {
                window.ThriveStack.track('contact_submitted', {
                    email: email,
                    name: name,
                    message: message,
                    source: 'contact_form',
                    page: getCurrentPage()
                });
            }

            showNotification('Message sent successfully!', 'success');
            this.reset();
        });
    }
    
    // Social media link tracking
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.ThriveStack) {
                const platform = this.querySelector('i').className.includes('facebook') ? 'facebook' :
                               this.querySelector('i').className.includes('twitter') ? 'twitter' :
                               this.querySelector('i').className.includes('linkedin') ? 'linkedin' :
                               this.querySelector('i').className.includes('instagram') ? 'instagram' : 'unknown';
                
                window.ThriveStack.track('social_click', {
                    platform: platform,
                    page: getCurrentPage()
                });
            }
        });
    });
});

// Utility functions
function getCurrentPage() {
    if (window.location.pathname.includes('signup')) return 'signup';
    if (window.location.pathname.includes('dashboard')) return 'dashboard';
    return 'landing';
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const suffix = element.textContent.replace(/[\d]/g, '');
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Add loading animation and ThriveStack page tracking
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // ThriveStack page view tracking
    if (window.ThriveStack) {
        window.ThriveStack.track('page_view', {
            page: getCurrentPage(),
            url: window.location.href,
            title: document.title,
            referrer: document.referrer,
            user_agent: navigator.userAgent
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Time spent tracking
let startTime = Date.now();
let timeTracked = false;

window.addEventListener('beforeunload', function() {
    if (window.ThriveStack && !timeTracked) {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        window.ThriveStack.track('time_spent', {
            seconds: timeSpent,
            page: getCurrentPage()
        });
        timeTracked = true;
    }
});

// Exit intent tracking
let exitIntentTracked = false;
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentTracked && window.ThriveStack) {
        exitIntentTracked = true;
        window.ThriveStack.track('exit_intent', {
            page: getCurrentPage(),
            time_spent: Math.round((Date.now() - startTime) / 1000)
        });
    }
});

// Add hover effects to buttons and ThriveStack click tracking
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // ThriveStack button click tracking
        button.addEventListener('click', function() {
            if (window.ThriveStack) {
                const buttonText = this.textContent.trim();
                const buttonType = this.classList.contains('btn-primary') ? 'primary' : 
                                 this.classList.contains('btn-secondary') ? 'secondary' : 'outline';
                
                window.ThriveStack.track('button_clicked', {
                    button_text: buttonText,
                    button_type: buttonType,
                    page: getCurrentPage(),
                    href: this.getAttribute('href') || 'none'
                });
            }
        });
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect if on landing page
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
}); 