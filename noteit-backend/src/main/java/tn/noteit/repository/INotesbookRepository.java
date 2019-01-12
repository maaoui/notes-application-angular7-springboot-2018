package tn.noteit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.noteit.domain.Notebook;

public interface INotesbookRepository extends JpaRepository<Notebook, Integer>{

}
