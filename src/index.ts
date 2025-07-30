import { graph } from "./john";

const allowedOrigins = ["https://johncarlomanuel.com"];

export default {
	async fetch(req: Request) {
		const origin = req.headers.get("Origin");
		const corsHeaders: Record<string, string> = {
			"Access-Control-Allow-Methods": "GET, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		};

		if (origin && allowedOrigins.includes(origin)) {
			corsHeaders["Access-Control-Allow-Origin"] = origin;
		}

		if (req.method === "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});
		}

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

		if (!corsHeaders["Access-Control-Allow-Origin"]) {
			return new Response("Forbidden: CORS policy violation", {
				status: 403,
				headers: { "Content-Type": "text/plain" },
			});
		}

		return new Response(JSON.stringify(graph), {
			headers: {
				...corsHeaders,
				"Content-Type": "application/json",
				"Cache-Control": "no-cache",
				// "Access-Control-Allow-Origin": "*",
			},
		});
	},
};
