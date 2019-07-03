import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function SimpleAppBar() {
  return (
    <div className='appBar'>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <b className='titleBlack'>Codificar Iniciante</b> by Allan Kehl
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}