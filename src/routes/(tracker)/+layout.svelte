<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	const purchase_path = "/purchase";
	const account_path = "/account";

	let purchase_selected = $page.url.pathname == purchase_path;
	let account_selected = $page.url.pathname == account_path;
	/**
	 * @param {string} path
	 */
	function GotoPage(path) {
		if ($page.url.pathname == path) return;
		console.log(`Going to ${path}`);
		const newUrl = new URL($page.url);
		newUrl.pathname = path;
		goto(newUrl, { noScroll: true });
	}

	function GotoPurchases() {
		GotoPage(purchase_path);
		account_selected = false;
		purchase_selected = true;
	}

	function GotoAccounts() {
		GotoPage(account_path);
		purchase_selected = false;
		account_selected = true;
	}
</script>

<div class="fixed-container">
	<div class="inner-container">
		<button
			on:click={GotoPurchases}
			class="sheet-selector"
			class:selected={purchase_selected}>Purchases</button
		>
		<span />
		<span />
		<button
			on:click={GotoAccounts}
			class="sheet-selector"
			class:selected={account_selected}>Accounts</button
		>
	</div>
</div>
<slot />

<style>
	.sheet-selector {
		background: transparent;
		width: auto;
	}
	.sheet-selector.selected {
		background: var(--primary);
	}

	.fixed-container {
		background-color: var(--sk-back-3);
		position: fixed;
		width: 100%;
		height: 9rem;
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
	span + span {
		margin-left: 10px;
	}
</style>
