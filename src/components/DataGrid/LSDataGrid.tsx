import { Grid } from "@mui/material";
import React from "react";
import { LSDataType, LSResolvedType } from "../../tools/types";
import { LSDataGridItem } from "./LSDataGridItem";

export type LSDataGridProps = {
  data: LSDataType[];
  resolved: LSResolvedType[];
  isLoading: boolean;
};
export const LSDataGrid: React.FC<LSDataGridProps> = ({
  data,
  resolved,
  isLoading,
}) => {
  return (
    <Grid container>
      {data.map((el, index) => (
        <Grid item xs={12} key={el.idx + el.ip}>
          <LSDataGridItem
            item={el}
            resolved={resolved ? resolved[index] : null}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};
