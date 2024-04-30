<script lang="ts">
    interface Props { stats: any }

    let { stats }: Props = $props()
</script>

<div class="bg-slate-900 text-slate-300 p-4 m-2 rounded-lg">
    <ul class="list-none">
        <li class="text-2xl">Country: <b class="text-slate-500">{stats.country}</b></li>
        <hr class="border border-gray-700 rounded">
        <li class="text-2xl">Cases: <b class="text-slate-500">{stats.cases}</b></li>
        <hr class="border border-gray-700 rounded">
        <li class="text-2xl">Today's cases: <b class="text-slate-500">{stats.todayCases}</b></li>
        <hr class="border border-gray-700 rounded">
        <li class="text-2xl">Deaths: <b class="text-slate-500">{stats.deaths}</b></li>
        <hr class="border border-gray-700 rounded">
        <li class="text-2xl">Today's deaths: <b class="text-slate-500">{stats.todayDeaths}</b></li>
        <hr class="border border-gray-700 rounded">
        <li class="text-2xl">Recovered: <b class="text-slate-500">{stats.recovered}</b></li>
        <hr class="border border-gray-700 rounded">
        <li class="text-2xl">Tests: <b class="text-slate-500">{stats.tests}</b></li>
        <hr class="border border-gray-700 rounded">
        <li class="text-2xl">Population: <b class="text-slate-500">{stats.population}</b></li>
        <hr class="border border-gray-700 rounded">
        <img src="{stats.countryInfo.flag}" alt="Country flags">
    </ul>
</div>