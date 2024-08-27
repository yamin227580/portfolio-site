import { useAppSelector } from "@/store/hooks";
import { darkTheme, lightTheme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: Prop) => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
