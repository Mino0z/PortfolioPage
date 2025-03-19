<template>
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">About <span class="highlight">Me</span></h2>
        
        <div class="about-content">
          <div class="about-text">
            <p class="intro-text">
              I'm a passionate fullstack developer with a keen eye for design and a commitment to creating 
              engaging, responsive, and accessible web experiences.
            </p>
            
            <div class="about-details">
              <div class="detail-item">
                <h3>My Background</h3>
                <p>
                  With expertise in both backend and frontend development, I create efficient and scalable solutions 
                  that streamline processes and enhance digital experiences. My work spans from marketing automation 
                  and web scraping to full-stack development and WordPress-based websites.
                </p>
              </div>
              
              <div class="detail-item">
                <h3>My Approach</h3>
                <p>
                  I focus on efficiency, maintainability, and user experience. Whether it's automating repetitive marketing tasks, optimizing web applications, or building high-performance websites, my goal is to deliver clean, scalable, and impactful solutions.
                  <br><br>
                  If you're looking for a developer who can help automate workflows, optimize web performance, or build your next project – let's talk!
                </p>
              </div>
            </div>
            
            <div class="cta-container">
              <a class="primary-btn" @click="scrollToProjectsSection">View My Work</a>
              
              <a href="/resume.pdf" target="_blank" class="secondary-btn">Download CV</a>
          
            </div>
          </div>
          
          <div class="skills-container">
            <h3>My Skills</h3>
            
            <div class="skills-grid">
              <div v-for="(skill, index) in skills" :key="index" class="skill-card">
                <div class="skill-icon" v-html="skill.icon"></div>
                <h4>{{ skill.name }}</h4>
                <div class="skill-level">
                  <div class="skill-progress" :style="{ width: `${skill.level}%` }"></div>
                </div>
              </div>
            </div>
            
            <div class="tools-list">
              <h3>Tools & Technologies</h3>
              <div class="tags">
                <span v-for="(tool, index) in tools" :key="index" class="tag">
                  {{ tool }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  
  // Lista głównych umiejętności z ikonami i poziomem zaawansowania
  const skills = ref([
  {
    name: 'HTML & CSS',
    level: 90,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
            <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
            <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
            <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
            <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
          </svg>`
  },
  {
    name: 'JavaScript',
    level: 85,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
            <rect width="630" height="630" fill="#f7df1e" />
            <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
          </svg>`
  },
  {
    name: 'Vue.js',
    level: 80,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
            <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
            <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
          </svg>`
  },
  {
    name: 'C# & .NET',
    level: 75,
    icon: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z" fill="#512BD4"/>
          </svg>`

  },
  {
    name: 'TypeScript',
    level: 70,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <path fill="#007acc" d="M0 200V0h400v400H0"/>
            <path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/>
          </svg>`
  },
  {
    name: 'Node.js & npm',
    level: 50,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#539e43" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
          </svg>`
  }
  ]);
  const tools = ref(['Git', 'GitHub','Wordpress','Vite','Vitest', 'RESTful API', 'Python', 'T-sql', 'VBA', 'Figma', 'Photoshop', 'Illustrator', 'Adobe Suite', 'Blender', 'Make.com', 'Zapier',]);
  
  const scrollToProjectsSection = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  </script>
  
  <style scoped>
  .about-section {
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
    margin-bottom: 3rem;
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
  
  .about-content {
    display: flex;
    gap: 4rem;
    align-items: flex-start;
  }
  
  .about-text {
    flex: 1;
  }
  
  .intro-text {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
    border-left: 3px solid #0A2CF5;
    padding-left: 1rem;
  }
  
  .detail-item {
    margin-bottom: 2rem;
  }
  
  .detail-item h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #333;
  }
  
  .detail-item p {
    line-height: 1.7;
    color: #666;
  }
  
  .cta-container {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .primary-btn, .secondary-btn {
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    text-align: center;
  }
  
  .primary-btn {
    background-color: #0A77F5;
    color: white;
    border: none;
  }
  
  .primary-btn:hover {
    background-color: #E3FFFF;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px #0A77F5;
    color: #0A2CF5;
  }
  
  .secondary-btn {
    background-color: transparent;
    color: #0A77F5;
    border: 2px solid #0A77F5;
  }
  
  .secondary-btn:hover {
    background-color: #E3FFFF;
    transform: translateY(-2px);
  }
  
  .skills-container {
    flex: 1;
    background: #f8f9fa;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .skills-container h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .skill-card {
    background: white;
    border-radius: 8px;
    padding: 1.25rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  .skill-icon {
    width: 40px;
    height: 40px;
    color: #0A77F5;
    margin-bottom: 0.75rem;
  }
  
  .skill-card h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #444;
  }
  
  .skill-level {
    width: 100%;
    height: 6px;
    background: #e9ecef;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #0A77F5 0%, #0A2CF5 100%);
    border-radius: 3px;
    transition: width 1.5s ease-in-out;
  }
  
  .tools-list {
    margin-top: 2.5rem;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }
  
  .tag {
    background: rgba(183, 125, 255, 0.1);
    color: #0A2CF5;
    border: 1px solid rgba(183, 125, 255, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }
  
  .tag:hover {
    background: rgba(183, 125, 255, 0.2);
    transform: translateY(-2px);
  }
  
  /* Media queries dla responsywności */
  @media (max-width: 992px) {
    .about-content {
      flex-direction: column;
      gap: 3rem;
    }
    
    .cta-container {
      justify-content: center;
    }
  }
  
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 576px) {
    .about-section {
      padding: 4rem 1rem;
    }
    
    .cta-container {
      flex-direction: column;
    }
    
    .tag {
      font-size: 0.8rem;
    }
  }
  </style>