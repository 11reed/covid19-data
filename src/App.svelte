<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
</svelte:head>

<script>
	// lightgreen #48C9B0
	import { Router, Route } from "svelte-routing";
	
	import Menu from './components/Menu.svelte';

	import Home from './routes/Home.svelte';
	import Countries from './routes/Countries.svelte';
	import States from './routes/States.svelte';

	export const routeUrl = "";
</script>

<Router url="{routeUrl}">
	<nav>
	<ul>
	<li>
	  	<Menu to="/">Home -</Menu>
	  	<Menu to="countries">Countries -</Menu>
		<Menu to="states">States</Menu>
	</li>
	<ul>
	</nav>
	<div>
	  	<Route path="countries" component="{Countries}" />
		<Route path="states" component="{States}" />
	  	<Route path="/" component="{Home}" />
	</div>
</Router>


<style>
	:global(body) {
		font-family: 'Mukta', sans-serif;
		background-color: #212F3D;
	}

	:global(a) {
		text-decoration: none;
		color: #5DADE2;
	}
	
	nav {
		display: flex;
	}

	ul {
		list-style-type: none;
	}

	li {
		font-size: 25px;
	}
</style>