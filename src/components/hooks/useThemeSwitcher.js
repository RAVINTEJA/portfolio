
import { useState, useEffect } from "react";

const useThemeSwitcher = () => {


    const prefersDarkMode = "(prefers-color-scheme: dark)";
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(prefersDarkMode);
        const userPref = window.localStorage.getItem("theme");

        const handleMediaQueryChange = () => {
            if(userPref){
                if (userPref === "dark") {
                    setTheme("dark");
                    document.documentElement.classList.add("dark");
                }
                else {
                    setTheme("light");
                    document.documentElement.classList.remove("dark");
                }

            }
            else{
                if (mediaQuery.matches) {
                    setTheme("dark");
                    document.documentElement.classList.add("dark");
                } else {
                    setTheme("light");
                    document.documentElement.classList.remove("dark");
                }
            }
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
        }
        else {
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return [theme, setTheme]
};

export default useThemeSwitcher;
