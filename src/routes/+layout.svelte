
<header>
	<nav class="container" aria-label="breadcrumb">
		<ul>
			<li><a href="/accounts">accounts</a></li>
			<li><a href="/purchases">purchases</a></li>
		</ul>
	</nav>
</header>
<main class="container main">
	<slot />
</main>

<style>
	header {
		overflow: hidden;
		background-color: var(--sk-back-4);
		position: fixed;
		top: 0;
		width: 100%; 
	}

	a:hover {
		background: var(--primary-hover);
		color: black;
	}

	.main {
		margin-top: 6%;
	}
</style>