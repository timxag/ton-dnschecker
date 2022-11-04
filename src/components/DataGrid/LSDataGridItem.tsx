import { CircularProgress, Grid, styled, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { LSDataType, LSResolvedType } from "../../tools/types";
import { AdvancedGridItem } from "./AdvancedGridItem";
export type LSataGridItemProps = {
  item: LSDataType;
  resolved: LSResolvedType | null;
  isLoading: boolean;
};
export const LSDataGridItem: React.FC<LSataGridItemProps> = ({
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
    text-align: start;
    border-bottom: 1px solid ${theme.palette.primary.main};
  `;
  const getResolved = (adnl: string | null) => (adnl ? `${adnl}` : "-");
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
        label="ADNL"
        textAlign={"center"}
        margin="auto"
        content={
          isLoading ? (
            <CircularProgress color="secondary" size="1em" />
          ) : resolved ? (
            getResolved(resolved.adnl)
          ) : (
            "-"
          )
        }
        isLink={!!resolved && !!resolved.adnl}
      />
    </StyledItem>
  );
};

const StyledContainer = styled(Grid)`
  margin: 20px auto 0;
  padding: 5px;
`;
