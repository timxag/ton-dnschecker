import { Box, CircularProgress, Grid, styled, useTheme } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { fetchMockData } from "../tools/fetchData";
import { DataType } from "../tools/types";
import { DataGrid } from "./DataGrid";
import Search from "./Search";

const Main: React.FC = () => {
  const theme = useTheme();
  const StyledContainer = styled(Grid)`
    text-align: center;
  `;

  const handleClick = (data: string) => {
    refetch();
  };

  const { data, refetch, status } = useQuery("data", fetchMockData, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  return (
    <StyledContainer container>
      <Search onSearch={handleClick} />
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && (
        <Box sx={{ margin: "30px auto 0" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {status === "success" && <DataGrid data={data} />}
    </StyledContainer>
  );
};

export default Main;
