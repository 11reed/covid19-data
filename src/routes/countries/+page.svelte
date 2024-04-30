<script lang="ts">
    import { onMount } from 'svelte';
    import CountryCard from '$lib/CountryCard.svelte';
    
    interface CountriesData {
        country: string;
        cases: number;
        todayCases: number;
        deaths: number;
        todayDeaths: number;
        recovered: number;
        tests: number;
        population: number;
        countryInfo: {
            flag: string;
        };
    }

    const url: string = 'https://disease.sh/v3/covid-19/countries';
    let data: CountriesData[] = $state([]);

    onMount(async () => {
        const response = await fetch(url);
        data = await response.json();
    });
</script>

<main class="flex flex-wrap justify-center items-start mx-auto p-6 bg-slate-900">
    {#each data as stats}
        <CountryCard {stats}/>
    {/each}
</main>
