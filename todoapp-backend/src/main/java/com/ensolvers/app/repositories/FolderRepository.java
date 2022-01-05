package com.ensolvers.app.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ensolvers.app.objects.Folder;

@Repository
public interface FolderRepository extends CrudRepository<Folder, Long>{


}
