/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // Kolory niebieskie
        blue: {
          DEFAULT: '#0A77F5', // główny niebieski
          dark: '#0A2CF5',    // ciemny niebieski
          light: '#E3FFFF'    // jasny niebieski
        },
        
        // Kolory fioletowe (navbar)
        purple: {
          DEFAULT: '#7F0AF5', // główny fiolet
          dark: '#B77DFF',    // ciemny fiolet
          light: '#D7BDFF'    // jasny fiolet
        },
        
        // Kolory tła i tekstu
        text: '#131515',      // kolor tekstu
        gray: {
          DEFAULT: '#4A5759', // szary dodatkowy
          light: '#B5BAD0'    // jasno szary (tło)
        },
        
        // Mapowanie do standardowych nazw Tailwind dla kompatybilności
        primary: {
          DEFAULT: '#B77DFF', // główny fiolet jako primary
          dark: '#7F0AF5',    // ciemny fiolet
          light: '#D7BDFF'    // jasny fiolet
        },
        
        secondary: {
          DEFAULT: '#0A77F5', // główny niebieski jako secondary
          dark: '#0A2CF5',    // ciemny niebieski
          light: '#E3FFFF'    // jasny niebieski
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}