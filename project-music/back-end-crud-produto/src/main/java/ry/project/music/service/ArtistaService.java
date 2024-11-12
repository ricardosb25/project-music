package ry.project.music.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ry.project.music.entity.Produto;
import ry.project.music.repository.ArtistaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ArtistaService {

    @Autowired
    ArtistaRepository artistaRepository;

    public List<Produto> getAllProductsService() {
        List<Produto> produtos = artistaRepository.findAll();
        return produtos;
    }

    public Optional<Produto> getProductService(Integer id){
        return artistaRepository.findById(id);
    }

    public Produto insertProductService(Produto produto){
        return artistaRepository.save(produto);
    }

    public void deleteProductByIdService(Integer id){
        artistaRepository.deleteById(id);
    }

    public Produto updateProductService(Produto produto){
        Produto updatedProduct = artistaRepository.findById(produto.getId()).get();
        updatedProduct = produto;
        return artistaRepository.save(updatedProduct);
    }
}
