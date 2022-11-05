import { Grid, Typography } from "@mui/material";
import React from "react";
import { DHTDataGrid, LSDataGrid } from "./";
import { types } from "../../tools";

export const DataGrid: React.FC<types.DataGridProps> = ({
  dhtData,
  lsData,
}) => {
  const gridSx = {
    "@media(max-width: 1199px)": {
      marginTop: "50px",
    },
  };
  return (
    <Grid container columnSpacing="20px">
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" fontWeight="bold">
          DHT
        </Typography>
        <DHTDataGrid {...dhtData} />
      </Grid>
      <Grid item sx={gridSx} xs={12} lg={6}>
        <Typography variant="h6" fontWeight="bold">
          Lite servers
        </Typography>
        <LSDataGrid {...lsData} />
      </Grid>
    </Grid>
  );
};
