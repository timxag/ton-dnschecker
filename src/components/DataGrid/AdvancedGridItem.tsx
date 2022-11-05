import { Grid, styled, useTheme, Fade } from "@mui/material";
import React from "react";
import { useSnackbar } from "notistack";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { copy } from "../../tools";
import { types } from "../../tools";

export const AdvancedGridItem: React.FC<types.AdvancedGridItemProps> = ({
  label,
  content,
  isLink,
  ...restProps
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const theme = useTheme();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    copy.copyToClipboard(e.currentTarget.innerText, {
      snackbar: enqueueSnackbar,
      transitionComponent: Fade,
    });
  };
  const StyledLink = styled("div")`
    cursor: pointer;
    display: flex;
    span {
      max-width: 95%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    svg {
      margin-left: 5px;
      width: 5%
      font-size: 0.9em;
      fill: ${theme.palette.secondary.main};
      vertical-align: middle;
      margin-bottom: 1px;
    }
  `;

  return (
    <Grid item {...restProps}>
      {label && <Label>{label}</Label>}
      {isLink ? (
        <StyledLink onClick={handleClick}>
          <span>{content}</span>
          <ContentCopyOutlinedIcon fontSize="small" />
        </StyledLink>
      ) : (
        content
      )}
    </Grid>
  );
};

const Label = styled("p")`
  margin: 0;
  font-weight: bold;
  font-size: 0.9em;
`;
