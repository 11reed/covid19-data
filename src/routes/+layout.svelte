<script>
    import '../app.css';
    import Navbar from '$lib/Navbar.svelte';
</script>

<style>
    :global(body) {
        background-color: #0f172a;
    }
</style>

<Navbar />
<slot />