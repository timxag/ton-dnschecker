import { Grid } from "@mui/material";
import React from "react";
import { DHTDataGrid, DHTDataGridProps } from "./DHTDataGrid";

export type DataGridProps = {
  dhtData: DHTDataGridProps;
};
export const DataGrid: React.FC<DataGridProps> = ({ dhtData }) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <DHTDataGrid {...dhtData} />
      </Grid>
    </Grid>
  );
};
