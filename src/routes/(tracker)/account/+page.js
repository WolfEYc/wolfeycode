/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    endpoint.search = url.search
    const res = await fetch(endpoint, { headers: { "Cache-Control": "max-age=3600" } });
    const rows = await res.json();

    return { rows };
}

/**
* API docs https://purchase.wolfeycode.com/docs
*/
const endpoint = new URL("https://purchase.wolfeycode.com/account")