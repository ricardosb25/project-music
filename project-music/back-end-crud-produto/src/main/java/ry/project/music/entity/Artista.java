package ry.project.music.entity;

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
    private String banda;
    @Column(name = "pais")
    private String pais;
    
}
