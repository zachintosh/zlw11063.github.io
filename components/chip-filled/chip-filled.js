class ChipComponent extends HTMLElement {
    constructor() {
        super();
        // other properties would be added here as needed
    }

    connectedCallback() {
        var title = this.title;
        var image = this.getAttribute('image');
        var github = this.getAttribute('github');

        this.innerHTML = `
                <a href="${github}" target="_blank">
                    <div class="chip">
                        <img src="${image}">
                        ${title}
                    </div>
                </a>
            `;
    }
}

customElements.define('chip-filled', ChipComponent);