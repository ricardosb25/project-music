package ry.project.music.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ry.project.music.entity.Artista;
import ry.project.music.repository.ArtistaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ArtistaService {

    @Autowired
    ArtistaRepository artistaRepository;

    public List<Artista> getAllArtistsService() {
        List<Artista> artistas = artistaRepository.findAll();
        return artistas;
    }

    public Optional<Artista> getArtistService(Integer id){
        return artistaRepository.findById(id);
    }

    public Artista insertArtistService(Artista artista){
        return artistaRepository.save(artista);
    }

    public void deleteArtistByIdService(Integer id){
        artistaRepository.deleteById(id);
    }

    public Artista updateArtistService(Artista artista){
        Artista updatedArtist = artistaRepository.findById(artista.getId()).get();
        updatedArtist = artista;
        return artistaRepository.save(updatedArtist);
    }
}
