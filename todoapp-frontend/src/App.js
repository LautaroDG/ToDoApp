import './App.css';
import * as React from 'react';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Paper from '@mui/material/Paper';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import {Folder} from './components/folder'
import { getFolders, saveFolder } from './api/folder';
import NavBar from './components/navbar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BasicModal from './components/modal';

function App() {

  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getFolders()
      .then(res =>{
        if(mounted){
          setFolderList(res)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <>
      <NavBar />

      <div className='container' style={{marginTop: '2em'}}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead style={{backgroundColor: "#1976D2"}}>
              <TableRow>
                <TableCell />
                <TableCell align='center' style={{fontSize: "1em", color: "#fff"}} >Name</TableCell>
                <TableCell align='center' style={{fontSize: "1em", color: "#fff"}} >Size</TableCell>
                <TableCell align='center' style={{fontSize: "1em", color: "#fff"}} >Created</TableCell>
                <TableCell align='right'>
                  <BasicModal 
                    saveFunction={saveFolderApp} 
                    Icon={AddCircleOutlineIcon} 
                    ModalTitle={"Add new folder"} 
                    ButtonColor={"#fff"} 
                    inputLabel={"Name"}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                folderList.map( (folder, i) =>
                  <Folder key={folder.id} idTable={i+1} folder={folder} />
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

function saveFolderApp(name){
  if(name.trim() !== ""){
    saveFolder(name);
    window.location.reload();
  }
}

export default App;
