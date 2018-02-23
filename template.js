export function getTemplate(title, imgSource) {
    return `
        <div class="chip">
            <img src="${imgSource}" alt="Contact Person">
            ${title}
        </div>
    `;
}