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
	description: "A kind of a twitter clone with Next.js."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<UserProvider>
				<body className={cn("bg-background min-h-screen font-sans antialiased", workSans.variable)}>
					{children}
				</body>
			</UserProvider>
			<GoogleTagManager gtmId="GTM-NCPK38S2" />
		</html>
	);
}
