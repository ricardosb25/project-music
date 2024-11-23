package ry.project.music.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ry.project.music.entity.Musica;
import ry.project.music.repository.MusicaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MusicaService {

    @Autowired
    MusicaRepository musicaRepository;

    public List<Musica> getAllSongsService() {
        List<Musica> musicas = musicaRepository.findAll();
        return musicas;
    }

    public Optional<Musica> getSongService(Integer id){
        return musicaRepository.findById(id);
    }

    public Musica insertSongService(Musica musica){
        return musicaRepository.save(musica);
    }

    public void deleteSongByIdService(Integer id){
        musicaRepository.deleteById(id);
    }

    public Musica updateSongService(Musica musica){
        Musica updatedSong = musicaRepository.findById(musica.getId()).get();
        updatedSong = musica;
        return musicaRepository.save(updatedSong);
    }
}
