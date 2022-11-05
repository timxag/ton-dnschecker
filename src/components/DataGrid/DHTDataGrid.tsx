import { Grid, useTheme } from "@mui/material";
import React from "react";
import { types } from "../../tools";
import { DHTDataGridItem } from "./DHTDataGridItem";

export const DHTDataGrid: React.FC<types.DHTDataGridProps> = ({
  data,
  resolved,
  isLoading,
}) => {
  const theme = useTheme();
  const gridSx = {
    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  };
  return (
    <Grid container>
      {data.map((el, index) => (
        <Grid item xs={12} key={el.idx + el.ip} sx={gridSx}>
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
