<template>
    <section id="education" class="education-section">
      <div class="container">
        <h2 class="section-title">My <span class="highlight">Education</span></h2>
        
        <div class="timeline-container">
          <!-- Linia czasowa -->
          <div class="timeline-line"></div>
          
          <!-- Elementy edukacji -->
          <div class="education-items">
            <!-- Studia -->
            <div class="education-item current">
              <div class="education-dot"></div>
              <div class="education-content">
                <div class="education-header">
                  <!-- Nowy element dla logo -->
                  <div class="education-logo">
                    <img :src="wseiLogo" alt="WSEI Logo" />
                  </div>
                  <div class="education-header-content">
                    <div class="education-date">2024 - 2028</div>
                    <h3 class="education-title">Computer Science Bachelor's Degree</h3>
                    <p class="education-institution">Wyższa Szkoła Ekonomii i Informatyki w Krakowie</p>
                  </div>
                </div>
                <p class="education-description">
                  Currently studying Computer Science, focusing on developing advanced programming skills, 
                  understanding complex algorithms, and applying theoretical knowledge to real-world projects.
                </p>
                <div class="education-status current">
                  <span class="status-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>Current</span>
                </div>
              </div>
            </div>
            
            <!-- Technikum -->
            <div class="education-item completed">
              <div class="education-dot"></div>
              <div class="education-content">
                <div class="education-header">
                  <!-- Nowy element dla logo -->
                  <div class="education-logo">
                    <img :src="zstLogo" alt="ZST Logo" />
                  </div>
                  <div class="education-header-content">
                    <div class="education-date">2019 - 2024</div>
                    <h3 class="education-title">IT Technical School</h3>
                    <p class="education-institution">Zespół Szkół Technicznych im. I. Mościckiego w Tarnowie.</p>
                  </div>
                </div>
                <p class="education-description">
                  Completed comprehensive education in Information Technology, learning the fundamentals of 
                  programming, network administration, and web development. Gained hands-on experience 
                  through various technical projects and internships.
                </p>
                <div class="education-status completed">
                  <span class="status-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Sekcja umiejętności zdobytych podczas edukacji -->
        <div class="education-skills">
          <h3>Key Skills Acquired</h3>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h4>Programming Fundamentals</h4>
              <p>Strong foundation in multiple programming languages and paradigms</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h4>Web Development</h4>
              <p>Creating responsive and user-friendly web applications</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h4>Networking</h4>
              <p>Understanding network infrastructure and protocols</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <h4>Database Design</h4>
              <p>Creating and managing efficient database systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Importy obrazów
  import wseiLogo from '../../assets/wsei.png';
  import zstLogo from '../../assets/zst.jpeg';
  
  // Nie potrzebujemy specjalnych skryptów dla tej sekcji
  </script>
  
  <style scoped>
  .education-section {
    padding: 6rem 2rem;
    background-color: #ffffff;
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
  
  /* Timeline styles */
  .timeline-container {
    position: relative;
    padding: 2rem 0;
  }
  
  .timeline-line {
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, rgb(10, 44, 245,0.9), rgba(185, 128, 255, 0.1));
    border-radius: 2px;
  }
  
  .education-items {
    position: relative;
    padding-left: 2.5rem;
  }
  
  .education-item {
    position: relative;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
  }
  
  .education-item:last-child {
    margin-bottom: 0;
  }
  
  .education-dot {
    position: absolute;
    left: -2.5rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #0A77F5;
    border: 4px solid white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 10px;
  }
  
  .education-content {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .education-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  .education-header {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .education-logo {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  
  .education-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .education-header-content {
    flex-grow: 1;
  }
  
  .education-date {
    display: inline-block;
    background-color: rgba(183, 125, 255, 0.1);
    color: #0A77F5;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .education-title {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .education-institution {
    color: #666;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  .education-description {
    color: #666;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  
  .education-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #eee;
  }
  
  .education-status.current {
    color: #3B82F6;
  }
  
  .education-status.completed {
    color: #10B981;
  }
  
  .status-icon {
    width: 18px;
    height: 18px;
    display: flex;
  }
  
  /* Skills section */
  .education-skills {
    margin-top: 4rem;
  }
  
  .education-skills h3 {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #333;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
  }
  
  .skill-item {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .skill-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
    color: #0A77F5;
    margin-bottom: 1rem;
  }
  
  .skill-item h4 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.75rem;
  }
  
  .skill-item p {
    color: #666;
    line-height: 1.5;
  }
  
  /* Media queries */
  @media (max-width: 768px) {
    .education-section {
      padding: 4rem 1rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .timeline-line {
      left: 12px;
    }
    
    .education-items {
      padding-left: 1.75rem;
    }
    
    .education-dot {
      left: -1.9rem;
      width: 14px;
      height: 14px;
    }
    
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .education-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .education-logo {
      width: 60px;
      height: 60px;
    }
  }
  
  @media (max-width: 576px) {
    .education-title {
      font-size: 1.2rem;
    }
    
    .education-content {
      padding: 1.25rem;
    }
  }
  </style>