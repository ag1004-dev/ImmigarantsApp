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
    private String name;

    @Column(columnDefinition = "text", unique = true)
    private String passport;
    
    @Column(columnDefinition = "date")
    private Date data;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassport() {
		return passport;
	}

	public void setPassport(String passport) {
		this.passport = passport;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}
}
