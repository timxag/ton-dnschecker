import { Grid, useTheme, CircularProgress } from "@mui/material";
import React from "react";
import { types } from "../../../tools";
import { DataGridItem } from "../DataGridItem";
import { Done, Close } from "@mui/icons-material";

const getResolved = (adnl: string | null) => (adnl ? `${adnl}` : "-");

export const LSDataGrid: React.FC<types.LSDataGridProps> = ({
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
        <Grid
          item
          className="asddd"
          xs={12}
          key={el.idx + el.ip}
          sx={{ ...gridSx, opacity: el.is_online ? 1 : 0.7 }}
        >
          <DataGridItem
            key={el.key}
            isOnline={el.is_online}
            data={[
              {
                xs: 12,
                md: 3,
                label: "Key",
                content: el.key,
                isLink: true,
                textAlign: "center",
              },
              {
                xs: 10,
                md: 2,
                label: "IP:port",
                content: `${el.ip}:${el.port}`,
                isLink: true,
                textAlign: "center",
              },
              {
                xs: 1,
                label: "Status",
                content: el.is_online ? (
                  <Done style={{ fill: "green" }} fontSize="medium" />
                ) : (
                  <Close style={{ fill: "red" }} fontSize="medium" />
                ),
                textAlign: "center",
              },
              {
                xs: 1,
                label: "Index",
                content: el.idx,
                textAlign: "center",
                order: { xs: 4, md: 3 },
              },
              {
                xs: 12,
                md: 5,
                order: { xs: 3, md: 4 },
                label: "ADNL",
                textAlign: "center",
                margin: "auto",
                content: isLoading ? (
                  <CircularProgress color="secondary" size="1em" />
                ) : resolved[index] ? (
                  getResolved(resolved[index].adnl)
                ) : (
                  "-"
                ),
                isLink:
                  !!resolved[index] && !!resolved[index].adnl && !isLoading,
              },
            ]}
            needMeta={index === 0}
          />
        </Grid>
      ))}
    </Grid>
  );
};
