package com.Controllers;

import com.Exception.ResourceNotFoundException;
import com.Model.Immigrant;
import com.Repositories.ImmigrantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ImmigrantController {

    @Autowired
    private ImmigrantRepository immigrantRepository;

  /*  @GetMapping("/immigrants")
    public Page<Immigrant> getImmigrants(Pageable pageable) {
        return immigrantRepository.findAll(pageable);
    }

    @GetMapping("/immigrants")
    public Page<Immigrant> getImmigrants(Pageable pageable) {
        return immigrantRepository.findAll(pageable);
    } */

    @GetMapping("/immigrants")
    public Page<Immigrant> getImmigrants(Pageable pageable) {
        return immigrantRepository.findAll(pageable);
    }

//    @RequestMapping(consumes = {"application/json"})
    @PostMapping("/immigrants")
    public Immigrant createImmigrant(@Valid @RequestBody Immigrant imm) {
        return immigrantRepository.save(imm);
    }

    @PutMapping("/immigrants/{immigrantId}")
    public Immigrant updateImmigrant(@PathVariable Long immigrantId,
                                   @Valid @RequestBody Immigrant immigrantRequest) {
        return immigrantRepository.findById(immigrantId)
                .map(immigrant -> {
                    immigrant.setName(immigrantRequest.getName());
                    immigrant.setPassport(immigrantRequest.getPassport());
										immigrant.setPais(immigrantRequest.getPais());
                    immigrant.setGenero(immigrantRequest.getGenero());
										immigrant.setNomePai(immigrantRequest.getNomePai());
                    immigrant.setNomeMae(immigrantRequest.getNomeMae());
										immigrant.setDataEntrada(immigrantRequest.getDataEntrada());
										immigrant.setDataSaida(immigrantRequest.getDataSaida());
										immigrant.setDataNascimento(immigrantRequest.getDataNascimento());

                    return immigrantRepository.save(immigrant);
                }).orElseThrow(() -> new ResourceNotFoundException("Immigrant not found with id " + immigrantId));
    }


    @DeleteMapping("/immigrants/{immigrantId}")
    public ResponseEntity<?> deleteImmigrant(@PathVariable Long immigrantId) {
        return immigrantRepository.findById(immigrantId)
                .map(immigrant -> {
                    immigrantRepository.delete(immigrant);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Immigrant not found with id " + immigrantId));
    }
}
