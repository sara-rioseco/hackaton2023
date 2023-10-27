/* eslint-disable no-unused-vars */
import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';

import SideBar from '../../components/sidebar/sidebar'
import ListTable from '../../components/processList/process-list';

export default function ProcessList() {
  return (
      <div className='mainContent'>
        <h2 className='title'>Lista de Procesos</h2>
        <h3 className='subtitle'>Procesos</h3>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <ListTable />
          </Box>
        </div>
      </div>
 );
}


