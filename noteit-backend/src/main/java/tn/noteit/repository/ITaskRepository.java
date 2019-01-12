package tn.noteit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.noteit.domain.Task;

public interface ITaskRepository extends JpaRepository<Task, Integer>{

}
