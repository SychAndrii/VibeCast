import { useEffect, useState } from 'react';
import MoonIcon from './shared/icons/MoonIcon';
import SunIcon from './shared/icons/SunIcon';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<string>('nord');

    useEffect(() => {
        const storedTheme = localStorage.getItem('vibe-theme') || 'nord';
        document.documentElement.setAttribute('data-theme', storedTheme);
        setTheme(storedTheme);
    }, []);

    const onThemeSwitch = () => {
        const newTheme = theme === 'nord' ? 'dim' : 'nord';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('vibe-theme', newTheme);
    };

    return (
        <>
            <div className="btn btn-square btn-ghost hover:none">
                <label className="swap swap-rotate w-12 h-12">
                    <input
                        type="checkbox"
                        onChange={onThemeSwitch}
                        // show toggle image based on localstorage theme
                        checked={theme === "nord" ? false : true}
                    />
                    <div className="swap-on">
                        <SunIcon />
                    </div>
                    <div className='swap-off'>
                        <MoonIcon />
                    </div>
                </label>
            </div>
        </>
    );
}

export default ThemeSwitcher