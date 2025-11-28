tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        inter: ['Inter', 'sans-serif']
                    },
                    colors: {
                        lightbg: "#FAFAF8",
                        darkbg: "#121212",
                        lightfg: "#121212",
                        darkfg: "#FAFAF8"
                    }
                }
            }
        };


// Typing Animation
const roles = ["Designer", "Developer", "Freelancer"];
let roleIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typingText");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(deleteEffect, 1200);
    }
}

function deleteEffect() {
    if (charIndex > 0) {
        typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 60);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove("opacity-0", "pointer-events-none");
    } else {
        backToTop.classList.add("opacity-0", "pointer-events-none");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
});

// Dark Mode Toggle Script
const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Load previously saved theme
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
} else {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
}

// Toggle Theme on Button Click
themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    // Update Icons
    const isDark = document.documentElement.classList.contains("dark");
    sunIcon.classList.toggle("hidden", !isDark);
    moonIcon.classList.toggle("hidden", isDark);

    // Save Preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Project Modal Data (GitHub README Style)
const projectData = {
  project1: {
    title: "Sample Portfolio",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>This repository contains a responsive, single-page portfolio that showcases 
      Hero, About, Skills, Projects, and Contact sections. All projects listed 
      are handcrafted using HTML/CSS/JS (no frameworks).</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Clean, modern UI; mobile-first friendly</li>
        <li>No build tools or frameworks static site</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Projects (listed on site)</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Calculator — HTML, CSS, JavaScript</li>
        <li>Facebook Old Login Page Clone — HTML, CSS</li>
        <li>7UP Homepage UI Clone — HTML, CSS</li>
        <li>Appy Fizz Homepage UI Clone — HTML, CSS</li>
      </ul>
      <p>Each project card on the site includes a screenshot, a short description, and links to Live Demo and Source Code.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, CSS, JAVASCRIPT</p>
    `,
    live: "https://sample-portfolio-msn4u.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/sample-portfolio"
  },

  project2: {
    title: "Calculator",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>the project helped me strengthen my understanding of DOM manipulation and arithmetic logic implementation.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Highlights</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Clean, mobile-friendly UI</li>
        <li>Fully functional operations: +, –, ×, ÷</li>
        <li>Clear button and responsive display output</li>
        <li>Strengthened core logic and event handling skills</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML5, CSS, JAVASCRIPT</p>
    `,
    live: "https://cal-culator-suhaib-nadakkavils-projects.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/Calculator"
  },

  project3: {
    title: "Facebook Old Login Page UI Clone",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>I recreated the classic Facebook login/signup page using HTML and CSS.It helped me understand layout design, form structuring, and styling fundamentals. </p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Fully responsive layout</li>
        <li>Clean UI inspired by Facebook's legacy design</li>
        <li>Strengthened my understanding of frontend structuring and UI alignment</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, CSS</p>
    `,
    live: "https://facebook-old-login-page.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/Facebook-old-login-page"
  },
  project4: {
    title: "7up Home Page UI Clone",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>Recreating the homepage of the official 7UP website. Before building, I studied layout structures using W3Schools and then crafted the entire page from scratch — no frameworks or copied code. It helped me develop a strong eye for UI alignment, spacing, and visual hierarchy. This project gave me confidence in building attractive and responsive designs with just the basics.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Pixel-accurate homepage clone</li>
        <li>Pure HTML/CSS (no frameworks used)</li>
        <li>Strengthened design thinking and layout skills</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, CSS</p>
    `,
    live: "https://7up-home-page.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/7up-home-page-clone"
  },

  project5: {
    title: "Appy Fizz Home Page UI Clone",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>I recreated the homepage of the Appy Fizz brand website using only HTML and CSS to practice layout building, navigation menus, and pixel-perfect styling. Before developing, I studied layout techniques and responsive design basics on W3Schools. The entire build was done from scratch — no templates or frameworks — to strengthen my HTML/CSS foundation and attention to design detail. This project gave me hands-on experience in replicating real-world brand UI using clean structure and visual balance.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Real brand-inspired static website clone</li>
        <li>Custom navbar and full-page banner structure</li>
        <li>Strengthened layout and styling logic from scratch</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, CSS</p>
    `,
    live: "https://appy-fizz-home-page.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/Appy-fizz-home-page-clone"
  },

  project6: {
    title: "Sample Personal Portfolio",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>a personal portfolio website to showcase my skills, experience, and contact information. I built it using HTML and Bootstrap for responsiveness and layout styling.this project helped me understand portfolio structure, navigation design, and Bootstrap components. It serves as a central hub to showcase my growth, projects, and passion for web development.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Clean, professional design</li>
        <li>Mobile-friendly and responsive layout</li>
        <li>Simple navigation with sections for services, experiences, and contact</li>
        <li>Integrated with my personal branding and quote</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, BOOTSTRAP</p>
    `,
    live: "https://sample-portfolio-sigma-beryl.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/Sample_Personal_Website"
  },

  project7: {
    title: "Paper Grid Home Page UI Clone",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>I recreated the homepage of the Papergrid website using HTML, CSS, Bootstrap, JavaScript, and media queries to practice e-commerce layout design and mobile responsiveness. I built the layout by understanding structure through W3Schools and then hand-coded the full UI with custom classes and responsive grid design. The project helped me strengthen real-world web layout skills like product card design, navigation bars, and color branding — all without using any design templates.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>E-commerce style homepage layout with product grid</li>
        <li>Fully responsive and mobile-first design</li>
        <li>Practice in Bootstrap grid, navigation menus, and brand UI cloning</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, CSS, BOOTSTRAP, JAVASCRIPT, MEDIAQUARIES</p>
    `,
    live: "https://paper-grid-home-page.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/paper-grid-responsive"
  },

  project8: {
    title: "Sample Portfolio",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>It’s a fully responsive personal portfolio website created using HTML, CSS, Bootstrap, JavaScript, and media queries. The website features smooth navigation, form validation, and showcases my projects, skills, and contact details. I began by studying layout and form functionality through W3Schools, then designed and developed the site completely from scratch. This project helped me learn how to manage responsive design, apply mobile-first techniques, and make my work presentable in a clean and professional way.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Fully mobile-friendly and responsive design</li>
        <li>Custom navigation, smooth UI, and working contact form</li>
        <li>Focused on layout structure, code clarity, and real-world presentation</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, CSS, BOOTSTRAP, JAVASCRIPT, MEDIAQUARIES</p>
    `,
    live: "https://msn-portfolio.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/portfolio"
  },

  project9: {
    title: "Digital Agency",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>A fully responsive 5-page company website built using HTML5, CSS3, Bootstrap 5, and JavaScript. Designed as a professional portfolio project to demonstrate real-world client website development skills. This project includes industry-standard UI components, clean section organization, responsive layouts, and optimized image assets suitable for agencies, freelancers, and business websites.</p>

      <h3 class="text-xl font-semibold mb-2">Features</h3>
      <p>Fully responsive multi-page Bootstrap website Clean and modern agency design Professional copywriting and layout Home, About, Services, Projects, Contact pages Responsive navbar & footer Cards, grids, sections, and CTAs Optimized image ratios for a clean grid Reusable components Easy to extend and customize</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Pages</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Home -> Hero, services preview, featured projects, testimonials, CTA</li>
        <li>About -> Company intro, mission/vision, stats, workflow, team</li>
        <li>Services -> Service breakdown, workflow, FAQ section</li>
        <li>Projects -> 6 project cards with responsive image grid</li>
        <li>Contact -> Contact info, map embed, social links (no form)</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, CSS, BOOTSTRAP, JAVASCRIPT</p>
    `,
    live: "https://bootstrap-agency-website-msn4u.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/bootstrap-agency-website"
  },

  project10: {
    title: "Business Landing Page",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>A clean, modern, and fully responsive Digital Agency Landing Page built using HTML5 and Tailwind CSS. Designed as a premium portfolio project
       to showcase professional front-end skills, polished UI structure, and a complete business landing experience. This project highlights strong visual hierarchy, component-based layouting, 
      typography control, accessibility best practices, and pixel-perfect execution suitable for client-facing work.</p>

      <p>The msn4u Digital Agency Landing Page includes: Modern Hero Section Service Cards About Section 
      Portfolio Showcase Testimonials Pricing Plans Contact Information Footer & Social Media Links Every section follows 
      a clean, minimal, elegant design philosophy and uses consistent spacing, components, and brand colors.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Hero Section High-impact introduction with headline, subheading, and CTAs.</li>
        <li>Services Three clean, interactive cards describing core offerings.</li>
        <li>About Two-column layout with image, description, and highlights.</li>
        <li>Portfolio Grid showcase with hover overlays and detail prompts.</li>
        <li>Testimonials Client feedback cards featuring portraits and quotes.</li>
        <li>Pricing Three modern pricing cards with a highlighted middle plan.</li>
        <li>Contact (No Form) Direct contact details with email, phone, and social links.</li>
        <li>Footer Minimal footer with branding, quick links, and copyright.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, TAILWIND CSS, JAVASCRIPT</p>
    `,
    live: "https://modern-digital-agency-landing-page.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/modern-digital-agency-landing-page"
  },

  project11: {
    title: "Product Landing Page",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>A modern, minimal, and fully responsive product landing page designed for the SONIQ Wireless Headphones brand. 
      Built with HTML5, Tailwind CSS, and smooth AOS scroll animations, this project demonstrates clean UI, strong 
      product branding, and professional e-commerce presentation.</p>

      <p>This landing page showcases SONIQ a premium wireless headphones concept brand featuring: Hero section with product 
      CTA Product highlights Detailed features Image gallery Pricing block Modern footer Fully responsive layout Studio-quality product renders Icons created 
      in a minimal monochrome style This project is ideal for your frontend portfolio and Upwork freelancing profile.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <p>When using this project in your freelancing profile: Custom-designed branding & UI Tailwind CSS expertise 
      Mobile-first approach Smooth animations High-end product photograph Clean code, reusable structure Full landing 
      page creation skills This positions you as a UI-focused frontend developer with strong product-design skills.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, TAILWIND CSS, JAVASCRIPT</p>
    `,
    live: "https://modern-product-landing-page-msn4u.vercel.app/ ",
    code: "https://github.com/SuhaibNadakkavil/modern-product-landing-page"
  },

  project12: {
    title: "JS Mini Projects",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>A curated collection of five interactive JavaScript applications built using HTML, 
      Vanilla JavaScript (ES6+), and Tailwind CSS. This repository showcases practical front-end fundamentals, 
      including DOM manipulation, event handling, component structure, and UI usability.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Color Flipper Generates random HEX colors and updates the UI dynamically.</li>
        <li>Stopwatch Accurate timer with start, pause, and reset features.</li>
        <li>Palindrome Checker Validates whether user input is a palindrome with clean string processing.</li>
        <li>Random Quote Generator Displays random quotes with dynamic DOM rendering.</li>
        <li>Todo List A CRUD-based task manager demonstrating local state handling and event delegation.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, TAILWIND CSS, JAVASCRIPT</p>
    `,
    live: "https://js-mini-projects-msn4u.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/js-mini-projects"
  },

  project13: {
    title: "Contacts API",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>A small RESTful API for managing user-specific contacts. Built with Node.js, Express, MongoDB and 
      JWT-based authentication. Ideal as a backend for a contacts web/mobile app.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>User registration and login (JWT)</li>
        <li>Password hashing with bcrypt</li>
        <li>CRUD operations for contacts: create, read (list & single), update, delete</li>
        <li>Each contact is linked to a user; users can only access their own contacts</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>NODE.JS, EXPRESS.JS, MONGODB</p>
    `,
    
    code: "https://github.com/SuhaibNadakkavil/contacts-project"
  },

  project14: {
    title: "User Management",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>Simple MVC web application built with Express and EJS featuring:</p>
      <ul class="list-disc ml-5 space-y-1">
        <li>User signup, login, and home pages.</li>
        <li>Admin panel for viewing/searching/managing users (create, edit, delete).</li>
        <li>Proper session handling and cookies.</li>
        <li>Client-side and server-side validation.</li>
        <li>Password hashing via bcrypt.</li>
        <li>Password hashing via bcrypt.</li>
        <li>Deployed on Render (or similar); compatible with MongoDB Atlas.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>User registration and login</li>
        <li>Server-side validation for security (email format, password rules, duplicates)</li>
        <li>Minimal client-side validation (required fields)</li>
        <li>Error messages displayed below respective inputs</li>
        <li>Flash / SweetAlert success messages after redirects</li>
        <li>Admin CRUD for users and search capabilities</li>
        <li>Session handling and logout</li>
        <li>Prevents duplicate user emails</li>
        <li>Handles removing logged-in users gracefully (destroy sessions if user is deleted)</li>
        <li>Basic caching prevention (using nocache) to avoid stale pages after logout</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>NODE.JS, EXPRESS.JS, MONGODB, EJS</p>
    `,
    live: "https://user-management-ld5m.onrender.com/user/login",
    code: "https://github.com/SuhaibNadakkavil/user-management"
  },

  project15: {
    title: "User Login",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>A minimal login demo built with Express and Handlebars (HBS). 
      It demonstrates session-based authentication , client-side validation, 
      and a simple UI styled with Bootstrap. The application routes and hard-coded credentials.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Session-based login.</li>
        <li>Router-driven structure.</li>
        <li>Handlebars templates for views.</li>
        <li>Client-side validation on the login form.</li>
        <li>Bootstrap-based UI + custom styles.</li>
        <li>Simple logout flow and nocache usage to prevent caching</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>NODE.JS, EXPRESS.JS, HBS</p>
    `,
    live: "https://user-login-94ux.onrender.com/",
    code: "https://github.com/SuhaibNadakkavil/user-login"
  },

    project16: {
    title: "UI Kit",
    description: `
      <h3 class="text-xl font-semibold mb-2">Overview</h3>
      <p>This project is a multi-page Tailwind CSS UI Component Library designed for modern freelance and client projects.
      It includes reusable, production-ready components such as buttons, cards, navigation bars, 
      forms, modals, hero sections, pricing tables, testimonials, portfolio layouts, and utility examples.
      The goal is to provide a clean, consistent, and fast starting point for building landing pages, business websites, and portfolios.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Responsive multi-page UI Kit built with Tailwind CSS</li>
        <li>Component categories: Buttons, Cards, Navigation, Forms, Modals, Hero Sections, Pricing, Testimonials, Portfolio, Utilities</li>
        <li>Clean layout with consistent spacing, typography, and color system</li>
        <li>Font Awesome icons integrated for richer UI elements</li>
        <li>Ready to use in freelance projects or as a showcase in your portfolio</li>
        <li>Deployed as a static site via GitHub Pages</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <p>HTML, JAVASCRIPT, TAILWIND CSS</p>
    `,
    live: "https://ui-kit-msn4u.vercel.app/",
    code: "https://github.com/SuhaibNadakkavil/ui-kit"
  },
};



//---------------------------------------
// PROJECT FILTER 
//---------------------------------------
const filters = document.querySelectorAll(".project-filter");
const projectItems = document.querySelectorAll(".project-item");

filters.forEach(btn => {
  btn.addEventListener("click", () => {

    // active button
    filters.forEach(b => b.classList.remove("active-filter"));
    btn.classList.add("active-filter");

    const filter = btn.dataset.filter;

    projectItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hidden");
        item.classList.add("animate-fadeInUp");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});


//---------------------------------------
// MODAL OPEN / CLOSE
//---------------------------------------
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project-item").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.project;
    const project = projectData[id];

    modalContent.innerHTML = `
      <h2 class="text-2xl font-bold">${project.title}</h2>

      ${project.description}

      <div class="flex gap-4 pt-6">
        <a href="${project.live}" target="_blank" class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Live Demo</a>
        <a href="${project.code}" target="_blank" class="px-5 py-2 rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800">View Code</a>
      </div>
    `;

    modal.classList.remove("hidden");
    document.querySelector(".modal-box").classList.remove("opacity-0", "scale-95");
    document.querySelector(".modal-box").classList.add("opacity-100", "scale-100");
  });
});

// Close modal
closeModal.addEventListener("click", () => closeProjectModal());
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeProjectModal();
});

function closeProjectModal() {
  modal.classList.add("hidden");
}


// Dynamic Year
  document.getElementById("year").textContent = new Date().getFullYear();