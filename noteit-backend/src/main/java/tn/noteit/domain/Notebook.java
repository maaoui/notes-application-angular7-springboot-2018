package tn.noteit.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="notesbooks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notebook {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy ="notebook", cascade = CascadeType.ALL)
	private List<Note> notes;
	
	@ManyToMany(mappedBy="notebooks")
	@JsonIgnore
	private List <Utilisateur> users;

	public Notebook(int id, String name){
		this.id=id;
		this.name=name;
	}

	public Notebook(String name) {
		super();
		this.name = name;
	}
}

