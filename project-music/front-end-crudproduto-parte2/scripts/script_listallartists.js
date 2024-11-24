function clearLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("listbyid").value = "";
}

function clearSearch() {
    document.getElementById("listbyid").value = "";
}

function handleEnter(event) {
    if (event.key === 'Enter') {
      listById();
    }
  }

function showArtists(artists) {
    let tab = `
        <thead>
            <tr>
                <th>Id</th>
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
                <td><button class="btneditar" onclick="window.location.href='updateartist.html?id=${artist.id}'"><svg class="svgIconEditar" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M603.733333 181.333333L386.133333 401.066667c-6.4 6.4-10.666667 14.933333-12.8 25.6l-51.2 211.2c-8.533333 38.4 23.466667 74.666667 61.866667 64l200.533333-53.333334c8.533333-2.133333 17.066667-6.4 23.466667-14.933333l234.666667-236.8V853.333333c0 40.533333-32 72.533333-70.4 74.666667H170.666667c-40.533333 0-74.666667-34.133333-74.666667-74.666667V256c0-40.533333 34.133333-74.666667 74.666667-74.666667h433.066666z" ></path><path d="M738.133333 147.2L435.2 448c-4.266667 4.266667-6.4 8.533333-8.533333 14.933333l-32 125.866667c-6.4 23.466667 14.933333 44.8 38.4 38.4l128-29.866667c6.4-2.133333 10.666667-4.266667 14.933333-8.533333l300.8-302.933333c38.4-38.4 38.4-102.4 0-140.8s-100.266667-38.4-138.666667 2.133333z" fill="#ffffff"></path></svg></button></td>
                <td><button class="btndeletar" onclick="deleteArtist(${artist.id})"><svg viewBox="0 0 448 512" class="svgIconDeletar"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button></td>    
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

listAllArtists();
