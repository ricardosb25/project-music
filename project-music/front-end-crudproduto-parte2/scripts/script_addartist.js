function clearTextFields(){
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("banda").value = "";
    document.getElementById("pais").value = "";
}

async function addArtist(){
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const banda = document.getElementById("banda").value.trim();
    const pais = document.getElementById("pais").value.trim();
    if (!nome || !idade || !banda || !pais) {
        alert("Todos os campos são obrigatórios.");
        return;
    }
    const formE1 = document.querySelector("#addartist");
    const formData = new FormData(formE1);
    const artist = Object.fromEntries(formData);
    const url = "http://localhost:8080/artista/add";
    const option = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(artist)
    }
    const result = await fetch(url, option);
    if(result.status === 201){
        clearTextFields();
        alert('Cadastrado com sucesso');
    }
    else{
        alert('Erro ao cadastrar');
    }
}
