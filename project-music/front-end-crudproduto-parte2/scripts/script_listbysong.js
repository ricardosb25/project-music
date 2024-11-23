async function listById() {
    const id = document.getElementById("listbyid").value;
    if (!id) {
        alert("Por favor, insira um ID válido");
        return;
    }

    const url = `http://localhost:8080/musica/list/${id}`;
    try {
        const result = await fetch(url, { method: "GET" });
        if (result.status === 200) {
            const song = await result.json();
            showSong(song);
        } else {
            alert('Música não encontradnameo');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar musica');
    }
}

function showSong(song) {
    let tab = `
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Ano</th>
                <th>Banda</th>
                <th>Album</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
    `;

    tab += `
        <tr>
            <td>${song.id}</td>
            <td>${song.nome}</td>
            <td>${song.ano}</td>
            <td>${song.banda}</td>
            <td>${song.album}</td>
            <td><a href='updatesong.html?id=${song.id}'><img src="images/edit01.png" width="20" height="15"></a></td>
                <td><button onclick="deleteSong(${song.id})"><img src="images/trash01.png" width="20" height="15"></button></td>
        </tr>
    `;

    document.getElementById("songs").innerHTML = tab;
}
