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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import tn.noteit.domain.Note;
import tn.noteit.domain.Utilisateur;
import tn.noteit.repository.INotesRepository;
import tn.noteit.service.INoteService;

@CrossOrigin(origins = "*" )
@RestController()
@RequestMapping("notes")
public class NoteRestController {

	@Autowired
	private INotesRepository repository;
	
	@Autowired
	private INoteService noteService;
	@GetMapping()
	public List<Note> allNotes(){
		return repository.findAll();
	}
	
	
	@PostMapping()
	public ResponseEntity<Note> create(@RequestBody ObjectNode json) throws JsonProcessingException{
		
		Utilisateur user = new Utilisateur();
		Note noteToAdd = new Note();
		ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        
        
        	noteToAdd =  objectMapper.treeToValue(json.get("note"), Note.class);
			user =  objectMapper.treeToValue(json.get("user"), Utilisateur.class);
		
		
		System.out.println(noteToAdd);
		System.out.println(user);
		
		try {
			noteService.addNote(noteToAdd, user);
			return new ResponseEntity<Note>(noteToAdd, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Note>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
	
	@PutMapping
	public ResponseEntity<Note> update(@RequestBody Note N) {

		try {
			repository.save(N);
			return new ResponseEntity<Note>(N, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<Note>(HttpStatus.NOT_ACCEPTABLE);
		}

	}
	
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Note> deleteById(@PathVariable("id") int id) {
		Optional<Note> resultat = repository.findById(id);
		if (resultat.isPresent()) {
			repository.delete(resultat.get());
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}

		else
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
	}

}

