package tn.noteit.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.noteit.domain.Feedback;
import tn.noteit.repository.IFedbackRepository;
import tn.noteit.service.IFeedbackService;

@CrossOrigin(origins = "*" )
@RestController()
@RequestMapping("feedback")

public class FeedbackRestController {
	
	@Autowired
	IFedbackRepository repository;
	
	@Autowired
	IFeedbackService feedbackService;
	
	@GetMapping()
	public List<Feedback> allNotes(){
		return repository.findAll();
	}
	
	@PutMapping
	public ResponseEntity<Feedback> create(@RequestBody Feedback N){
		try {
			repository.save(N);
			return new ResponseEntity<Feedback>(N, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Feedback>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
}
