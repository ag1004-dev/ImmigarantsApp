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

    @Column(columnDefinition = "text", unique = true)
    private String passaporte;

    @Column(columnDefinition = "text")
    private String pais;

    @Column(columnDefinition = "text")
    private String genero;

    @Column(columnDefinition = "text")
    private String nomepai;

    @Column(columnDefinition = "text")
    private String nomemae;

    @Column(columnDefinition = "text")
    private String tipo;

    @Column(columnDefinition = "date")
    private Date datanascimento;

    @Column(columnDefinition = "date")
    private Date dataentrada;

    @Column(columnDefinition = "date")
    private Date datasaida;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return nome;
	}

	public void setName(String name) {
		this.nome = nome;
	}

	public String getPassport() {
		return passaporte;
	}

	public void setPassport(String passaporte) {
		this.passaporte = passaporte;
	}

	public Date getDataNascimento() {
		return datanascimento;
	}

	public void setDataNascimento(Date data) {
		this.datanascimento = data;
	}

  public Date getDataEntrada() {
    return dataentrada;
  }

  public void setDataEntrada(Date data) {
    this.dataentrada = data;
  }

  public Date getDataSaida() {
    return datanascimento;
  }

  public void setDataSaida(Date data) {
    this.datanascimento = data;
  }

  public String getGenero() {
    return genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
  }

  public String getNomePai() {
    return nomepai;
  }

  public void setNomePai(String nomepai) {
    this.nomepai = nomepai;
  }

  public String getNomeMae() {
    return nomemae;
  }

  public void setNomeMae(String nomemae) {
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
