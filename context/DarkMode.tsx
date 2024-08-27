import { error } from "console";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface DarkConntextProps {
    isDarkMode : boolean;
    toggleDarkMode: () => void ;
}

const DarkModeContext = createContext<DarkConntextProps | undefined>(undefined);

export const DarkModeProvider = ({ children }: {children: ReactNode} ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=> {
        const darkModePreference = localStorage.getItem('theme')=== 'dark';
        setIsDarkMode(darkModePreference);
    }, []);

    const toggleDarkMode = ()=> {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            return newMode;
        });
    }

    return(
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}


export const useDarkMode = () =>{
    const context = useContext(DarkModeContext);
    if(!context){
        throw new Error('useDarkMode harus menggunakan DarkModeProvider');
    }

    return context;
}