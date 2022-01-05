package com.ensolvers.app.objects;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="ToDo")
public class ToDo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	
	private String description;
	
	private boolean done;
	
	@JsonIgnore
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="folder")
	private Folder folder;

	public ToDo() {
		
	}

	public ToDo(String task) {
		this.description = task;
		this.done = false;
		this.folder = new Folder();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public boolean getDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}
	
	public Folder getFolder() {
		return folder;
	}

	public void setFolder(Folder folder) {
		this.folder = folder;
	}

	@Override
	public String toString() {
		return "ToDo [id=" + id + ", description=" + description + "]";
	}

}