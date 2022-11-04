import { Grid } from "@mui/material";
import React from "react";
import { DataType, ResolvedType } from "../../tools/types";
import { DHTDataGridItem } from "./DHTDataGridItem";

export type DHTDataGridProps = {
  data: DataType[];
  resolved: ResolvedType[];
  isLoading: boolean;
};
export const DHTDataGrid: React.FC<DHTDataGridProps> = ({
  data,
  resolved,
  isLoading,
}) => {
  return (
    <Grid container>
      {data.map((el, index) => (
        <Grid item xs={12} key={el.idx + el.ip}>
          <DHTDataGridItem
            item={el}
            resolved={resolved ? resolved[index] : null}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};
