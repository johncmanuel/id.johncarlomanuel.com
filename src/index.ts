import { graph } from "./john";

export default {
	async fetch(req: Request) {
		const url = new URL(req.url);

		if (url.pathname !== "/") {
			return new Response("Not found", {
				status: 404,
				headers: { "Content-Type": "text/plain" },
			});
		}

		if (req.method !== "GET") {
			return new Response("Method not allowed", {
				status: 405,
				headers: { "Content-Type": "text/plain" },
			});
		}

		return new Response(JSON.stringify(graph), {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "no-cache",
				"Access-Control-Allow-Origin": "*",
			},
		});
	},
};
