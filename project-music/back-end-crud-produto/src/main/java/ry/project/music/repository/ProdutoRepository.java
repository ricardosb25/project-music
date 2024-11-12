package ry.project.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ry.project.music.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}
