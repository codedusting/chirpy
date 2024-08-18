import KShorts from "@/components/client/kshorts";
import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--workSans" });

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<UserProvider>
				<body className={cn("bg-background min-h-screen font-sans antialiased", workSans.variable)}>
					{children}
				</body>
			</UserProvider>
			<KShorts />
			<GoogleTagManager gtmId="GTM-NCPK38S2" />
		</html>
	);
}
