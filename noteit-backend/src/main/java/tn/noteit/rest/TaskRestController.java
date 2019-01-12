package tn.noteit.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.noteit.domain.Task;
import tn.noteit.repository.ITaskRepository;

@CrossOrigin(origins = "*")
@RestController()
@RequestMapping("task")
public class TaskRestController {

	
	@Autowired
	ITaskRepository taskRepository;
	
	
	@GetMapping()
	public List<Task> allTasks(){
		return taskRepository.findAll();
	}
	
	
	@PostMapping()
	public ResponseEntity<Task> create(@RequestBody Task N){
		try {
			taskRepository.save(N);
			return new ResponseEntity<Task>(N, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Task>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
}
