package com.Repositories;

import com.Model.Immigrant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Date;

@Repository
public interface ImmigrantRepository extends JpaRepository<Immigrant, Long> {
  List<Immigrant> findByNomeContaining(String nome);
  Immigrant findByPassaporte(String passaporte);
  List<Immigrant> findByNomeContainingAndPais(String nome, String pais);
  List<Immigrant> findByDataentrada(String dataentrada);
  List<Immigrant> findByDatasaida(String datasaida);
}
