async function listById() {
    const id = document.getElementById("listbyid").value;
    if (!id) {
        alert("Por favor, insira um ID válido");
        return;
    }

    const url = `http://localhost:8080/artista/list/${id}`;
    try {
        const result = await fetch(url, { method: "GET" });
        if (result.status === 200) {
            const artist = await result.json();
            showProduct(artist);
        } else {
            alert('Música não encontradnameo');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar artista');
    }
}

function showProduct(artist) {
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

    tab += `
        <tr>
            <td>${artist.id}</td>
            <td>${artist.nome}</td>
            <td>${artist.idade}</td>
            <td>${artist.banda}</td>
            <td>${artist.pais}</td>
            <td><a href='updateartist.html?id=${artist.id}'><img src="images/edit01.png" width="20" height="15"></a></td>
                <td><button onclick="deleteArtist(${artist.id})"><img src="images/trash01.png" width="20" height="15"></button></td>
        </tr>
    `;

    document.getElementById("artists").innerHTML = tab;
}
