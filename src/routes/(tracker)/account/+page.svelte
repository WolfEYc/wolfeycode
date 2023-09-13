<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	export let data;
</script>

<table role="grid">
	<thead>
		<tr>
			<th scope="col">account</th>
			<th scope="col">last</th>
			<th scope="col">first</th>
			<th scope="col">ssn</th>
			<th scope="col">dob</th>
			<th scope="col">mobile</th>
			<th scope="col">email</th>
			<th scope="col">state</th>
			<th scope="col">city</th>
			<th scope="col">zip</th>
			<th scope="col">street</th>
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
		background-color: var(--sk-back-3);
		height: 2rem;
	}
	th:not(:first-child),
	td:not(:first-child) {
		border-left: 1px solid var(--sk-back-5);
	}
	th {
		box-shadow: inset 0 -1px 0 var(--sk-back-5);
	}
</style>
