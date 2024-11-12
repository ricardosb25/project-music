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

    tab += `
        <tr>
            <td>${product.id}</td>
            <td>${product.descricao}</td>
            <td>${product.preco}</td>
            <td><button onclick="updateProduct(${product.id})"><img src="images/edit01.png" width="20" height="15"></button></td>
            <td><button onclick="deleteProduct(${product.id})"><img src="images/trash01.png" width="20" height="15"></button></td>
        </tr>
    `;

    document.getElementById("products").innerHTML = tab;
}
