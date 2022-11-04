import { Grid } from "@mui/material";
import React from "react";
import { DataType, ResolvedType } from "../../tools/types";
import { DataGridItem } from "./DataGridItem";

export type DataGridProps = {
  data: DataType[];
  resolved: ResolvedType[];
  isLoading: boolean;
};
export const DataGrid: React.FC<DataGridProps> = ({
  data,
  resolved,
  isLoading,
}) => {
  return (
    <Grid container>
      {data.map((el, index) => (
        <Grid item xs={12} key={el.idx + el.ip}>
          <DataGridItem
            item={el}
            resolved={resolved ? resolved[index] : null}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};
