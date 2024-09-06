function pesquisar() {
    
    // Seleciona o elemento com o ID "resultados-pesquisa" e armazena em uma variável
    let section = document.getElementById("resultados-pesquisa");
    
    // Seleciona o valor do elemento com o ID "campo-pesquisa" e armazena em uma variável
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase().trim()
    
    //Adiciona uma validação para não permitir pesquisa com textos menores que 3 itens
    if(campoPesquisa.length < 3){        
        section.innerHTML = "A pesquisa só pode ser feita com um texto com no mínimo 3 caracteres"
        return
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let tituloMin = "";
    let descricaoMin = ""

    // Itera sobre cada elemento do array "dados"
    for (let dado of dados) {

        tituloMin = dado.titulo.toLowerCase()
        descricaoMin = dado.descricao.toLowerCase()

        // Aplica uma condicional se o texto pesquisado, esta incluido no texto do titulo
        if (tituloMin.includes(campoPesquisa) || descricaoMin.includes(campoPesquisa)){

            // Concatena o HTML de cada resultado à string "resultados"
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if(!resultados){
        section.innerHTML = "Não foi encontrado valor para a pesquisa informada"
        return
    }
    
    // Atribui o conteúdo HTML gerado à propriedade innerHTML da seção
    section.innerHTML = resultados;
}