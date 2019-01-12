package tn.noteit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.noteit.domain.Project;
import tn.noteit.domain.Utilisateur;
import tn.noteit.repository.IProjectRepository;

@Service
public class ProjectServiceImpl implements IProjectService{

	@Autowired
	IProjectRepository projectRepository;
	
	@Autowired
	UtilisateurServiceImpl userService ;
	
	@Override
	public List<Project> getAllProject() {
		this.projectRepository.findAll();
		return null;
	}

	@Override
	public boolean addProject(Project project, Utilisateur user) {
		if (this.projectRepository.save(project)!=null ) {
			 user.getProjects().add(project);
			 this.userService.saveUser(user);
			 return true;
			 
		}
		else 
			return false;

}
}
