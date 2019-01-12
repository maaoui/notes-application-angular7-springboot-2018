package tn.noteit;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import tn.noteit.service.UtilisateurServiceImpl;
import tn.noteit.service.UserService;
import tn.noteit.domain.Utilisateur;
import tn.noteit.service.INoteService;
import tn.noteit.service.INotebookService;
import tn.noteit.domain.Role;
@SpringBootApplication
public class NoteitApplication {

	
	@Autowired
	  UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(NoteitApplication.class, args);
	}
	
	@Bean
	CommandLineRunner myRunner(INoteService noteService , INotebookService notesbookService , UtilisateurServiceImpl utilisateurService ) {
		return args -> {
//			Notebook b1= new Notebook("classmates");
//			notesbookService.addNotebook(b1);
//			Note n1= new Note ("note ", "hoss hoss",new Date(),b1);
//			noteService.addNote(n1);
			
			
//			Utilisateur admin = new Utilisateur();
//		    admin.setUsername("admin");
//		    admin.setPassword("admin");
//		    admin.setEmail("admin@email.com");
//		    admin.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_ADMIN)));
//
//		    userService.signup(admin);
//
//		    Utilisateur client = new Utilisateur();
//		    client.setUsername("client");
//		    client.setPassword("client");
//		    client.setEmail("client@email.com");
//		    client.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_CLIENT)));
//
//		    userService.signup(client);
//			
		};
	}
}
