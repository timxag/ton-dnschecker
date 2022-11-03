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
    name: "IP:port",
    size: 3,
  },
  {
    name: "Key",
    size: 4,
  },
  {
    name: "Status",
    size: 1,
  },
  {
    name: "DHT Resolve",
    size: 3,
  },
];
export const DataGridItem: React.FC<DataGridItemProps> = ({ item }) => {
  const theme = useTheme();
  const getSx = (isLast: boolean) => {
    return {
      borderRight: !isLast ? `2px solid ${theme.palette.primary.main}` : "none",
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      fontWeight: "bold",
    };
  };

  if (!item)
    return (
      <StyledContainer container>
        {meta.map((el, index) => (
          <Grid
            item
            xs={el.size}
            sx={getSx(index === meta.length - 1)}
            key={index}
          >
            {el.name}
          </Grid>
        ))}
      </StyledContainer>
    );
  const { ip, idx, key, port, is_online } = item;
  const StyledItem = styled(StyledContainer)`
    margin-top: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid
      ${is_online === "OK"
        ? theme.palette.success.main
        : theme.palette.warning.main};
  `;
  const gridSx = {
    borderRight: `1.5px solid ${
      is_online === "OK"
        ? theme.palette.success.main
        : theme.palette.warning.main
    };`,
  };
  return (
    <StyledItem container>
      <Grid item sx={gridSx} xs={2} md={1}>
        {idx}
      </Grid>
      <Grid item sx={gridSx} xs={10} md={3}>
        {ip}:{port}
      </Grid>
      <Grid item sx={gridSx} xs={12} md={4}>
        {key}
      </Grid>
      <Grid item sx={gridSx} xs={2} md={1}>
        {is_online}
      </Grid>
      <Grid item xs={2} md={3}>
        {is_online}
      </Grid>
    </StyledItem>
  );
};

const StyledContainer = styled(Grid)`
  margin: 20px auto 0;
  padding: 5px;
`;
