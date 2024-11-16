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
            showArtist(artist);
        } else {
            alert('artista não encontrado');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar artista');
    }
}

function showArtist(artist) {
    

    document.getElementById("artists").innerHTML = tab;
}



async function updateArtist(id) {
    const formE1 = document.querySelector("#formupdate");
    const formData = new FormData(formE1);
    const artist = Object.fromEntries(formData);
    const url = "http://localhost:8080/artista/update";
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artist)
    };

    try {
        const result = await fetch(url, option);
        if (result.status === 201) {
            alert('Atualizado com sucesso');
            location.reload(); 
        } else {
            alert('Erro ao atualizar');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar');
    }
}