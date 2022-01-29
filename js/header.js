let header_main = "";
header_main += `
<header>
        <div class="div-header">
            <div class="logo-item">Alpha</div>
            <div class="link-alpha-8">
                <a href="https://alphamodel.ga/alpha-inf.html" class="pointer">Alpha-8</a>
            </div>
            <div class="space-station">
                <a href="#launch-pad" class="pointer">Малина</a>
            </div>
        </div>
    </header>
`;
const header = header_main;
function headerF() {
    document.getElementById('header-mine').innerHTML= header;
}
headerF();