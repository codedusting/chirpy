"use client";

import { speak } from "@/lib/speak";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function ProfileClient() {
	const { user, error, isLoading } = useUser();

	if (isLoading)
		return (
			<div tabIndex={0} onFocus={() => speak("Loading...")}>
				Loading...
			</div>
		);
	if (error) return <div>{error.message}</div>;

	return (
		user && (
			<div>
				<Image src={user.picture!} alt={user.name!} width={256} height={256} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);
}
