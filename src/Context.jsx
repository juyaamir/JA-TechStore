import React, {createContext, useContext, useState} from 'react'

export const ThemeContext = createContext('light');
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((theme) => theme === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value= {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}