import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import { createIcons, ArrowUpRight, BarChart, Activity, Cpu, Database, Code, Cloud } from 'lucide';
import { projects, expertise, education } from './data.js';

const icons = { ArrowUpRight, BarChart, Activity, Cpu, Database, Code, Cloud };

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-quart',
  once: true
});

// Inject Expertise (Services)
const servicesContainer = document.getElementById('services-container');
expertise.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', index * 100);
  
  card.innerHTML = `
    <div class="service-icon">
      <i data-lucide="${item.icon}"></i>
    </div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <div style="margin-top: 2rem; color: var(--primary); font-weight: 700; cursor: pointer;">
      Learn More <i data-lucide="arrow-up-right" style="width: 16px; height: 16px;"></i>
    </div>
  `;
  servicesContainer.appendChild(card);
});

// Inject Projects (Works)
const projectContainer = document.getElementById('project-container');
projects.forEach((project, index) => {
  const card = document.createElement('div');
  card.className = 'work-card';
  card.setAttribute('data-aos', 'fade-up');
  
  card.innerHTML = `
    <div class="work-img">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="work-info">
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        ${project.tags.map(tag => `<span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">${tag}</span>`).join(' • ')}
      </div>
      <h3 style="font-size: 1.75rem;">${project.title}</h3>
    </div>
  `;
  projectContainer.appendChild(card);
});

// Inject Education (Timeline)
const timelineContainer = document.getElementById('timeline-container');
education.forEach((item, index) => {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.innerHTML = `
    <span class="timeline-year">${item.year}</span>
    <h4 style="font-size: 1.25rem; margin-bottom: 0.25rem;">${item.title}</h4>
    <p style="color: var(--text-muted); font-size: 0.9rem;">${item.company}</p>
  `;
  timelineContainer.appendChild(div);
});

// Initialize Icons
createIcons({ icons });
