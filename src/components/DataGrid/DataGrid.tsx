import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { DHTDataGrid, LSDataGrid } from "./";
import { types } from "../../tools";

export const DataGrid: React.FC<types.DataGridProps> = ({
  dhtData,
  lsData,
  selectedTable,
  setSelectedTable,
  disabled,
}) => {
  return (
    <Grid container columnSpacing="20px">
      <Grid item xs={12} lg={12}>
        <ToggleButtonGroup
          color="secondary"
          value={selectedTable}
          exclusive
          onChange={(event: React.MouseEvent<HTMLElement>, value: string) =>
            setSelectedTable(value as "DHT" | "LS")
          }
        >
          <ToggleButton
            value="LS"
            disabled={disabled && selectedTable === "DHT"}
          >
            <Typography variant="h6" fontWeight="bold">
              LS
            </Typography>
          </ToggleButton>
          <ToggleButton
            value="DHT"
            disabled={disabled && selectedTable === "LS"}
          >
            <Typography variant="h6" fontWeight="bold">
              DHT
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
        {selectedTable === "DHT" ? (
          <DHTDataGrid {...dhtData} />
        ) : (
          <LSDataGrid {...lsData} />
        )}
      </Grid>
    </Grid>
  );
};
