import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Aleo, Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const aleo = Aleo({ subsets: ["latin"], variable: "--aleo" });
const firacode = Fira_Code({ subsets: ["latin"], variable: "--firacode" });
const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const metadata: Metadata = {
	title: {
		template: `%s | Chirpy`,
		default: "Chirpy"
	},
	description: "A kind of a twitter clone with Next.js",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<UserProvider>
				<body
					className={cn(
						"bg-background min-h-screen font-sans antialiased",
						inter.variable,
						aleo.variable,
						firacode.variable
					)}
				>
					{children}
				</body>
			</UserProvider>
			<GoogleTagManager gtmId="GTM-NCPK38S2" />
		</html>
	);
}
