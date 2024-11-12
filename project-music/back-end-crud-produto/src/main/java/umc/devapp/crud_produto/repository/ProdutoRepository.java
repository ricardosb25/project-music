package umc.devapp.crud_produto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import umc.devapp.crud_produto.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}
