export default {
	async fetch(request, env, ctx): Promise<Response> {
		const ip = request.headers.get('CF-Connecting-IP');
		const country = request.headers.get('CF-IPCountry');
		const response = Response.json({ country, ip });

		// Set CORS headers
		response.headers.set('Access-Control-Allow-Origin', '*');
		response.headers.set('Access-Control-Allow-Methods', 'GET');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

		return response;
	},
} satisfies ExportedHandler<Env>;
