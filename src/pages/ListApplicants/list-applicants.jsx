/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import SideBar from '../../components/sidebar/sidebar';
import ListTable from '../../components/listTable';
//import DateFilter from '../../components/formDate/date-filter';
//import SearchTable from '../../components/Filter/filter';


export default function ListApplicants() {
  return (
    <div className='createPost'>
    <div className='sideBar'>
      <SideBar />
    </div>
    <div className='mainBody'>
      <div className='headerBar'>

      </div>
      <div className='mainContent'>
        <h2 className='title'>Lista de Postulantes</h2>
        <h3 className='subtitle'>Procesos</h3>
        <div>
    <Box sx={{ flexGrow: 1 }}>
      <ListTable />
      </Box>

</div>
      </div>
    </div>
  </div>
  );
}


