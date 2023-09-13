import { GetPage } from './endpoint';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const rows = await GetPage(fetch, url.search);
	return { rows };
}
