let headerEn = '';
headerEn += `
<header>
        <div class="div-header">
            <div class="logo-item">Alpha</div>
            <div class="link-alpha-8">
                <a href="en/alpha-infen.html" class="pointer">Alpha-8</a>
            </div>
            <div class="space-station">
                <a href="#launch-pad" class="pointer">Malina</a>
            </div>
        </div>
        <div class="div-translate">
        <a href="https://alphamodel.ga/alphasite.html">
            <i class="bi bi-translate"></i>
        </a>
    </div>
    </header>
`;
const header = headerEn;
function headerF() {
    document.getElementById('header-mine').innerHTML= header;
}
headerF();