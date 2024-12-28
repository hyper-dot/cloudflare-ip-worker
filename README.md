
# IP Worker

IP Worker is a lightweight Cloudflare Worker that provides the client's IP address and country information. It eliminates the need for expensive services by leveraging Cloudflare's infrastructure to handle these requests efficiently.

## Features
- **IP Address Fetching**: Get the client's IP address directly.
- **Country Detection**: Detect the client's country based on IP.
- **CORS Support**: Fully CORS-compliant for cross-origin requests.
- **Lightweight**: No heavy dependencies, just simple and effective code.

---

## Prerequisites

1. **Cloudflare Account**: Create an account at [Cloudflare](https://www.cloudflare.com/).
2. **Wrangler CLI**: Install Wrangler, Cloudflare's CLI tool:
   ```bash
   npm install -g wrangler
   ```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ip-worker
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Login to Cloudflare

Authenticate with your Cloudflare account:

```bash
npm run login
```

### 4. Deploy the Worker

Deploy your worker to Cloudflare:

```bash
npm run deploy
```

### 5. Access the URL

After deployment, Cloudflare will provide a URL for your worker. Use this URL to fetch IP and country data.

---

## Usage

The worker responds to HTTP requests with JSON data containing the client's IP address and country.

### Request

Make a `GET` request to the deployed worker's URL.

### Response Example

```json
{
  "country": "US",
  "ip": "203.0.113.195"
}
```

### CORS

The worker includes CORS headers to support cross-origin requests. Example headers:

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
Access-Control-Allow-Headers: Content-Type
```

---

## Development

### Start the Worker Locally

Use Wrangler to run the worker locally:

```bash
npm run dev
```

### Test the Worker

Run tests with Vitest:

```bash
npm test
```

---

## Code

The main worker code is located in `src/index.ts`:

```typescript
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
```

---

## Dependencies

- [Wrangler](https://github.com/cloudflare/workers-sdk): Cloudflare Worker CLI.
- [TypeScript](https://www.typescriptlang.org/): Typed JavaScript.
- [Vitest](https://vitest.dev/): Test framework for Cloudflare Workers.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.
