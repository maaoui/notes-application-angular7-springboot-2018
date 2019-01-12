package tn.noteit.service;

import java.util.List;
import java.util.Optional;

import tn.noteit.domain.Note;
import tn.noteit.domain.Utilisateur;

public interface IUtilisateurService {
	
	List<Utilisateur> getAllusers();
	boolean saveUser(Utilisateur utilisateur);
	boolean deleteUser(Utilisateur utilisateur);
	Optional<List<Utilisateur>> findByUsername(String username);
	Optional<Utilisateur> findByEmail(String email);
	Optional<Utilisateur>  findById(int id);
	boolean addNoteToUser(Note Note,Utilisateur utilisateur);
	List<Note> getUserBooks(String email);
	boolean removeNoteFromUser(Note note, Utilisateur utilisateur);
	Utilisateur findByEmailAndPassword(String email,String password);
	String signin(String email, String password);
	String signup(Utilisateur user);

}
