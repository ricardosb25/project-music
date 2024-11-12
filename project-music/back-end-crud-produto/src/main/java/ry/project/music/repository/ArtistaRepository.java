package ry.project.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ry.project.music.entity.Produto;

public interface ArtistaRepository extends JpaRepository<Produto, Integer> {
}
