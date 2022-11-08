import { Button, Grid, TextField, styled } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { types } from "../tools";
const Search: React.FC<types.SearchProps> = ({ onSearch, value }) => {
  const [state, setState] = React.useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  return (
    <StyledForm onSubmit={() => onSearch(state)}>
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
            label="Domain or ADNL address in hex form"
            color="secondary"
            size="small"
            onBlur={() => onSearch(state)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={1} alignContent="end" textAlign="end">
          <StyledButton
            startIcon={<SearchOutlinedIcon />}
            disabled={!state}
            type="submit"
          >
            check
          </StyledButton>
        </Grid>
      </StyledContainer>
    </StyledForm>
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
const StyledForm = styled("form")`
  width: 100%;
`;
export default Search;
