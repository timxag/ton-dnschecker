import { Grid, GridProps, styled, useTheme, Fade } from "@mui/material";
import React from "react";
import { useSnackbar } from "notistack";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
const unsafeCopy = (textToCopy: string) => {
  let textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  // make the textarea out of viewport
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  return new Promise<void>((res, rej) => {
    // here the magic happens
    document.execCommand("copy") ? res() : rej();
    textArea.remove();
  });
};
export type AdvancedGridItemProps = GridProps & {
  label?: string;
  content: any;
  isLink?: boolean;
};
export const AdvancedGridItem: React.FC<AdvancedGridItemProps> = ({
  label,
  content,
  isLink,
  ...restProps
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const theme = useTheme();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (window.isSecureContext && navigator.clipboard)
      navigator.clipboard
        .writeText(e.currentTarget.innerText)
        .then(() => {
          enqueueSnackbar("copied!", {
            variant: "success",
            TransitionComponent: Fade,
          });
        })
        .catch((error) => {
          console.log("error when copying");
          console.error(error);
          enqueueSnackbar("not copied!", {
            variant: "error",
            TransitionComponent: Fade,
          });
        });
    else {
      unsafeCopy(e.currentTarget.innerText);
      enqueueSnackbar("copied!", {
        variant: "success",
        TransitionComponent: Fade,
      });
    }
  };

  const StyledLink = styled("div")`
    cursor: pointer;
    svg {
      margin-left: 5px;
      font-size: 0.9em;
      fill: ${theme.palette.secondary.main};
      vertical-align: middle;
      margin-bottom: 1px;
    }
    // @media (max-width: 600px) {
    //   white-space: nowrap;
    //   overflow: hidden;
    //   text-overflow: ellipsis;
    //   width: 95%;
    //   svg {
    //     position: absolute;
    //     right: 5px;
    //     z-index: 5;
    //     top: 23px;
    //   }
    // }
  `;

  return (
    <Grid item {...restProps}>
      {label && <Label>{label}</Label>}
      {isLink ? (
        <StyledLink onClick={handleClick}>
          {content}
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
