package com.Repositories;

import com.Model.Immigrant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ImmigrantRepository extends JpaRepository<Immigrant, Long> {

  List<Immigrant> findByNomeContaining(String nome);
  Immigrant findByPassaporte(String passaporte);
  List<Immigrant> findByNomeContainingAndPais(String nome, String pais);
  List<Immigrant> findByDataentrada(String dataentrada);
  List<Immigrant> findByDatasaida(String datasaida);
  List<Immigrant> findByDatanascimento(String datanascimento);
  List<Immigrant> findByPais(String pais);
  List<Immigrant> findByGenero(String genero);
}
