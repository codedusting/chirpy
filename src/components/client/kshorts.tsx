"use client";

import { changeGlobalSpeakMode } from "@/lib/speak";
import { useEffect } from "react";
console.log("1: Am I working?");
export default function KShorts() {
	console.log("2: Am I working?");
	useEffect(() => {
		const listnerEvent = (e: KeyboardEvent) => {
			console.log("3: Am I working?");
			if (e.ctrlKey && e.key === "m") {
				e.preventDefault();
				console.log("4: Am I working?");
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
