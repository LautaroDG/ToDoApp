package com.ensolvers.app.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ensolvers.app.objects.ToDo;
import com.ensolvers.app.services.ToDoService;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class ToDoController {
	@Autowired
	ToDoService toDoService;
	
	
	@GetMapping(path = "/{id}")
	public ToDo getToDo(@PathVariable("id") Long id){
		return toDoService.getToDo(id);
	}
	
	@GetMapping()
	public ArrayList<ToDo> getToDos(){
		return toDoService.getToDos();
	}
	
	@PostMapping()
	public ToDo saveToDo(@RequestBody ToDo todo) {
		return this.toDoService.saveToDo(todo);
	}
	
	@PostMapping(path = "/{id}")
	public ToDo saveToDoByFolder(@RequestBody ToDo todo, @PathVariable (value = "id") Long folderId) {
		return this.toDoService.saveToDoByFolder(folderId, todo);
	}
	
	@DeleteMapping(path = "/{id}")
	public boolean deleteToDo(@PathVariable("id") Long id) 
	{
		boolean response = this.toDoService.deleteToDo(id);
		return response;
	}

	@PutMapping()
	public ToDo updateToDo(@RequestBody ToDo toDo) 
	{ 
		return toDoService.updateToDo(toDo);
	}
}
