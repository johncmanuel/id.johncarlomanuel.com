import { graph } from "./john";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return new Response(JSON.stringify(graph), {
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
		},
	});
});

export default app;
