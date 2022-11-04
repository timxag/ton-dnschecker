import { Grid, Typography } from "@mui/material";
import React from "react";
import { DHTDataGrid, DHTDataGridProps } from "./DHTDataGrid";
import { LSDataGrid, LSDataGridProps } from "./LSDataGrid";

export type DataGridProps = {
  dhtData: DHTDataGridProps;
  lsData: LSDataGridProps;
};
export const DataGrid: React.FC<DataGridProps> = ({ dhtData, lsData }) => {
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
