package com.Controllers;

import com.Exception.ResourceNotFoundException;
import com.Model.Immigrant;
import com.Repositories.ImmigrantRepository;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ImmigrantController {

    @Autowired
    private ImmigrantRepository immigrantRepository;

    //Rotas de GET
    @GetMapping("/immigrants/{name}")
    public List<Immigrant> getImmigrantsByName(@PathVariable String name) {
         return immigrantRepository.findByNomeContaining(name);
     }

     @GetMapping("/gender/{genero}")
     public List<Immigrant> getImmigrantsByGender(@PathVariable String genero) {
          return immigrantRepository.findByGenero(genero);
      }

     @GetMapping("/pais/{pais}")
     public List<Immigrant> getImmigrantsByCountry(@PathVariable String pais) {
          return immigrantRepository.findByPais(pais);
      }

     @GetMapping("/immigrants/{name}/{pais}")
     public List<Immigrant> getImmigrantsByNameAndCountry(@PathVariable String pais, @PathVariable String name) {
          return immigrantRepository.findByNomeContainingAndPais(name, pais);
      }

   @GetMapping("/pass/{passport}")
   public Immigrant getImmigrantsByPassport(@PathVariable String passport) {
        return immigrantRepository.findByPassaporte(passport);
    }

    @GetMapping("/dataent/{day}/{month}/{year}")
    public List<Immigrant> getImmigrantsByDataentrada(@PathVariable String day, @PathVariable String month,
            @PathVariable String year) {
        String fetch = day + '/' + month + '/' + year;
        return immigrantRepository.findByDataentrada(fetch);
    }

    @GetMapping("/datasai/{day}/{month}/{year}")
    public List<Immigrant> getImmigrantsByDatasaida(@PathVariable String day, @PathVariable String month,
            @PathVariable String year) {
        String fetch = day + '/' + month + '/' + year;
        return immigrantRepository.findByDatasaida(fetch);
    }

    @GetMapping("/datanasc/{day}/{month}/{year}")
    public List<Immigrant> getImmigrantsByDatanascimento(@PathVariable String day, @PathVariable String month,
            @PathVariable String year) {
        String fetch = day + '/' + month + '/' + year;
        return immigrantRepository.findByDatanascimento(fetch);
    }

    @GetMapping("/immigrants")
    public List<Immigrant> getImmigrants() {
        return immigrantRepository.findAll();
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
                    immigrant.setNome(immigrantRequest.getNome());
                    immigrant.setPassaporte(immigrantRequest.getPassaporte());
										immigrant.setPais(immigrantRequest.getPais());
                    immigrant.setGenero(immigrantRequest.getGenero());
										immigrant.setNomepai(immigrantRequest.getNomepai());
                    immigrant.setNomemae(immigrantRequest.getNomemae());
										immigrant.setDataentrada(immigrantRequest.getDataentrada());
										immigrant.setDatasaida(immigrantRequest.getDatasaida());
										immigrant.setDatanascimento(immigrantRequest.getDatanascimento());

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
