"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function ClientLogo({ logo }: { logo: React.ReactNode }) {
	return (
		<Link
			href="/"
			onClick={() =>
				sendGTMEvent({
					event: "logo_clicked",
					title: "Chirpy",
					page_section: "Header Home"
				})
			}
		>
			{logo}
		</Link>
	);
}
