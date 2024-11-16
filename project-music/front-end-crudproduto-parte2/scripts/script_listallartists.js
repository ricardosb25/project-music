function clearLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("listbyid").value = "";
}

function showArtists(artists) {
    let tab = `
        <thead>
            <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Banda</th>
                <th>País</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
    `;
    for (let artist of artists) {
        tab += `
            <tr>
                <td>${artist.id}</td>
                <td>${artist.nome}</td>
                <td>${artist.idade}</td>
                <td>${artist.banda}</td>
                <td>${artist.pais}</td>
                <td><button onclick="updateArtist(${artist.id})"><img src="images/edit01.png" width="20" height="15"></button></td>
                <td><button onclick="deleteArtist(${artist.id})"><img src="images/trash01.png" width="20" height="15"></button></td>
            </tr>
        `;
    }
    document.getElementById("artists").innerHTML = tab;
}

async function listAllArtists() {
    const url = "http://localhost:8080/artista/listall";
    const dados = await fetch(url, { method: "GET" });
    if (dados.status === 200) {
        const artists = await dados.json();
        if (artists) {
            clearLoading();
        }
        showArtists(artists);
    }
}

async function deleteArtist(id) {
    const url = `http://localhost:8080/artista/delete/${id}`;
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const result = await fetch(url, option);
        if (result.status === 204) {
            alert('Deletado com sucesso');
            location.reload(); 
        } else {
            alert('Erro ao deletar');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao deletar');
    }
}

listAllArtists();
