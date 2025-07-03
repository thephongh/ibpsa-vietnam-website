/**
 * IBPSA Vietnam Website JavaScript
 * Main script for interactive components and functionality
 */

(function() {
    'use strict';

    // DOM ready function
    function domReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                
                // Toggle aria-expanded
                mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle menu visibility
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('active');
                
                // Toggle icons
                if (menuIcon && closeIcon) {
                    menuIcon.classList.toggle('hidden');
                    closeIcon.classList.toggle('hidden');
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('active');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    
                    if (menuIcon && closeIcon) {
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                    }
                }
            });

            // Close mobile menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('active');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    mobileMenuButton.focus();
                    
                    if (menuIcon && closeIcon) {
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                    }
                }
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Focus management for accessibility
                    target.focus();
                }
            });
        });
    }

    // Search functionality (for list pages)
    function initSearch() {
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const sortFilter = document.getElementById('sort-filter');
        const contentGrid = document.getElementById('content-grid');
        const resultsCount = document.getElementById('results-count');
        const noResults = document.getElementById('no-results');

        if (!searchInput || !contentGrid) return;

        const contentItems = Array.from(document.querySelectorAll('.content-item'));

        function filterAndSort() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const selectedCategory = categoryFilter ? categoryFilter.value : '';
            const sortOption = sortFilter ? sortFilter.value : 'date-desc';

            let filteredItems = contentItems.filter(item => {
                const matchesSearch = searchTerm === '' || 
                    item.dataset.title.includes(searchTerm) || 
                    item.dataset.content.includes(searchTerm);
                const matchesCategory = selectedCategory === '' || 
                    item.dataset.category === selectedCategory;
                return matchesSearch && matchesCategory;
            });

            // Sort items
            filteredItems.sort((a, b) => {
                switch(sortOption) {
                    case 'date-asc':
                        return new Date(a.dataset.date) - new Date(b.dataset.date);
                    case 'date-desc':
                        return new Date(b.dataset.date) - new Date(a.dataset.date);
                    case 'title-asc':
                        return a.dataset.title.localeCompare(b.dataset.title);
                    case 'title-desc':
                        return b.dataset.title.localeCompare(a.dataset.title);
                    default:
                        return new Date(b.dataset.date) - new Date(a.dataset.date);
                }
            });

            // Hide all items
            contentItems.forEach(item => {
                item.style.display = 'none';
                item.setAttribute('aria-hidden', 'true');
            });

            // Show filtered items
            filteredItems.forEach(item => {
                item.style.display = 'block';
                item.setAttribute('aria-hidden', 'false');
            });

            // Update results count
            if (resultsCount) {
                resultsCount.textContent = filteredItems.length;
            }

            // Show/hide no results message
            if (noResults) {
                if (filteredItems.length === 0) {
                    noResults.style.display = 'block';
                    noResults.setAttribute('aria-hidden', 'false');
                } else {
                    noResults.style.display = 'none';
                    noResults.setAttribute('aria-hidden', 'true');
                }
            }

            if (contentGrid) {
                contentGrid.style.display = filteredItems.length === 0 ? 'none' : 'grid';
            }

            // Announce results to screen readers
            announceResults(filteredItems.length);
        }

        // Debounce search input
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(filterAndSort, 300);
        });

        if (categoryFilter) {
            categoryFilter.addEventListener('change', filterAndSort);
        }

        if (sortFilter) {
            sortFilter.addEventListener('change', filterAndSort);
        }
    }

    // Announce search results to screen readers
    function announceResults(count) {
        const announcement = count === 1 ? 
            `${count} result found` : 
            `${count} results found`;
        
        // Create or update aria-live region
        let liveRegion = document.getElementById('search-results-announcement');
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.id = 'search-results-announcement';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            document.body.appendChild(liveRegion);
        }
        
        liveRegion.textContent = announcement;
    }

    // Form validation and enhancement
    function initForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            // Add novalidate to prevent browser default validation
            form.setAttribute('novalidate', '');
            
            // Custom validation on submit
            form.addEventListener('submit', function(e) {
                if (!validateForm(this)) {
                    e.preventDefault();
                }
            });

            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
            });
        });
    }

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute('required');
        
        // Remove existing error state
        field.classList.remove('border-red-500');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        
        // Required field validation
        if (required && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Phone validation
        if (type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
            if (!phoneRegex.test(value)) {
                showFieldError(field, 'Please enter a valid phone number');
                return false;
            }
        }
        
        return true;
    }

    function showFieldError(field, message) {
        field.classList.add('border-red-500');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-600 text-sm mt-1';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');
        
        field.parentNode.appendChild(errorDiv);
    }

    // Lazy loading for images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Initialize tooltips
    function initTooltips() {
        const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
        
        tooltipTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', showTooltip);
            trigger.addEventListener('mouseleave', hideTooltip);
            trigger.addEventListener('focus', showTooltip);
            trigger.addEventListener('blur', hideTooltip);
        });
    }

    function showTooltip(e) {
        const trigger = e.target;
        const text = trigger.getAttribute('data-tooltip');
        
        if (!text) return;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip absolute bg-gray-900 text-white text-sm px-2 py-1 rounded shadow-lg z-50';
        tooltip.textContent = text;
        tooltip.id = 'tooltip';
        
        document.body.appendChild(tooltip);
        
        // Position tooltip
        const rect = trigger.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
    }

    function hideTooltip() {
        const tooltip = document.getElementById('tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    // Scroll to top functionality
    function initScrollToTop() {
        const scrollButton = document.getElementById('scroll-to-top');
        
        if (scrollButton) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollButton.classList.remove('hidden');
                } else {
                    scrollButton.classList.add('hidden');
                }
            });
            
            scrollButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Print functionality
    function initPrint() {
        const printButtons = document.querySelectorAll('[data-print]');
        
        printButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.print();
            });
        });
    }

    // Accessibility improvements
    function initAccessibility() {
        // Skip links functionality
        const skipLinks = document.querySelectorAll('.skip-link');
        skipLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.focus();
                }
            });
        });

        // Improve focus indicators
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('using-keyboard');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('using-keyboard');
        });
    }

    // Analytics and tracking (placeholder)
    function initAnalytics() {
        // Track page views
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_TRACKING_ID', {
                page_title: document.title,
                page_location: window.location.href
            });
        }

        // Track downloads
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href.match(/\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip)$/i)) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'download', {
                        event_category: 'engagement',
                        event_label: link.href
                    });
                }
            }
        });
    }

    // Performance monitoring
    function initPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Monitor First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
        }
    }

    // Error handling
    function initErrorHandling() {
        window.addEventListener('error', function(e) {
            console.error('JavaScript error:', e.error);
            // You could send errors to an analytics service here
        });

        window.addEventListener('unhandledrejection', function(e) {
            console.error('Unhandled promise rejection:', e.reason);
            // You could send errors to an analytics service here
        });
    }

    // Initialize all functionality when DOM is ready
    domReady(function() {
        initMobileMenu();
        initSmoothScrolling();
        initSearch();
        initForms();
        initLazyLoading();
        initTooltips();
        initScrollToTop();
        initPrint();
        initAccessibility();
        initAnalytics();
        initPerformanceMonitoring();
        initErrorHandling();

        console.log('IBPSA Vietnam website initialized');
    });

})();