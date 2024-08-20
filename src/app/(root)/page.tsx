import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col md:flex-row">
			<aside
				className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-center text-white md:items-start md:text-left">
				<div className="animate-fade-in-up">
					<h1 className="mb-6 font-serif text-4xl font-bold lg:text-6xl">Welcome to Chirpy</h1>
					<p className="animation-delay-200 mb-8 text-lg text-slate-300 lg:text-2xl">
						Join our community and start sharing your thoughts with the world!
					</p>
					<div className="animation-delay-400 space-x-4">
						<Button asChild className="focus-outline inline-block bg-blue-700 hover:bg-blue-800">
							<Link href="/api/auth/login">Get started</Link>
						</Button>
					</div>
				</div>
			</aside>
			<aside
				aria-label="illustration image"
				className="hidden flex-1 items-center justify-center p-8 md:flex"
			>
				<Image
					src="/assets/illustrations/social-media.svg"
					alt="Social Media Illustration"
					width={500}
					height={500}
					className="animate-float h-auto max-w-full"
				/>
			</aside>
		</main>
	);
}
