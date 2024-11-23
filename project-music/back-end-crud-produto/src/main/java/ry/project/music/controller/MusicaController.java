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

import ry.project.music.entity.Musica;
import ry.project.music.service.MusicaService;

@RestController
@RequestMapping("/musica")
public class MusicaController {

    @Autowired
    MusicaService musicaService;

    // retorna lista de musicas
    @GetMapping("/listall")
    public ResponseEntity<List<Musica>> getAllSongs() {
        List<Musica> musicas = musicaService.getAllSongsService();
        return ResponseEntity.ok(musicas);
    }


    //@CrossOrigin
    @GetMapping("/list/{id}")
    public ResponseEntity<Musica> getSongService(@PathVariable Integer id) {
        var musica = musicaService.getSongService(id);
        if (musica.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(musica.get());
    }
     


    //insere musica na base de dados
    @PostMapping("/add")
    public ResponseEntity<Musica> addSong(@RequestBody Musica musica){
        Musica newSong = musicaService.insertSongService(musica);
        return new ResponseEntity<>(newSong, HttpStatus.CREATED);
    }

    //atualiza musica na base de dados
    @PutMapping("/update")
    public ResponseEntity<Musica> updateSong(@RequestBody Musica musica){
        Musica updatedSong = musicaService.updateSongService(musica);
        return ResponseEntity.ok(updatedSong);
    }

    //delete os dados de um musica cujo id é fornecido
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteSong(@PathVariable Integer id){
        musicaService.deleteSongByIdService(id);
        return ResponseEntity.noContent().build();
    }
}
