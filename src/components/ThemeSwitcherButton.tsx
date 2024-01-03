"use client"

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

export function ThemeSwitcherButton() {
    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return isMounted ? (
        <Button onClick={toggleTheme}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    ) : null;
}