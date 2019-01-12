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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import tn.noteit.domain.Project;
import tn.noteit.domain.Utilisateur;
import tn.noteit.repository.IProjectRepository;
import tn.noteit.service.IProjectService;

@CrossOrigin(origins = "*")
@RestController()
@RequestMapping("project")
public class ProjectRestController {

	
	@Autowired
	IProjectRepository projectRepository;
	
	@Autowired
	IProjectService projectService;
	
	@GetMapping()
	public List<Project> allNotes(){
		return projectRepository.findAll();
	}
	
	@PostMapping()
	public ResponseEntity<Project> create(@RequestBody ObjectNode json) throws JsonProcessingException{
		
		Utilisateur user = new Utilisateur();
		Project projectToAdd = new Project();
		ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        
        
        	projectToAdd =  objectMapper.treeToValue(json.get("Project"), Project.class);
			user =  objectMapper.treeToValue(json.get("user"), Utilisateur.class);
		
		
		System.out.println(projectToAdd);
		System.out.println(user);
		
		try {
			projectService.addProject(projectToAdd, user);
			return new ResponseEntity<Project>(projectToAdd, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Project>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
}
