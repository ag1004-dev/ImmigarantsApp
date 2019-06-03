package com.Model;

import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "immigrants")
public class Immigrant extends AuditModel {
    @Id
    @GeneratedValue(generator = "immigrant_generator")
    @SequenceGenerator(
            name = "immigrant_generator",
            sequenceName = "immigrant_sequence",
            initialValue = 1000
    )
    private Long id;

    @NotBlank
    @Size(min = 3, max = 100)
    private String nome;

    @NotBlank
    @Column(columnDefinition = "text", unique = true)
    private String passaporte;

    @Column(columnDefinition = "text")
    private String pais;

    @Column(columnDefinition = "date")
    private Date dataentrada;

    @Column(columnDefinition = "date")
    private Date datasaida;

    @Column(columnDefinition = "text")
    private String genero;

    @Column(columnDefinition = "text")
    private String nomepai;

    @Column(columnDefinition = "text")
    private String nomemae;

    @Column(columnDefinition = "date")
    private Date datanascimento;

    @Column(columnDefinition = "text")
    private String tipo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public Date getDatanascimento() {
		return datanascimento;
	}

	public void setDatanascimento(Date data) {
		this.datanascimento = data;
	}

  public Date getDataentrada() {
    return dataentrada;
  }

  public void setDataentrada(Date data) {
    this.dataentrada = data;
  }

  public Date getDatasaida() {
    return datanascimento;
  }

  public void setDatasaida(Date data) {
    this.datanascimento = data;
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

  public String getTipo() {
    return tipo;
  }

  public void setTipo(String tipo) {
    this.tipo = tipo;
  }
}
