// JavaScript to handle scroll and mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Function to handle scroll effect on navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // Function to toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.getElementsByTagName('a');
    
    // Use a classic for loop for maximum linter compatibility
    for (let i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener('click', function() {
            // Check if the menu is open before closing it
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});