package tn.noteit.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import tn.noteit.domain.Utilisateur;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="notes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Note {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String title;
	private String text;
	private Date lastModifiedOn;
	private String color;
	
	public Note(String title, String text, Date lastModifiedOn, Notebook notebook) {
		super();
		this.title = title;
		this.text = text;
		this.lastModifiedOn = lastModifiedOn;
		this.notebook = notebook;
	}


	@ManyToOne(fetch =FetchType.LAZY)
	private Notebook notebook;
	
	@ManyToMany(mappedBy="notes")
	@JsonIgnore
	private List<Utilisateur> utilisateurs = new ArrayList<>();
}
