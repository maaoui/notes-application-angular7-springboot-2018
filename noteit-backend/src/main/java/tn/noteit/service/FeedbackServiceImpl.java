package tn.noteit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.noteit.domain.Feedback;
import tn.noteit.repository.IFedbackRepository;


@Service
public class FeedbackServiceImpl implements IFeedbackService {

	@Autowired
	IFedbackRepository feedbackRepository;
	
	@Override
	public List<Feedback> getAllNotes() {
		
		return this.feedbackRepository.findAll();
	}

	@Override
	public boolean addNote(Feedback feedback) {
		if (this.feedbackRepository.save(feedback)!=null) return true;
		else 
			return false;
	}

}
