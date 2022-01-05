package com.ensolvers.app.services;

import org.springframework.stereotype.Service;

import com.ensolvers.app.objects.*;
import com.ensolvers.app.repositories.*;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class FolderService {
	@Autowired
	FolderRepository folderRepository;
	@Autowired
	ToDoService toDoService;
	
	public Folder getFolder(Long id){
		return folderRepository.findById(id).get();
	}
	
	public ArrayList<Folder> getFolders(){
		return (ArrayList<Folder>)folderRepository.findAll();
		
	}
	
	public Folder saveFolder(Folder folder) {
		return folderRepository.save(folder);
	}
	
	public boolean deleteFolder(Long id) {
		try {
			folderRepository.deleteById(id);
			return true;
		}catch(Exception err) {
			return false;
		}
	}
	
	public Folder updateFolder(Folder folder) {
		return folderRepository.save(folder);
	}
}
