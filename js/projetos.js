const projetos = 
[
    {
        status: "ativo",
        nome: "Jogos Retro",
        imagem: "./assets/jogos_retro.jpeg",
        linkSite: "https://n33miaz.github.io/Jogos-Retro/",
        linkGitHub: "https://github.com/n33miaz/Jogos-Retro",
        detalhes: "Desenvolvido usando JavaScript, CSS e HTML",
    },
    {
        status: "ativo",
        nome: "Gataiada Leitura",
        imagem: "./assets/gataiada_leitura.jpeg",
        linkSite: "https://n33miaz.github.io/Gataiada-Leitura/",
        linkGitHub: "https://github.com/n33miaz/Gataiada-Leitura",
        detalhes: "Desenvolvido usando JavaScript, CSS e HTML",
    },
    {
        status: "ativo",
        nome: "GCAR Photography",
        imagem: "./assets/gcar.jpeg",
        linkSite: "https://n33miaz.github.io/GCAR-Photography/",
        linkGitHub: "https://github.com/n33miaz/GCAR-Photography",
        detalhes: "Desenvolvido usando JavaScript, CSS e HTML",
    },
    {
        status: "ativo",
        nome: "Coisas Daora",
        imagem: "./assets/coisas_daora.jpeg",
        linkSite: "https://n33miaz.github.io/Coisas-Daora/",
        linkGitHub: "https://github.com/n33miaz/Coisas-Daora",
        detalhes: "Desenvolvido usando JavaScript, CSS e HTML",
    },
    {
        status: "",
        nome: "Conversor Celestial",
        imagem: "./assets/conversor_celestial.jpeg",
        linkSite: "https://n33miaz.github.io/Conversor-Celestial/",
        linkGitHub: "https://github.com/n33miaz/Conversor-Celestial",
        detalhes: "Desenvolvido usando JavaScript, CSS e HTML",
    },
    {
        status: "",
        nome: "Desafio do Número Secreto",
        imagem: "./assets/desafio_do_numero_secreto.jpeg",
        linkSite: "https://n33miaz.github.io/Desafio-do-Numero-Secreto/",
        linkGitHub: "https://github.com/n33miaz/Desafio-do-Numero-Secreto",
        detalhes: "Desenvolvido usando JavaScript, CSS e HTML",
    },
    {
        status: "",
        nome: "N/A",
        imagem: "./assets/515X700.png",
        linkSite: "https://via.placeholder.com/515X700",
        linkGitHub: "https://via.placeholder.com/515X700",
        detalhes: "N/A",
    },
    {
        status: "",
        nome: "N/A",
        imagem: "./assets/515X700.png",
        linkSite: "https://via.placeholder.com/515X700",
        linkGitHub: "https://via.placeholder.com/515X700",
        detalhes: "N/A",
    }, 
];

const carousel = document.getElementById("carousel");

// biome-ignore lint/complexity/noForEach: <explanation>
projetos.forEach(projeto => {
    const item = document.createElement("div");
    item.classList = "w-64 flex-shrink-0 snap-center p-4 bg-secondary rounded-lg shadow-lg transition-transform transform hover:scale-105";
    item.innerHTML = `
        <a href="${projeto.linkSite}" target="_blank">
            <img src="${projeto.imagem}" alt="${projeto.nome}" class="rounded-lg w-full h-40 object-cover mb-2">
            <h3 class="text-lg font-semibold">${projeto.nome}</h3>
        </a>
        <p class="text-sm text-gray-400 mb-2">${projeto.detalhes}</p>
        <div class="flex justify-between items-center">
            <a href="${projeto.linkGitHub}" target="_blank" class="text-sm text-accent">📎 Ver no GitHub</a>
            <button onclick="window.open('${projeto.linkSite}', '_blank')" class="px-3 py-1 bg-accent text-white rounded-md text-sm">Acessar</button>
        </div>
    `;
    carousel.appendChild(item);
});

function nextSlide() {
    carousel.scrollBy({ left: 280, behavior: 'smooth' });
}

function prevSlide() {
    carousel.scrollBy({ left: -280, behavior: 'smooth' });
}

const toggleDarkMode = document.getElementById("toggle-darkmode");
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("text-black");
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
});