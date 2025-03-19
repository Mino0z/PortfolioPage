<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">My <span class="highlight">Projects</span></h2>
      
      <div class="projects-filter">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          :class="['filter-btn', { active: currentFilter === filter.value }]"
          @click="currentFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="project-card"
          :class="{ 'animate-in': true }"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" @error="handleImageError($event, project)">
            <div class="project-overlay">
              <div class="project-links">
                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" class="link-icon" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                  </svg>
                  Live Site
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" class="link-icon" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Message shown when no projects match the current filter -->
      <div v-if="filteredProjects.length === 0" class="no-projects">
        <p>No projects match the current filter. Please select another category.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Na początku pliku dodaj importy obrazów
import baggcomImage from '@/assets/baggcom nobackground.png';
import budtaxiImage from '@/assets/budtaxi nobackground.png';
import facebookImage from '@/assets/Facebook to instagram, pinterest.png';
import puppeteerImage from '@/assets/puppeteer.png';
import comaraImage from '@/assets/comara.io.png';
import eqexImage from '@/assets/eqex.png';

// Filtry projektów
const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'Node.js', value: 'nodejs' },
  { label: '.NET', value: 'dotnet' },
  { label: 'Other', value: 'other' },

];

const currentFilter = ref('all');

// Dane projektów - możesz je dostosować do swoich rzeczywistych projektów
const projects = ref([
  {
    id: 1,
    title: 'Construction Company Website',
    description: 'Complete web & brand design, featuring Astra WordPress theme, full conection with google staff, and optimized performance.',
    image: baggcomImage, // Użyj zmiennej zamiast ścieżki
    liveUrl: 'https://baggcom.pl/',
    githubUrl: 'https://github.com/Mino0z/baggcom.pl/',
    technologies: ['WordPress', 'Astra Theme', 'JavaScript', 'SCSS'],
    category: 'wordpress'
  },
  {
    id: 2,
    title: 'Transportation Company Website',
    description: 'One page website for a transportation company, featuring Wordpress Elementor and Astra theme, Graphic design and branding.',
    image: budtaxiImage,
    liveUrl: 'https://budtaxi.pl/',
    githubUrl: 'https://github.com/Mino0z/budtaxi.pl/',
    technologies: ['WordPress', 'Elementor', 'Photoshop', 'Figma'],
    category: 'wordpress'
  },
  {
    id: 3,
    title: 'Low-Code Social Media Automation',
    description: 'set of automations for social media platforms to multiply your reach and engagement.',
    image: facebookImage,
    liveUrl: '',
    githubUrl: 'https://github.com/Mino0z/SocialMediaAutomation/',
    technologies: ['Make.com', 'Zapier',],
    category: 'other'
  },
  {
    id: 4,
    title: 'Local Listing Automation Tool',
    description: 'A program that automates the process of posting advertisements on a local classifieds portal. Based on Puppeteer library. Connection with 2Captcha API for solving captchas.',
    image: puppeteerImage,
    liveUrl: 'https://example.com/project4',
    githubUrl: 'https://github.com/yourusername/data-pipeline',
    technologies: ['Node.js', 'Puppeteer', 'RESTful API', 'Express'],
    category: 'nodejs'
  },
  {
    id: 5,
    title: 'CRM / ERP for Constructions Business',
    description: 'Custom software for building depots, gravel pits, concrete plants, and similar businesses. Features include order management, inventory tracking, and customer relationship management.',
    image: comaraImage,
    liveUrl: 'https://example.com/project5',
    githubUrl: '',
    technologies: ['Vue.js', 'shadcn/vue', 'C#', 'T-SQL', 'user interviews'],
    category: 'wordpress'
  },
  {
    id: 6,
    title: 'Ecommerce Woocommerce Store ',
    description: 'Middleware service that connects various APIs and systems, providing a unified interface for client applications.',
    image: eqexImage,
    liveUrl: '',
    githubUrl: 'https://github.com/yourusername/api-integration',
    technologies: ['Wordpress', 'Woocommerce', 'Elementor', 'Redis'],
    category: 'nodejs'
  }
]);

// Filtrowanie projektów na podstawie wybranej kategorii
const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === currentFilter.value);
});

// Obsługa błędu ładowania obrazów
const handleImageError = (event: Event, project: any) => {
  if (event.target instanceof HTMLImageElement) {
    // Różne obrazy zastępcze dla różnych kategorii
    if (project.category === 'wordpress') {
      event.target.src = '';
    } else if (project.category === 'nodejs') {
      event.target.src = '';
    } else {
      event.target.src = '';
    }
  }
};

// Animacja wejścia dla kart projektów
onMounted(() => {
  // Animacja może być bardziej złożona, tutaj tylko jako przykład
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 100 * index);
  });
});
</script>

<style scoped>
.projects-section {
  padding: 6rem 2rem;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
}

.highlight {
  color: #0A77F5;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: #0A77F5;
  margin: 1rem auto;
  border-radius: 2px;
}

.projects-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.6rem 1.2rem;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #f5f7fa;
  color: #555;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background-color: #eff1f5;
  transform: translateY(-2px);
}

.filter-btn.active {
  background-color: #0A77F5;
  color: white;
  border-color: #0A77F5;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  background: white;
  opacity: 0;
  transform: translateY(20px);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 220px;
  position: relative;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background-color: #0A2CF5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  background-color: #B77DFF;
  transform: scale(1.05);
}

.link-icon {
  width: 18px;
  height: 18px;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #333;
}

.project-description {
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  background-color: rgba(183, 125, 255, 0.1);
  color: #0A2CF5;
  border-radius: 50px;
  font-size: 0.85rem;
}

.no-projects {
  text-align: center;
  padding: 3rem;
  color: #666;
}

/* Animacja wejściowa */
.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media queries dla responsywności */
@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-filter {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-section {
    padding: 4rem 1rem;
  }
}
</style>