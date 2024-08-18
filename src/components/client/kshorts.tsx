"use client";

import { changeGlobalSpeakMode } from "@/lib/speak";
import { useEffect } from "react";
export default function KShorts() {
	useEffect(() => {
		const listnerEvent = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === "m") {
				e.preventDefault();
				changeGlobalSpeakMode("on");
			}
			if (e.ctrlKey && e.key === "M") {
				e.preventDefault();
				changeGlobalSpeakMode("off");
			}
		};
		window.addEventListener("keydown", listnerEvent);
		return () => window.removeEventListener("keydown", listnerEvent);
	}, []);
	return null;
}
