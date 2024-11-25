function clearTextFields(){
    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("album").value = "";
    document.getElementById("banda").value = ""; 
}

async function addSong(){
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
