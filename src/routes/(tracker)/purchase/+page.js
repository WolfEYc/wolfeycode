/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	endpoint.search = url.search
	endpoint.searchParams.set("lookahead", "1");
	const res = await fetch(endpoint, { headers: { "Cache-Control": "max-age=3600" } });
	const rows = await res.json();

	return { rows };
}


/**
* API docs https://purchase.wolfeycode.com/docs
*/
const dev = "http://127.0.0.1:8080/";
const prod = "https://purchase.wolfeycode.com/";

const endpoint = new URL(dev + "purchase")