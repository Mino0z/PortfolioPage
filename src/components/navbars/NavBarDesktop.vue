<template>
  <nav>
    <ul>
      <li :class="{ active: currentSection === 'home' }" @click.prevent="scrollToSection('home')" data-tooltip="Home">
        <a href="#home"><HomeIcon class="icon" />Home</a>
      </li>
      <li :class="{ active: currentSection === 'about' }" @click.prevent="scrollToSection('about')" data-tooltip="About">
        <a href="#about"><UserIcon class="icon" />About</a>
      </li>
      <li :class="{ active: currentSection === 'projects' }" @click.prevent="scrollToSection('projects')" data-tooltip="Projects">
        <a href="#projects"><RectangleStackIcon class="icon" />Projects</a>
      </li>
      <li :class="{ active: currentSection === 'education' }" @click.prevent="scrollToSection('education')" data-tooltip="Education">
        <a href="#education"><AcademicCapIcon class="icon" />Education</a>
      </li>
      <li :class="{ active: currentSection === 'contact' }" @click.prevent="scrollToSection('contact')" data-tooltip="Contact">
        <a href="#contact"><EnvelopeIcon class="icon" />Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  
  import { HomeIcon, UserIcon, RectangleStackIcon, AcademicCapIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
  import { useNavigation } from '../../composables/useNavigation';
  
  const {currentSection, scrollToSection } = useNavigation();
</script>

<style scoped>
nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  background-color: hsla(270, 92%, 50%, 0.8);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 30px; /* Zwiększono aby lepiej pasować do elementów wewnętrznych */
  backdrop-filter: blur(5px);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 0.5rem; /* Zmniejszono gap dla lepszej spójności */
  padding: 0.5rem; /* Mniejszy padding dla lepszej spójności */
  margin: 0;
  justify-content: center;
  position: relative;
}
/*
nav ul li {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); 
  position: relative;
}
*/
nav ul li {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  border: 1px solid transparent; /* Zaczynamy z przezroczystym borderem */
  transition: 
    background-color 0.5s cubic-bezier(0.25, 1, 0.5, 1), 
    transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),
    border-color 0.2s ease; /* Szybsze przejście dla bordera przy dezaktywacji */
  position: relative;
}

/* Efekt hover z płynniejszym przejściem */
nav ul li:not(.active):hover {
  background-color: rgba(183, 125, 255, 0.15);
  transform: translateY(-1px); /* Delikatne uniesienie przy hover */
}

/* Aktywny element z płynniejszym przejściem */
/*
nav ul li.active {
  border: 1px solid #D7BDFF;
  background-color: #B77DFF;
  transition: 
    all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(183, 125, 255, 0.3);
}
*/
nav ul li.active {
  border: 1px solid #D7BDFF;
  background-color: #B77DFF;
  transition: 
    background-color 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    border-color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Wolniejsze pojawienie się bordera */
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(183, 125, 255, 0.3);
}
a {
  text-decoration: none;
  color: #D7BDFF;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.5s ease; /* Płynniejsze przejście koloru */
}

/* Ikony ze płynniejszym przejściem */
.icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.5s ease;
}

/* Efekt ikony z płynniejszym skalowaniem */
li.active .icon {
  color: #ffffff;
  transform: scale(1.1);
}

/* Etykiety z płynniejszym przejściem */
li a {
  transition: color 0.5s ease, font-weight 0.5s ease;
}

li.active a {
  color: #ffffff;
  font-weight: 500;
}

html {
  scroll-behavior: smooth;
}




</style>