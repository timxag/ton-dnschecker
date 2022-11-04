import { Box, CircularProgress, Grid, styled, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { DataType, ResolvedType } from "../../tools/types";
export type DataGridItemProps = {
  item: DataType;
  resolved: ResolvedType | null;
  isLoading: boolean;
};
export const DataGridItem: React.FC<DataGridItemProps> = ({
  item,
  resolved,
  isLoading,
}) => {
  const theme = useTheme();

  const { ip, idx, key, port, is_online } = item;
  const StyledItem = styled(StyledContainer)`
    margin-top: 5px;
    box-sizing: border-box;
    padding-bottom: 10px;
    @media (min-width: 900px) {
      border-bottom: 1px solid ${theme.palette.primary.main};
    }
  `;
  const gridSx = {
    "@media(minWidth: 900px)": {
      borderRight: `1px solid ${theme.palette.primary.main}`,
    },
  };
  const getResolved = (ip: string | null, port: number | null) =>
    ip && port ? `${ip}:${port}` : "-";
  return (
    <StyledItem container>
      <Grid item sx={gridSx} xs={1}>
        <Label>Index</Label>
        {idx}
      </Grid>
      <Grid item sx={gridSx} xs={10} md={3}>
        <Label>IP:port</Label>
        {ip}:{port}
      </Grid>
      <Grid item sx={gridSx} xs={12} md={4}>
        <Label>Key</Label>
        {key}
      </Grid>
      <Grid item sx={gridSx} xs={2} md={1}>
        <Label>Status</Label>
        {is_online ? (
          <DoneIcon style={{ fill: "green" }} fontSize="medium" />
        ) : (
          <CloseIcon style={{ fill: "red" }} fontSize="medium" />
        )}
      </Grid>
      <Grid item xs={12} md={3}>
        <Label>Resolve DHT</Label>
        {isLoading ? (
          <CircularProgress color="secondary" size="1em" />
        ) : resolved ? (
          getResolved(resolved.ip, resolved.port)
        ) : (
          "-"
        )}
      </Grid>
    </StyledItem>
  );
};

const StyledContainer = styled(Grid)`
  margin: 20px auto 0;
  padding: 5px;
`;
const Label = styled("p")`
  margin: 0;
  margin-left: 10px;
  font-weight: bold;
  font-size: 0.9em;
  text-align: center;
`;
