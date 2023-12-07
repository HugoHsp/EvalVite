export default function Burger() {
    return {
        open: false,

        init() {
            this.open = false;
        },

        toggle() {
            this.open =!this.open;
        }
    }
}
