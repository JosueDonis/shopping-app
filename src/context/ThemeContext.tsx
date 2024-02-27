import { Dispatch, SetStateAction, createContext } from "react";

export type ThemeType = {
    theme?: string;
    setTheme?: Dispatch<SetStateAction<string>>
}
export type ThemeContextType = {
    theme?: string;
    setTheme?: Dispatch<SetStateAction<string>>
}
export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType); 