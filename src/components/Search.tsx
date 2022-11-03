import { Button, Grid, TextField, styled } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export type SearchProps = {
  onSearch: (value: string) => void;
};
const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  //   const onClick = (event: React.)
  return (
    <StyledContainer
      container
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={10} md={6}>
        <TextField
          variant="outlined"
          value={value}
          onChange={handleChange}
          label="Search"
          color="secondary"
          fullWidth
        />
      </Grid>
      <Grid item xs={1} alignContent="end" textAlign="end">
        <StyledButton
          onClick={() => onSearch(value)}
          startIcon={<SearchOutlinedIcon />}
        >
          search
        </StyledButton>
      </Grid>
    </StyledContainer>
  );
};
const StyledContainer = styled(Grid)`
  text-align: center;
`;
const StyledButton = styled(Button)`
  margin: auto 0;
  height: 100%;
`;
export default Search;
