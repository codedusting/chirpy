import { ratelimit } from "@/lib/upstash";

export async function POST(req: Request) {
	const { userId } = await req.json();
	// rate limit
	const { success } = await ratelimit.limit(userId);
	if (!success) {
		return Response.json(
			{
				message: "Too many requests"
			},
			{
				status: 429,
				statusText: "Too many requests"
			}
		);
	}
	// lot of heavy computation
	return Response.json({ message: "Rate limit testing" });
}
