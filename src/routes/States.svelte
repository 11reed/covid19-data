<script>
	import { onMount } from "svelte";

	const url = 'https://disease.sh/v3/covid-19/states';
	let data = [];

	onMount(async function() {
    	const response = await fetch(url);
    	data = await response.json();
	});
</script>

<div>
	<h1>States Data:</h1>
</div>

<main>
{#each data as stats }
	<ul>
           <li>State: <b>{stats.state}</b></li>
            <hr>
            <li>Cases: <b>{stats.cases}</b></li>
	    <hr>
	    <li>Today's cases: <b>{stats.todayCases}</b></li>
	    <hr>
            <li>Deaths: <b>{stats.deaths}</b></li>
	    <hr>
	    <li>Today's deaths: <b>{stats.todayDeaths}</b></li>
	    <hr>
            <li>Recovered: <b>{stats.recovered}</b></li>
            <hr>
	    <li>Tests: <b>{stats.tests}</b></li>
	    <hr>
	    <li>Population: <b>{stats.population}</b></li>
	    <hr>
	    <br>
	    <br>
	</ul>
{/each}
</main>

<style>
	:global(body) {
		font-family: 'Mukta', sans-serif;
		background-color: #2C3E50;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		color:#5DADE2;
	}

	main {
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  margin: auto;
	  color: #5DADE2;
	  background-color: #2C3E50;
	}

	ul {
	  list-style-type: none;
	}

	li {
	  font-size: 20px;
	}

	hr {
	  border: 1px solid #58D68D;
  		border-radius: 2px;
	}

	b {
	  color: #AAB7B8;
	}
</style>
