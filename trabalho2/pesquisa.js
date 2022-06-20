const api_key = '61f5c23ac107c76ebf930a870d63113c';

function exibeFilme() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let filme = dados.articles[i];
        let data = new Date (filme.publishedAt);

        texto = texto + `
            <div class="box-filme">
                <img src="${filme.poster_path}" alt="">
                <span class="titulo">${filme.title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} - 
                    ${filme.source.name} - 
                    ${filme.author}</span><br>
                <span class="text">
                ${filme.content} <a href="${filme.url}">Leia mais ...</a>
                </span>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilme;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&${query}=Jack+Reacher`);
    // https://api.themoviedb.org/3/search/movie?api_key=61f5c23ac107c76ebf930a870d63113c&language=pt-BR&query=potter
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);