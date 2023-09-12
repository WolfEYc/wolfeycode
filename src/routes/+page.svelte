<script>
	import Project from "./project.svelte";
</script>

<head>
	<title>WolfeyCode</title>
</head>

<div class="container">
	<h1 class="welcomer">Wolfey's Fullstack Apps</h1>
	<Project href="/purchase?page=0" title="Purchases-Tracker">
		<li>Filter & search customers and purchases</li>
		<li>Get detailed customer data from a related purchase</li>
		<li>See customer purchases at a specific merchant</li>
		<li>Detect potentially fraud purchases</li>
	</Project>
</div>

<style>
	.welcomer {
		padding-top: 2%;
		text-align: center;
	}
	li {
		color: var(--serious-white);
	}
</style>
