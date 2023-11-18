"use client";

import { speak } from "@/lib/speak";

export default function Section({
	children,
	text = ""
}: {
	children: React.ReactNode;
	text?: string;
}) {
	return (
		<section tabIndex={0} onFocus={() => speak(text)}>
			{children}
		</section>
	);
}
