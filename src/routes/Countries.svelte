<script lang="ts">
	import { onMount } from 'svelte';
	
	interface CountriesData {
		country: string;
		cases: number;
		todayCases: number;
		deaths: number;
		todayDeaths: number;
		recovered: number;
		tests: number;
		population: number;
		countryInfo: string | any;
		flag: string | any;
	}

	const url: string = 'https://disease.sh/v3/covid-19/countries';
	let data: CountriesData[] = [];

	onMount(async function() {
    	const response = await fetch(url);
   	 data = await response.json();
	});
</script>

<div>
   <h1>Countries Data:</h1>
</div>

<main>
	{#each data as stats}
		<ul>
			<li>Country: <b>{stats.country}</b></li>
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
			<img src="{stats.countryInfo.flag}" alt="Country flags">
			<hr>
			<br>
			<br>
		</ul>
	{/each}
</main>

<style>
	div {
	   display: flex;
	   align-items: center;
	   justify-content: center;
	   color: #28B463;
	}

	main {
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  margin: auto;
	  color: #239B56;
	  background-color: #17202A;
	}

	ul {
	  list-style-type: none;
	}

	li {
	  font-size: 20px;
	}

	hr {
	  border: 1px solid #2C3e50;
	  border-radius: 2px;
	}

	b {
	  color: #AAB7B8;
	}
</style>
