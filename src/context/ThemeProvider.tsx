import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeProviderType = {
    children: React.ReactNode;
}

const getInitialTheme = () => {
    try {
        const theme = localStorage.getItem('shopping-theme');
        if (theme) {
            const htmlElement = window?.document?.querySelector('html');
            if (htmlElement) {
                htmlElement.setAttribute('data-theme', theme);
            }
            return JSON.parse(theme)?.theme;
        }
    } catch (error) {
      return 'light';
    }
}


export function ThemeProvider({children} : ThemeProviderType) {
    const [theme, setTheme] = useState<string>(getInitialTheme());

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}