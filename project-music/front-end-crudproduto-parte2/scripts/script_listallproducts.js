function clearLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("listbyid").value = "";
}

function showProducts(products) {
    let tab = `
        <thead>
            <tr>
                <th>id</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
    `;
    for (let product of products) {
        tab += `
            <tr>
                <td>${product.id}</td>
                <td>${product.descricao}</td>
                <td>${product.preco}</td>
                <td><button onclick="updateProduct(${product.id})"><img src="images/edit01.png" width="20" height="15"></button></td>
                <td><button onclick="deleteProduct(${product.id})"><img src="images/trash01.png" width="20" height="15"></button></td>
            </tr>
        `;
    }
    document.getElementById("products").innerHTML = tab;
}

async function listAllProducts() {
    const url = "http://localhost:8080/produto/listall";
    const dados = await fetch(url, { method: "GET" });
    if (dados.status === 200) {
        const products = await dados.json();
        if (products) {
            clearLoading();
        }
        showProducts(products);
    }
}

async function deleteProduct(id) {
    const url = `http://localhost:8080/produto/delete/${id}`;
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const result = await fetch(url, option);
        if (result.status === 204) {
            alert('Deletado com sucesso');
            location.reload(); 
        } else {
            alert('Erro ao deletar');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao deletar');
    }
}

listAllProducts();
