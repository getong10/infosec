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
import VKMainPage from "@/pages/XSS/VK/VKMainPage.vue";
import ProtectionXSS from "@/pages/XSS/ProtectionXSS.vue";
import ProtectionSQL from "@/pages/SQLinj/ProtectionSQL.vue";
import ManageDB from "@/pages/SQLinj/ManageDB.vue";
import WBMainPage from "@/pages/SQLinj/WB/WBMainPage.vue";
import HowWorkCSRF from "@/pages/CSRF/HowWorkCSRF.vue";
import ProtectionCSRF from "@/pages/CSRF/ProtectionCSRF.vue";
import TypesDDoS from "@/pages/DDoS/TypesDDoS.vue";
import ProtectionDDoS from "@/pages/DDoS/ProtectionDDoS.vue";
import DdosAttack from "@/pages/DDoS/DdosAttack.vue";
import ProtectionClick from "@/pages/Clickjacking/ProtectionClick.vue";
import VKRegistration from "@/pages/XSS/VK/VKRegistration.vue";
import MailMainPage from "@/pages/CSRF/Mail/MailMainPage.vue";
import ChatGT from "@/pages/Clickjacking/ChatGT.vue";


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
        path: '/protectXSS',
        component: ProtectionXSS
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
        path: '/protectSQL',
        component: ProtectionSQL
    },
    {
        path: '/manageDB',
        component: ManageDB
    },
    {
        path: '/cultureBerries',
        component: WBMainPage
    },
    {
        path: '/ddos',
        component: DDoSMainPage
    },
    {
        path: '/typesDDoS',
        component: TypesDDoS
    },
    {
        path: '/protectDDoS',
        component: ProtectionDDoS
    },
    {
        path: '/ddosAttack',
        component: DdosAttack
    },
    {
        path: '/csrf',
        component: CSRFMainPage
    },
    {
        path: '/guideCSRF',
        component: HowWorkCSRF
    },
    {
        path: '/protectCSRF',
        component: ProtectionCSRF
    },
    {
        path: '/elMailRf',
        component: MailMainPage
    },
    {
        path: '/clickjacking',
        component: ClickjackingMainPage
    },
    {
        path: '/protectClick',
        component: ProtectionClick
    },
    {
        path: '/chatGT',
        component: ChatGT
    },
    {
        path: '/startXSS',
        component: VKMainPage
    },
    {
        path: '/vsregictration',
        component: VKRegistration
    },
]

const router = createRouter({
        routes,
        history: createWebHistory(process.env.BASE_URL)
})

export default router;
