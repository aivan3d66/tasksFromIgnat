import React from 'react';
import s from './App.module.css';
import HW5 from '../../../p2-homeworks/h5/HW5';
import {AppBar, Container, Grid, IconButton, Toolbar, Typography} from '@mui/material';
import {useSelector} from "react-redux";
import {AppRootState} from "./redux/redux-store";

function App() {
  const theme = useSelector<AppRootState, any>(state => state.theme.scheme);


  const appStyles = {
    headerColour: `${theme.headerColour}`,
    appBackgroundColour: `${theme.appBackgroundColour}`,
    textColour: `${theme.textColour}`
  }

  return (
    <div className={s.App}>
      <div className="App" style={{backgroundColor: `${appStyles.appBackgroundColour}`}}>
        <AppBar position="static" style={{backgroundColor: `${appStyles.headerColour}`}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"

              aria-label="menu"
              sx={{mr: 2}}
            >
              {/*<MenuIcon/>*/}
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              React homeworks
            </Typography>
          </Toolbar>
        </AppBar>

        <Container fixed maxWidth="xl">
          <Grid container spacing={2} style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "40px 0 0 0",
            borderRadius: "5px",
            color: `${appStyles.textColour}`
          }}>
            <HW5/>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default App
