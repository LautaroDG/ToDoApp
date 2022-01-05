import React, { useState } from 'react';
import {Checkbox, IconButton, TableCell, TableRow} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteToDo, updateToDo } from '../api/todo';
import BasicModal from './modal';

export const ToDo = ({todo}) => {

    const [description, setDescription] = useState(todo.description)

    let {id} = todo

    const handleChangeDone = () => {
        todo.done = !todo.done
        const element = document.getElementById(`todoDescription${id}`)
        element.style.textDecoration = todo.done ? 'line-through' : 'none';
        updateToDo(todo)
    }

    async function deleteToDoApp() {
        await deleteToDo(id)
        window.location.reload();
    }

    function editToDo(newDescription) {
        if(newDescription.trim() !== ""){
            setDescription(newDescription)
            todo.description = newDescription
            updateToDo(todo)
        }
    }

    return (
        <TableRow >
            <TableCell component="th" scope="row" align='center' >
                <Checkbox defaultChecked={todo.done} color="success" onClick={() => handleChangeDone()}/>
            </TableCell>
            <TableCell id={`todoDescription${id}`} align='center' style={{textDecoration: todo.done ? 'line-through' : 'none'}} >{description}</TableCell>
            <TableCell align='right' style={{display: "flex", flexDirection: "row-reverse"}} >
                <IconButton aria-label="delete" onClick={() => deleteToDoApp()}>
                        <DeleteIcon color='error' />
                </IconButton>

                <BasicModal 
                    saveFunction={editToDo} 
                    Icon={EditIcon} 
                    ModalTitle={`Editing todo: ${description}`} 
                    ButtonColor={"#1976d2"} 
                    inputLabel={"New description"}
                />
            </TableCell>
        </TableRow>
    )
}
