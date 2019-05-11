package com.Repositories;

import com.Model.Immigrant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImmigrantRepository extends JpaRepository<Immigrant, Long> {
}
