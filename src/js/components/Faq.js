export default function Faq() {
    return {
        faqOpen: false,
        faqOpen2: false,
        faqOpen3: false,

        init() {
            this.faqOpen = false;
        },

        toggle() {
            this.faqOpen =!this.faqOpen;
        },

        toggle2() {
            this.faqOpen2 =!this.faqOpen2;
        },

        toggle3() {
            this.faqOpen3 =!this.faqOpen3;
        }
    }
}
