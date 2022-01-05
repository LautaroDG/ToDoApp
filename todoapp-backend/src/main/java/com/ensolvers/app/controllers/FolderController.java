package com.ensolvers.app.controllers;

import java.util.List;
import com.ensolvers.app.objects.Folder;
import com.ensolvers.app.services.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/folders")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class FolderController {
	@Autowired
	FolderService folderService;
	
	@GetMapping(path = "/{id}")
	public Folder getFolder(@PathVariable("id") Long id){
		return folderService.getFolder(id);
	}
	
	@GetMapping()
	public List<Folder> getFolders(){
		return folderService.getFolders();
	}
	
	@PostMapping()
	public Folder saveFolder(@RequestBody Folder folder) {
		return this.folderService.saveFolder(folder);
	}

	@PutMapping()
	public Folder updateFolder(@RequestBody Folder folder) {
		return this.folderService.updateFolder(folder);
	}
	
	@DeleteMapping(path = "/{id}")
	public boolean deleteFolder(@PathVariable("id") Long id) {
		boolean result=this.folderService.deleteFolder(id);
		return result;
	}

}
