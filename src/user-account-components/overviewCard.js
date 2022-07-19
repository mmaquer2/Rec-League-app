
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function OverviewCard() {


  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Your Teams: 
            </Typography>     
            </CardContent>
            </React.Fragment>
      </Card>
    </Box>
  );
}


export { OverviewCard}