import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import ListTable from '../../components/processList/process-list';

//import DateFilter from '../../components/formDate/date-filter';
//import SearchTable from '../../components/Filter/filter';


export default function ProcessList() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <ListTable />
      
    </Box>
    
    </div>
  );
}


