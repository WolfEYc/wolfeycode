/**
 * @param {string} pgdateTime
 */
export function convert_pg_datetime(pgdateTime) {
	const date = new Date(pgdateTime);
	return date.toLocaleString("en-us");
}

/**
 * @param {string} pgdate
 */
export function convert_pg_date(pgdate) {
	const date = new Date(pgdate);
	return date.toLocaleDateString("en-us");
}

/**
 * @param {string} query_arg

 */
// @ts-ignore
export function focus_number(query_arg, searchParams) {
	const query_num = searchParams.get(query_arg);
	if (query_num) {
		return Number(query_num);
	}

	return null;
}

