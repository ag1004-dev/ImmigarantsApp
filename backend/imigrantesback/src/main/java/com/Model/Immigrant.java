package com.Model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "immigrants")
public class Immigrant extends AuditModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @NotBlank
    @Column(columnDefinition = "text")
    private String nome;

    @NotBlank
    @Column(columnDefinition = "text", unique = true)
    private String passaporte;

    @Column(columnDefinition = "text")
    private String pais;

    @Column(columnDefinition = "text")
    private String dataentrada;

    @Column(columnDefinition = "text")
    private String datasaida;

    @Column(columnDefinition = "text")
    private String genero;

    @Column(columnDefinition = "text")
    private String nomepai;

    @Column(columnDefinition = "text")
    private String nomemae;

    @Column(columnDefinition = "text")
      private String datanascimento;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPassaporte() {
		return passaporte;
	}

	public void setPassaporte(String passaporte) {
		this.passaporte = passaporte;
	}

	public String getDatanascimento() {
		return datanascimento;
	}

	public void setDatanascimento(String data) {
		this.datanascimento = data;
	}

  public String getDataentrada() {
    return dataentrada;
  }

  public void setDataentrada(String data) {
    this.dataentrada = data;
  }

  public String getDatasaida() {
    return datasaida;
  }

  public void setDatasaida(String data) {
    this.datasaida = data;
  }

  public String getGenero() {
    return genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
  }

  public String getNomepai() {
    return nomepai;
  }

  public void setNomepai(String nomepai) {
    this.nomepai = nomepai;
  }

  public String getNomemae() {
    return nomemae;
  }

  public void setNomemae(String nomemae) {
    this.nomemae = nomemae;
  }

  public String getPais() {
    return pais;
  }

  public void setPais(String pais) {
    this.pais = pais;
  }
}
