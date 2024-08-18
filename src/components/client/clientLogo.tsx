"use client";

import { useThemeSelector } from "@/hooks/use-theme-selector";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

export default function ClientLogo() {
	const colorScheme = useThemeSelector();
	return (
		<Link
			className="tw-inline-flex tw-items-center tw-justify-center tw-gap-1"
			href="/"
			onClick={() =>
				sendGTMEvent({
					event: "logo_clicked",
					title: "Chirpy",
					page_section: "Header Home"
				})
			}
		>
			<Image
				src={`/assets/logos/${colorScheme}.png`}
				alt="Chirpy Logo"
				quality={100}
				priority
				width={96}
				height={54}
				sizes="96px"
				placeholder="empty"
			/>
			<span className="tw-font-serif tw-text-lg">Chirpy</span>
		</Link>
	);
}
