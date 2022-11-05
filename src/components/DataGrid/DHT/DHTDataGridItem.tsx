import { CircularProgress, Grid, styled } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { types } from "../../../tools";
import { AdvancedGridItem } from "../AdvancedGridItem";

const getResolved = (ip: string | null, port: number | null) =>
  ip && port ? `${ip}:${port}` : "-";

export const DHTDataGridItem: React.FC<types.DHTDataGridItemProps> = ({
  item,
  resolved,
  isLoading,
}) => {
  const { ip, idx, key, port, is_online } = item;

  return (
    <StyledItem container>
      <Grid item xs={12} md={8}>
        <Grid container position={"relative"}>
          <AdvancedGridItem xs={12} md={12} label="Key" content={key} isLink />
          <AdvancedGridItem
            xs
            label="IP:port"
            content={`${ip}:${port}`}
            isLink
          />
          <AdvancedGridItem
            xs={2}
            label="Status"
            sx={{ verticalAlign: "middle" }}
            content={
              is_online ? (
                <DoneIcon style={{ fill: "green" }} fontSize="medium" />
              ) : (
                <CloseIcon style={{ fill: "red" }} fontSize="medium" />
              )
            }
          />
          <AdvancedGridItem xs={2} label="Index" content={idx} />
        </Grid>
      </Grid>
      <AdvancedGridItem
        xs={12}
        md={4}
        label="Resolve DHT"
        textAlign={"center"}
        margin="auto"
        content={
          isLoading ? (
            <CircularProgress color="secondary" size="1em" />
          ) : resolved ? (
            getResolved(resolved.ip, resolved.port)
          ) : (
            "-"
          )
        }
        isLink={!!resolved && !!resolved.ip && !!resolved.port && !isLoading}
      />
    </StyledItem>
  );
};

const StyledContainer = styled(Grid)`
  margin: 20px auto 0;
  padding: 5px;
`;
const StyledItem = styled(StyledContainer)`
  margin-top: 5px;
  box-sizing: border-box;
  padding-bottom: 10px;
  text-align: start;
`;