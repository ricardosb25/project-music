package umc.devapp.crud_produto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class Artista {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "idade")
    private double idade;
    @Column(name = "banda")
    private string banda;
    @Column(name = "pais")
    private string pais;
    
}
