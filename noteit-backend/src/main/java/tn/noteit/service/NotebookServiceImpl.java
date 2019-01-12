package tn.noteit.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.noteit.domain.Notebook;
import tn.noteit.repository.INotesbookRepository;

@Service
public class NotebookServiceImpl implements INotebookService {

	@Autowired
	INotesbookRepository notesbookRepository;

	@Override
	public List<Notebook> getAllNotebooks() {
		return this.notesbookRepository.findAll();
	}

	@Override
	public boolean addNotebook(Notebook notebook) {
		if (this.notesbookRepository.save(notebook)!=null) return true;
		else 
			return false;
	}
	
	
	}


