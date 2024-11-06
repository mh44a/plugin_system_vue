import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { loadPlugin } from './utils/plugin';

export const app = createApp(App);
const testPluginURL = "https://plugins.goldenmes.com/customer/49/plugin.js";

loadPlugin(testPluginURL);

app.mount('#app')
