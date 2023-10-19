import {createRouter, createWebHistory} from "vue-router";
import MainMenu from "@/components/MainMenu.vue";
import XSSMainPage from "@/pages/XSS/XSSMainPage.vue";
import TimingATKMainPage from "@/pages/TimingATK/TimingATKMainPage.vue";
import SQLinjMainPage from "@/pages/SQLinj/SQLinjMainPage.vue";
import DDoSMainPage from "@/pages/DDoS/DDoSMainPage.vue";
import CSRFMainPage from "@/pages/CSRF/CSRFMainPage.vue";
import ClickjackingMainPage from "@/pages/Clickjacking/ClickjackingMainPage.vue";
import MainPage from "@/pages/MainPage.vue";
import TypesOfXSS from "@/pages/XSS/TypesOfXSS.vue";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/menu',
        component: MainMenu
    },
    {
        path: '/xss',
        component: XSSMainPage
    },
    {
        path: '/typesXSS',
        component: TypesOfXSS
    },
    {
        path: '/timing',
        component: TimingATKMainPage
    },
    {
        path: '/sql',
        component: SQLinjMainPage
    },
    {
        path: '/ddos',
        component: DDoSMainPage
    },
    {
        path: '/csrf',
        component: CSRFMainPage
    },
    {
        path: '/clickjacking',
        component: ClickjackingMainPage
    },
]

const router = createRouter({
        routes,
        history: createWebHistory(process.env.BASE_URL)
})

export default router;
