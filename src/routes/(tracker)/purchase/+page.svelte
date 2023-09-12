<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	export let data;
</script>

<div class="fixed-container">
	<div class="inner-container">
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
	</div>
</div>

<table role="grid">
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
		position: fixed;
		background-color: var(--sk-back-3);
	}
	.fixed-container {
		overflow: hidden;

		position: fixed;
		top: 12rem;
		width: 100%;
		padding-top: 5px;
		padding-bottom: 5px;
	}
	.inner-container {
		width: var(--s-full);
		max-width: 100%;
		height: 100%;
		display: flex;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
	}
</style>
