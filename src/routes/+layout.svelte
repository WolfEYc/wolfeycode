<header>
	<nav class="container" aria-label="breadcrumb">
		<ul>
			<a href="/"
				><img src="logo.svg" width="48px" height="48px" alt="logo" /></a
			>
			<li><a href="/" class="navlink">Home</a></li>
		</ul>
	</nav>
</header>
<main class="main">
	<slot />
</main>

<style>
	header {
		background-color: var(--sk-back-4);
		position: fixed;
		top: 0;
		width: 100%;
		height: 4rem;
	}

	img {
		align-self: center;
	}

	.navlink {
		font-size: larger;
	}

	.navlink:hover {
		background: var(--primary-hover);
		color: black;
	}

	.main {
		margin-top: 4rem;
	}
</style>
