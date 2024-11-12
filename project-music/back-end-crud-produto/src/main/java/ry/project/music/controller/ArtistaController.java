package ry.project.music.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ry.project.music.entity.Artista;
import ry.project.music.service.ArtistaService;

@RestController
@RequestMapping("/artista")
public class ArtistaController {

    @Autowired
    ArtistaService artistaService;

    // retorna lista de artistas
    @GetMapping("/listall")
    public ResponseEntity<List<Artista>> getAllArtists() {
        List<Artista> artistas = artistaService.getAllArtistsService();
        return ResponseEntity.ok(artistas);
    }

    /*
    // retorna os dados de um artista cujo id é fornecido
    @GetMapping("/list/{id}")
    public ResponseEntity<Optional<Artista>> getArtistService(@PathVariable Integer id) {
        Optional<Artista> artista = artistaService.getArtistService(id);
        return ResponseEntity.ok(artista);
    }
    */


    //@CrossOrigin
    @GetMapping("/list/{id}")
    public ResponseEntity<Artista> getArtistService(@PathVariable Integer id) {
        var artista = artistaService.getArtistService(id);
        if (artista.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(artista.get());
    }
     


    //insere artista na base de dados
    @PostMapping("/add")
    public ResponseEntity<Artista> addArtist(@RequestBody Artista artista){
        Artista newArtist = artistaService.insertArtistService(artista);
        return new ResponseEntity<>(newArtist, HttpStatus.CREATED);
    }

    //atualiza artista na base de dados
    @PutMapping("/update")
    public ResponseEntity<Artista> updateArtist(@RequestBody Artista artista){
        Artista updatedArtist = artistaService.updateArtistService(artista);
        return ResponseEntity.ok(updatedArtist);
    }

    //delete os dados de um artista cujo id é fornecido
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteArtist(@PathVariable Integer id){
        artistaService.deleteArtistByIdService(id);
        return ResponseEntity.noContent().build();
    }
}
