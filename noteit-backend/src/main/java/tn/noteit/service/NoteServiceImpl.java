package tn.noteit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.noteit.domain.Note;
import tn.noteit.domain.Utilisateur;
import tn.noteit.repository.INotesRepository;

@Service
public class NoteServiceImpl implements INoteService {

	@Autowired
	INotesRepository notesrepository;
	
	@Autowired
	UtilisateurServiceImpl userService ;
	
	
	@Override
	public List<Note> getAllNotes() {
		
		return this.notesrepository.findAll();
	}

	@Override
	public boolean addNote(Note note,Utilisateur user) {
      
		
		if (this.notesrepository.save(note)!=null ) {
			 user.getNotes().add(note);
			 this.userService.saveUser(user);
			 return true;
			 
		}
		else 
			return false;

	}

		
}
