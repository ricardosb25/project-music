function getQueryParameter() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    return id;
}

function clearTextFields() {
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("banda").value = "";
    document.getElementById("pais").value = "";
}

async function loadArtistData() {
    const artistId = getQueryParameter();
    if (!artistId) {
        alert('ID do artista não encontrado.');
        return;
    }

    const url = `http://localhost:8080/artista/list/${artistId}`;
    const response = await fetch(url, { method: "GET" });

    if (response.status === 200) {
        const artist = await response.json();
        document.getElementById('artistId').value = artist.id;
        document.getElementById('nome').value = artist.nome;
        document.getElementById('idade').value = artist.idade;
        document.getElementById('banda').value = artist.banda;
        document.getElementById('pais').value = artist.pais;
    } else {
        alert('Erro ao carregar os dados do artista.');
    }
}

async function updateArtist() {
    const artistId = document.getElementById('artistId').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const banda = document.getElementById('banda').value;
    const pais = document.getElementById('pais').value;

    const data = {
        nome: nome,
        idade: idade,
        banda: banda,
        pais: pais
    };

    const url = `http://localhost:8080/artista/update`;
    const option = {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: artistId, ...data })
    };

    const result = await fetch(url, option);
    if (result.status === 200) {
        alert('Artista atualizado com sucesso!');
        window.location.href = 'listallartists.html'; 
    } else {
        alert('Erro ao atualizar o artista.');
    }
}

loadArtistData();
