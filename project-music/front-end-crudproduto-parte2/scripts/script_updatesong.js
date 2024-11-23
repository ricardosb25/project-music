function getQueryParameter() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    return id;
}

function clearTextFields() {
    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("banda").value = "";
    document.getElementById("album").value = "";
}

async function loadSongData() {
    const songId = getQueryParameter();
    if (!songId) {
        alert('ID do musica não encontrado.');
        return;
    }

    const url = `http://localhost:8080/musica/list/${songId}`;
    const response = await fetch(url, { method: "GET" });

    if (response.status === 200) {
        const song = await response.json();
        document.getElementById('songId').value = song.id;
        document.getElementById('nome').value = song.nome;
        document.getElementById('ano').value = song.ano;
        document.getElementById('banda').value = song.banda;
        document.getElementById('album').value = song.album;
    } else {
        alert('Erro ao carregar os dados do musica.');
    }
}

async function updateSong() {
    const songId = document.getElementById('songId').value;
    const nome = document.getElementById('nome').value;
    const ano = document.getElementById('ano').value;
    const banda = document.getElementById('banda').value;
    const album = document.getElementById('album').value;

    const data = {
        nome: nome,
        ano: ano,
        banda: banda,
        album: album
    };

    const url = `http://localhost:8080/musica/update`;
    const option = {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: songId, ...data })
    };

    const result = await fetch(url, option);
    if (result.status === 200) {
        alert('Musica atualizado com sucesso!');
        window.location.href = 'listallsongs.html'; 
    } else {
        alert('Erro ao atualizar o musica.');
    }
}

loadSongData();
