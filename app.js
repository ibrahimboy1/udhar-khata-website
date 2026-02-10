// ============================================
// HISAB BANAO - MAIN APPLICATION JAVASCRIPT
// Navigation, Language Switching, Animations
// ============================================

// State
let currentLang = 'en';
let currentView = 'home';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Initialize Application
function initApp() {
    // Load saved language
    const savedLang = localStorage.getItem('hisab-lang') || 'en';
    setLanguage(savedLang);

    // Populate language lists
    populateLanguages();

    // Setup scroll animations
    setupScrollAnimations();

    // Close dropdowns on outside click
    document.addEventListener('click', handleOutsideClick);

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

// ============================================
// NAVIGATION
// ============================================

function navigateTo(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`view-${view}`);
    if (targetView) {
        targetView.classList.add('active');
        currentView = view;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update nav links
        updateNavLinks(view);

        // Re-trigger scroll animations
        setTimeout(() => setupScrollAnimations(), 100);
    }

    // Close mobile menu
    closeMobileMenu();
}

function updateNavLinks(activeView) {
    // Desktop nav
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkView = link.getAttribute('data-view');
        if (linkView === activeView) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile nav
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        const linkView = link.getAttribute('data-view');
        if (linkView === activeView) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================

function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');

    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ============================================
// LANGUAGE SYSTEM
// ============================================

function populateLanguages() {
    const langList = document.getElementById('langList');
    const mobileLangGrid = document.getElementById('mobileLangGrid');

    if (langList) {
        langList.innerHTML = LANGUAGES.map(lang => `
            <button class="lang-item ${lang.code === currentLang ? 'active' : ''}" 
                    onclick="setLanguage('${lang.code}')">
                <span class="lang-code">${lang.code.toUpperCase()}</span>
                <span class="lang-name">${lang.native}</span>
                <svg class="lang-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
        `).join('');
    }

    if (mobileLangGrid) {
        mobileLangGrid.innerHTML = LANGUAGES.map(lang => `
            <button class="mobile-lang-item ${lang.code === currentLang ? 'active' : ''}" 
                    onclick="setLanguage('${lang.code}')">
                <span class="code">${lang.code.toUpperCase()}</span>
                <span class="name">${lang.native}</span>
            </button>
        `).join('');
    }
}

function setLanguage(langCode) {
    currentLang = langCode;
    localStorage.setItem('hisab-lang', langCode);

    const lang = LANGUAGES.find(l => l.code === langCode);
    const translations = TRANSLATIONS[langCode] || TRANSLATIONS.en;

    // Update current language display
    const langCodeEl = document.getElementById('currentLangCode');
    if (langCodeEl) {
        langCodeEl.textContent = langCode.toUpperCase();
    }

    // Set RTL direction
    const isRTL = lang && lang.rtl;
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', langCode);

    // Update font family for specific languages
    if (['ar', 'fa', 'ps', 'ks', 'sd'].includes(langCode)) {
        document.body.style.fontFamily = 'var(--font-arabic)';
    } else if (langCode === 'ur') {
        document.body.style.fontFamily = 'var(--font-urdu)';
    } else if (langCode === 'hi') {
        document.body.style.fontFamily = 'var(--font-hindi)';
    } else {
        document.body.style.fontFamily = 'var(--font-main)';
    }

    // Update all translatable elements
    applyTranslations(translations);

    // Update active states
    document.querySelectorAll('.lang-item, .mobile-lang-item').forEach(item => {
        const itemCode = item.querySelector('.lang-code, .code')?.textContent?.toLowerCase();
        item.classList.toggle('active', itemCode === langCode);
    });

    // Close language menu
    closeLangMenu();
    closeMobileMenu();
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const value = getNestedValue(translations, key);
        if (value) {
            el.textContent = value;
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function toggleLangMenu() {
    const langMenu = document.getElementById('langMenu');
    langMenu.classList.toggle('open');
}

function closeLangMenu() {
    const langMenu = document.getElementById('langMenu');
    if (langMenu) {
        langMenu.classList.remove('open');
    }
}

function filterLanguages() {
    const searchInput = document.getElementById('langSearchInput');
    const query = searchInput.value.toLowerCase();

    document.querySelectorAll('#langList .lang-item').forEach(item => {
        const name = item.querySelector('.lang-name').textContent.toLowerCase();
        const code = item.querySelector('.lang-code').textContent.toLowerCase();
        const visible = name.includes(query) || code.includes(query);
        item.style.display = visible ? 'flex' : 'none';
    });
}

function filterMobileLanguages() {
    const searchInput = document.getElementById('mobileLangSearchInput');
    const query = searchInput.value.toLowerCase();

    document.querySelectorAll('#mobileLangGrid .mobile-lang-item').forEach(item => {
        const name = item.querySelector('.name').textContent.toLowerCase();
        const code = item.querySelector('.code').textContent.toLowerCase();
        const visible = name.includes(query) || code.includes(query);
        item.style.display = visible ? 'block' : 'none';
    });
}

// ============================================
// VERSION DROPDOWN
// ============================================

function toggleVersions() {
    const dropdown = document.querySelector('.version-dropdown');
    dropdown.classList.toggle('open');
}

function closeVersionDropdown() {
    const dropdown = document.querySelector('.version-dropdown');
    if (dropdown) {
        dropdown.classList.remove('open');
    }
}

// ============================================
// CONTACT FORM
// ============================================

function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Create mailto link
    const subject = encodeURIComponent(`Support Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:ibrahimtayyab969@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success overlay (if on home page)
    const successOverlay = document.getElementById('contactSuccess');
    if (successOverlay) {
        successOverlay.classList.add('show');
    }
}

function closeContactSuccess() {
    const successOverlay = document.getElementById('contactSuccess');
    if (successOverlay) {
        successOverlay.classList.remove('show');
    }

    // Reset form
    const form = document.getElementById('contactForm');
    if (form) {
        form.reset();
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// EVENT HANDLERS
// ============================================

function handleOutsideClick(event) {
    // Close language dropdown
    const langDropdown = document.querySelector('.lang-dropdown');
    const langMenu = document.getElementById('langMenu');
    if (langDropdown && langMenu && !langDropdown.contains(event.target)) {
        langMenu.classList.remove('open');
    }

    // Close version dropdown
    const versionDropdown = document.querySelector('.version-dropdown');
    if (versionDropdown && !versionDropdown.contains(event.target)) {
        versionDropdown.classList.remove('open');
    }
}

function handleKeyboard(event) {
    // ESC key closes menus
    if (event.key === 'Escape') {
        closeLangMenu();
        closeVersionDropdown();
        closeMobileMenu();
        closeContactSuccess();
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll to element
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// PARALLAX EFFECT (Optional)
// ============================================

window.addEventListener('scroll', debounce(() => {
    const scrollY = window.scrollY;

    // Parallax for blobs
    document.querySelectorAll('.blob').forEach((blob, index) => {
        const speed = 0.05 * (index + 1);
        blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
}, 10));

// ============================================
// PHONE MOCKUP ANIMATION
// ============================================

// Add tilt effect on mouse move (desktop only)
if (window.matchMedia('(min-width: 768px)').matches) {
    const phoneFrame = document.querySelector('.phone-frame');

    if (phoneFrame) {
        document.addEventListener('mousemove', (e) => {
            const rect = phoneFrame.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) / 50;
            const deltaY = (e.clientY - centerY) / 50;

            phoneFrame.style.transform = `rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            phoneFrame.style.transform = 'rotateX(5deg) rotateY(-5deg)';
        });
    }
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images if any
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// ============================================
// SERVICE WORKER & PWA
// ============================================

// PWA State
let deferredPrompt = null;
let swRegistration = null;
let currentAppVersion = null;

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('[PWA] Service Worker registered:', registration.scope);
                swRegistration = registration;

                // Check for updates on registration
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('[PWA] New service worker installing...');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // New update available
                                console.log('[PWA] New version available!');
                                showUpdateBanner();
                            } else {
                                // First install
                                console.log('[PWA] Content cached for offline use.');
                            }
                        }
                    });
                });

                // Check for updates periodically (every 1 hour)
                setInterval(() => {
                    registration.update();
                }, 60 * 60 * 1000);
            })
            .catch(error => {
                console.log('[PWA] Service Worker registration failed:', error);
            });

        // Listen for messages from service worker
        navigator.serviceWorker.addEventListener('message', (event) => {
            const { data } = event;

            if (data.type === 'SW_ACTIVATED') {
                console.log('[PWA] Service worker activated, version:', data.version);
                currentAppVersion = data.version;
            }

            if (data.type === 'VERSION_INFO') {
                currentAppVersion = data.version;
                console.log('[PWA] Current version:', currentAppVersion);
            }
        });

        // Get current version from SW
        navigator.serviceWorker.ready.then(registration => {
            if (registration.active) {
                registration.active.postMessage({ type: 'GET_VERSION' });
            }
        });
    });
}

// ============================================
// PWA INSTALL PROMPT
// ============================================

// Capture install prompt event
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('[PWA] Install prompt captured');
    // Prevent default mini-infobar
    e.preventDefault();
    // Store event for later
    deferredPrompt = e;
    // Show install banner after a delay
    setTimeout(() => {
        showInstallBanner();
    }, 3000);
});

// Show install banner
function showInstallBanner() {
    // Don't show if already installed or dismissed recently
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
        const dismissedTime = parseInt(dismissed, 10);
        const daysPassed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
        if (daysPassed < 7) {
            return; // Don't show for 7 days after dismiss
        }
    }

    const banner = document.getElementById('pwa-install-banner');
    if (banner && deferredPrompt) {
        banner.style.display = 'block';
    }
}

// Handle install button click
document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('pwa-install-btn');
    const installClose = document.getElementById('pwa-install-close');
    const installBanner = document.getElementById('pwa-install-banner');

    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!deferredPrompt) {
                console.log('[PWA] No install prompt available');
                return;
            }

            // Show browser install prompt
            deferredPrompt.prompt();

            // Wait for user choice
            const { outcome } = await deferredPrompt.userChoice;
            console.log('[PWA] User response:', outcome);

            // Clear the stored prompt
            deferredPrompt = null;

            // Hide banner
            if (installBanner) {
                installBanner.style.display = 'none';
            }

            if (outcome === 'accepted') {
                console.log('[PWA] User accepted installation');
            }
        });
    }

    if (installClose) {
        installClose.addEventListener('click', () => {
            if (installBanner) {
                installBanner.style.display = 'none';
            }
            // Remember dismissal
            localStorage.setItem('pwa-install-dismissed', Date.now().toString());
        });
    }
});

// Track when app is installed
window.addEventListener('appinstalled', (e) => {
    console.log('[PWA] App was installed');
    // Hide install banner
    const banner = document.getElementById('pwa-install-banner');
    if (banner) {
        banner.style.display = 'none';
    }
    deferredPrompt = null;
});

// ============================================
// PWA UPDATE NOTIFICATION
// ============================================

function showUpdateBanner() {
    const banner = document.getElementById('pwa-update-banner');
    if (banner) {
        banner.style.display = 'block';
    }
}

// Handle update button click
document.addEventListener('DOMContentLoaded', () => {
    const updateBtn = document.getElementById('pwa-update-btn');
    const updateClose = document.getElementById('pwa-update-close');
    const updateBanner = document.getElementById('pwa-update-banner');

    if (updateBtn) {
        updateBtn.addEventListener('click', () => {
            // Tell waiting SW to skip waiting and take over
            if (swRegistration && swRegistration.waiting) {
                swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
            }

            // Reload to get new version
            window.location.reload();
        });
    }

    if (updateClose) {
        updateClose.addEventListener('click', () => {
            if (updateBanner) {
                updateBanner.style.display = 'none';
            }
        });
    }
});

// Listen for controlling SW change (update applied)
navigator.serviceWorker?.addEventListener('controllerchange', () => {
    console.log('[PWA] New service worker took control');
    // Optionally reload
    // window.location.reload();
});

// ============================================
// OFFLINE DETECTION
// ============================================

function updateOnlineStatus() {
    const indicator = document.getElementById('offline-indicator');
    if (!indicator) return;

    if (!navigator.onLine) {
        indicator.style.display = 'flex';
    } else {
        indicator.style.display = 'none';
    }
}

window.addEventListener('online', () => {
    console.log('[PWA] Back online');
    updateOnlineStatus();

    // Check for updates when back online
    if (swRegistration) {
        swRegistration.update();
    }
});

window.addEventListener('offline', () => {
    console.log('[PWA] Going offline');
    updateOnlineStatus();
});

// Check initial state
document.addEventListener('DOMContentLoaded', () => {
    updateOnlineStatus();
});

// ============================================
// PWA UTILITIES
// ============================================

// Check if running as installed PWA
function isRunningAsPWA() {
    return window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true ||
        document.referrer.includes('android-app://');
}

// Get current version
function getAppVersion() {
    return currentAppVersion || 'Unknown';
}

// Force check for updates
function checkForUpdates() {
    if (swRegistration) {
        swRegistration.update()
            .then(() => console.log('[PWA] Update check triggered'))
            .catch(err => console.log('[PWA] Update check failed:', err));
    }
}

// Expose utilities globally
window.PWA = {
    isInstalled: isRunningAsPWA,
    getVersion: getAppVersion,
    checkForUpdates: checkForUpdates
};
