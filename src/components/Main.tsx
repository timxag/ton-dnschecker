import { Box, CircularProgress, Grid, styled } from "@mui/material";
import axios from "axios";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { api } from "../tools";
import { types } from "../tools";
import { DataGrid } from "./DataGrid";
import Search from "./Search";
const isADNL = (value: string) => !!value.match("^[0-9a-fA-F]{64}$");
const Main: React.FC = () => {
  const StyledContainer = styled(Grid)`
    text-align: center;
  `;
  const [search, setSearch] = React.useState("");
  const [resolvedDHT, setResolvedDHT] = React.useState<types.DHTResolvedType[]>(
    []
  );
  const [resolvedLS, setResolvedLS] = React.useState<types.LSResolvedType[]>(
    []
  );
  const { data: dhtData, status: dhtStatus } = useQuery<types.DHTDataType[]>(
    "dht",
    api.fetchDHTData,
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );
  const { data: lsData, status: lsStatus } = useQuery<types.LSDataType[]>(
    "ls",
    api.fetchLSData,
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );
  const { mutate: mutateDHT, isLoading: isLoadingDHT } = useMutation(
    (value: string) => {
      return axios.get(`${api.API_URL}/api/dns/resolve?adnl=${value}`);
    }
  );
  const { mutate: mutateLS, isLoading: isLoadingLS } = useMutation(
    (value: string) => {
      return axios.get(`${api.API_URL}/api/dns/ls_resolve?domain=${value}`);
    }
  );
  const handleClick = React.useCallback(
    (value: string) => {
      window.history.replaceState({}, "", `?search=${value}`);
      isADNL(value)
        ? mutateDHT(value, {
            onSuccess: (newData) => setResolvedDHT(newData.data),
          })
        : mutateLS(value, {
            onSuccess: (newData) => setResolvedLS(newData.data),
          });
      setSearch(value);
    },
    [mutateDHT, mutateLS]
  );

  React.useEffect(() => {
    const params = new URLSearchParams(
      new URL(window.location.href).searchParams
    );
    if (typeof params.get("search") == "string") {
      setSearch(params.get("search") ?? "");
      handleClick(params.get("search") ?? "");
    }
  }, [handleClick]);
  return (
    <StyledContainer container>
      <Search onSearch={handleClick} value={search} />
      {dhtStatus === "error" ||
        (lsStatus === "error" && <p>Error fetching data</p>)}
      {(dhtStatus === "loading" || lsStatus === "loading") && (
        <Box sx={{ margin: "30px auto 0" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {dhtStatus === "success" && lsStatus === "success" && (
        <DataGrid
          dhtData={{
            data: dhtData,
            resolved: resolvedDHT as unknown as types.DHTResolvedType[],
            isLoading: isLoadingDHT,
          }}
          lsData={{
            data: lsData,
            resolved: resolvedLS as unknown as types.LSResolvedType[],
            isLoading: isLoadingLS,
          }}
        />
      )}
    </StyledContainer>
  );
};

export default Main;
