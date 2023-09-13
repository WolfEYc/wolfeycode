/**
* API docs https://purchase.wolfeycode.com/docs
*/
const dev = "http://127.0.0.1:8080/";
const prod = "https://purchase.wolfeycode.com/";

const endpoint = new URL(dev + "purchase")

// @ts-ignore
export async function GetPage(fetch, search) {
	endpoint.search = search
	const res = await fetch(endpoint);
	const rows = await res.json();
	return rows;
}