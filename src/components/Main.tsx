import { Box, CircularProgress, Grid, styled, useTheme } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQueries, useQuery } from "react-query";
import { fetchData } from "../tools/fetchData";
// import { fetchMockData } from "../tools/fetchData";
import { DataType } from "../tools/types";
import { DataGrid } from "./DataGrid";
import Search from "./Search";
interface ITodo {
  userId: string;
  id: string;
  title: string;
}
const Main: React.FC = () => {
  const theme = useTheme();
  const StyledContainer = styled(Grid)`
    text-align: center;
  `;

  const handleClick = (data: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    console.log(api);
  };
  const [state, setState] = React.useState<DataType[]>([]);
  const { data, status } = useQuery<DataType[]>("mytodos", fetchData, {
    staleTime: 5000,
  });
  const api = useQueries(
    state.map((e) => {
      return {
        queryKey: ["user", e],
        queryFn: () =>
          axios.post(
            `https://toncenter.kdimentionaltree.com/api/dns/dht/${e.idx}/resolve?adnl=asd`
          ),
      };
    })
  );
  React.useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  return (
    <StyledContainer container>
      <Search onSearch={handleClick} />
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && (
        <Box sx={{ margin: "30px auto 0" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {/* {status === "success" && <DataGrid data={data} />} */}
    </StyledContainer>
  );
};

export default Main;
