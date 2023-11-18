import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MarketingPage() {
	return (
		<main className="flex h-full justify-between">
			<section className="h-full w-full bg-red-200">
				<h1>It&apos;s like Twitter, but better</h1>
				<p>
					Perfect alternative to Twitter. With all the same great features you love, plus a few new
					ones that make it even better.
				</p>
				<Button variant="default" asChild>
					<Link href="/api/auth/login">Get started for free</Link>
				</Button>
				<Button variant="secondary" asChild>
					<Link href="/api/auth/logout">Get started for free</Link>
				</Button>
			</section>
			<section className="h-full w-full bg-blue-200"></section>
		</main>
	);
}
