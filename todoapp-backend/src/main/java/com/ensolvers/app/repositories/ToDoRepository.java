package com.ensolvers.app.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ensolvers.app.objects.ToDo;

public interface ToDoRepository  extends CrudRepository<ToDo, Long> {

}
