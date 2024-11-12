package ry.project.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ry.project.music.entity.Artista;

public interface ArtistaRepository extends JpaRepository<Artista, Integer> {
}
