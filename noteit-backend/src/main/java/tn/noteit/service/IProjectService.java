package tn.noteit.service;

import java.util.List;

import tn.noteit.domain.Project;
import tn.noteit.domain.Utilisateur;

public interface IProjectService {
	List<Project> getAllProject();
	boolean addProject(Project project ,Utilisateur user );
	

}
