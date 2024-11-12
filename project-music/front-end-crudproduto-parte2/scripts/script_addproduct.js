function clearTextFields() {
    document.getElementById("descricao").value = "";
    document.getElementById("preco").value = "";
}

async function addProduct() {
    const formE1 = document.querySelector("#formadd");
    const formData = new FormData(formE1);
    const product = Object.fromEntries(formData);
    const url = "http://localhost:8080/produto/add";
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    try {
        const result = await fetch(url, option);
        if (result.status === 201) {
            clearTextFields();
            alert('Cadastrado com sucesso');
            location.reload(); 
        } else {
            alert('Erro ao cadastrar');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao cadastrar');
    }
}
