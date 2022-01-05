import { url } from "./backendURL";

export function getFolders(){
    return fetch(`${url}/folders`)
        .then(res => res.json())
}

export function saveFolder(folderName) {
    return fetch(`${url}/folders`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": folderName
        })
    })
    
}

export function deleteFolder(folderId) {
    return fetch(`${url}/folders/${folderId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
} 

