package tn.noteit.service;

import java.util.List;


import tn.noteit.domain.Task;

public interface ITaskService {
	List<Task> getAllTasks();
	boolean addTask(Task task);

}
