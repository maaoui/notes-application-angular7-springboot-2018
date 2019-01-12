package tn.noteit.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import tn.noteit.domain.Project;

public interface IProjectRepository extends JpaRepository<Project, Integer>{

}
