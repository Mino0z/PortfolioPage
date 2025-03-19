<template>
    <div id="navbar-all">
      <h1>Jakub Minorczyk</h1>
      
      <!-- Desktop Navigation -->
      <nav id="desktop-nav">
        <ul>
          <li :class="{ active: currentSection === 'home' }" @click.prevent="scrollToSection('home')">
            <a href="#home">
              <HomeIcon class="desktop-icon" />
              <span>Home</span>
            </a>
          </li>
          <li :class="{ active: currentSection === 'about' }" @click.prevent="scrollToSection('about')">
            <a href="#about">
              <UserIcon class="desktop-icon" />
              <span>About</span>
            </a>
          </li>
          <li :class="{ active: currentSection === 'projects' }" @click.prevent="scrollToSection('projects')">
            <a href="#projects">
              <RectangleStackIcon class="desktop-icon" />
              <span>Projects</span>
            </a>
          </li>
          <li :class="{ active: currentSection === 'education' }" @click.prevent="scrollToSection('education')">
            <a href="#education">
              <AcademicCapIcon class="desktop-icon" />
              <span>Education</span>
            </a>
          </li>
          <li :class="{ active: currentSection === 'contact' }" @click.prevent="scrollToSection('contact')">
            <a href="#contact">
              <EnvelopeIcon class="desktop-icon" />
              <span>Contact</span>
            </a>
          </li>
          <!-- Animowany wskaźnik aktywnej pozycji -->
          <div class="active-indicator" :style="activeIndicatorStyle"></div>
        </ul>
      </nav>
      
      <div class="content">
        <Button>get in touch</Button>
      </div>
    </div>
    
    <!-- Bottom Navigation Bar for Mobile -->
    <nav id="bottom-nav">
      <ul>
        <li :class="{ active: currentSection === 'home' }" @click.prevent="scrollToSection('home')" data-tooltip="Home">
          <a href="#home">
            <HomeIcon class="icon" />
            <span class="label">Home</span>
          </a>
        </li>
        <li :class="{ active: currentSection === 'about' }" @click.prevent="scrollToSection('about')" data-tooltip="About">
          <a href="#about">
            <UserIcon class="icon" />
            <span class="label">About</span>
          </a>
        </li>
        <li :class="{ active: currentSection === 'projects' }" @click.prevent="scrollToSection('projects')" data-tooltip="Projects">
          <a href="#projects">
            <RectangleStackIcon class="icon" />
            <span class="label">Projects</span>
          </a>
        </li>
        <li :class="{ active: currentSection === 'education' }" @click.prevent="scrollToSection('education')" data-tooltip="Education">
          <a href="#education">
            <AcademicCapIcon class="icon" />
            <span class="label">Education</span>
          </a>
        </li>
        <li :class="{ active: currentSection === 'contact' }" @click.prevent="scrollToSection('contact')" data-tooltip="Contact">
          <a href="#contact">
            <EnvelopeIcon class="icon" />
            <span class="label">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { Button } from '@/components/ui/button';
  import { 
    HomeIcon, 
    UserIcon, 
    RectangleStackIcon, 
    AcademicCapIcon, 
    EnvelopeIcon
  } from '@heroicons/vue/24/outline';
  
  const sections = ['home', 'about', 'projects', 'education', 'contact'];
  const currentSection = ref('home');
  const navItems = ref([]);
  
  // Obliczamy pozycję wskaźnika aktywnego elementu w menu desktopowym
  const activeIndicatorStyle = computed(() => {
    if (!navItems.value || navItems.value.length === 0) return {};
    
    const activeIndex = sections.indexOf(currentSection.value);
    if (activeIndex === -1) return {};
    
    const activeItem = navItems.value[activeIndex];
    if (!activeItem) return {};
    
    return {
      left: `${activeItem.offsetLeft}px`,
      width: `${activeItem.offsetWidth}px`
    };
  });
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    // Użycie scrollTo zamiast scrollIntoView dla większej kontroli
    const yOffset = -80; // Dostosuj offset, aby uwzględnić wysokość navbara
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
    
    // Aktualizacja currentSection od razu
    currentSection.value = sectionId;
  };
  
  onMounted(() => {
    // Pobieramy referencje do elementów li dla animacji wskaźnika
    navItems.value = Array.from(document.querySelectorAll('#desktop-nav ul li'));
    
    // Lepsza konfiguracja Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -30% 0px',
      threshold: [0.2, 0.5, 0.8]
    };  
    
    const observer = new IntersectionObserver((entries) => {
      // Sortujemy wpisy według stopnia przecięcia
      // Wybieramy sekcję z największym stopniem widoczności
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
      if (visibleEntries.length > 0) {
        currentSection.value = visibleEntries[0].target.id;
      }
    }, observerOptions);
    
    // Obserwuj wszystkie sekcje
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });
      
    // Sprzątanie przy odmontowaniu komponentu
    onUnmounted(() => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    });
  });
  </script>
  
  <style scoped>
  #navbar-all {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    z-index: 1000;
    /* Zapewnienie stałej wysokości, aby zapobiec przeskakiwaniu */
    height: 70px;
  }
  
  h1 {
    text-align: center;
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
  }
  
  /* Desktop Navigation */
  #desktop-nav {
    position: fixed;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: hsla(270, 92%, 50%, 0.8);
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding: 0.5rem;
    border-radius: 25px;
    /* Zapobieganie zmianie wymiarów */
    height: 62px;
    display: flex;
    align-items: center;
  }
  
  #desktop-nav ul {
    list-style: none;
    display: flex;
    gap: 0.75rem;
    padding: 0.5rem;
    margin: 0;
    justify-content: center;
    /* Pozycja relative dla animowanego wskaźnika */
    position: relative;
  }
  
  #desktop-nav ul li {
    padding: 0.5rem 1rem;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    /* Zapobiegaj przeskakiwaniu */
    transition: background-color 0.3s ease;
  }
  
  #desktop-nav ul li a {
    text-decoration: none;
    color: #D7BDFF;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
    /* Zapewnienie stałej wielkości */
    height: 24px;
  }
  
  /* Usuwanie stylów aktywnego elementu i zastępowanie ich wskaźnikiem */
  #desktop-nav ul li.active {
    background-color: transparent;
    border: none;
  }
  
  #desktop-nav ul li.active a {
    color: #ffffff;
  }
  
  .desktop-icon {
    width: 1.2rem;
    height: 1.2rem;
    color: #D7BDFF;
    transition: color 0.3s ease;
  }
  
  #desktop-nav ul li.active .desktop-icon {
    color: #ffffff;
  }
  
  /* Animowany wskaźnik aktywnej pozycji */
  .active-indicator {
    position: absolute;
    bottom: 0.5rem;
    height: calc(100% - 1rem);
    background-color: #B77DFF;
    border-radius: 25px;
    border: 1px solid #D7BDFF;
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  /* Bottom Navigation Bar */
  #bottom-nav {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: hsla(270, 92%, 50%, 0.8);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    display: none; /* Ukrywamy na dużych ekranach */
  }
  
  #bottom-nav ul {
    list-style: none;
    display: flex;
    gap: 0.25rem; /* Zmniejszone odstępy między ikonami */
    padding: 0;
    margin: 0;
    justify-content: center;
  }
  
  #bottom-nav ul li {
    padding: 0.4rem; /* Nieco mniejszy padding dla ikon */
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  
  #bottom-nav ul li.active {
    border: 1px solid #D7BDFF;
    background-color: #B77DFF;
    padding: 0.4rem 0.8rem; /* Mniejszy padding dla aktywnego elementu */
    transition: 
      background-color 0.4s ease,
      padding 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  /* Naprawiamy problem z zalegającym efektem hover po kliknięciu */
  #bottom-nav ul li:not(.active):hover {
    background-color: rgba(183, 125, 255, 0.15);
    transition: background-color 0.2s ease-in;
  }
  
  /* Reset hover po scrollowaniu */
  #bottom-nav ul li:not(.active) {
    background-color: transparent;
  }
  
  /* Styl dla linków */
  #bottom-nav a {
    text-decoration: none;
    color: #D7BDFF;
    display: flex;
    align-items: center;
    gap: 0.3rem; /* Mniejszy odstęp między ikoną a tekstem */
    white-space: nowrap;
  }
  
  /* Styl dla ikon */
  .icon {
    width: 1.3rem; /* Nieco mniejsze ikony */
    height: 1.3rem;
    transition: transform 0.4s ease-in-out, color 0.3s ease;
  }
  
  /* Styl dla etykiet z łagodniejszym przejściem */
  .label {
    max-width: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateX(-10px);
    transition: 
      max-width 0.5s cubic-bezier(0.25, 1, 0.5, 1),
      opacity 0.3s ease-in-out 0.1s,
      transform 0.4s ease-out,
      margin-left 0.5s ease;
  }
  
  /* Etykieta aktywna - płynniejsze pojawienie */
  li.active .label {
    max-width: 100px;
    opacity: 1;
    transform: translateX(0);
    margin-left: 0.3rem; /* Mniejszy margines */
  }
  
  /* Tooltips z płynniejszym pojawianiem */
  #bottom-nav li:not(.active):hover::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(5px);
    }
    100% {
      opacity: 0.9;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  .content {
    position: fixed;
    top: 15px;
    right: 20px;
  }
  
  /* Media queries dla responsywności */
  @media (max-width: 768px) {
    #desktop-nav {
      display: none;
    }
    
    #bottom-nav {
      display: block;
      width: 90%;
      max-width: 400px;
    }
    
    h1 {
      font-size: 1.5rem;
    }
    
    .content {
      display: none;
    }
  }
  
  @media (min-width: 769px) {
    #desktop-nav {
      display: flex;
    }
    
    #bottom-nav {
      display: none;
    }
  }
  </style>