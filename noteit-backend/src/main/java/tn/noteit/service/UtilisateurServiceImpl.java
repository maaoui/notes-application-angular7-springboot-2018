package tn.noteit.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import tn.noteit.domain.Note;
import tn.noteit.domain.Role;
import tn.noteit.domain.Utilisateur;
import tn.noteit.exception.CustomException;
import tn.noteit.repository.INotesRepository;
import tn.noteit.repository.IUtilisateursRepository;
import tn.noteit.security.JwtTokenProvider;

@Service
public class UtilisateurServiceImpl implements IUtilisateurService {

	@Autowired
	IUtilisateursRepository utilisateurRepository;
	
	@Autowired 
	INotesRepository livreRepository;
	
	 @Autowired
	  private PasswordEncoder passwordEncoder;

	  @Autowired
	  private JwtTokenProvider jwtTokenProvider;

	  @Autowired
	  private AuthenticationManager authenticationManager;

	  public String signin(String email, String password) {
	    try {
	      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
	      return jwtTokenProvider.createToken(email, utilisateurRepository.findByEmail(email).get().getRoles());
	    } catch (AuthenticationException e) {
	      throw new CustomException("Invalid username/password supplied",HttpStatus.UNPROCESSABLE_ENTITY);
	    }
	  }

	  public String signup(Utilisateur user) {
	    if (!utilisateurRepository.existsByEmail(user.getEmail())) {
	      user.setPassword(passwordEncoder.encode(user.getPassword()));
	      user.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_CLIENT)));

	      utilisateurRepository.save(user);
	      return jwtTokenProvider.createToken(user.getEmail(), user.getRoles());
	    } else {
	      throw new CustomException("email is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
	    }
	  }
	
	
	@Override
	public List<Utilisateur> getAllusers() {
		return this.utilisateurRepository.findAll();
	}

	
	@Override
	public boolean saveUser(Utilisateur utilisateur) {
		if(this.utilisateurRepository.save(utilisateur)!=null) return true;
		else 
			return false;
	}


	@Override
	public boolean deleteUser(Utilisateur utilisateur) {
		this.utilisateurRepository.delete(utilisateur);
		return true;
	}


	@Override
	public Optional<List<Utilisateur>> findByUsername(String username) {
		return this.utilisateurRepository.findByUsername(username);
	}


	@Override
	public Optional<Utilisateur> findById(int id) {
		return this.utilisateurRepository.findById(id);
	}


	@Override
	public Optional<Utilisateur> findByEmail(String email) {
		return this.utilisateurRepository.findByEmail(email);
	}


	@Override
	public boolean addNoteToUser(Note livre, Utilisateur utilisateur) {
		this.livreRepository.save(livre);
		Utilisateur user;
		 user =  this.utilisateurRepository.findByEmail(utilisateur.getEmail()).get();
		if(user!=null) {
		if(user.getNotes().add(livre)) {
			this.utilisateurRepository.save(user);
			return true;
		}
		}
		return false;
	}
	
	
	
	
	@Override
	public boolean removeNoteFromUser(Note livre, Utilisateur utilisateur) {
		if(utilisateur!=null) {
		if(utilisateur.getNotes().remove(livre)) {
			this.utilisateurRepository.save(utilisateur);
			return true;
		}
		}
		return false;
	}


	@Override
	public List<Note> getUserBooks(String email) {
		Optional<Utilisateur> livreOpt = this.utilisateurRepository.findByEmail(email);
		Utilisateur user = livreOpt.isPresent() ? livreOpt.get() : null ;
		if(user!=null) {
			return user.getNotes();
		}
		return null;
	}


	


	@Override
	public Utilisateur findByEmailAndPassword(String email, String password) {
		Optional<Utilisateur> opt = this.utilisateurRepository.findByEmailAndPassword(email, password);
		if( opt.isPresent())
		return opt.get();
		else
			return null;
	}




	

}
