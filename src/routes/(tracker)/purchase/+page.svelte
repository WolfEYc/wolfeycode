<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { GetPage } from "../../../lib/endpoint";
	import {
		convert_pg_date,
		convert_pg_datetime,
		focus_number,
	} from "$lib/time";

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
	let purchase_date_f;
	/**
	 * @type {string | null}
	 */
	let purchase_time_f;
	/**
	 * @type {number | null}
	 */
	let amount_f;
	/**
	 * @type {string | null}
	 */
	let post_date_f;
	/**
	 * @type {number | null}
	 */
	let number_f;
	/**
	 * @type {string | null}
	 */
	let merchant_number_f;
	/**
	 * @type {string | null}
	 */
	let merchant_name_f;
	/**
	 * @type {string | null}
	 */
	let merchant_state_f;
	/**
	 * @type {number | null}
	 */
	let merchant_category_code_f;
	/**
	 * @type {boolean}
	 */
	let outliers_f;

	onMount(() => {
		account_f = focus_number("account_number", $page);
		purchase_date_f = $page.url.searchParams.get("purchase_date");
		purchase_time_f = $page.url.searchParams.get("purchase_time");
		amount_f = focus_number("purchase_amount", $page);
		post_date_f = $page.url.searchParams.get("post_date");
		number_f = focus_number("purchase_number", $page);
		merchant_number_f = $page.url.searchParams.get("merchant_number");
		merchant_name_f = $page.url.searchParams.get("merchant_name");
		merchant_state_f = $page.url.searchParams.get("merchant_state");
		merchant_category_code_f = focus_number(
			"merchant_category_code",
			$page
		);
		outliers_f = $page.url.searchParams.has("outliers");
	});

	$: if (account_f != null) {
		account_f = Number(
			account_f.toString().replaceAll("-", "").slice(0, 5)
		);
	}
	$: if (number_f != null) {
		account_f = Number(number_f.toString().replaceAll("-", ""));
	}
	$: if (merchant_category_code_f != null) {
		merchant_category_code_f = Number(
			merchant_category_code_f.toString().replaceAll("-", "").slice(0, 4)
		);
	}
	// @ts-ignore
	async function toggle_outliers() {
		if (!outliers_f) {
			$page.url.searchParams.set("outliers", "true");
		} else {
			$page.url.searchParams.delete("outliers");
		}
		await replace_rows();
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
		data = { eof: rows.eof, rows: [...data.rows, ...rows.purchases] };
		history.replaceState(null, "", $page.url);
	}
	async function replace_rows() {
		$page.url.searchParams.set("page", "0");
		const rows = await GetPage(fetch, $page.url);
		data = { eof: rows.eof, rows: rows.purchases };
		history.replaceState(null, "", $page.url);
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
						type="date"
						bind:value={purchase_date_f}
						id="purchase_date"
						name="purchase_date"
						on:input={on_input}
					/>
					<input
						type="time"
						bind:value={purchase_time_f}
						id="purchase_time"
						name="purchase_time"
						on:input={on_input}
					/>
					<label for="purchase_time">time</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<label for="outliers" class="flex-label">
						<input
							type="checkbox"
							id="outliers"
							name="outliers"
							role="switch"
							bind:checked={outliers_f}
							on:input={toggle_outliers}
						/>
						outliers
					</label>
					<input
						style="width: 7rem"
						type="number"
						bind:value={amount_f}
						id="purchase_amount"
						name="purchase_amount"
						maxlength="10"
						placeholder="🔍"
						on:input={on_input}
					/>
					<label for="purchase_amount">amount</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						type="date"
						bind:value={post_date_f}
						id="post_date"
						name="post_date"
						on:input={on_input}
					/>
					<label for="post_date">posted</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 4rem;"
						type="number"
						bind:value={number_f}
						id="purchase_number"
						name="purchase_number"
						placeholder="🔍"
						on:input={on_input}
					/>
					<label for="purchase_number">number</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 10rem;"
						maxlength="15"
						type="text"
						bind:value={merchant_number_f}
						id="merchant_number"
						name="merchant_number"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="merchant_number">merchant id</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 20rem;"
						type="text"
						bind:value={merchant_name_f}
						id="merchant_name"
						name="merchant_name"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="merchant_name">merchant name</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 2rem;"
						maxlength="2"
						type="text"
						bind:value={merchant_state_f}
						id="merchant_state"
						name="merchant_state"
						placeholder="🔍"
						spellcheck="false"
						on:input={on_input}
					/>
					<label for="merchant_state">state</label>
				</div>
			</th>
			<th scope="col">
				<div class="thdiv">
					<input
						style="width: 3rem;"
						type="number"
						bind:value={merchant_category_code_f}
						id="merchant_category_code"
						name="merchant_category_code"
						placeholder="🔍"
						on:input={on_input}
					/>
					<label for="merchant_category_code">category</label>
				</div>
			</th>
		</tr>
	</thead>
	<tbody>
		{#each data.rows as row}
			<tr>
				<td>{row.account_number}</td>
				<td>
					{convert_pg_datetime(row.purchase_datetime)}
				</td>
				<td>{row.purchase_amount}</td>
				<td>{convert_pg_date(row.post_date)}</td>
				<td>{row.purchase_number}</td>
				<td>{row.merchant_number}</td>
				<td>{row.merchant_name}</td>
				<td>{row.merchant_state}</td>
				<td>{row.merchant_category_code}</td>
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
	input:not([type="checkbox"]) {
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

	.flex-label {
		display: flex;
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
	}
</style>
