<script lang="ts">
    import { onMount } from 'svelte';
    import StateCard from '$lib/StatesCard.svelte';

    interface StatesData {
        state: string;
        cases: number;
        todayCases: number;
        deaths: number;
        todayDeaths: number;
        recovered: number;
        tests: number;
        population: number;
    }

    const url: string = 'https://disease.sh/v3/covid-19/states';
    let data: StatesData[] = $state([]);

    onMount(async () => {
        const response = await fetch(url);
        data = await response.json();
    });
</script>

<main class="flex flex-wrap justify-center items-start mx-auto p-6 bg-slate-900">
    {#each data as stats}
        <StateCard {stats}/>
    {/each}
</main>
