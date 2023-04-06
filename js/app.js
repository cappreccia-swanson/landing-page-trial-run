/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.querySelector("#navbar__list");
const navbarSections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Build the navigation menu dynamically
navbarSections.forEach((section) => {
  // Create a new list item
  const navbarItem = document.createElement("li");
  
  // Get the section ID
  const sectionId = section.id;

  // Set the ID of the list item to match the section ID
  navbarItem.setAttribute("id", sectionId);

  // Create a new anchor element
  const navbarAnchor = document.createElement("a");

  // Set the href of the anchor to link to the corresponding section
  navbarAnchor.href = `#${sectionId}`;

  // Set the text of the anchor to the text of the section header
  const sectionHeader = section.querySelector("h2");
  navbarAnchor.textContent = sectionHeader.innerHTML;

  // Append the anchor to the list item and append the list item to the navbar
  navbarItem.appendChild(navbarAnchor);
  navbar.appendChild(navbarItem);

  // Add a class to the anchor for styling
  navbarAnchor.setAttribute("class", "menu__link");

  // Scroll to section on click
  navbarItem.addEventListener("click", (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
});


// Scroll to section on link click

// Set sections as active
// Add an "active" class to the section in the viewport
window.addEventListener("scroll", function () {
  // Iterate over all sections
  navbarSections.forEach(function (section) {
    // Get the bounding rectangle of the section
    const boundary = section.getBoundingClientRect();
    
    // Check if the section is in the viewport
    const isInViewport = boundary.top >= 0 && boundary.left >= 0 && boundary.bottom <= window.innerHeight && boundary.right <= window.innerWidth;
    
    // Add or remove the "active" class based on whether the section is in the viewport
    const navbarAnchor = document.querySelector(`a[href='#${section.id}']`);
    if (isInViewport) {
      navbarAnchor.classList.add("your-active-class");
    } else {
      navbarAnchor.classList.remove("your-active-class");
    }
  });
});

// Scroll to anchor ID using scrollTo event
navbar.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.nodeName === "A") {
    // Get the ID of the section to scroll to
    const sectionId = event.target.getAttribute("href");
    
    // Scroll to the section with a smooth animation
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    
    // Add the "active" class to the clicked anchor
    event.target.classList.add("your-active-class");
    
    // Remove the "active" class from all other anchors
    navbarSections.forEach(function (section) {
      const navbarAnchor = document.querySelector(`a[href='#${section.id}']`);
      if (navbarAnchor !== event.target) {
        navbarAnchor.classList.remove("your-active-class");
      }
    });
  }
});

