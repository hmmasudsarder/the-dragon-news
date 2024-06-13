import LatestNews from '@/components/ui/Latest/Latest';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { Box, Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
          <Sidebar/>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default HomePage;