<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Get in <span class="highlight">Touch</span></h2>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="profile">
            <img src="/src/assets/photo.webp" alt="Jakub Minorczyk" class="contact-image" @error="handleImageError">
            <h3>Jakub Minorczyk</h3>
            <p class="tagline">Frontend Developer & Web Designer</p>
          </div>
          
          <div class="contact-methods">
            <a href="mailto:jakub.minorczyk.kontakt@gmail.com" class="contact-method email">
              <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div class="method-details">
                <h4>Email</h4>
                <p>jakub.minorczyk.kontakt@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+48 733 749 644" class="contact-method phone">
              <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div class="method-details">
                <h4>Phone</h4>
                <p>+48 733 749 644</p>
              </div>
            </a>
          </div>
          
          <div class="social-links">
            <a href="https://github.com/Mino0z" target="_blank" class="social-link github">
              <div class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span>GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/jakub-minorczyk/" target="_blank" class="social-link linkedin">
              <div class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
          
          <a href="/resume.pdf" target="_blank" class="download-cv">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Handle image error
const handleImageError = (e: Event) => {
  if (e.target instanceof HTMLImageElement) {
    e.target.src = 'https://via.placeholder.com/150x150?text=Profile';
  }
};
</script>

<style scoped>
.contact-section {
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
/*#0A77F5#0A2CF5#E3FFFF*/
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

.contact-content {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

/* Contact info styles */
.contact-info {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0A77F5;
  padding: 3px;
}

.profile h3 {
  font-size: 1.6rem;
  margin: 1rem 0 0.25rem;
  color: #333;
}

.tagline {
  color: #666;
  font-size: 1.1rem;
}

/* Contact methods styles */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width:100%;
  width: 100%; /* Pełna szerokość kontenera */
  align-items: center; 
}

.contact-method {
display: flex;
position: relative; /* Dodajemy pozycjonowanie */
align-items: center;
justify-content: center; /* Centrujemy treść */
gap: 1.2rem;
padding: 1.2rem 1.2rem 1.2rem 3.5rem; /* Zwiększamy left padding dla miejsca na ikonę */
background-color: #f8f9fa;
border-radius: 8px;
transition: all 0.3s ease;
text-decoration: none;
color: inherit;
width: 80%;
max-width: 500px;
}

.contact-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.icon-container {
position: absolute; /* Pozycjonujemy ikonę absolutnie */
left: 1.2rem; /* Odległość od lewej krawędzi */
width: 48px;
height: 48px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
}

.email .icon-container {
  background-color: rgba(183, 125, 255, 0.1);
  color: #0A77F5;
}

.phone .icon-container {
  background-color: rgba(45, 212, 191, 0.1);
  color: #2DD4BF;
}

.icon-container svg {
  width: 24px;
  height: 24px;
}
.method-details {
text-align: center; /* Centrujemy tekst */
flex-grow: 0; /* Nie rozciągamy treści */
max-width: 90%; /* Ograniczamy szerokość do 90% dla lepszego wyglądu */
}
.method-details h4 {
font-size: 1.1rem;
margin: 0 0 0.5rem;
color: #333;
}

.method-details p {
color: #666;
margin: 0;
}

/* Social links styles */
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 8px;
}

.social-link:hover {
  transform: translateY(-5px);
  color: #0A77F5;
}

.social-icon {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.github:hover .social-icon {
  color: #333;
}

.linkedin:hover .social-icon {
  color: #0077B5;
}

.download-cv {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #0A77F5;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.download-cv svg {
  width: 20px;
  height: 20px;
}

.download-cv:hover {
  background-color: #0A2CF5;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(183, 125, 255, 0.4);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  /* Modyfikacja układu metody kontaktu dla urządzeń mobilnych */
  .contact-method {
    flex-direction: column; /* Zmiana na układ pionowy */
    width: 95%; /* Większa szerokość na małych ekranach */
    padding: 1.5rem 1rem; /* Równomierny padding */
    text-align: center;
  }
  
  .icon-container {
    position: static; /* Usuwamy pozycjonowanie absolutne */
    margin-bottom: 1rem; /* Dodajemy odstęp pod ikoną */
    width: 50px;
    height: 50px;
  }
  
  .method-details {
    max-width: 100%; /* Pełna dostępna szerokość */
  }
  
  /* Inne style mobilne */
  .social-links {
    flex-wrap: wrap;
  }
  
  .download-cv {
    padding: 0.8rem;
  }
}
</style>