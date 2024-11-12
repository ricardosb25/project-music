async function listById() {
    const id = document.getElementById("listbyid").value;
    if (!id) {
        alert("Por favor, insira um ID válido");
        return;
    }

    const url = `http://localhost:8080/produto/list/${id}`;
    try {
        const result = await fetch(url, { method: "GET" });
        if (result.status === 200) {
            const product = await result.json();
            showProduct(product);
        } else {
            alert('Produto não encontrado');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar produto');
    }
}

function showProduct(product) {
    

    document.getElementById("products").innerHTML = tab;
}



async function updateProduct(id) {
    const formE1 = document.querySelector("#formupdate");
    const formData = new FormData(formE1);
    const product = Object.fromEntries(formData);
    const url = "http://localhost:8080/produto/update";
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
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