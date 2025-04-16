<template>
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">About <span class="highlight">Me</span></h2>
        
        <div class="about-content">
          <div class="about-text">
            <p class="intro-text">
              I'm an ambitious Junior Developer specializing in .NET technologies with a strong foundation in database systems and web development.
            </p>
            
            <div class="about-details">
              <div class="detail-item">
                <h3>My Background</h3>
                <p>
                  With experience in developing applications using C#, Visual Basic, and .NET frameworks including WPF, 
                  Windows Forms, and ASP.NET, I create efficient and reliable software solutions. I also have practical 
                  experience working with SQL, T-SQL, and Microsoft SQL Server databases, as well as Vue.js for 
                  modern web interfaces.
                </p>
              </div>
              
              <div class="detail-item">
                <h3>My Approach</h3>
                <p>
                  Communication and proper understanding of requirements are my top priorities. I focus on delivering 
                  solid and timely results in every project I undertake. Being fluent in English enables me to 
                  effectively collaborate in diverse teams and environments.
                  <br><br>
                  My goal is to continuously develop my programming skills and gain valuable experience working on 
                  diverse projects, contributing to impactful solutions while growing professionally in the .NET ecosystem.
                </p>
              </div>
            </div>
            
            <div class="cta-container">
              <a class="primary-btn" @click="scrollToProjectsSection">View My Work</a>
              
              <a href="/Jakub Minorczyk CV.pdf" target="_blank" class="secondary-btn">Download CV</a>
          
            </div>
          </div>
          
          <div class="skills-container">
            <h3>My Skills</h3>
            
            <div class="skills-grid">
              <div v-for="(skill, index) in skills" :key="index" class="skill-card">
                <div class="skill-icon" v-html="skill.icon"></div>
                <h4>{{ skill.name }}</h4>
                <div class="skill-rating">
                  <div v-for="i in 5" :key="i" class="star">
                    <!-- Pełna gwiazdka -->
                    <svg v-if="i <= Math.floor(skill.rating)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="#0A77F5" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    
                    <!-- Półgwiazdka -->
                    <svg v-else-if="i === Math.ceil(skill.rating) && !Number.isInteger(skill.rating)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                      <defs>
                        <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="50%" stop-color="#0A77F5" />
                          <stop offset="50%" stop-color="#D1D5DB" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#halfStar)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    
                    <!-- Pusta gwiazdka -->
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="#D1D5DB" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="tools-list">
              <h3>Other Tools & Technologies</h3>
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

  
  // Updated skills with star ratings (1-5) instead of percentages
  const skills = ref([
    {
      name: 'C# & .NET',
      rating: 4,
      icon: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z" fill="#512BD4"/>
            </svg>`
    },
    {
      name: 'SQL & T-SQL',
      rating: 4,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#0072C6" d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"/>
            </svg>`
    },
    {
      name: 'WPF & Windows Forms',
      rating: 3,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#0078D6" d="M0 3.449L9.75 2.1v9.45H0m10.949-9.6L24 0v11.4H10.949M0 12.6h9.75v9.45L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
            </svg>`
    },
    {
      name: 'ASP.NET Core',
      rating: 3.5,
      icon: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z" fill="#512BD4"/>
            </svg>`
    },
    {
      name: 'Vue.js',
      rating: 3.5,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
              <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
              <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
            </svg>`
    },
    {
      name: 'JavaScript & TypeScript',
      rating: 3,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
              <path fill="#007acc" d="M0 200V0h400v400H0"/>
              <path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/>
            </svg>`
    }
  ]);
  const tools = ref(['Visual Basic', 'VBA', 'Git', 'GitHub', 'RESTful API', 'Visual Studio', 'Microsoft Azure', 'Figma', 'Wordpress', 'Python', 'Make.com', 'Zapier']);
  
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
  
  .skill-rating {
    display: flex;
    margin-top: 8px;
  }
  
  .star {
    margin-right: 2px;
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