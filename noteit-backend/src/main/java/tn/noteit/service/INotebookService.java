package tn.noteit.service;

import java.util.List;


import tn.noteit.domain.Notebook;

public interface INotebookService {
	List<Notebook> getAllNotebooks();
	boolean addNotebook(Notebook notebook);
}
