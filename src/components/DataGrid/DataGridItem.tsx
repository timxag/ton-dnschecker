import { Grid, styled, useTheme } from "@mui/material";
import React from "react";
import { DataType } from "../../tools/types";
export type DataGridItemProps = {
  item?: DataType;
};
const meta = [
  {
    name: "Index",
    size: 1,
  },
  {
    name: "IP",
    size: 3,
  },
  {
    name: "Key",
    size: 4,
  },
  {
    name: "Port",
    size: 2,
  },
  {
    name: "DHT Resolve",
    size: 1,
  },
  {
    name: "ICMP ping",
    size: 1,
  },
];
export const DataGridItem: React.FC<DataGridItemProps> = ({ item }) => {
  const theme = useTheme();
  if (!item)
    return (
      <StyledContainer container>
        {meta.map((el, index) => (
          <Grid
            item
            xs={el.size}
            sx={
              index !== meta.length - 1
                ? {
                    borderRight: `1.5px solid ${theme.palette.primary.main}`,
                    borderBottom: `1.5px solid ${theme.palette.primary.main}`,
                  }
                : { borderBottom: `1.5px solid ${theme.palette.primary.main}` }
            }
          >
            {el.name}
          </Grid>
        ))}
      </StyledContainer>
    );
  const { ip, index, dhtResolve, key, port, icmpPing } = item;
  const StyledItem = styled(StyledContainer)`
    margin-top: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1.5px solid
      ${dhtResolve === "OK"
        ? theme.palette.success.main
        : theme.palette.warning.main};
  `;
  const gridSx = {
    borderRight: `1.5px solid ${
      dhtResolve === "OK"
        ? theme.palette.success.main
        : theme.palette.warning.main
    };`,
  };
  return (
    <StyledItem container>
      <Grid item sx={gridSx} xs={1}>
        {index}
      </Grid>
      <Grid item sx={gridSx} xs={3}>
        {ip}
      </Grid>
      <Grid item sx={gridSx} xs={4}>
        {key}
      </Grid>
      <Grid item sx={gridSx} xs={2}>
        {port}
      </Grid>
      <Grid item sx={gridSx} xs={1}>
        {dhtResolve}
      </Grid>
      <Grid item xs={1}>
        {icmpPing}
      </Grid>
    </StyledItem>
  );
};

const StyledContainer = styled(Grid)`
  margin: 20px auto 0;
  padding: 5px;
`;
