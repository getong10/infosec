import {createApp} from 'vue'
import App from './App.vue'
import components from '@/components/UI/index.js'
import router from "@/router/router";

// Создание экземпляра приложения
const app = createApp(App);

// Регистрация общих компонентов в приложении
components.forEach(component => {
    app.component(component.name, component);
});

// Использование маршрутизатора и запуск приложения в указанном элементе
app
    .use(router)
    .mount('#app');
