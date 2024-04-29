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

for (const exibirProjetos of projetos)
{
    const containerProjeto =
    `
    <div class="projeto ${exibirProjetos.status}">
        <a href="${exibirProjetos.linkSite}" target="_blank">
        <img src="${exibirProjetos.imagem}" alt="Projeto ${exibirProjetos.nome}">
        <h3>${exibirProjetos.nome}</h3>
        <div class="informacoes-projeto">
            <p>${exibirProjetos.detalhes}</p>
            <a href="${exibirProjetos.linkGitHub}" target="_blank">
                <p>📎 Ver no GitHub</p>
            </a>
        </div>
        </a>
    </div>
    `;

    document.getElementById("container-projetos").innerHTML += containerProjeto;
};