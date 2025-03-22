<template>
    <section id="home" class="home-section">
      <div class="container">
        <div class="content">
          <h1 class="name">Jakub <span class="highlight">Minorczyk</span></h1>
          
          <div class="typewriter-container">
            <span class="prefix">I'm a&nbsp;</span>
            <span class="typewriter" ref="typewriterRef">
              {{ displayedText }}
              <span class="cursor" :class="{ 'blink': isBlinking }">|</span>
            </span>
          </div>
          
          <p class="description">
            Passionate about creating clean, interactive and user-friendly web experiences.
            Let's build something amazing together.
          </p>
          
          <div class="buttons">
            <button class="primary-btn" @click="scrollToProjectsSection">View Projects</button>
            <button @click="scrollToContactSection"class="secondary-btn">Contact Me</button>
          </div>
        </div>
        
        <div class="image-container">
          <img src="/src/assets/photo.webp" alt="Jakub Minorczyk" class="profile-image" 
               @error="handleImageError">
          <div class="image-decoration"></div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToNextSection">
      
      <div class="arrow-container">
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  // Tekst dla efektu typewriter - możesz dostosować listę
  const phrases = [
    ".NET Developer",
    "Vue.js Developer",
    "Web Designer",
    "Marketing Automation Dev",
    "Start up owner",
  ];
  
  const typewriterRef = ref<HTMLElement | null>(null);
  const displayedText = ref('');
  const currentPhraseIndex = ref(0);
  const currentCharIndex = ref(0);
  const isDeleting = ref(false);
  const isBlinking = ref(true);
  const typingSpeed = ref(100); // Prędkość pisania (ms)
  const pauseDelay = 1500; // Czas pauzy po napisaniu całej frazy (ms)
  let typingInterval: number | null = null;
  
  // Główna funkcja efektu typewriter
  const typeText = () => {
    const currentPhrase = phrases[currentPhraseIndex.value];
    
    // Określa czy piszemy czy kasujemy znaki
    if (!isDeleting.value) {
      // Pisanie tekstu
      displayedText.value = currentPhrase.substring(0, currentCharIndex.value + 1);
      currentCharIndex.value++;
      
      // Gdy ukończymy pisanie frazy
      if (currentCharIndex.value >= currentPhrase.length) {
        isDeleting.value = true;
        isBlinking.value = true;
        typingSpeed.value = pauseDelay; // Pauza przed usuwaniem
      } else {
        typingSpeed.value = 80 + Math.random() * 50; // Lekka wariacja prędkości
        isBlinking.value = false;
      }
    } else {
      // Usuwanie tekstu
      displayedText.value = currentPhrase.substring(0, currentCharIndex.value);
      currentCharIndex.value--;
      typingSpeed.value = 50; // Szybsze usuwanie
      isBlinking.value = false;
      
      // Gdy usuniemy całą frazę
      if (currentCharIndex.value < 0) {
        isDeleting.value = false;
        currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length; // Następna fraza
        currentCharIndex.value = 0;
        typingSpeed.value = 200; // Krótka pauza przed pisaniem następnej frazy
      }
    }
    
    // Kontynuacja animacji
    typingInterval = window.setTimeout(typeText, typingSpeed.value);
  };
  
  // Obsługa błędu ładowania obrazu - zastępuje go obrazem zastępczym
  const handleImageError = (e: Event) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.src = 'https://via.placeholder.com/400x500?text=Profile+Image';
    }
  };
  const scrollToNextSection = () => {
  const nextSection = document.getElementById('about');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};
  const scrollToProjectsSection = () => {
  const nextSection = document.getElementById('projects');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollToContactSection = () => {
  const nextSection = document.getElementById('contact');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};
  
  onMounted(() => {
    // Start efektu typewriter po krótkim opóźnieniu
    setTimeout(() => {
      typeText();
    }, 500);
  });
  
  onUnmounted(() => {
    // Czyszczenie timeoutów przy odmontowaniu komponentu
    if (typingInterval) {
      clearTimeout(typingInterval);
    }
  });
  </script>
  
  <style scoped>
  .home-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 6rem 2rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #e9ecf2 100%);
    position: relative;
    overflow: hidden;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  
  .content {
    flex: 1;
    padding-right: 2rem;
  }
  
  .name {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #333;
    line-height: 1.1;
  }
  
  .highlight {
    color: #0A77F5;
  }
  
  .typewriter-container {
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #555;
    display: flex;
    height: 2.5rem;
  }
  
  .prefix {
    color: #777;
  }
  
  .typewriter {
    color: #0A2CF5;
    position: relative;
  }
  
  .cursor {
    display: inline-block;
    margin-left: 3px;
    color: #B77DFF;
    font-weight: 700;
  }
  
  .cursor.blink {
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
    max-width: 80%;
  }
  
  .buttons {
    display: flex;
    gap: 1rem;
  }
  
  .primary-btn, .secondary-btn {
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
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

  .image-container {
    flex: 0.8;
    position: relative;
    z-index: 1;
  }
  
  .profile-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    z-index: 2;
    position: relative;
    transition: transform 0.5s ease;
  }
  
  .profile-image:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 992px) {
  .image-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid #0A77F5;
    border-radius: 20px;
    top: 20px;
    left: 20px;
    z-index: 1;
  }
}

  .image-decoration {
  position: absolute;
  width: 100%;  /* Zmniejszam szerokość o 40px (20px z każdej strony) */
  max-width: 400px;         /* Dodaję max-width taką samą jak obrazek */
  height: 100%; /* Zmniejszam wysokość o 40px (20px z góry i dołu) */
  border: 3px solid #0A77F5;
  border-radius: 20px;
  top: 20px;
  left: 20px;
  z-index: 1;
  right: 20px;
  bottom: 20px;
}
  /* Media queries dla responsywności */
  @media (max-width: 992px) {
    .container {
      flex-direction: column-reverse;
      text-align: center;
    }
    
    .content {
      padding-right: 0;
    }
    
    .description {
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    
    .buttons {
      justify-content: center;
    }
    
    .typewriter-container {
      justify-content: center;
    }
    
    .image-container {
      margin-bottom: 3rem;
    }
  }
  
  @media (max-width: 576px) {
    .home-section {
      padding: 5rem 1rem;
    }
    
    .name {
      font-size: 2.5rem;
    }
    
    .typewriter-container {
      font-size: 1.4rem;
      flex-wrap: wrap;
      justify-content: center;
      height: auto;
    }
    
    .buttons {
      flex-direction: column;
      gap: 0.8rem;
    }
    
    .image-container {
      width: 80%;
    }
  }
  .scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  color: #0A77F5;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 0.8;
}



.arrow-container {
  animation: bounce 2s infinite;
}

.arrow {
  width: 60px;
  height: 60px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Responsywność dla strzałki */
@media (max-width: 576px) {
  .scroll-indicator {
    bottom: 20px;
  }
  
  
  
  .arrow {
    width: 24px;
    height: 24px;
  }
}
  </style>