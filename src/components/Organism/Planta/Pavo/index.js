import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import PavoImg from "../../../../assets/LPpavo.png";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },
  image: {
    width: "70%",
    height: "auto",
  },
  tittle: {
    
    fontSize: 35,
  },
  subtitle: {
    fontSize: 20,
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  video: {
    marginTop:'50px',
    borderRadius: 20,
    overflow: "hidden",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
}));

const Faenado = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#774a4b'>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
       

      >
        <Box width="90%" minWidth={200}>
          <Grid container direction="row" spacing={5}>
            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              alignItems="center"
            
            >
              <ReactPlayer
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}

              // Disable right click
              onContextMenu={e => e.preventDefault()}
                url="https://youtu.be/ixKdYZL4_N0"
                width="100%"
                
                className={classes.video}
                controls
              />
            </Grid>
            
            <Grid item xs={12} md={6} container                 justifyContent="center"
                alignItems="center" >
              <Grid
                container
                direction="column"
                spacing={5}

                className={classes.gridContainer}
              >
                <Grid item container justifyContent="center" >
                  <img 
                    src={PavoImg}
                    alt="Línea de Producción de Pavo"
                    className={classes.image}
                  />
                  
                </Grid>

            
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </BorderWrapper>
    </div>
  );
};

export default Faenado;
