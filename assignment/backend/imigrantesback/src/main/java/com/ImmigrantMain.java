package com;

import org.springframework.boot.SpringApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableJpaAuditing
public class ImmigrantMain {

	public static void main(String[] args) {
		SpringApplication.run(ImmigrantMain.class, args);
	}

}
