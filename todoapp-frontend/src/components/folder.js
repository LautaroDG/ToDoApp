import * as React from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToDo } from './todo';
import BasicModal from './modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { saveToDo } from '../api/todo';
import { deleteFolder } from '../api/folder';

export const Folder = ({folder, idTable}) => {
    const [open, setOpen] = React.useState(false)
    let {id, todos, name} = folder

    const [todosList, setTodosList] = React.useState(todos.map((todo) => <ToDo key={todo.id} todo={todo} />))

    

    async function saveToDoApp(description){
        if(description.trim() !== ""){
            const newToDo = await saveToDo(id, description);
            if(newToDo){
                todos.push(newToDo)
                setTodosList(
                    todos.map((todo) => <ToDo key={todo.id} todo={todo} />)
                )
            }
        }
    }

    async function deleteFolderApp(){
        const response = await deleteFolder(id).then(res => res.json);
        if(response)
            window.location.reload();
    }

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row" align='center' >{idTable}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{todos.length}</TableCell>
                <TableCell align="center">2022-01-06</TableCell>

                <TableCell align='right'>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        style={{marginRight: ".5em"}}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => deleteFolderApp()}>
                        <DeleteIcon color='error' />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div" style={{display: "flex", justifyContent: "center"}}>
                        To-Do List
                    </Typography>
                    <Table size="small" aria-label="purchases" style={{width: "70%", margin: "auto"}}>
                        <TableHead>
                        <TableRow>
                            <TableCell align='center' >Done</TableCell>
                            <TableCell align='center' >To-Do</TableCell>
                            <TableCell align="right">
                                <BasicModal 
                                    saveFunction={saveToDoApp} 
                                    Icon={AddCircleOutlineIcon} 
                                    ModalTitle={"Add new todo"} 
                                    ButtonColor={"#000"} 
                                    inputLabel={"Description"}
                                />
                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                todosList
                            }
                        </TableBody>
                    </Table>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}