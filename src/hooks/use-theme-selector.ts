"use client";

import { useEffect, useState } from "react";

export function useThemeSelector() {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") {
			return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}
		return "light"; // Default to light theme if window is undefined
	});
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e: MediaQueryListEvent) => {
			setTheme(e.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", handleChange);

		// return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return theme;
}
