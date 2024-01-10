import { useEffect, useState } from "react";

export function useThemeDetector() {
	const currentTheme = () =>
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	const [theme, setTheme] = useState(currentTheme);
	const themeChangeListener = (e: MediaQueryListEvent) => {
		const color = e.matches ? "dark" : "light";
		setTheme(color);
	};
	useEffect(() => {
		const watchThemChanges = window.matchMedia("(prefers-color-scheme: dark)");
		watchThemChanges.addEventListener("change", themeChangeListener);
		return () => watchThemChanges.removeEventListener("change", themeChangeListener);
	}, []);
	return theme;
}
