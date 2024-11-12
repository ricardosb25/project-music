package ry.project.music.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ry.project.music.entity.Produto;
import ry.project.music.service.ArtistaService;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ArtistaController {

    @Autowired
    ArtistaService artistaService;

    // retorna lista de produtos
    @GetMapping("/listall")
    public ResponseEntity<List<Produto>> getAllProducts() {
        List<Produto> produtos = artistaService.getAllProductsService();
        return ResponseEntity.ok(produtos);
    }

    /*
    // retorna os dados de um produto cujo id é fornecido
    @GetMapping("/list/{id}")
    public ResponseEntity<Optional<Produto>> getProductService(@PathVariable Integer id) {
        Optional<Produto> produto = artistaService.getProductService(id);
        return ResponseEntity.ok(produto);
    }
    */


    //@CrossOrigin
    @GetMapping("/list/{id}")
    public ResponseEntity<Produto> getProductService(@PathVariable Integer id) {
        var produto = artistaService.getProductService(id);
        if (produto.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(produto.get());
    }
     


    //insere produto na base de dados
    @PostMapping("/add")
    public ResponseEntity<Produto> addProduct(@RequestBody Produto produto){
        Produto newProduct = artistaService.insertProductService(produto);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }

    //atualiza produto na base de dados
    @PutMapping("/update")
    public ResponseEntity<Produto> updateProduct(@RequestBody Produto produto){
        Produto updatedProduct = artistaService.updateProductService(produto);
        return ResponseEntity.ok(updatedProduct);
    }

    //delete os dados de um produto cujo id é fornecido
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
        artistaService.deleteProductByIdService(id);
        return ResponseEntity.noContent().build();
    }
}
