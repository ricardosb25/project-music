function clearTextFields(){
    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("album").value = "";
    document.getElementById("banda").value = ""; 
}

async function addSong(){
    const nome = document.getElementById("nome").value.trim();
    const ano = document.getElementById("ano").value.trim();
    const album = document.getElementById("album").value.trim();
    const banda = document.getElementById("banda").value.trim();
    if (!nome || !ano || !album || !banda) {
        alert("Todos os campos são obrigatórios.");
        return;
    }
    const formE1 = document.querySelector("#addsong");
    const formData = new FormData(formE1);
    const song = Object.fromEntries(formData);
    const url = "http://localhost:8080/musica/add";
    const option = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(song)
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
