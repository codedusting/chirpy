"use client";

import { useThemeSelector } from "@/hooks/use-theme-selector";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	const colorScheme = useThemeSelector();
	return (
		<Link className="tw-inline-flex tw-items-center tw-justify-center tw-gap-1" href="/">
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
