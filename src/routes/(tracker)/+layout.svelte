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
			class:selected={purchase_selected}
		>
			Purchases
		</button>
		<button
			on:click={GotoAccounts}
			class="sheet-selector"
			class:selected={account_selected}
		>
			Accounts
		</button>
		<a
			href="https://purchase.wolfeycode.com/docs#?route=get-/
			{purchase_selected ? 'purchase' : 'account'}"
			target="_blank"
			rel="noreferrer noopener"
		>
			<button class="sheet-selector">API Docs</button>
		</a>
	</div>
</div>
<div class="tablecontainer">
	<slot />
</div>

<style>
	.sheet-selector {
		background: transparent;
		width: 25vw;
		margin-left: 2px;
		margin-right: 2px;
	}
	.sheet-selector.selected {
		background: var(--primary);
	}
	.fixed-container {
		background-color: var(--sk-back-3);
		position: fixed;
		width: 100%;
		height: 6rem;
	}
	.inner-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1%;
	}
	.tablecontainer {
		padding-top: 5rem;
	}
</style>
