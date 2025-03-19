<template>
  <div id="navbar-all">
    <h1>Jakub Minorczyk</h1>
    <div class="content">
      <Button>get in touch</Button>
    </div>
  </div>
  
  <!-- Bottom Navigation Bar -->
  <nav id="bottom-nav">
    <ul>
      <li 
        :class="{ 
          'active': currentSection === 'home',
          'was-active': previousSection === 'home' && currentSection !== 'home'
        }" 
        @click.prevent="handleNavClick('home')" 
        data-tooltip="Home">
        <a href="#home">
          <HomeIcon class="icon" />
          <span class="label">Home</span>
        </a>
      </li>
      <li 
        :class="{ 
          'active': currentSection === 'about',
          'was-active': previousSection === 'about' && currentSection !== 'about'
        }" 
        @click.prevent="handleNavClick('about')" 
        data-tooltip="About">
        <a href="#about">
          <UserIcon class="icon" />
          <span class="label">About</span>
        </a>
      </li>
      <li 
        :class="{ 
          'active': currentSection === 'projects',
          'was-active': previousSection === 'projects' && currentSection !== 'projects'
        }" 
        @click.prevent="handleNavClick('projects')" 
        data-tooltip="Projects">
        <a href="#projects">
          <RectangleStackIcon class="icon" />
          <span class="label">Projects</span>
        </a>
      </li>
      <li 
        :class="{ 
          'active': currentSection === 'education',
          'was-active': previousSection === 'education' && currentSection !== 'education'
        }" 
        @click.prevent="handleNavClick('education')" 
        data-tooltip="Education">
        <a href="#education">
          <AcademicCapIcon class="icon" />
          <span class="label">Education</span>
        </a>
      </li>
      <li 
        :class="{ 
          'active': currentSection === 'contact',
          'was-active': previousSection === 'contact' && currentSection !== 'contact'
        }" 
        @click.prevent="handleNavClick('contact')" 
        data-tooltip="Contact">
        <a href="#contact">
          <EnvelopeIcon class="icon" />
          <span class="label">Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useNavigation } from '../../composables/useNavigation';

import { 
  HomeIcon, 
  UserIcon, 
  RectangleStackIcon, 
  AcademicCapIcon, 
  EnvelopeIcon,
} from '@heroicons/vue/24/outline';

// Używamy composable
const { currentSection, scrollToSection } = useNavigation();

// Dodajemy śledzenie poprzedniego elementu
const previousSection = ref('');
// Flaga blokująca aktualizacje podczas animacji
const isTransitioning = ref(false);

type SectionName = 'home' | 'about' | 'projects' | 'education' | 'contact';

// Niestandardowa funkcja kliknięcia z blokadą
const handleNavClick = (section: SectionName) => {
  if (isTransitioning.value) return; // Ignoruj kliknięcia podczas animacji
  
  if (currentSection.value !== section) {
    isTransitioning.value = true;
    previousSection.value = currentSection.value;
    
    // Dajemy więcej czasu na zakończenie animacji
    setTimeout(() => {
      isTransitioning.value = false;
    }, 1200); // Zwiększony czas blokady (0.7s + 0.5s)
    
    scrollToSection(section);
  }
};

// Obserwujemy zmiany aktywnej sekcji wynikające ze scrollowania
watch(currentSection, (newVal, oldVal) => {
  if (isTransitioning.value) return; // Ignoruj zmiany podczas trwającej animacji
  if (oldVal && oldVal !== newVal) {
    previousSection.value = oldVal;
  }
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
}

h1 {
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem;
}

/* Bottom Navigation Bar */
#bottom-nav {
  position: fixed;
  bottom: 20px; /* Umieszczenie na dole strony */
  left: 50%;
  transform: translateX(-50%);
  background-color: hsla(270, 92%, 50%, 0.8);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
}

#bottom-nav ul {
  list-style: none;
  display: flex;
  gap: 0.25rem;
  padding: 0;
  margin: 0;
  justify-content: center;
}

/* Elementy listy - ZMODYFIKOWANE */
#bottom-nav ul li {
  padding: 0.5rem;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  box-shadow: inset 0 0 0 0 transparent;
}

/* Aktywny element - JEDNOLITA DEFINICJA bez transition */
#bottom-nav ul li.active {
  background-color: #B77DFF;
  padding: 0.5rem 1rem;
  box-shadow: inset 0 0 0 1px #D7BDFF;
}

/* Styl dla linków */
a {
  text-decoration: none;
  color: #D7BDFF;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
  width: 100%;
}

/* Ikony - BEZ TRANSITION */
.icon {
  width: 1.3rem;
  height: 1.3rem;
  min-width: 1.3rem;
}

li.active .icon {
  color: #ffffff;
  transform: scale(1.1);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.5s ease;
}

/* Tooltips */
li:not(.active):hover::after {
  content: attr(data-tooltip);
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
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

/* Global */
html {
  scroll-behavior: smooth;
}

/* Media queries dla responsywności */
@media (max-width: 768px) {
  #bottom-nav {
    width: 90%;
    max-width: 400px;
  }
  
  h1 {
    font-size: 1.5rem;
  }
  
  .content {
    display: none; /* Ukryj przycisk na mniejszych ekranach */
  }
}

/* NOWA IMPLEMENTACJA ETYKIET Z ANIMACJAMI */
.label {
  display: inline-block;
  max-width: 0;
  overflow: hidden;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  color: #D7BDFF;
  margin-left: 0;
}

/* Animacja wejścia dla aktywnej etykiety */
li.active .label {
  animation: showLabelSmooth 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards; /* Płynniejsza krzywa bez "odbicia" */
}

/* Animacja wyjścia dla poprzednio aktywnej etykiety */
li.was-active .label {
  animation: quickHideLabel 0.3s ease forwards;
}

/* Płynniejsza animacja keyframes z dodatkowymi punktami */
@keyframes showLabelSmooth {
  0% {
    max-width: 0;
    opacity: 0;
    margin-left: 0;
  }
  20% {
    max-width: 25px;
    opacity: 0.3;
    margin-left: 0.2rem;
  }
  40% {
    max-width: 50px;
    opacity: 0.6;
    margin-left: 0.35rem;
  }
  60% {
    max-width: 75px;
    opacity: 0.8;
    margin-left: 0.4rem;
  }
  80% {
    max-width: 90px;
    opacity: 0.9;
    margin-left: 0.45rem;
    color: rgba(255, 255, 255, 0.9);
  }
  100% {
    max-width: 150px;
    opacity: 1;
    margin-left: 0.5rem;
    color: white;
  }
}

/* Animacja keyframes dla wyjścia */
@keyframes hideLabel {
  0% {
    max-width: 100px;
    opacity: 1;
    margin-left: 0.5rem;
    color: white;
  }
  70% {
    max-width: 40px;
    opacity: 0.5;
    margin-left: 0.3rem;
    color: #D7BDFF;
  }
  100% {
    max-width: 0;
    opacity: 0;
    margin-left: 0;
    color: #D7BDFF;
  }
}

/* Szybsza, uproszczona animacja znikania etykiety */
@keyframes quickHideLabel {
  0% {
    max-width: 100px;
    opacity: 1;
    margin-left: 0.5rem;
  }
  100% {
    max-width: 0;
    opacity: 0;
    margin-left: 0;
  }
}

/* WŁASNA ANIMACJA DLA CAŁEGO ELEMENTU */
li.active {
  animation: growElement 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards; /* Dodane opóźnienie 0.3s */
  background-color: transparent; /* Zaczynamy od przezroczystości */
  box-shadow: inset 0 0 0 0 transparent;
  padding: 0.5rem; /* Początkowy padding */
}

li.was-active {
  /* Bez animacji, tylko natychmiastowe przywrócenie stylu nieaktywnego */
  background-color: transparent !important;
  box-shadow: inset 0 0 0 0 transparent !important;
  padding: 0.5rem !important;
  animation: none !important;
}

/* Animacja wzrostu całego elementu */
@keyframes growElement {
  0% {
    padding-right: 0.5rem;
    background-color: transparent;
    box-shadow: inset 0 0 0 0 transparent;
    width: auto;
  }
  30% {
    background-color: rgba(183, 125, 255, 0.5);
    box-shadow: inset 0 0 0 1px rgba(215, 189, 255, 0.4);
  }
  100% {
    padding-right: 1rem;
    background-color: #B77DFF;
    box-shadow: inset 0 0 0 1px #D7BDFF;
    width: auto;
  }
}

/* Usuń animację kurczenia się elementu */
@keyframes shrinkElement {
  /* Usuń tę animację całkowicie */
}
</style>