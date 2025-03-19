<template>
 
    <NavBar />
    <section id="home">
        <HomeSection />
    </section>
    <section id="about">
      <AboutSection />
    </section>
    <section id="projects">
     <ProjectsSection />
    </section>
    <section id="education">
     <EducationSection />
    </section>
    <section id="contact">
      <ContactSection/>
    </section>
  </template>
  
  <script setup >
  
  import NavBar from './navbars/NavBar.vue';
  import HomeSection from './sections/HomeSection.vue';
  import AboutSection from './sections/AboutSection.vue';
  import ProjectsSection from './sections/ProjectsSection.vue';
  import EducationSection from './sections/EducationSection.vue';
  import ContactSection from './sections/ContactSection.vue';

  </script>
  
  <style scoped>
   /* section {
      padding: 100px 0;
      min-height: 100vh;
    }
      */

    section {
      width: 100%;
    box-sizing: border-box;
    overflow-x: hidden; /* Dodaj tę właściwość */
    position: relative;
    }
  </style>