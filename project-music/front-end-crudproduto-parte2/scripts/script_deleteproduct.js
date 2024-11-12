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
