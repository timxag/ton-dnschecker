import { Box, CircularProgress, Grid, styled, useTheme } from "@mui/material";
import axios from "axios";
import React from "react";
import { useMutation, useQueries, useQuery } from "react-query";
import { API_URL, fetchData } from "../tools/fetchData";
// import { fetchMockData } from "../tools/fetchData";
import { DataType, ResolvedType } from "../tools/types";
import { DataGrid } from "./DataGrid";
import Search from "./Search";
const Main: React.FC = () => {
  const StyledContainer = styled(Grid)`
    text-align: center;
  `;
  const [search, setSearch] = React.useState("");
  const [resolved, setResolved] = React.useState<ResolvedType[]>([]);
  const { data, status } = useQuery<DataType[]>("mytodos", fetchData, {
    retry: 0,
    refetchOnWindowFocus: false,
  });
  const { mutate, isLoading } = useMutation((value: string) => {
    return axios.get(`${API_URL}/api/dns/resolve?adnl=${value}`);
  });
  const handleClick = (value: string) => {
    mutate(value, { onSuccess: (newData) => setResolved(newData.data) });
    setSearch(value);
  };
  return (
    <StyledContainer container>
      <Search onSearch={handleClick} value={search} />
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && (
        <Box sx={{ margin: "30px auto 0" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {status === "success" && (
        <DataGrid
          data={data}
          resolved={resolved as unknown as ResolvedType[]}
          isLoading={isLoading}
        />
      )}
    </StyledContainer>
  );
};

export default Main;
