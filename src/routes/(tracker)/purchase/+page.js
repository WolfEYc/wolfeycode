import { GetPage } from '../endpoint';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	url.searchParams.set("page", "0");
	const rows = await GetPage(fetch, url);
	return { eof: rows.eof, rows: rows.purchases };
}
