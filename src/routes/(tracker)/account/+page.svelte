<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { GetPage } from "$lib/endpoint";
	import { convert_pg_date, focus_number } from "$lib/time";

	/** @type {import('./$types').PageData} */
	// @ts-ignore
	export let data;

	/**
	 * @type {number | null}
	 */
	let account_f;
	/**
	 * @type {string | null}
	 */
	let last_name_f;
	/**
	 * @type {string | null}
	 */
	let first_name_f;
	/**
	 * @type {string | null}
	 */
	let ssn_f;
	/**
	 * @type {string | null}
	 */
	let dob_f;
	/**
	 * @type {number | null}
	 */
	let mobile_number_f;
	/**
	 * @type {string | null}
	 */
	let email_address_f;
	/**
	 * @type {string | null}
	 */
	let account_state_f;
	/**
	 * @type {string | null}
	 */
	let city_f;
	/**
	 * @type {number | null}
	 */
	let zip_f;
	/**
	 * @type {string | null}
	 */
	let street_address_f;
	/**
	 * @type {number | null}
	 */
	let unit_f;

	onMount(() => {
		account_f = focus_number("account_number", $page);
		first_name_f = $page.url.searchParams.get("first_name");
		last_name_f = $page.url.searchParams.get("last_name");
		ssn_f = $page.url.searchParams.get("ssn");
		dob_f = $page.url.searchParams.get("dob");
		mobile_number_f = focus_number("mobile_number", $page);
		email_address_f = $page.url.searchParams.get("email_address");
		account_state_f = $page.url.searchParams.get("account_state");
		city_f = $page.url.searchParams.get("city");
		zip_f = focus_number("zip", $page);
		street_address_f = $page.url.searchParams.get("street_address");
		unit_f = focus_number("unit", $page);
	});

	$: if (account_f != null) {
		account_f = Number(
			account_f.toString().replaceAll("-", "").slice(0, 5)
		);
	}

	// @ts-ignore
	async function on_input(e) {
		if (!e.target.value) {
			$page.url.searchParams.delete(e.target.id);
		} else {
			$page.url.searchParams.set(e.target.id, e.target.value.toString());
		}
		await replace_rows();
	}
	async function load_more() {
		const currPage = Number($page.url.searchParams.get("page")) || 0;
		const desiredPage = currPage + 1;
		$page.url.searchParams.set("page", desiredPage.toString());
		await push_rows();
	}
	async function push_rows() {
		const rows = await GetPage(fetch, $page.url);
		data = { eof: rows.eof, rows: [...data.rows, ...rows.accounts] };
		if (history) {
			history.replaceState(null, "", $page.url);
		}
	}
	async function replace_rows() {
		$page.url.searchParams.set("page", "0");
		const rows = await GetPage(fetch, $page.url);
		data = { eof: rows.eof, rows: rows.accounts };
		if (history) {
			history.replaceState(null, "", $page.url);
		}
	}
</script>

<table role="grid">
	<thead>
		<tr>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 4rem"
						type="number"
						bind:value={account_f}
						id="account_number"
						name="account_number"
						placeholder="🔍"
						on:input={on_input}
					/>
					<label for="account_number">account</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 7rem;"
						type="text"
						bind:value={last_name_f}
						id="last_name"
						name="last_name"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="last_name">last name</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 7rem;"
						type="text"
						bind:value={first_name_f}
						id="first_name"
						name="first_name"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="first_name">first name</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 7rem;"
						type="text"
						bind:value={ssn_f}
						id="ssn"
						name="ssn"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="ssn">ssn</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						type="date"
						bind:value={dob_f}
						id="dob"
						name="dob"
						on:input={on_input}
					/>
					<label for="dob">dob</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 6.5rem"
						type="number"
						bind:value={mobile_number_f}
						id="mobile_number"
						name="mobile_number"
						placeholder="🔍"
						on:input={on_input}
					/>
					<label for="mobile_number">mobile</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 18rem;"
						type="text"
						bind:value={email_address_f}
						id="email_address"
						name="email_address"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="email_address">email</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 2rem;"
						maxlength="2"
						type="text"
						bind:value={account_state_f}
						id="account_state"
						name="account_state"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="account_state">state</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 8rem;"
						type="text"
						bind:value={city_f}
						id="city"
						name="city"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="city">city</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 3.5rem;"
						type="text"
						bind:value={zip_f}
						id="zip"
						name="zip"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="zip">zip</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 12rem;"
						type="text"
						bind:value={street_address_f}
						id="street_address"
						name="street_address"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="street_address">street</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 3.5rem;"
						type="number"
						bind:value={unit_f}
						id="unit"
						name="unit"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="unit">unit</label>
				</div>
			</th>
		</tr>
	</thead>
	<tbody>
		{#each data.rows as row}
			<tr>
				<td>{row.account_number}</td>
				<td>{row.last_name}</td>
				<td>{row.first_name}</td>
				<td>{row.ssn}</td>
				<td>{convert_pg_date(row.dob)}</td>
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
{#if !data.eof}
	<button on:click={load_more}>Load More</button>
{/if}

<style>
	.thdiv {
		display: flex;
		flex-direction: column;
		width: min-content;
	}
	input {
		height: 1rem;
		border: 0;
		padding-left: 5px;
		padding-right: 5px;
		margin-bottom: 5px;
	}
	thead {
		position: sticky;
		top: 9rem;
		background-color: var(--sk-back-3);
		height: 5rem;
	}
	th:not(:first-child),
	td:not(:first-child) {
		border-left: 1px solid var(--sk-back-5);
	}
	th {
		box-shadow: inset 0 -1px 0 var(--sk-back-5);
		vertical-align: bottom;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type="number"] {
		-moz-appearance: textfield;
	}
</style>
