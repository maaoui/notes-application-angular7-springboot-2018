package tn.noteit.service;

import java.util.List;

import tn.noteit.domain.Feedback;


public interface IFeedbackService {
	List<Feedback> getAllNotes();
	boolean addNote(Feedback feedback);
}
