package tn.noteit.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Utilisateurs")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Utilisateur {
	@Id
	@GeneratedValue
	private int id;
	private String username;
	
	@Column(unique = true, nullable = false)
	private String email;
	private String password;
	
	@ManyToMany
	private List<Note> notes;
	
	@ManyToMany
	private List<Project> projects;
	
	@ManyToMany
	private List<Notebook> notebooks;
	
	public Utilisateur(String username, String email) {
		super();
		this.username = username;
		this.email = email;
	}
	@ElementCollection(fetch = FetchType.EAGER)
	  List<Role> roles;
	
}
