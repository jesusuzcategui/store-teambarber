class productAccordeon extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }
}

window.customElements.define('product-accordeon', productAccordeon);