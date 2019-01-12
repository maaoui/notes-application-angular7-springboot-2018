package tn.noteit.service;

import java.util.List;

import tn.noteit.domain.Note;
import tn.noteit.domain.Utilisateur;

public interface INoteService {
	
	List<Note> getAllNotes();
	boolean addNote(Note note,Utilisateur user );
	

}
