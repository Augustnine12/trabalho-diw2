const dados = {
    "results":[
        {
            "backdrop_path":"/5jkE2SzR5uR2egEb1rRhF22JyWN.jpg",
            "id":671,
            "original_language":"en",
            "original_title":"Harry Potter and the Philosopher's Stone",
            "overview":"Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursley. Em seu aniversário de 11 anos ele recebe uma carta que mudará sua vida: um convite para ingressar em Hogwarts.",
            "popularity":333.563,
            "poster_path":"/l1FfRmKRNXRSqXT5GlMo16MX2LX.jpg",
            "release_date":"2001-11-16",
            "title":"Harry Potter e a Pedra Filosofal",
            "vote_average":7.9
        },
        {
            "backdrop_path":"/urDWNffjwmNi5IQaezw9GwqkUXa.jpg",
            "id":767,"original_language":"en",
            "original_title":"Harry Potter and the Half-Blood Prince",
            "overview":"À medida que Lorde Voldemort aperta seu cerco ao mundo dos Trouxas e dos feiticeiros. Hogwarts deixou de ser um paraiso protegido. Harry suspeita que existam perigos até mesmo dentro do castelo, mas Dumbledore está mais preocupado para a batalha final que está próximo de se iniciar. Juntos, eles se esforçam para descobrir a chave que desbloqueia as defesas de Voldemort e, para isso, Dumbledore recruta seu velho amigo horace slughorn, quem, ele acredita, possuí informações valiosas a respeito. Mesmo quando um confronto decisivo se aproxima, há tempo para romance nos corações de Harry, Ron, Hermione e seus colegas de classe. O amor está no ar, mas o perigo também e Hogwarts poderá nunca mais ser a mesma.",
            "popularity":187.202,
            "poster_path":"/hTQQ5l9mxA3Rob8PTyvrNNGuj6y.jpg",
            "release_date":"2009-07-07",
            "title":"Harry Potter e o Enigma do Príncipe",
            "vote_average":7.7
        },
        {
            "backdrop_path":"/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
            "id":672,"original_language":"en",
            "original_title":"Harry Potter and the Chamber of Secrets",
            "overview":"Carros voadores, árvores que lutam e um misterioso elfo, com um aviso ainda mais misterioso. Harry Potter está pronto para dar início ao segundo ano de sua maravilhosa jornada no mundo da bruxaria. Em Hogwarts nesse ano, aranhas falam, cartas dão broncas e a habilidade de Harry para falar com cobras voltará contra ele. De clubes de duelo a jogadores de quadribol desonestos, esse será um ano de aventura e perigo para todos. Quando a mensagem sangrenta na parede anuncia que a Câmara Secreta foi aberta, Harry, Rony e Hermione percebem que para salvar Hogwarts será preciso muita mágica e coragem. Confira essa enfeitiçante adaptação do segundo livro da obra da escritora J.K. Rowling e prepare-se para ficar petrificado quando Harry Potter demonstrar que, mais que um bruxo, é um verdadeiro herói.",
            "popularity":291.834,
            "poster_path":"/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg",
            "release_date":"2002-11-13",
            "title":"Harry Potter e a Câmara Secreta",
            "vote_average":7.7
        },
    ]
}


const mostarFilmes = (data) =>{
    let dados = JSON.parse(data.target.response)
    localStorage.setItem('db_filmes', data.target.response)
    let dadosHTML = '';
    for (let i = 0; i < 12; i++) {
        let filme = dados.results[i];
        dadosHTML += `
        <div class="col-4">
            <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="Filme XPTO">
            <div class="card-body">
                <h5 class="card-title">${filme.title}</h5>
                <p class="card-text">${filme.overview}</p>
                <p class="avaliacao">Avalição: ${filme.release_date}</p>
                <p class="idioma">Idioma: ${filme.original_language}</p>
                <a href="detalheFilme.html?id=${filme.id}" class="btn btn-primary">Veja mais...</a>
            </div>
        </div>`
    }
    document.getElementById('divListarFilmes').innerHTML = dadosHTML
}

const init =  () => {
    let xhr = new XMLHttpRequest ();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=61f5c23ac107c76ebf930a870d63113c&language=pt-BR"
    xhr.onload = mostarFilmes
    xhr.open ('GET', url, true);
    xhr.send ();
}

document.body.onload = init