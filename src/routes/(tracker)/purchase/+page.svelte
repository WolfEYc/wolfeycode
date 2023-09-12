<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	export let data;
</script>

<table role="grid">
	<thead>
		<tr>
			<th scope="col">account_number</th>
			<th scope="col">purchase_datetime</th>
			<th scope="col">purchase_amount</th>
			<th scope="col">post_date</th>
			<th scope="col">purchase_number</th>
			<th scope="col">merchant_number</th>
			<th scope="col">merchant_name</th>
			<th scope="col">merchant_state</th>
			<th scope="col">merchant_category_code</th>
		</tr>
	</thead>
	<tbody>
		{#each data.rows as row}
			<tr>
				<td>{row.account_number}</td>
				<td>{row.purchase_datetime}</td>
				<td>{row.purchase_amount}</td>
				<td>{row.post_date}</td>
				<td>{row.purchase_number}</td>
				<td>{row.merchant_number}</td>
				<td>{row.merchant_name}</td>
				<td>{row.merchant_state}</td>
				<td>{row.merchant_category_code}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	thead {
		position: sticky;
		top: 9rem;
	}
</style>
