function clearLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("listbyid").value = "";
}

function showSongs(songs) {
    let tab = `
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Ano</th>
                <th>Banda</th>
                <th>Álbum</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
    `;
    for (let song of songs) {
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
    }
    document.getElementById("songs").innerHTML = tab;
}

async function listAllSongs() {
    const url = "http://localhost:8080/songa/listall";
    const dados = await fetch(url, { method: "GET" });
    if (dados.status === 200) {
        const songs = await dados.json();
        if (songs) {
            clearLoading();
        }
        showSongs(songs);
    }
}

listAllSongs();
