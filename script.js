// -----------------------------
// script.js for Karma Dema Portfolio
// -----------------------------

// ===== Dynamic Navbar Highlight =====
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// ===== Back to Top Button =====
// Create button dynamically
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.display = 'none';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.backgroundColor = '#002366';
backToTop.style.color = 'white';
backToTop.style.cursor = 'pointer';
backToTop.style.zIndex = '999';
document.body.appendChild(backToTop);

// Show button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Dynamic Skills Loading (disabled on manual skills page) =====
// Intentionally not auto-generating skills here because the dedicated
// skills page manages its own interactive cards.

// ===== Dynamic Education Loading =====
const educationData = [
  { img: 'Images/Lumang.jpg', desc: 'Primary school started at lumang Primary School, it was my first level of formal education my life. It holds nostalgic memories of early education.' },
  { img: 'Images/Wamrong.jpg', desc: 'Wamrong Lower Secondary School was where I embarked on my first broader education journey. I studied there for grades 7-8.' },
  { img: 'Images/Tashitse.jpg', desc: 'Tashitse Higher Secondary School perched on top of a hill, making it an unforgettable chapter in my life.' },
  { img: 'Images/Samtse.jpg', desc: 'Samtse College of Education is where I start a new chapter and will one day educate and inspire future students.' }
];

const eduGallery = document.querySelector('.education-gallery');
if (eduGallery) {
  eduGallery.innerHTML = '';
  educationData.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('edu-item');
    div.innerHTML = `<img src="${item.img}" alt="Education"><p>${item.desc}</p>`;
    eduGallery.appendChild(div);
  });
}

// ===== Projects Hover Animation =====
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mouseover', () => project.style.transform = 'scale(1.05)');
  project.addEventListener('mouseout', () => project.style.transform = 'scale(1)');
});

// ===== Fade-in Sections on Scroll =====
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('fade-in');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// ===== Interactive Contact Form =====
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    alert(`Thank you, ${name}! Your message has been sent. We'll reply to ${email}.`);
    form.reset();
  });
}

// ===== Footer Current Year =====
const footerP = document.querySelector('footer p');
if (footerP) {
  footerP.textContent = `© ${new Date().getFullYear()} Karma Dema | All Rights Reserved`;
}

// ===== Image Hover Animation for Education =====
const eduImages = document.querySelectorAll('.edu-item img');
eduImages.forEach(img => {
  img.addEventListener('mouseover', () => img.style.transform = 'scale(1.05)');
  img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
});

// ===== Fun Facts Rotator =====
const facts = [
  "I love exploring new cultures.",
  "Python is my favorite programming language.",
  "I enjoy making interactive multimedia projects.",
  "I dream of creating educational apps.",
  "Web development is my passion."
];
const funFactDiv = document.createElement('div');
funFactDiv.id = 'funFact';
funFactDiv.style.fontSize = '1.2rem';
funFactDiv.style.textAlign = 'center';
funFactDiv.style.marginTop = '20px';
const heroSection = document.querySelector('.hero');
if (heroSection) heroSection.appendChild(funFactDiv);

let factIndex = 0;
setInterval(() => {
  funFactDiv.textContent = facts[factIndex];
  factIndex = (factIndex + 1) % facts.length;
}, 5000);

// ===== Optional: Dark/Light Mode Toggle =====
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.id = 'themeToggle';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.left = '20px';
themeToggle.style.padding = '10px';
themeToggle.style.cursor = 'pointer';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Dark mode styles (add this to your CSS as well)
/*
.dark-mode {
  background-color: #121212;
  color: #f0f0f0;
}
.dark-mode .navbar {
  background-color: #000080;
}
.dark-mode .skill {
  background-color: #ff8800;
}
.dark-mode .project {
  background-color: #00ff99;
}
*/
// ===== About Section Read More / Read Less =====
const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');

if (readMoreBtn && moreText) {
  readMoreBtn.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
      readMoreBtn.textContent = 'Read Less';
    } else {
      moreText.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
    }
  });
}
