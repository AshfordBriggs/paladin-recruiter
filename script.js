/**
 * Paladin Recruiter - Main JavaScript
 */

(function() {
    'use strict';

    // Mobile Navigation Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // Header scroll effect - add shadow on scroll
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 20) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScrollTop = scrollTop;
    });

    // Smooth scroll for anchor links (enhanced)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for links that just go to "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show success message if redirected back after form submission
    const contactForm = document.getElementById('contactForm');
    const params = new URLSearchParams(window.location.search);

    if (params.get('submitted') === 'true' && contactForm) {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success-message';
        successDiv.innerHTML = '<h3>We\'ve received your request!</h3><p>An agent will reach out to you shortly.</p>';
        successDiv.style.cssText = 'padding: 2rem; margin-bottom: 2rem; border-radius: 8px; background-color: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; text-align: center;';
        successDiv.querySelector('h3').style.cssText = 'margin: 0 0 0.5rem 0; font-size: 1.25rem;';
        successDiv.querySelector('p').style.cssText = 'margin: 0; font-size: 1rem;';
        contactForm.parentNode.insertBefore(successDiv, contactForm);
        contactForm.style.display = 'none';

        // Clean up the URL
        window.history.replaceState({}, '', window.location.pathname + '#contact');
    }

    // Form validation enhancement
    const formInputs = contactForm?.querySelectorAll('input, select, textarea');

    if (formInputs) {
        formInputs.forEach(input => {
            // Add real-time validation feedback
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                } else if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.value)) {
                        this.style.borderColor = '#ef4444';
                    } else {
                        this.style.borderColor = '#6ee7b7';
                    }
                } else if (this.value) {
                    this.style.borderColor = '#6ee7b7';
                }
            });

            // Reset border color on focus
            input.addEventListener('focus', function() {
                this.style.borderColor = '#2563eb';
            });
        });
    }

    // Keyboard accessibility - trap focus in mobile menu when open
    if (navMenu && mobileMenuToggle) {
        document.addEventListener('keydown', function(e) {
            if (!navMenu.classList.contains('active')) return;

            const focusableElements = navMenu.querySelectorAll(
                'a[href], button:not([disabled])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            // Close menu on Escape key
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.focus();
                return;
            }

            // Trap focus within menu
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }

})();
