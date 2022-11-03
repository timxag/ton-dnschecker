import { Grid } from "@mui/material";
import React from "react";
import { DataType } from "../../tools/types";
import { DataGridItem } from "./DataGridItem";

export type DataGridProps = {
  data: DataType[];
};
export const DataGrid: React.FC<DataGridProps> = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <DataGridItem />
      </Grid>
      {data.map((el) => (
        <Grid item xs={12} key={el.idx + el.ip}>
          <DataGridItem item={el} />
        </Grid>
      ))}
    </Grid>
  );
};
