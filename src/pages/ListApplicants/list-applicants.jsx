/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import SideBar from '../../components/sidebar/sidebar';
import ListTable from '../../components/listTable';

export default function ListApplicants() {
  return (
      <div className='mainContent'>
        <h2 style={{marginTop:'200px'}} className='title'>Lista de Postulantes</h2>
        <h3 className='subtitle'>Postulantes</h3>
        <div>
    <Box sx={{ flexGrow: 1 }}>
      <ListTable />
    </Box>

</div>
      </div>
  );
}


