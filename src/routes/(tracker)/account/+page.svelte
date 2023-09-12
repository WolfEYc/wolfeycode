<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	export let data;
</script>

<table role="grid">
	<thead>
		<tr>
			<th scope="col">account_number</th>
			<th scope="col">last_name</th>
			<th scope="col">first_name</th>
			<th scope="col">ssn</th>
			<th scope="col">dob</th>
			<th scope="col">mobile_number</th>
			<th scope="col">email_address</th>
			<th scope="col">account_state</th>
			<th scope="col">city</th>
			<th scope="col">zip</th>
			<th scope="col">street_address</th>
			<th scope="col">unit</th>
		</tr>
	</thead>
	<tbody>
		{#each data.rows as row}
			<tr>
				<td>{row.account_number}</td>
				<td>{row.last_name}</td>
				<td>{row.first_name}</td>
				<td>{row.ssn}</td>
				<td>{row.dob}</td>
				<td>{row.mobile_number}</td>
				<td>{row.email_address}</td>
				<td>{row.account_state}</td>
				<td>{row.city}</td>
				<td>{row.zip}</td>
				<td>{row.street_address}</td>
				<td>{row.unit}</td>
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
