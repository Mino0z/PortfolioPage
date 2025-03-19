import { createApp } from 'vue'
import './style.css'
import './assets/index.css'
import App from './App.vue'

// Explicit typing to help TypeScript
const app = createApp(App)
app.mount('#app')