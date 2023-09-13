/**
* API docs https://purchase.wolfeycode.com/docs
*/
const dev_endpoint = "http://127.0.0.1:8080";
const prod_endpoint = "https://purchase.wolfeycode.com";

const endpoint = new URL(import.meta.env.DEV ? dev_endpoint : prod_endpoint)

// @ts-ignore
export async function GetPage(fetch, url) {
	endpoint.pathname = url.pathname;
	endpoint.search = url.search
	const res = await fetch(endpoint);
	const rows = await res.json();
	return rows;
}