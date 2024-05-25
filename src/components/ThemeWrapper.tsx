import { useAppSelector } from "@/store/hooks";
import { darkTheme, lightTheme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: Prop) => {
  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
