package ry.project.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ry.project.music.entity.Musica;

public interface MusicaRepository extends JpaRepository<Musica, Integer> {

}
