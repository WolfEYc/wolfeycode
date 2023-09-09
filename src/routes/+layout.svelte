<header>
	<nav class="container" aria-label="breadcrumb">
		<ul>
			<a href="/"><img src="logo.svg" width="48px" height="48px" alt="logo"/></a>
			<li><a href="/" class="navlink">Home</a></li>
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
		padding-top: 5px;
		padding-bottom: 5px;
	}

	img {
		align-self:center;
	}

	.navlink {
		font-size: larger;
	}

	.navlink:hover {
		background: var(--primary-hover);
		color: black;
	}

	.main {
		margin-top: 8%;
	}
</style>