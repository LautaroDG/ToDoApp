import { url } from "./backendURL";

export function saveToDo(folderId, description) {
    return fetch(`${url}/todos/${folderId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "description": description
        })
    }).then(res => res.json())
    
}

export function updateToDo(todo) {
    return fetch(`${url}/todos`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": todo.id,
            "description": todo.description,
            "done": todo.done
        })
    })
    
}

export function deleteToDo(todoId) {
    return fetch(`${url}/todos/${todoId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
    })
    
}