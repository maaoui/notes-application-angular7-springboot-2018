package tn.noteit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.noteit.domain.Feedback;

public interface IFedbackRepository extends JpaRepository<Feedback, Integer>{

}
