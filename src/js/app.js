import Alpine from "alpinejs";
import intersect from '@alpinejs/intersect'
import Burger from "./components/Burger.js";
import Faq from "./components/Faq.js";
import Projects from "./components/Projects.js";

window.Alpine = Alpine;

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start} = Alpine;
    data('Burger', Burger);
    data('Faq', Faq);
    data('Projects', Projects)
    Alpine.plugin(intersect)
    start();
});
