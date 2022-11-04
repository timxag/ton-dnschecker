import { Button, Grid, TextField, styled } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export type SearchProps = {
  value: string;
  onSearch: (value: string) => void;
};
const Search: React.FC<SearchProps> = ({ onSearch, value }) => {
  const [state, setState] = React.useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  return (
    <StyledContainer
      container
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} md={6}>
        <TextField
          variant="outlined"
          value={state}
          onChange={handleChange}
          label="ADNL address in hex form"
          color="secondary"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={1} alignContent="end" textAlign="end">
        <StyledButton
          onClick={() => onSearch(state)}
          startIcon={<SearchOutlinedIcon />}
          disabled={!state}
        >
          check
        </StyledButton>
      </Grid>
    </StyledContainer>
  );
};
const StyledContainer = styled(Grid)`
  text-align: center;
  margin-bottom: 20px;
`;
const StyledButton = styled(Button)`
  margin: auto 0;
  height: 100%;
`;
export default Search;
