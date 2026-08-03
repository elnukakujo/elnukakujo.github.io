import { Outlet } from 'react-router-dom';
import { ClientOnly } from 'vite-react-ssg';
import { useEffect } from 'react';
import NavBar from "../components/organisms/NavBar/NavBar";

function DarkModeScript() {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
            const isDark = e.matches;
            document.documentElement.classList.toggle('dark', isDark);
        };

        updateTheme(mediaQuery);
        mediaQuery.addEventListener('change', updateTheme);
        return () => mediaQuery.removeEventListener('change', updateTheme);
    }, []);

    return null;
}

export default function PageLayout() {
    return (
        <div>
            <ClientOnly>
                {() => <DarkModeScript />}
            </ClientOnly>
            <NavBar />
            <main className="flex flex-col gap-lg my-[6rem] mx-auto items-center">
                <Outlet />
            </main>
        </div>
    );
}
