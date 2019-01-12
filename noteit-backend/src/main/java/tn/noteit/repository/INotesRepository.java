package tn.noteit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.noteit.domain.Note;


public interface INotesRepository extends JpaRepository<Note, Integer>{

}
