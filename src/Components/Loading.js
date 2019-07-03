import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../css/styles.css";

export default function CircularIndeterminate() {
  return (
    <div>
      <CircularProgress className="loading" />
    </div>
  );
}