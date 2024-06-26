function switchImage() {
    var currentImage = document.getElementById('profile-image');
    var secondImage = document.getElementById('second-image');

    if (currentImage.style.display !== 'none') {
        currentImage.style.display = 'none';
        secondImage.style.display = 'block';
    } else {
        currentImage.style.display = 'block';
        secondImage.style.display = 'none';
    }
}

/*Header Up and Down Sys*/
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-100px'; // Adjust value as needed to hide the header
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

/*Light*/
document.addEventListener('mousemove', function(e) {
    const light = document.getElementById('light');
    if (light) {
        light.style.left = e.clientX + 'px';
        light.style.top = e.clientY + 'px';
    }
});

/*resets the page*/
document.addEventListener("DOMContentLoaded", function() {
    // Show loading screen
    const loadingScreen = document.getElementById('loading-screen');
    const headerLinks = document.querySelectorAll('header nav ul li');
    const greetingMessage = document.querySelector('.greeting');
    const introElements = document.querySelectorAll('#intro .name, #intro .tagline, #intro .cta-button');
    
    // Hide loading screen when page is fully loaded
    window.addEventListener('load', function() {
        loadingScreen.style.display = 'none';
        // Ensure the page scrolls to the top
        window.scrollTo(0, 0);

        // Animate header links in sequence
        headerLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('visible');
                // After the last header link animation
                if (index === headerLinks.length - 1) {
                    // Delay to ensure header animations finish
                    setTimeout(() => {
                        // Start the typing animation
                        greetingMessage.style.animationPlayState = 'running';
                    }, 300);
                }
            }, index * 300); // Delay each link
        });
    });

    // Listen for the end of the typing animation
    greetingMessage.addEventListener('animationend', () => {
        setTimeout(() => {
            introElements.forEach((element, idx) => {
                setTimeout(() => {
                    element.classList.add('intro-animation');
                }, idx * 300); // Stagger the intro animations
            });
        }, 300);
    });
});

// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const headerLinks = document.querySelectorAll('header nav ul li a');
    const skillLogos = document.querySelectorAll('.skill-logo');
    const skillsSection = document.getElementById('skills');

    // Function to animate skill logos when they come into view
    const animateSkills = () => {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            skillLogos.forEach((logo, index) => {
                setTimeout(() => {
                    logo.classList.add('fade-in');
                }, index * 100); // Stagger the animation by 100ms
            });
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', animateSkills);

    // Ensure sections animate when navigating via header links
    headerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            setTimeout(animateSkills, 100);
        });
    });

    // Initial call to animate skills on load
    animateSkills();
});

// CSS for fade-in animation
const style = document.createElement('style');
style.innerHTML = `
    .skill-logo {
        opacity: 0; /* Start hidden */
        transform: translateY(20px);
        transition: opacity 1.5s ease, transform 1.5s ease;
    }

    .skill-logo.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);


// Function to animate about me section
const animateAboutMe = () => {
    const aboutElements = document.querySelectorAll('.about-description.animated');
    aboutElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 100); // Stagger the animation by 100ms
        }
    });
};

// Add scroll event listener to trigger animation
window.addEventListener('scroll', animateAboutMe);

// Initial call to animate about me section on load
animateAboutMe();


// Function to animate about me section and images
const animateAboutMeAndImages = () => {
    const aboutElements = document.querySelectorAll('.about-description.animated');
    const images = document.querySelectorAll('.profile-image.animated');

    aboutElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 100); // Stagger the animation by 100ms
        }
    });

    images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setTimeout(() => {
                image.classList.add('pop-in');
            }, index * 100); // Stagger the animation by 100ms
        }
    });
};

// Add scroll event listener to trigger animation
window.addEventListener('scroll', animateAboutMeAndImages);

// Initial call to animate about me section and images on load
animateAboutMeAndImages();
// Function to animate sections and images
const animateSectionsAndImages = () => {
    const animatedSections = document.querySelectorAll('.animated-section');
    const animatedElements = document.querySelectorAll('.animated');

    animatedSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.querySelectorAll('.animated').forEach((element, index) => {
                setTimeout(() => {
                    if (element.classList.contains('profile-image')) {
                        element.classList.add('pop-in');
                    } else {
                        element.classList.add('fade-in');
                    }
                }, index * 100); // Stagger the animation by 100ms
            });
        }
    });
};

// Add scroll event listener to trigger animation
window.addEventListener('scroll', animateSectionsAndImages);

// Initial call to animate sections and images on load
animateSectionsAndImages();

window.addEventListener('load', function() {
    // Hide loading screen once content is loaded
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});



/*Loading Screen*/
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('#loading-screen');
    const loader = loadingScreen.querySelector('.loader');

    const svgContent = `
        <svg width="400" height="300" viewBox="0 0 524 403" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="logo">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" style="stop-color:#00bfae;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#008080;stop-opacity:1" />
                </linearGradient>
            </defs>
            <g class="layer">
                <title>Layer 1</title>
                <!-- First line -->
                <path d="m130,332l0,-269l130,129.01" fill="none" id="line1" stroke="#00bfae" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
                <!-- Second line -->
                <path d="m180,210.48l120,122.91l0,-176.87l90,0" fill="none" id="line2" stroke="#00bfae" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
                <!-- Third line -->
                <path d="m185.21,62.48l204.79,0a70,72.76 0 0 1 0,175.04l-43.6,0" fill="none" id="line3" stroke="#00bfae" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/>
            </g>
        </svg>
    `;

    loader.innerHTML = svgContent;

    const paths = document.querySelectorAll('svg path');
    paths.forEach((path, index) => {
        path.style.animationDelay = `${index * 1}s`;
    });

    // Hide loading screen after 4 seconds
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
    }, 4000);
});


/*work experience entry animation*/
document.addEventListener("DOMContentLoaded", function() {
    const workExperienceEntries = document.querySelectorAll('.work-entry-animated');

    const animateWorkExperienceEntries = () => {
        workExperienceEntries.forEach((entry, index) => {
            const rect = entry.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    entry.classList.add('fade-in');
                }, index * 100); // Stagger the animation by 100ms
            }
        });
    };

    // Add scroll event listener to trigger animation
    window.addEventListener('scroll', animateWorkExperienceEntries);

    // Initial call to animate work experience entries on load
    animateWorkExperienceEntries();
});


/*Burger Icon*/
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const headerNav = document.getElementById('header-nav');

    menuToggle.addEventListener('click', function() {
        headerNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    const navLinks = document.querySelectorAll('#header-nav li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            headerNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});