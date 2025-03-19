/*import { ref, onMounted, onUnmounted } from 'vue';

export function useNavigation() {
  const currentSection = ref('home');
  const sections = ['home', 'about', 'projects', 'education', 'contact'];
  
  // Funkcja przewijania do sekcji
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      currentSection.value = sectionId;
    }
  };
  
  // Zoptymalizowana funkcja wykrywania widocznej sekcji
  const handleScroll = () => {
    // Używamy elementów w tablicy sections zamiast szukać wszystkich sekcji
    const viewportHeight = window.innerHeight;
    // Usunięto nieużywaną zmienną scrollTop
    
    // Znajdź najbardziej widoczną sekcję
    let maxVisibleSection = '';
    let maxVisiblePercentage = 0;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (!element) continue;
      
      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      
      // Oblicz, ile procent elementu jest widoczne w viewport
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visiblePercentage = visibleHeight / elementHeight;
      
      // Dodajemy bonus dla elementów bliżej środka ekranu
      const distanceFromCenter = Math.abs(rect.top + elementHeight/2 - viewportHeight/2);
      const centerBonus = 1 - (distanceFromCenter / viewportHeight);
      
      const totalScore = visiblePercentage + (centerBonus * 0.5); // Dajemy 50% wagi pozycji centralnej
      
      // Aktualizuj najbardziej widoczną sekcję
      if (totalScore > maxVisiblePercentage) {
        maxVisiblePercentage = totalScore;
        maxVisibleSection = sectionId;
      }
    }
    
    // Aktualizuj aktualną sekcję tylko jeśli się zmieniła
    if (maxVisibleSection && maxVisibleSection !== currentSection.value) {
      currentSection.value = maxVisibleSection;
    }
  };
  
  // Dodaj throttling dla lepszej wydajności
  const throttledHandleScroll = () => {
    if (!window.requestAnimationFrame) {
      setTimeout(handleScroll, 66);
    } else {
      window.requestAnimationFrame(handleScroll);
    }
  };
  
  // Ustanów obserwator przewijania
  onMounted(() => {
    window.addEventListener('scroll', throttledHandleScroll);
    // Wywołaj raz po montażu, aby ustawić początkową sekcję
    handleScroll();
  });
  
  // Sprzątaj po sobie
  onUnmounted(() => {
    window.removeEventListener('scroll', throttledHandleScroll);
  });
  
  return {
    currentSection,
    scrollToSection,
    sections // Dodano eksport tablicy sekcji
  };
}
*/

import { ref, onMounted, onUnmounted } from 'vue';

export function useNavigation() {
  const currentSection = ref('home');
  const sections = ['home', 'about', 'projects', 'education', 'contact'];
  
  // Funkcja przewijania do sekcji
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Odstęp od góry ekranu
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      currentSection.value = sectionId;
    }
  };
  
  // Poprawiona funkcja wykrywania widocznej sekcji
  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    // Usunięto nieużywaną zmienną scrollPosition
    
    // Przechowujemy informacje o wszystkich sekcjach
    const sectionInfo = [];
    
    // Zbieramy dane o wszystkich sekcjach
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (!element) continue;
      
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      
      // Procent sekcji widoczny na ekranie
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      let visiblePercentage = visibleHeight / elementHeight;
      
      // Usunięto nieużywaną zmienną positionWeight
      
      // Odległość od górnej krawędzi viewportu
      const topDistance = Math.abs(rect.top);
      
      // Czy nagłówek sekcji jest widoczny (zakładając, że jest na początku sekcji)
      const isHeaderVisible = rect.top >= -100 && rect.top < viewportHeight / 3;
      
      // Specjalna waga dla widoczności nagłówka
      const headerBonus = isHeaderVisible ? 0.4 : 0;
      
      // Całkowity wynik - dajemy większą wagę, gdy nagłówek jest widoczny
      const totalScore = visiblePercentage + headerBonus;
      
      sectionInfo.push({
        id: sectionId,
        top: elementTop,
        score: totalScore,
        topDistance,
        isHeaderVisible
      });
    }
    
    // Sortujemy sekcje wg widoczności i innych parametrów
    sectionInfo.sort((a, b) => {
      // Jeśli nagłówek jest widoczny, to ta sekcja wygrywa
      if (a.isHeaderVisible && !b.isHeaderVisible) return -1;
      if (!a.isHeaderVisible && b.isHeaderVisible) return 1;
      
      // W przeciwnym razie porównujemy wynik
      return b.score - a.score;
    });
    
    // Jeśli mamy wyniki i najlepsza sekcja ma wystarczający wynik
    if (sectionInfo.length > 0 && sectionInfo[0].score > 0.1) {
      // Aktualizuj tylko gdy najlepsza sekcja się zmieniła
      if (sectionInfo[0].id !== currentSection.value) {
        currentSection.value = sectionInfo[0].id;
      }
    }
  };
  
  // Dodaj throttling dla lepszej wydajności
  const throttledHandleScroll = () => {
    if (!window.requestAnimationFrame) {
      setTimeout(handleScroll, 66);
    } else {
      window.requestAnimationFrame(handleScroll);
    }
  };
  
  // Ustanów obserwator przewijania
  onMounted(() => {
    window.addEventListener('scroll', throttledHandleScroll);
    // Wywołaj raz po montażu, aby ustawić początkową sekcję
    handleScroll();
  });
  
  // Sprzątaj po sobie
  onUnmounted(() => {
    window.removeEventListener('scroll', throttledHandleScroll);
  });
  
  return {
    currentSection,
    scrollToSection,
    sections 
  };
}
