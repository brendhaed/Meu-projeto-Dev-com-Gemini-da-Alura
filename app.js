function pesquisar(){

    //obtem a seção HTML onde os resultados serão exibidos
     let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se pesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada Encontrado!</p>"
    return
    }

campoPesquisa = campoPesquisa.toLowerCase();
    //inicializa uma string vazia para armazenar os resultados
    let resultado = "";
    let artistas = "";
    let albuns = "";
    let genero_musical = "";
    let subgenero = "";
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        genero_musical = dado.genero_musical.toLowerCase()
        subgenero = dado.subgenero.toLowerCase()
        artistas = dado.artistas.toLowerCase()
        albuns = dado.albuns.toLowerCase()
        if(genero_musical.includes(campoPesquisa) || subgenero.includes(campoPesquisa) || 
        artistas.includes(campoPesquisa)||albuns.includes(campoPesquisa)){
    //cria novo elemento
        resultado +=`       
        <div class="item-resultado">
        <h2>${dado.genero_musical}</h2>
        <p class="descricao-meta"> Principais artistas: ${dado.artistas}</p>
        <p class="descricao-meta"> Subgênero: ${dado.subgenero}</p>
        <p class="descricao-meta"> Principais Albuns: ${dado.albuns}</p>
        <a href="${dado.playlist}"> Ouça agora a playlist: </a>
       </div>`;
        }
        
    }

    if(!resultado){
        resultado = "<h5> Gênero, música ou artista não encontrado! <h5>"

    }
    
    //Atribui os resultados gerados á seção HTML
    section.innerHTML = resultado;
}
