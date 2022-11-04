import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  ThemeModeContext,
  LIGHT_MODE_THEME,
  DARK_MODE_THEME,
  getAppTheme,
} from "./tools/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { styled } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import Main from "./components/Main";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();
const App: React.FC = () => {
  const [mode, setMode] = React.useState<
    typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME
  >(LIGHT_MODE_THEME);
  const themeMode = React.useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) =>
          prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <SnackbarProvider maxSnack={1} preventDuplicate autoHideDuration={1500}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Wrapper>
            <Sidebar />
            <ContentWrapper>
              <QueryClientProvider client={queryClient}>
                <Main />
              </QueryClientProvider>
            </ContentWrapper>
          </Wrapper>
        </ThemeProvider>
      </SnackbarProvider>
    </ThemeModeContext.Provider>
  );
};
const Wrapper = styled("div")`
  max-width: 1180px;
  margin: 20px auto;
`;
const ContentWrapper = styled("div")`
  margin: 20px 0;
`;
export default App;
