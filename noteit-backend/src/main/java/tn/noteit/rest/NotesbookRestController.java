package tn.noteit.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.noteit.domain.Notebook;
import tn.noteit.repository.INotesbookRepository;

@CrossOrigin(origins = "*")
@RestController()
@RequestMapping("notesbook")

public class NotesbookRestController {

	
	@Autowired
	INotesbookRepository repository;
	
	@GetMapping()
	public List<Notebook> allNotes(){
		return repository.findAll();
	}
	
	
	@PostMapping()
	public ResponseEntity<Notebook> create(@RequestBody Notebook N){
		try {
			repository.save(N);
			return new ResponseEntity<Notebook>(N, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Notebook>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
	
	@PutMapping
	public ResponseEntity<Notebook> update(@RequestBody Notebook N) {

		try {
			repository.save(N);
			return new ResponseEntity<Notebook>(HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<Notebook>(HttpStatus.NOT_ACCEPTABLE);
		}

	}
	
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Notebook> deleteById(@PathVariable("id") Integer id) {
		Optional<Notebook> resultat = repository.findById(id);
		if (resultat.isPresent()) {
			repository.delete(resultat.get());
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}

		else
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
	}

}


