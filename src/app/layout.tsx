import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { David_Libre, Inter } from "next/font/google";
import "./globals.css";
import { type ReactNode } from "react";

const davidLibre = David_Libre({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-david-libre"
});

const interTight = Inter({
	subsets: ["latin"],
	weight: ["400", "600"],
	variable: "--font-inter-tight"
});

export const metadata: Metadata = {
	title: {
		template: `%s | Chirpy`,
		default: "Chirpy"
	},
	description: "A kind of a twitter clone with NextJS",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/assets/favicons/light/favicon.ico",
				href: "/assets/favicons/light/favicon.ico"
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/assets/favicons/dark/favicon.ico",
				href: "/assets/favicons/dark/favicon.ico"
			}
		]
	}
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<UserProvider>
				<body
					className={cn(
						davidLibre.variable,
						interTight.variable,
						"min-h-screen bg-background font-sans antialiased"
					)}
				>
					{children}
				</body>
			</UserProvider>
			<GoogleTagManager gtmId="GTM-NCPK38S2" />
		</html>
	);
}
