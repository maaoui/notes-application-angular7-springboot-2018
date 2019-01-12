package tn.noteit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.noteit.domain.Task;
import tn.noteit.repository.ITaskRepository;


@Service
public class TaskServiceImpl implements ITaskService {

	@Autowired
	ITaskRepository taskRepository;
	
	@Override
	public List<Task> getAllTasks() {
		this.taskRepository.findAll();
		return null;
	}

	@Override
	public boolean addTask(Task task) {
		if (this.taskRepository.save(task)!=null) return true;
		else 
			return false;
	}
	

}
