import { Grid, useTheme, CircularProgress } from "@mui/material";
import React from "react";
import { types } from "../../../tools";
import { DataGridItem } from "../DataGridItem";
import { Done, Close } from "@mui/icons-material";

const getResolved = (ip: string | null, port: number | null) =>
  ip && port ? `${ip}:${port}` : "-";
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
  data.forEach((el) => console.log(el));
  return (
    <Grid container>
      {data.map((el, index) => (
        <Grid
          item
          className="asddd"
          xs={12}
          key={el.idx + el.ip}
          sx={{ ...gridSx }}
        >
          <DataGridItem
            key={el.key}
            isOnline={el.is_online}
            data={[
              {
                xs: 12,
                md: 5,
                label: "Key",
                content: el.key,
                isLink: true,
                textAlign: "center",
              },
              {
                xs: 10,
                md: true,
                label: "IP:port",
                content: `${el.ip}:${el.port}`,
                isLink: true,
                textAlign: "center",
              },
              {
                xs: 2,
                md: 1,
                label: "Status",
                content: el.is_online ? (
                  <Done style={{ fill: "green" }} fontSize="medium" />
                ) : (
                  <Close style={{ fill: "red" }} fontSize="medium" />
                ),
                textAlign: "center",
              },
              {
                xs: 2,
                md: 1,
                label: "Index",
                content: el.idx,
                textAlign: "center",
                order: { xs: 4, md: 3 },
              },
              {
                xs: 10,
                md: true,
                order: { xs: 3, md: 4 },
                label: "Resolve DHT",
                textAlign: "center",
                margin: "auto",
                content: isLoading ? (
                  <CircularProgress color="secondary" size="1em" />
                ) : resolved[index] ? (
                  getResolved(resolved[index].ip, resolved[index].port)
                ) : (
                  "-"
                ),
                isLink:
                  !!resolved[index] &&
                  !!resolved[index].ip &&
                  !!resolved[index].port &&
                  !isLoading,
              },
            ]}
            needMeta={index === 0}
          />
        </Grid>
      ))}
    </Grid>
  );
};
